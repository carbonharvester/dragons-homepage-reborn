import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const StudentSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"email" | "details">("email");
  const [email, setEmail] = useState("");
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    schoolCode: "",
    referralCode: "",
  });

  const handleSendMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/student/complete-profile`,
        },
      });

      if (error) throw error;

      toast({
        title: "Check your email!",
        description: "We've sent you a magic link to sign in.",
      });
      
      setStep("details");
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

  const handleCompleteProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Verify school code exists
      const { data: school, error: schoolError } = await supabase
        .from("schools")
        .select("id")
        .eq("enrollment_code", formData.schoolCode.toUpperCase())
        .single();

      if (schoolError || !school) {
        throw new Error("Invalid school code. Please check with your school.");
      }

      // Get current user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) throw new Error("Not authenticated");

      // Generate unique referral code
      const referralCode = `${formData.firstName.substring(0, 3).toUpperCase()}${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

      // Check if referred by someone
      let referredByStudentId = null;
      if (formData.referralCode) {
        const { data: referrer } = await supabase
          .from("students")
          .select("id")
          .eq("referral_code", formData.referralCode.toUpperCase())
          .single();
        
        if (referrer) {
          referredByStudentId = referrer.id;
          
          // Award referral credit
          await supabase
            .from("students")
            .update({ referral_credits_aed: 250 })
            .eq("id", referrer.id);
        }
      }

      // Create student profile
      const { error: insertError } = await supabase
        .from("students")
        .insert({
          auth_user_id: user.id,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: user.email!,
          school_id: school.id,
          referral_code: referralCode,
          referred_by_student_id: referredByStudentId,
        });

      if (insertError) throw insertError;

      // Add student role
      await supabase
        .from("user_roles")
        .insert({
          user_id: user.id,
          role: "student",
        });

      toast({
        title: "Welcome to Kapes Adventures!",
        description: `Your referral code is: ${referralCode}`,
      });

      navigate("/student/dashboard");
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

  return (
    <>
      <SEO 
        title="Student Signup | Kapes Adventures"
        description="Join Kapes Adventures - Sign up to explore life-changing school trips to Kenya"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12 px-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Student Sign Up</CardTitle>
              <CardDescription>
                {step === "email" 
                  ? "Enter your email to get started" 
                  : "Complete your profile"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === "email" ? (
                <form onSubmit={handleSendMagicLink} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="student@school.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Magic Link"}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Already have an account?{" "}
                    <Button
                      variant="link"
                      className="p-0"
                      onClick={() => navigate("/student/login")}
                    >
                      Sign in
                    </Button>
                  </p>
                </form>
              ) : (
                <form onSubmit={handleCompleteProfile} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="schoolCode">School Code</Label>
                    <Input
                      id="schoolCode"
                      placeholder="Enter your school's enrollment code"
                      value={formData.schoolCode}
                      onChange={(e) => setFormData({ ...formData, schoolCode: e.target.value })}
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Get this from your school administrator
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="referralCode">Referral Code (Optional)</Label>
                    <Input
                      id="referralCode"
                      placeholder="Enter friend's referral code"
                      value={formData.referralCode}
                      onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                    />
                    <p className="text-xs text-muted-foreground">
                      Both you and your friend get AED 250 credit!
                    </p>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating Profile..." : "Complete Sign Up"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default StudentSignup;
