import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import TripParticipantForm from "@/components/trip-registration/TripParticipantForm";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const DirectBooking = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [trip, setTrip] = useState<any>(null);
  const [child, setChild] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const tripId = searchParams.get("trip");
  const childId = searchParams.get("child");

  useEffect(() => {
    loadBookingDetails();
  }, [tripId, childId]);

  const loadBookingDetails = async () => {
    if (!tripId || !childId) {
      toast.error("Invalid booking link");
      navigate("/parent/trips");
      return;
    }

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/parent/login");
        return;
      }

      // Load trip details
      const { data: tripData, error: tripError } = await supabase
        .from("trips")
        .select("*")
        .eq("id", tripId)
        .single();

      if (tripError) throw tripError;
      setTrip(tripData);

      // Load child details
      const { data: childData, error: childError } = await supabase
        .from("students")
        .select("*, school:schools(name)")
        .eq("id", childId)
        .single();

      if (childError) throw childError;

      // Verify child belongs to current parent
      const { data: parentData } = await supabase
        .from("parents")
        .select("id")
        .eq("auth_user_id", session.user.id)
        .single();

      if (childData.parent_id !== parentData?.id) {
        toast.error("Unauthorized access");
        navigate("/parent/dashboard");
        return;
      }

      setChild(childData);
    } catch (error: any) {
      console.error("Error loading booking details:", error);
      toast.error("Failed to load booking details");
      navigate("/parent/trips");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!trip || !child) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <p className="text-xl mb-4">Booking details not found</p>
          <Button onClick={() => navigate("/parent/trips")}>
            Return to Trips
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Complete Booking | Parent Portal"
        description="Complete trip booking for your child"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Button variant="ghost" onClick={() => navigate("/parent/trips")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Trips
          </Button>

          <div className="mb-6">
            <h1 className="text-3xl font-academy-bold mb-2">Complete Booking</h1>
            <p className="text-muted-foreground">
              Booking for {child.first_name} {child.last_name} - {trip.title}
            </p>
          </div>

          <TripParticipantForm />
        </div>
      </div>
    </>
  );
};

export default DirectBooking;
