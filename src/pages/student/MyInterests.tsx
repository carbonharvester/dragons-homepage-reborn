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
import { Calendar, MapPin, Mail, Clock } from "lucide-react";
import { format } from "date-fns";

interface Interest {
  id: string;
  trip_id: string;
  status: string;
  registered_at: string;
  parent_notified_at: string | null;
  trips: {
    title: string;
    destination: string;
    duration_days: number;
    base_price_aed: number;
    trip_start_date: string;
  };
}

const MyInterests = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [interests, setInterests] = useState<Interest[]>([]);

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
        .select("id")
        .eq("auth_user_id", user.id)
        .single();

      if (studentError || !studentData) {
        navigate("/student/dashboard");
        return;
      }

      await loadInterests(studentData.id);
    } catch (error) {
      console.error("Auth check error:", error);
      navigate("/student/login");
    } finally {
      setIsLoading(false);
    }
  };

  const loadInterests = async (studentId: string) => {
    try {
      const { data, error } = await supabase
        .from("student_interests")
        .select(`
          *,
          trips:trip_id (
            title,
            destination,
            duration_days,
            base_price_aed,
            trip_start_date
          )
        `)
        .eq("student_id", studentId)
        .order("registered_at", { ascending: false });

      if (error) throw error;
      setInterests(data || []);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, { bg: string; text: string; label: string }> = {
      pending: { bg: "bg-yellow-100", text: "text-yellow-800", label: "Pending" },
      parent_notified: { bg: "bg-blue-100", text: "text-blue-800", label: "Parent Notified" },
      parent_viewing: { bg: "bg-purple-100", text: "text-purple-800", label: "Parent Reviewing" },
      booked: { bg: "bg-green-100", text: "text-green-800", label: "Booked!" },
      expired: { bg: "bg-gray-100", text: "text-gray-800", label: "Expired" },
    };

    const style = styles[status] || styles.pending;

    return (
      <Badge variant="secondary" className={`${style.bg} ${style.text}`}>
        {style.label}
      </Badge>
    );
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
        title="My Interests | Student Portal"
        description="View your registered trip interests"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="mb-8">
              <Button variant="outline" onClick={() => navigate("/student/dashboard")}>
                ← Back to Dashboard
              </Button>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-dragon-dark mb-2">
                My Interests
              </h1>
              <p className="text-muted-foreground">
                Track the trips you're interested in and their booking status
              </p>
            </div>

            {interests.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center space-y-4">
                  <p className="text-muted-foreground">
                    You haven't registered interest in any trips yet.
                  </p>
                  <Button onClick={() => navigate("/student/trips")}>
                    Browse Available Trips
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {interests.map((interest) => (
                  <Card key={interest.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{interest.trips.title}</CardTitle>
                          <CardDescription className="mt-1">
                            Registered {format(new Date(interest.registered_at), "MMM d, yyyy 'at' h:mm a")}
                          </CardDescription>
                        </div>
                        {getStatusBadge(interest.status)}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{interest.trips.destination}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{interest.trips.duration_days} days</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{format(new Date(interest.trips.trip_start_date), "MMM d, yyyy")}</span>
                        </div>
                        <div className="text-muted-foreground">
                          <span className="font-semibold">AED {interest.trips.base_price_aed.toLocaleString()}</span>
                        </div>
                      </div>

                      {interest.status === "pending" && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded p-4 text-sm">
                          <div className="flex items-start gap-2">
                            <Mail className="w-4 h-4 text-yellow-600 mt-0.5" />
                            <div>
                              <p className="font-medium text-yellow-900">Next Steps</p>
                              <p className="text-yellow-700 mt-1">
                                We'll notify your parent to complete the booking. Make sure you've provided their email in your profile.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {interest.status === "parent_notified" && (
                        <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm">
                          <div className="flex items-start gap-2">
                            <Mail className="w-4 h-4 text-blue-600 mt-0.5" />
                            <div>
                              <p className="font-medium text-blue-900">Parent Notified</p>
                              <p className="text-blue-700 mt-1">
                                Your parent has been sent an invitation to complete the booking.
                                {interest.parent_notified_at && (
                                  <span className="block mt-1">
                                    Sent: {format(new Date(interest.parent_notified_at), "MMM d 'at' h:mm a")}
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {interest.status === "booked" && (
                        <div className="bg-green-50 border border-green-200 rounded p-4 text-sm">
                          <p className="font-medium text-green-900">🎉 Booking Confirmed!</p>
                          <p className="text-green-700 mt-1">
                            Your parent has completed the booking. Get ready for your adventure!
                          </p>
                        </div>
                      )}

                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => navigate(`/student/trips/${interest.trip_id}`)}
                      >
                        View Trip Details
                      </Button>
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

export default MyInterests;
