import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { Users, Calendar, Plus, LogOut } from "lucide-react";

const ParentDashboard = () => {
  const navigate = useNavigate();
  const [parent, setParent] = useState<any>(null);
  const [children, setChildren] = useState<any[]>([]);
  const [interests, setInterests] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/parent/login");
        return;
      }

      // Load parent profile
      const { data: parentData, error: parentError } = await supabase
        .from("parents")
        .select("*")
        .eq("auth_user_id", session.user.id)
        .single();

      if (parentError) throw parentError;
      setParent(parentData);

      // Load children
      const { data: childrenData, error: childrenError } = await supabase
        .from("students")
        .select("*, school:schools(name)")
        .eq("parent_id", parentData.id);

      if (childrenError) throw childrenError;
      setChildren(childrenData || []);

      // Load interests for all children
      if (childrenData && childrenData.length > 0) {
        const childIds = childrenData.map(child => child.id);
        const { data: interestsData, error: interestsError } = await supabase
          .from("student_interests")
          .select("*, trip:trips(title, destination, trip_start_date), student:students(first_name, last_name)")
          .in("student_id", childIds);

        if (interestsError) throw interestsError;
        setInterests(interestsData || []);
      }

      // Load bookings
      const { data: bookingsData, error: bookingsError } = await supabase
        .from("bookings")
        .select(`
          *,
          trip:trips(title, destination, trip_start_date),
          booking_documents:booking_documents(id, document_type, status)
        `)
        .eq("parent_id", parentData.id)
        .order("created_at", { ascending: false });

      if (bookingsError) throw bookingsError;
      setBookings(bookingsData || []);
    } catch (error: any) {
      console.error("Error loading dashboard:", error);
      toast.error("Failed to load dashboard");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/parent/login");
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
        title="Parent Dashboard | Kapes Adventures"
        description="Manage your children's trip registrations"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-academy-bold mb-2">
                Welcome, {parent?.first_name}
              </h1>
              <p className="text-muted-foreground">
                Manage your children's trip registrations
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Children</p>
                  <p className="text-3xl font-bold">{children.length}</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Interests</p>
                  <p className="text-3xl font-bold">{interests.filter(i => i.status === 'pending').length}</p>
                </div>
                <Calendar className="w-8 h-8 text-primary" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Quick Actions</p>
                  <Button className="mt-2" size="sm" asChild>
                    <Link to="/parent/trips">
                      Browse Trips
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Your Children</h2>
                <Button size="sm" asChild>
                  <Link to="/parent/children/add">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Child
                  </Link>
                </Button>
              </div>

              {children.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No children added yet. Add a child to start browsing trips.
                </p>
              ) : (
                <div className="space-y-3">
                  {children.map((child) => (
                    <div key={child.id} className="border rounded-lg p-4">
                      <p className="font-semibold">
                        {child.first_name} {child.last_name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {child.school?.name || "No school assigned"}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Interests</h2>

              {interests.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No trip interests registered yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {interests.slice(0, 5).map((interest) => (
                    <div key={interest.id} className="border rounded-lg p-4">
                      <p className="font-semibold">{interest.trip?.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {interest.student?.first_name} • {interest.trip?.destination}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(interest.trip?.trip_start_date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>

          {bookings.length > 0 && (
            <Card className="p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
              <div className="space-y-4">
                {bookings.map((booking) => {
                  const pendingDocs = booking.booking_documents?.filter((d: any) => d.status === 'pending').length || 0;
                  const approvedDocs = booking.booking_documents?.filter((d: any) => d.status === 'approved').length || 0;
                  const totalDocs = booking.booking_documents?.length || 0;

                  return (
                    <div key={booking.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-semibold">{booking.trip?.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {booking.student_first_name} {booking.student_last_name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Departure: {new Date(booking.trip?.trip_start_date).toLocaleDateString()}
                          </p>
                          <div className="flex gap-2 mt-2">
                            <span className={`text-xs px-2 py-1 rounded ${
                              booking.payment_status === 'paid' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              Payment: {booking.payment_status}
                            </span>
                            <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">
                              Documents: {approvedDocs}/{totalDocs || 'None'} approved
                            </span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          asChild
                        >
                          <Link to={`/parent/booking/${booking.id}/documents`}>
                            Upload Documents
                          </Link>
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default ParentDashboard;
