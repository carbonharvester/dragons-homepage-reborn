import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ScorecardLeadCapture = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { answers, totalScore } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    school: "",
    country: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!answers || !totalScore) {
    navigate('/scorecard/quiz');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call edge function to submit to Google Sheets
      const { error } = await supabase.functions.invoke('submit-scorecard', {
        body: {
          ...formData,
          totalScore,
          answers,
          submittedAt: new Date().toISOString()
        }
      });

      if (error) throw error;

      toast({
        title: "Assessment Complete!",
        description: "Redirecting to your results..."
      });

      // Navigate to results page
      navigate('/scorecard/results', { 
        state: { 
          totalScore, 
          ...formData 
        } 
      });
    } catch (error) {
      console.error('Error submitting scorecard:', error);
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your assessment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Get Your Results | Global Education Scorecard"
        description="Enter your details to receive your personalized global education scorecard results."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                You're Almost There!
              </h1>
              <p className="text-lg text-muted-foreground">
                Where should we send your Social Impact Score and personalized recommendations?
              </p>
            </div>

            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role *</Label>
                  <Input
                    id="role"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="Head of School, Service Learning Coordinator, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="school">School Name *</Label>
                  <Input
                    id="school"
                    required
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    placeholder="International School of..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="United Arab Emirates"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john.smith@school.edu"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Show My Results"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We respect your privacy. Your information will only be used to send your 
                  scorecard results and relevant programme updates.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScorecardLeadCapture;
