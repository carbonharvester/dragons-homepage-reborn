import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { ArrowRight, AlertCircle, Utensils, Droplets, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ScorecardLanding = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="School Trip Impact Scorecard | Are Your Trips Making a Real Difference?"
        description="Most school trips create memories, not change. Take our 5-minute assessment to discover if your trips are truly impactful—or just educational tourism."
      />

      <div className="min-h-screen bg-gradient-to-b from-kapes-cream to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-12 md:pt-32 md:pb-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-kapes-orange/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-kapes-orange">Free Assessment • 5 Minutes • 20 Questions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-academy text-kapes-charcoal leading-tight">
              Are Your School Trips{" "}
              <span className="text-kapes-orange">Making a Real Difference?</span>
            </h1>

            <p className="text-xl md:text-2xl text-dragon-gray max-w-3xl mx-auto">
              Most school trips create photos and memories. But do they create lasting change?
              Find out where your programme stands—and what you might be missing.
            </p>

            <Button
              size="lg"
              className="mt-8 btn-action text-lg px-8 py-6"
              onClick={() => navigate('/scorecard/start')}
            >
              Take the Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-sm text-dragon-gray">
              Trusted by international schools across the Middle East, Asia & Africa
            </p>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="bg-kapes-orange/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex justify-center">
                <AlertCircle className="w-16 h-16 text-kapes-orange" />
              </div>
              <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal">
                The uncomfortable truth about school trips
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-kapes-charcoal">No lasting impact</h3>
                  <p className="text-dragon-gray">
                    Many "service trips" leave no measurable change after students depart
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-kapes-charcoal">Money stays abroad</h3>
                  <p className="text-dragon-gray">
                    Most trip budgets go to international operators, not local communities
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-kapes-charcoal">Parents can't explain it</h3>
                  <p className="text-dragon-gray">
                    Few parents can describe what their child's trip actually accomplished
                  </p>
                </div>
              </div>
              <p className="text-lg text-dragon-gray max-w-2xl mx-auto pt-4">
                It's time for honest conversations about what school trips actually accomplish—
                and what they could become.
              </p>
            </div>
          </div>
        </section>

        {/* What This Scorecard Reveals */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal text-center mb-4">
              What This Scorecard Will Reveal
            </h2>
            <p className="text-xl text-dragon-gray text-center max-w-2xl mx-auto mb-12">
              20 questions across 5 critical dimensions of meaningful travel
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2 hover:border-kapes-orange/30">
                <div className="w-12 h-12 bg-impact-green/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-impact-green" />
                </div>
                <h3 className="font-semibold text-lg text-kapes-charcoal">Real-World Impact</h3>
                <p className="text-sm text-dragon-gray">
                  Does your trip create lasting change—or just lasting memories? We'll assess what
                  tangible benefits remain after students leave.
                </p>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2 hover:border-kapes-orange/30">
                <div className="w-12 h-12 bg-impact-purple/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-impact-purple" />
                </div>
                <h3 className="font-semibold text-lg text-kapes-charcoal">Community Connection</h3>
                <p className="text-sm text-dragon-gray">
                  Are students truly engaging with local people—or just observing from a distance?
                  Authentic relationships create authentic learning.
                </p>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2 hover:border-kapes-orange/30">
                <div className="w-12 h-12 bg-kapes-orange/10 rounded-full flex items-center justify-center">
                  <Utensils className="h-6 w-6 text-kapes-orange" />
                </div>
                <h3 className="font-semibold text-lg text-kapes-charcoal">Hands-On Learning</h3>
                <p className="text-sm text-dragon-gray">
                  Are students doing meaningful work—or watching from the sidelines? Real skills
                  come from real participation.
                </p>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2 hover:border-kapes-orange/30">
                <div className="w-12 h-12 bg-impact-blue/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-impact-blue" />
                </div>
                <h3 className="font-semibold text-lg text-kapes-charcoal">School Reputation</h3>
                <p className="text-sm text-dragon-gray">
                  Can you prove your impact to parents and prospective families? In a competitive
                  market, measurable outcomes matter.
                </p>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2 hover:border-kapes-orange/30">
                <div className="w-12 h-12 bg-impact-rose/10 rounded-full flex items-center justify-center">
                  <Droplets className="h-6 w-6 text-impact-rose" />
                </div>
                <h3 className="font-semibold text-lg text-kapes-charcoal">Sustainability & Ethics</h3>
                <p className="text-sm text-dragon-gray">
                  Is your trip part of the solution—or part of the problem? We'll examine voluntourism
                  risks and community benefit.
                </p>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2 hover:border-kapes-orange/30 bg-kapes-cream">
                <div className="w-12 h-12 bg-kapes-orange rounded-full flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-kapes-charcoal">Your Score + Next Steps</h3>
                <p className="text-sm text-dragon-gray">
                  Get personalized recommendations based on your results. See where you're
                  excelling and where there's room to grow.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* What True Impact Looks Like */}
        <section className="bg-kapes-cream py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal text-center mb-12">
                What <span className="text-kapes-orange">true social impact</span> looks like
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Traditional Trips */}
                <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-200">
                  <h3 className="font-semibold text-lg mb-4 text-dragon-gray">Traditional School Trips</h3>
                  <ul className="space-y-3 text-dragon-gray">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>One-time donations that don't address root causes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>Brief photo ops with local children</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>No ongoing relationship with communities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>Unmeasurable "soft skills" as outcomes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>Risk of perpetuating savior mentality</span>
                    </li>
                  </ul>
                </div>

                {/* Impact Trips */}
                <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-impact-green">
                  <h3 className="font-semibold text-lg mb-4 text-impact-green">True Social Impact Trips</h3>
                  <ul className="space-y-3 text-kapes-charcoal">
                    <li className="flex items-start gap-2">
                      <span className="text-impact-green mt-1">✓</span>
                      <span>Infrastructure that serves communities year-round</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-impact-green mt-1">✓</span>
                      <span>Working alongside local families for days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-impact-green mt-1">✓</span>
                      <span>Long-term partnerships with ongoing updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-impact-green mt-1">✓</span>
                      <span>Measurable outcomes: meals, gardens, families</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-impact-green mt-1">✓</span>
                      <span>Community-led initiatives with local leadership</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-academy text-kapes-charcoal">
              Where does your school trip programme stand?
            </h2>
            <p className="text-xl text-dragon-gray">
              Take 5 minutes to find out. No judgment—just honest assessment
              and actionable insights.
            </p>
            <Button
              size="lg"
              className="mt-6 btn-action text-lg px-8 py-6"
              onClick={() => navigate('/scorecard/start')}
            >
              Start Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-dragon-gray pt-4">
              Your results will include personalized recommendations for improvement
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScorecardLanding;
