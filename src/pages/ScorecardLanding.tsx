import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { ArrowRight, CheckCircle2, Target, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ScorecardLanding = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="Global Education Programme Scorecard | Is Your School Future-Ready?"
        description="Discover how your school's trips stack up against leading international schools. Take our 5-minute scorecard assessment and get personalized recommendations."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-secondary/5">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-12 md:pt-32 md:pb-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">Free Assessment • 5 Minutes</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Is Your School's Global Education Programme{" "}
              <span className="text-primary">Future-Ready?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Discover how your trips stack up against leading international schools — 
              and where you may be falling short.
            </p>
            
            <Button 
              size="lg" 
              className="mt-8 text-lg px-8 py-6"
              onClick={() => navigate('/scorecard/quiz')}
            >
              Start Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Used by 100+ international schools across the Middle East & Asia
            </p>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What You'll Discover
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Strategic Gaps</h3>
                <p className="text-sm text-muted-foreground">
                  Where your programme lacks alignment with your school's vision
                </p>
              </Card>

              <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Impact Metrics</h3>
                <p className="text-sm text-muted-foreground">
                  How to measure and communicate real educational outcomes
                </p>
              </Card>

              <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Parent Expectations</h3>
                <p className="text-sm text-muted-foreground">
                  What modern families expect from global education programmes
                </p>
              </Card>

              <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Best Practices</h3>
                <p className="text-sm text-muted-foreground">
                  Proven strategies from leading international schools
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Assessment Areas */}
        <section className="container mx-auto px-4 py-12 md:py-20 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              5 Critical Areas We'll Assess
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Vision & Differentiation",
                  description: "How your trips align with and strengthen your school's unique identity"
                },
                {
                  title: "Educational Impact",
                  description: "Integration with curriculum, learning outcomes, and student participation"
                },
                {
                  title: "Community & Global Partnerships",
                  description: "Quality of local partnerships and measurable community benefit"
                },
                {
                  title: "Sustainability & ESG Alignment",
                  description: "Environmental responsibility and ESG goal integration"
                },
                {
                  title: "Student & Parent Engagement",
                  description: "Student involvement and parent perception of programme value"
                }
              ].map((area, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg">{area.title}</h3>
                      <p className="text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to See Where You Stand?
            </h2>
            <p className="text-xl text-muted-foreground">
              Takes just 5 minutes. Get your personalized scorecard instantly.
            </p>
            <Button 
              size="lg" 
              className="mt-6 text-lg px-8 py-6"
              onClick={() => navigate('/scorecard/quiz')}
            >
              Start Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScorecardLanding;
