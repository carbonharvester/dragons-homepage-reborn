import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        // Sign up new admin
        const { error, data } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin/dashboard`
          }
        });

        if (error) throw error;

        // Create super_admin role for new user
        if (data.user) {
          const { error: roleError } = await supabase
            .from("user_roles")
            .insert({
              user_id: data.user.id,
              role: "super_admin"
            });

          if (roleError) throw roleError;
        }

        toast({
          title: "Account created!",
          description: "Your admin account has been created successfully.",
        });

        navigate("/admin/dashboard");
      } else {
        // Sign in existing admin
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        // Check if user has admin role
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error("Authentication failed");

        const { data: roles } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .in("role", ["super_admin", "school_admin"]);

        if (!roles || roles.length === 0) {
          await supabase.auth.signOut();
          throw new Error("Access denied. Admin privileges required.");
        }

        toast({
          title: "Welcome back!",
          description: "Redirecting to admin dashboard...",
        });

        navigate("/admin/dashboard");
      }
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
        title="Admin Login | Kapes Adventures"
        description="Admin portal for Kapes Adventures management"
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dragon-beige/20 to-white py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{isSignUp ? "Admin Sign Up" : "Admin Login"}</CardTitle>
            <CardDescription>
              {isSignUp 
                ? "Create your admin account for Kapes Adventures" 
                : "Sign in to manage Kapes Adventures platform"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@kapesadventures.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (isSignUp ? "Creating account..." : "Signing in...") : (isSignUp ? "Create Account" : "Sign In")}
              </Button>
            </form>
            
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-dragon hover:underline"
              >
                {isSignUp ? "Already have an account? Sign in" : "Need an account? Sign up"}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminLogin;
