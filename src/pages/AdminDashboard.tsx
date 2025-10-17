import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { School, MapPin, Package, Users, ShieldCheck, FileText } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState<string>("");
  const [stats, setStats] = useState({
    schools: 0,
    trips: 0,
    students: 0,
    bookings: 0,
  });

  useEffect(() => {
    checkAuth();
    loadStats();
  }, []);

  const checkAuth = async () => {
    try {
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
          description: "Admin privileges required.",
        });
        await supabase.auth.signOut();
        navigate("/admin/login");
        return;
      }

      setUserRole(roles[0].role);
    } catch (error) {
      console.error("Auth check error:", error);
      navigate("/admin/login");
    } finally {
      setIsLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const [schoolsRes, tripsRes, studentsRes, bookingsRes] = await Promise.all([
        supabase.from("schools").select("id", { count: "exact", head: true }),
        supabase.from("trips").select("id", { count: "exact", head: true }),
        supabase.from("students").select("id", { count: "exact", head: true }),
        supabase.from("bookings").select("id", { count: "exact", head: true }),
      ]);

      setStats({
        schools: schoolsRes.count || 0,
        trips: tripsRes.count || 0,
        students: studentsRes.count || 0,
        bookings: bookingsRes.count || 0,
      });
    } catch (error) {
      console.error("Stats loading error:", error);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
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
        title="Admin Dashboard | Kapes Adventures"
        description="Manage schools, trips, and bookings"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-dragon-dark">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                {userRole === "super_admin" ? "Super Administrator" : "School Administrator"}
              </p>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
                <School className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.schools}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Trips</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.trips}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.students}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bookings</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.bookings}</div>
              </CardContent>
            </Card>
          </div>

          {/* Management Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRole === "super_admin" && (
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/admin/schools")}>
                <CardHeader>
                  <School className="h-8 w-8 text-dragon mb-2" />
                  <CardTitle>Manage Schools</CardTitle>
                  <CardDescription>
                    Create schools and generate enrollment codes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Manage Schools</Button>
                </CardContent>
              </Card>
            )}

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/admin/trips")}>
              <CardHeader>
                <MapPin className="h-8 w-8 text-dragon mb-2" />
                <CardTitle>Manage Trips</CardTitle>
                <CardDescription>
                  Create and assign trips to schools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Manage Trips</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/admin/templates")}>
              <CardHeader>
                <Package className="h-8 w-8 text-dragon mb-2" />
                <CardTitle>Trip Templates</CardTitle>
                <CardDescription>
                  Manage reusable trip templates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Trip Templates</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/admin/documents")}>
              <CardHeader>
                <FileText className="h-8 w-8 text-dragon mb-2" />
                <CardTitle>Review Documents</CardTitle>
                <CardDescription>
                  Review and approve trip documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Review Documents</Button>
              </CardContent>
            </Card>

            {userRole === "super_admin" && (
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/admin/addons")}>
                <CardHeader>
                  <Package className="h-8 w-8 text-dragon mb-2" />
                  <CardTitle>Manage Add-Ons</CardTitle>
                  <CardDescription>
                    Configure insurance, kits, and extras
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Manage Add-Ons</Button>
                </CardContent>
              </Card>
            )}

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/admin/students")}>
              <CardHeader>
                <Users className="h-8 w-8 text-dragon mb-2" />
                <CardTitle>View Students</CardTitle>
                <CardDescription>
                  See registered students and interests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">View Students</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/admin/bookings")}>
              <CardHeader>
                <ShieldCheck className="h-8 w-8 text-dragon mb-2" />
                <CardTitle>View Bookings</CardTitle>
                <CardDescription>
                  Monitor payments and confirmations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">View Bookings</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
