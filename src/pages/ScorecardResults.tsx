import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Calendar, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";
import { useEffect } from "react";

const ScorecardResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalScore, name, school } = location.state || {};

  useEffect(() => {
    if (!totalScore) {
      navigate('/scorecard/quiz');
    }
  }, [totalScore, navigate]);

  if (!totalScore) return null;

  const getScoreCategory = (score: number) => {
    if (score >= 65) return "leader";
    if (score >= 45) return "emerging";
    return "falling-behind";
  };

  const category = getScoreCategory(totalScore);

  const categoryData = {
    leader: {
      title: "Global Impact Leader",
      icon: CheckCircle2,
      color: "text-green-600",
      bgColor: "bg-green-50",
      message: "Your school leads with purpose and measurable results. Kapes Adventures can help you expand your reach with tailor-made impact destinations and media storytelling to elevate your brand.",
      recommendations: [
        "Expand your programme to new impact destinations",
        "Develop a storytelling strategy to showcase your leadership",
        "Create case studies for marketing and admissions",
        "Partner with us to pilot cutting-edge sustainability initiatives"
      ]
    },
    emerging: {
      title: "Emerging Changemaker",
      icon: TrendingUp,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      message: "You're doing well, but your trips may not be maximizing visibility or long-term impact. We'll show you how to connect impact to admissions and brand growth.",
      recommendations: [
        "Strengthen impact measurement and reporting systems",
        "Align trips more closely with curriculum and ESG goals",
        "Develop parent communication strategies highlighting programme value",
        "Build long-term community partnerships for sustained impact"
      ]
    },
    "falling-behind": {
      title: "Time to Transform",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      message: "Your school's trips risk feeling outdated. Parents expect more than sightseeing — they want measurable learning and impact. See how schools like Fairgreen and Arbor transformed with Kapes Adventures.",
      recommendations: [
        "Redesign trips around clear learning outcomes and social impact",
        "Establish authentic community partnerships",
        "Integrate sustainability and ESG metrics from the ground up",
        "Create a strategic vision that positions trips as core to school identity"
      ]
    }
  };

  const data = categoryData[category];
  const Icon = data.icon;

  const handleBookConsultation = () => {
    window.open('https://calendly.com/kapes-adventures/consultation', '_blank');
  };

  return (
    <>
      <SEO 
        title={`Your Score: ${totalScore}/80 | Global Education Scorecard`}
        description="Your personalized global education programme assessment results with actionable recommendations."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                {name ? `${name.split(' ')[0]}, h` : "H"}ere are your results
              </h1>
              {school && (
                <p className="text-lg text-muted-foreground">{school}</p>
              )}
            </div>

            {/* Score Display */}
            <Card className={`p-8 text-center ${data.bgColor} border-2`}>
              <div className="flex items-center justify-center mb-4">
                <Icon className={`h-16 w-16 ${data.color}`} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{data.title}</h2>
              <div className="text-5xl md:text-6xl font-bold mb-4">
                {totalScore}<span className="text-3xl text-muted-foreground">/80</span>
              </div>
              <p className="text-lg max-w-2xl mx-auto">{data.message}</p>
            </Card>

            {/* Recommendations */}
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Your Personalized Recommendations</h3>
              <ul className="space-y-3">
                {data.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{recommendation}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Next Steps */}
            <Card className="p-6 md:p-8 bg-primary text-primary-foreground">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to Transform Your Programme?</h3>
                <p className="text-lg opacity-90">
                  Book a free 30-minute consultation to discuss how Kapes Adventures can help 
                  {school ? ` ${school}` : " your school"} reach the next level.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="mt-4"
                  onClick={handleBookConsultation}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Your Consultation
                </Button>
              </div>
            </Card>

            {/* Case Studies */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-bold mb-2">Fairgreen International School</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Transformed their optional trips into a signature programme that increased 
                  admissions inquiries by 40% and became a key differentiator.
                </p>
                <Button variant="outline" size="sm" onClick={() => navigate('/impact-scorecard')}>
                  Read Case Study
                </Button>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold mb-2">Arbor School</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Implemented measurable impact tracking and ESG alignment, positioning 
                  themselves as leaders in sustainable education.
                </p>
                <Button variant="outline" size="sm" onClick={() => navigate('/impact-scorecard')}>
                  Read Case Study
                </Button>
              </Card>
            </div>

            {/* Footer CTA */}
            <div className="text-center pt-8">
              <Button 
                variant="outline" 
                onClick={() => navigate('/programs')}
              >
                Explore Our Programmes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScorecardResults;
