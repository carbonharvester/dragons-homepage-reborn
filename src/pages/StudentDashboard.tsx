import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Copy, Users, Calendar, Gift } from "lucide-react";

interface StudentProfile {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  referral_code: string;
  referral_credits_aed: number;
  school_id: string;
}

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [student, setStudent] = useState<StudentProfile | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/student/login");
        return;
      }

      // Fetch student profile
      const { data: studentData, error } = await supabase
        .from("students")
        .select("*")
        .eq("auth_user_id", user.id)
        .single();

      if (error || !studentData) {
        // No student profile, redirect to complete profile
        navigate("/student/complete-profile");
        return;
      }

      setStudent(studentData);
    } catch (error) {
      console.error("Auth check error:", error);
      navigate("/student/login");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyReferralCode = () => {
    if (student?.referral_code) {
      navigator.clipboard.writeText(student.referral_code);
      toast({
        title: "Copied!",
        description: "Your referral code has been copied to clipboard.",
      });
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!student) {
    return null;
  }

  return (
    <>
      <SEO 
        title="Student Dashboard | Kapes Adventures"
        description="Manage your trips and view available adventures"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 px-4">
          <div className="container max-w-6xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">
                  Welcome back, {student.first_name}!
                </h1>
                <p className="text-muted-foreground">
                  Explore life-changing adventures to Kenya
                </p>
              </div>
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Referral Code
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{student.referral_code}</div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={handleCopyReferralCode}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Share with friends to earn credits
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Referral Credits
                  </CardTitle>
                  <Gift className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    AED {student.referral_credits_aed.toFixed(2)}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Available to use on bookings
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    My Interests
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Trips you're interested in
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Get started with your adventure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => navigate("/student/trips")}
                >
                  Browse Available Trips
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/student/interests")}
                >
                  View My Interests
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default StudentDashboard;
