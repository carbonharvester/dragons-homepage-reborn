import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { ArrowLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddChild = () => {
  const navigate = useNavigate();
  const [schools, setSchools] = useState<any[]>([]);
  const [parentId, setParentId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    schoolId: "",
    enrollmentCode: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/parent/login");
        return;
      }

      // Get parent ID
      const { data: parentData } = await supabase
        .from("parents")
        .select("id")
        .eq("auth_user_id", session.user.id)
        .single();

      if (parentData) {
        setParentId(parentData.id);
      }

      // Load schools
      const { data: schoolsData, error: schoolsError } = await supabase
        .from("schools")
        .select("*")
        .eq("active", true)
        .order("name");

      if (schoolsError) throw schoolsError;
      setSchools(schoolsData || []);
    } catch (error: any) {
      console.error("Error loading data:", error);
      toast.error("Failed to load schools");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Verify enrollment code if provided
      if (formData.enrollmentCode) {
        const { data: school } = await supabase
          .from("schools")
          .select("id")
          .eq("enrollment_code", formData.enrollmentCode)
          .single();

        if (!school) {
          toast.error("Invalid enrollment code");
          setIsLoading(false);
          return;
        }

        formData.schoolId = school.id;
      }

      if (!formData.schoolId) {
        toast.error("Please select a school or enter an enrollment code");
        setIsLoading(false);
        return;
      }

      // Generate unique referral code
      const referralCode = `${formData.firstName.substring(0, 3).toUpperCase()}${Date.now().toString().slice(-6)}`;

      const { error } = await supabase.from("students").insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        date_of_birth: formData.dateOfBirth,
        gender: formData.gender,
        school_id: formData.schoolId,
        parent_id: parentId,
        referral_code: referralCode,
        parent_linked_at: new Date().toISOString(),
      });

      if (error) throw error;

      toast.success("Child added successfully!");
      navigate("/parent/dashboard");
    } catch (error: any) {
      console.error("Error adding child:", error);
      toast.error(error.message || "Failed to add child");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title="Add Child | Parent Portal"
        description="Add a child to your parent account"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container max-w-2xl mx-auto px-4">
          <Button variant="ghost" onClick={() => navigate("/parent/dashboard")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          <Card className="p-8">
            <h1 className="text-3xl font-academy-bold mb-2">Add Child</h1>
            <p className="text-muted-foreground mb-6">
              Add a child to your account to register for trips
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="enrollmentCode">School Enrollment Code *</Label>
                <Input
                  id="enrollmentCode"
                  value={formData.enrollmentCode}
                  onChange={(e) => setFormData({ ...formData, enrollmentCode: e.target.value.toUpperCase() })}
                  placeholder="Enter school code"
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Contact your school to get the enrollment code
                </p>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Adding Child..." : "Add Child"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AddChild;
