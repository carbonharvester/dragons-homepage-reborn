import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users, Clock, Heart, CheckCircle } from "lucide-react";
import { format } from "date-fns";

interface Trip {
  id: string;
  title: string;
  description: string;
  destination: string;
  duration_days: number;
  base_price_aed: number;
  trip_start_date: string;
  trip_end_date: string;
  status: string;
  interest_opens_at: string | null;
  interest_closes_at: string | null;
  max_participants: number | null;
  age_min: number | null;
  age_max: number | null;
  inclusions: string[];
  has_registered_interest?: boolean;
}

interface StudentProfile {
  id: string;
  school_id: string;
}

const BrowseTrips = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    checkAuthAndLoadData();
  }, []);

  const checkAuthAndLoadData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/student/login");
        return;
      }

      // Get student profile
      const { data: studentData, error: studentError } = await supabase
        .from("students")
        .select("id, school_id")
        .eq("auth_user_id", user.id)
        .single();

      if (studentError || !studentData) {
        navigate("/student/dashboard");
        return;
      }

      setStudent(studentData);
      await loadTrips(studentData.school_id, studentData.id);
    } catch (error) {
      console.error("Auth check error:", error);
      navigate("/student/login");
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrips = async (schoolId: string, studentId: string) => {
    try {
      // Get trips assigned to student's school
      const { data: schoolTrips, error: schoolTripsError } = await supabase
        .from("school_trips")
        .select("trip_id")
        .eq("school_id", schoolId);

      if (schoolTripsError) throw schoolTripsError;
      
      const tripIds = schoolTrips.map(st => st.trip_id);
      
      if (tripIds.length === 0) {
        setTrips([]);
        return;
      }

      // Get trip details
      const { data: tripsData, error: tripsError } = await supabase
        .from("trips")
        .select("*")
        .in("id", tripIds)
        .eq("status", "active")
        .order("trip_start_date", { ascending: true });

      if (tripsError) throw tripsError;

      // Check which trips student has registered interest for
      const { data: interests } = await supabase
        .from("student_interests")
        .select("trip_id")
        .eq("student_id", studentId);

      const interestedTripIds = interests?.map(i => i.trip_id) || [];

      const tripsWithInterest = tripsData?.map(trip => ({
        ...trip,
        has_registered_interest: interestedTripIds.includes(trip.id),
      })) || [];

      setTrips(tripsWithInterest);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const handleRegisterInterest = async (tripId: string) => {
    if (!student) return;

    try {
      const { error } = await supabase
        .from("student_interests")
        .insert({
          student_id: student.id,
          trip_id: tripId,
          status: "pending",
        });

      if (error) throw error;

      toast({
        title: "Interest Registered!",
        description: "We'll notify your parent to complete the booking.",
      });

      // Refresh trips to update UI
      await loadTrips(student.school_id, student.id);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const isInterestPeriodOpen = (trip: Trip) => {
    if (!trip.interest_opens_at || !trip.interest_closes_at) return true;
    
    const now = new Date();
    const opens = new Date(trip.interest_opens_at);
    const closes = new Date(trip.interest_closes_at);
    
    return now >= opens && now <= closes;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading trips...</p>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Browse Trips | Student Portal"
        description="Explore available educational trips to Kenya"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="mb-8">
              <Button variant="outline" onClick={() => navigate("/student/dashboard")}>
                ← Back to Dashboard
              </Button>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-dragon-dark mb-2">
                Available Trips
              </h1>
              <p className="text-muted-foreground">
                Explore educational adventures to Kenya available for your school
              </p>
            </div>

            {trips.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">
                    No trips available at the moment. Check back soon!
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trips.map((trip) => (
                  <Card key={trip.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{trip.title}</CardTitle>
                        {trip.has_registered_interest && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Registered
                          </Badge>
                        )}
                      </div>
                      <CardDescription>{trip.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{trip.destination}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{trip.duration_days} days</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {format(new Date(trip.trip_start_date), "MMM d")} - {format(new Date(trip.trip_end_date), "MMM d, yyyy")}
                          </span>
                        </div>
                        {trip.max_participants && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>Max {trip.max_participants} participants</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-2xl font-bold text-dragon">
                            AED {trip.base_price_aed.toLocaleString()}
                          </span>
                          {trip.age_min && trip.age_max && (
                            <Badge variant="outline">
                              Ages {trip.age_min}-{trip.age_max}
                            </Badge>
                          )}
                        </div>

                        {trip.has_registered_interest ? (
                          <div className="space-y-2">
                            <div className="bg-green-50 border border-green-200 rounded p-3 text-sm text-green-800">
                              <CheckCircle className="w-4 h-4 inline mr-2" />
                              You've registered interest! We'll notify your parent to complete the booking.
                            </div>
                            <Button 
                              variant="outline" 
                              className="w-full"
                              onClick={() => navigate(`/student/trips/${trip.id}`)}
                            >
                              View Details
                            </Button>
                          </div>
                        ) : isInterestPeriodOpen(trip) ? (
                          <div className="space-y-2">
                            <Button 
                              className="w-full"
                              onClick={() => handleRegisterInterest(trip.id)}
                            >
                              <Heart className="w-4 h-4 mr-2" />
                              I'm Interested
                            </Button>
                            <Button 
                              variant="outline" 
                              className="w-full"
                              onClick={() => navigate(`/student/trips/${trip.id}`)}
                            >
                              View Details
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-sm text-yellow-800">
                              Interest registration period has closed
                            </div>
                            <Button 
                              variant="outline" 
                              className="w-full"
                              onClick={() => navigate(`/student/trips/${trip.id}`)}
                            >
                              View Details
                            </Button>
                          </div>
                        )}
                      </div>

                      {trip.inclusions && trip.inclusions.length > 0 && (
                        <div className="pt-3 border-t">
                          <p className="text-xs font-medium text-muted-foreground mb-2">
                            INCLUDES:
                          </p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {trip.inclusions.slice(0, 3).map((item, idx) => (
                              <li key={idx}>• {item}</li>
                            ))}
                            {trip.inclusions.length > 3 && (
                              <li className="text-dragon">+ {trip.inclusions.length - 3} more</li>
                            )}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BrowseTrips;
