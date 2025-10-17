import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ParentBrowseTrips = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState<any[]>([]);
  const [children, setChildren] = useState<any[]>([]);
  const [selectedChild, setSelectedChild] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (selectedChild && children.length > 0) {
      loadTripsForChild(selectedChild);
    }
  }, [selectedChild]);

  const loadData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/parent/login");
        return;
      }

      // Load parent and children
      const { data: parentData } = await supabase
        .from("parents")
        .select("id")
        .eq("auth_user_id", session.user.id)
        .single();

      if (!parentData) {
        toast.error("Parent profile not found");
        return;
      }

      const { data: childrenData, error: childrenError } = await supabase
        .from("students")
        .select("id, first_name, last_name, school_id")
        .eq("parent_id", parentData.id);

      if (childrenError) throw childrenError;
      setChildren(childrenData || []);

      if (childrenData && childrenData.length > 0) {
        setSelectedChild(childrenData[0].id);
      }
    } catch (error: any) {
      console.error("Error loading data:", error);
      toast.error("Failed to load data");
    } finally {
      setIsLoading(false);
    }
  };

  const loadTripsForChild = async (childId: string) => {
    try {
      const child = children.find(c => c.id === childId);
      if (!child) return;

      // Get trips for child's school
      const { data: schoolTrips, error: schoolTripsError } = await supabase
        .from("school_trips")
        .select("trip_id")
        .eq("school_id", child.school_id);

      if (schoolTripsError) throw schoolTripsError;

      const tripIds = schoolTrips?.map(st => st.trip_id) || [];

      if (tripIds.length === 0) {
        setTrips([]);
        return;
      }

      const { data: tripsData, error: tripsError } = await supabase
        .from("trips")
        .select("*")
        .in("id", tripIds)
        .eq("status", "active")
        .order("trip_start_date");

      if (tripsError) throw tripsError;
      setTrips(tripsData || []);
    } catch (error: any) {
      console.error("Error loading trips:", error);
      toast.error("Failed to load trips");
    }
  };

  const getActionButton = (trip: any) => {
    const now = new Date();
    const interestCloses = trip.interest_closes_at ? new Date(trip.interest_closes_at) : null;
    const bookingOpens = trip.booking_opens_at ? new Date(trip.booking_opens_at) : null;
    const bookingCloses = trip.booking_closes_at ? new Date(trip.booking_closes_at) : null;

    // Interest registration is open
    if (interestCloses && now <= interestCloses) {
      return (
        <Button onClick={() => handleRegisterInterest(trip.id)}>
          Register Interest
        </Button>
      );
    }

    // Booking is open (after interest closes)
    if (bookingOpens && bookingCloses && now >= bookingOpens && now <= bookingCloses) {
      return (
        <Button onClick={() => handleDirectBooking(trip.id)}>
          Book Now
        </Button>
      );
    }

    return (
      <Button disabled variant="secondary">
        Registration Closed
      </Button>
    );
  };

  const handleRegisterInterest = async (tripId: string) => {
    if (!selectedChild) {
      toast.error("Please select a child");
      return;
    }

    try {
      // Check if interest already exists
      const { data: existing } = await supabase
        .from("student_interests")
        .select("id")
        .eq("student_id", selectedChild)
        .eq("trip_id", tripId)
        .single();

      if (existing) {
        toast.error("Interest already registered for this trip");
        return;
      }

      const { error } = await supabase
        .from("student_interests")
        .insert({
          student_id: selectedChild,
          trip_id: tripId,
          status: "pending"
        });

      if (error) throw error;

      toast.success("Interest registered successfully!");
      navigate("/parent/dashboard");
    } catch (error: any) {
      console.error("Error registering interest:", error);
      toast.error("Failed to register interest");
    }
  };

  const handleDirectBooking = (tripId: string) => {
    // Navigate to booking page with child and trip info
    navigate(`/parent/booking?trip=${tripId}&child=${selectedChild}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Browse Trips | Parent Portal"
        description="Browse available trips for your children"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <Button variant="ghost" onClick={() => navigate("/parent/dashboard")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          <h1 className="text-3xl font-academy-bold mb-6">Browse Trips</h1>

          {children.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-xl mb-4">No children found</p>
              <p className="text-muted-foreground mb-6">
                Please add a child to your account first
              </p>
              <Button onClick={() => navigate("/parent/children/add")}>
                Add Child
              </Button>
            </Card>
          ) : (
            <>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Select Child
                </label>
                <Select value={selectedChild} onValueChange={setSelectedChild}>
                  <SelectTrigger className="w-full max-w-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {children.map(child => (
                      <SelectItem key={child.id} value={child.id}>
                        {child.first_name} {child.last_name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {trips.length === 0 ? (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">
                    No trips available for this child's school
                  </p>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {trips.map((trip) => (
                    <Card key={trip.id} className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
                      <p className="text-muted-foreground mb-4">{trip.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{trip.destination}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>
                            {new Date(trip.trip_start_date).toLocaleDateString()} - {new Date(trip.trip_end_date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{trip.duration_days} days</span>
                        </div>
                        <div className="text-sm font-semibold">
                          AED {trip.base_price_aed.toLocaleString()}
                        </div>
                      </div>

                      {getActionButton(trip)}
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ParentBrowseTrips;
