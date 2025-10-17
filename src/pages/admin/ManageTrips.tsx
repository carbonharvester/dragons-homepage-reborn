import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { ArrowLeft, Plus, Edit, Eye } from "lucide-react";
import { format } from "date-fns";

interface Trip {
  id: string;
  title: string;
  destination: string;
  duration_days: number;
  base_price_aed: number;
  trip_start_date: string;
  trip_end_date: string;
  status: string;
  interest_opens_at: string | null;
  interest_closes_at: string | null;
  booking_opens_at: string | null;
  booking_closes_at: string | null;
  max_participants: number | null;
}

const ManageTrips = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    loadTrips();
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
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "Admin access required.",
      });
      navigate("/admin/dashboard");
    }
  };

  const loadTrips = async () => {
    try {
      const { data, error } = await supabase
        .from("trips")
        .select("*")
        .order("trip_start_date", { ascending: true });

      if (error) throw error;
      setTrips(data || []);
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

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      draft: "bg-gray-100 text-gray-800",
      active: "bg-green-100 text-green-800",
      full: "bg-yellow-100 text-yellow-800",
      completed: "bg-blue-100 text-blue-800",
      cancelled: "bg-red-100 text-red-800",
    };

    return (
      <span className={`px-2 py-1 rounded text-xs font-medium ${styles[status] || styles.draft}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <>
      <SEO title="Manage Trips | Admin" description="Create and manage school trips" />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => navigate("/admin/dashboard")} className="mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
            <h1 className="text-2xl font-bold text-dragon-dark">Manage Trips</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Trips</CardTitle>
                <CardDescription>Create and manage educational trips to Kenya</CardDescription>
              </div>
              <Button onClick={() => navigate("/admin/trips/create")}>
                <Plus className="mr-2 h-4 w-4" />
                Create Trip
              </Button>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p>Loading trips...</p>
              ) : trips.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    No trips yet. Create your first trip to get started.
                  </p>
                  <Button onClick={() => navigate("/admin/trips/create")}>
                    <Plus className="mr-2 h-4 w-4" />
                    Create First Trip
                  </Button>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Trip Name</TableHead>
                      <TableHead>Destination</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Trip Dates</TableHead>
                      <TableHead>Price (AED)</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trips.map((trip) => (
                      <TableRow key={trip.id}>
                        <TableCell className="font-medium">{trip.title}</TableCell>
                        <TableCell>{trip.destination}</TableCell>
                        <TableCell>{trip.duration_days} days</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {format(new Date(trip.trip_start_date), "MMM d, yyyy")}
                            <br />
                            to {format(new Date(trip.trip_end_date), "MMM d, yyyy")}
                          </div>
                        </TableCell>
                        <TableCell>{trip.base_price_aed.toLocaleString()}</TableCell>
                        <TableCell>{getStatusBadge(trip.status)}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => navigate(`/admin/trips/edit/${trip.id}`)}
                            >
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => navigate(`/admin/trips/view/${trip.id}`)}
                            >
                              <Eye className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
};

export default ManageTrips;
