import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { ArrowLeft, Plus, X } from "lucide-react";

interface School {
  id: string;
  name: string;
}

const CreateTrip = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [schools, setSchools] = useState<School[]>([]);
  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);
  const [inclusions, setInclusions] = useState<string[]>([""]);
  const [exclusions, setExclusions] = useState<string[]>([""]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    destination: "",
    duration_days: 8,
    base_price_aed: 10000,
    max_participants: 30,
    trip_start_date: "",
    trip_end_date: "",
    interest_opens_at: "",
    interest_closes_at: "",
    booking_opens_at: "",
    booking_closes_at: "",
    age_min: 13,
    age_max: 18,
    status: "draft",
  });

  useEffect(() => {
    checkAuth();
    loadSchools();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/admin/login");
      return;
    }

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .in("role", ["super_admin", "school_admin"]);

    if (!roles || roles.length === 0) {
      navigate("/admin/dashboard");
    }
  };

  const loadSchools = async () => {
    try {
      const { data, error } = await supabase
        .from("schools")
        .select("id, name")
        .eq("active", true)
        .order("name");

      if (error) throw error;
      setSchools(data || []);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error loading schools",
        description: error.message,
      });
    }
  };

  const handleSchoolToggle = (schoolId: string) => {
    setSelectedSchools(prev =>
      prev.includes(schoolId)
        ? prev.filter(id => id !== schoolId)
        : [...prev, schoolId]
    );
  };

  const addInclusion = () => setInclusions([...inclusions, ""]);
  const removeInclusion = (index: number) => {
    setInclusions(inclusions.filter((_, i) => i !== index));
  };
  const updateInclusion = (index: number, value: string) => {
    const updated = [...inclusions];
    updated[index] = value;
    setInclusions(updated);
  };

  const addExclusion = () => setExclusions([...exclusions, ""]);
  const removeExclusion = (index: number) => {
    setExclusions(exclusions.filter((_, i) => i !== index));
  };
  const updateExclusion = (index: number, value: string) => {
    const updated = [...exclusions];
    updated[index] = value;
    setExclusions(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedSchools.length === 0) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please assign this trip to at least one school.",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create trip
      const { data: trip, error: tripError } = await supabase
        .from("trips")
        .insert({
          ...formData,
          inclusions: inclusions.filter(i => i.trim() !== ""),
          exclusions: exclusions.filter(e => e.trim() !== ""),
        })
        .select()
        .single();

      if (tripError) throw tripError;

      // Assign to schools
      const schoolAssignments = selectedSchools.map(schoolId => ({
        trip_id: trip.id,
        school_id: schoolId,
      }));

      const { error: assignError } = await supabase
        .from("school_trips")
        .insert(schoolAssignments);

      if (assignError) throw assignError;

      toast({
        title: "Trip created!",
        description: "The trip has been created and assigned to schools.",
      });

      navigate("/admin/trips");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEO title="Create Trip | Admin" description="Create a new school trip" />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => navigate("/admin/trips")} className="mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Trips
            </Button>
            <h1 className="text-2xl font-bold text-dragon-dark">Create New Trip</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Core details about the trip</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Trip Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Food For Education"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brief overview of the trip"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination *</Label>
                    <Input
                      id="destination"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      placeholder="e.g., Tsavo, Kenya"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (days) *</Label>
                    <Input
                      id="duration"
                      type="number"
                      min="1"
                      value={formData.duration_days}
                      onChange={(e) => setFormData({ ...formData, duration_days: parseInt(e.target.value) })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Base Price (AED) *</Label>
                    <Input
                      id="price"
                      type="number"
                      min="0"
                      step="0.01"
                      value={formData.base_price_aed}
                      onChange={(e) => setFormData({ ...formData, base_price_aed: parseFloat(e.target.value) })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="max">Max Participants</Label>
                    <Input
                      id="max"
                      type="number"
                      min="1"
                      value={formData.max_participants}
                      onChange={(e) => setFormData({ ...formData, max_participants: parseInt(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age_min">Min Age</Label>
                    <Input
                      id="age_min"
                      type="number"
                      min="1"
                      value={formData.age_min}
                      onChange={(e) => setFormData({ ...formData, age_min: parseInt(e.target.value) })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age_max">Max Age</Label>
                    <Input
                      id="age_max"
                      type="number"
                      min="1"
                      value={formData.age_max}
                      onChange={(e) => setFormData({ ...formData, age_max: parseInt(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status *</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => setFormData({ ...formData, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="full">Full</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Dates */}
            <Card>
              <CardHeader>
                <CardTitle>Dates & Registration Windows</CardTitle>
                <CardDescription>Set trip dates and registration periods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="trip_start">Trip Start Date *</Label>
                    <Input
                      id="trip_start"
                      type="date"
                      value={formData.trip_start_date}
                      onChange={(e) => setFormData({ ...formData, trip_start_date: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trip_end">Trip End Date *</Label>
                    <Input
                      id="trip_end"
                      type="date"
                      value={formData.trip_end_date}
                      onChange={(e) => setFormData({ ...formData, trip_end_date: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Interest Registration Period</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="interest_opens">Opens</Label>
                      <Input
                        id="interest_opens"
                        type="datetime-local"
                        value={formData.interest_opens_at}
                        onChange={(e) => setFormData({ ...formData, interest_opens_at: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest_closes">Closes</Label>
                      <Input
                        id="interest_closes"
                        type="datetime-local"
                        value={formData.interest_closes_at}
                        onChange={(e) => setFormData({ ...formData, interest_closes_at: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Booking Period</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="booking_opens">Opens</Label>
                      <Input
                        id="booking_opens"
                        type="datetime-local"
                        value={formData.booking_opens_at}
                        onChange={(e) => setFormData({ ...formData, booking_opens_at: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="booking_closes">Closes</Label>
                      <Input
                        id="booking_closes"
                        type="datetime-local"
                        value={formData.booking_closes_at}
                        onChange={(e) => setFormData({ ...formData, booking_closes_at: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inclusions & Exclusions */}
            <Card>
              <CardHeader>
                <CardTitle>What's Included & Excluded</CardTitle>
                <CardDescription>List what's included and not included in the trip price</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Inclusions</Label>
                    <Button type="button" variant="outline" size="sm" onClick={addInclusion}>
                      <Plus className="h-3 w-3 mr-1" />
                      Add
                    </Button>
                  </div>
                  {inclusions.map((inclusion, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={inclusion}
                        onChange={(e) => updateInclusion(index, e.target.value)}
                        placeholder="e.g., Accommodation"
                      />
                      {inclusions.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeInclusion(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Exclusions</Label>
                    <Button type="button" variant="outline" size="sm" onClick={addExclusion}>
                      <Plus className="h-3 w-3 mr-1" />
                      Add
                    </Button>
                  </div>
                  {exclusions.map((exclusion, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={exclusion}
                        onChange={(e) => updateExclusion(index, e.target.value)}
                        placeholder="e.g., International flights"
                      />
                      {exclusions.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeExclusion(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* School Assignment */}
            <Card>
              <CardHeader>
                <CardTitle>Assign to Schools *</CardTitle>
                <CardDescription>Select which schools can see this trip</CardDescription>
              </CardHeader>
              <CardContent>
                {schools.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    No schools available. Create schools first.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {schools.map((school) => (
                      <div key={school.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={school.id}
                          checked={selectedSchools.includes(school.id)}
                          onCheckedChange={() => handleSchoolToggle(school.id)}
                        />
                        <Label htmlFor={school.id} className="cursor-pointer">
                          {school.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/admin/trips")}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Creating..." : "Create Trip"}
              </Button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default CreateTrip;
