import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { Calendar, MapPin, Users, DollarSign } from "lucide-react";

const ParentPortal = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [interest, setInterest] = useState<any>(null);
  const [trip, setTrip] = useState<any>(null);
  const [student, setStudent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const interestId = searchParams.get("interest");

  useEffect(() => {
    loadInterestDetails();
  }, [interestId]);

  const loadInterestDetails = async () => {
    if (!interestId) {
      toast.error("Invalid invitation link");
      return;
    }

    try {
      // Load interest with related data
      const { data: interestData, error: interestError } = await supabase
        .from("student_interests")
        .select(`
          *,
          student:students(*),
          trip:trips(*)
        `)
        .eq("id", interestId)
        .single();

      if (interestError) throw interestError;

      setInterest(interestData);
      setStudent(interestData.student);
      setTrip(interestData.trip);
    } catch (error: any) {
      toast.error("Failed to load trip details");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const proceedToBooking = () => {
    navigate(`/trip-registration?interest=${interestId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!interest || !trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <p className="text-xl mb-4">Invalid or expired invitation</p>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </Card>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Parent Portal - Trip Invitation | Kapes Adventures"
        description="Review and complete booking for your child's trip"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Card className="p-8">
            <h1 className="text-3xl font-academy-bold mb-2">{trip.title}</h1>
            <p className="text-muted-foreground mb-6">
              {student.first_name} {student.last_name} has registered interest in this trip
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Destination</p>
                  <p className="text-muted-foreground">{trip.destination}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Dates</p>
                  <p className="text-muted-foreground">
                    {new Date(trip.trip_start_date).toLocaleDateString()} - {new Date(trip.trip_end_date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Duration</p>
                  <p className="text-muted-foreground">{trip.duration_days} days</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Base Price</p>
                  <p className="text-muted-foreground">AED {trip.base_price_aed.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {trip.description && (
              <div className="mb-8">
                <h3 className="font-semibold mb-2">About This Trip</h3>
                <p className="text-muted-foreground">{trip.description}</p>
              </div>
            )}

            {trip.itinerary && trip.itinerary.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold mb-4">Sample Itinerary</h3>
                <div className="space-y-4">
                  {trip.itinerary.map((day: any, index: number) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h4 className="font-semibold">{day.day}: {day.title}</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                        {day.activities.map((activity: string, i: number) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => navigate("/")}>
                Not Now
              </Button>
              <Button onClick={proceedToBooking}>
                Proceed to Complete Booking
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ParentPortal;
