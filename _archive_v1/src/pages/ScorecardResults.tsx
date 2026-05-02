import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Calendar, CheckCircle2, TrendingUp, AlertTriangle, Utensils, Droplets, ArrowRight, Users, Leaf } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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

  const maxScore = 80; // 20 questions × 4 points max
  const percentage = Math.round((totalScore / maxScore) * 100);

  const getScoreCategory = (score: number) => {
    if (score >= 64) return "leader"; // 80%+
    if (score >= 48) return "emerging"; // 60-79%
    return "falling-behind"; // Below 60%
  };

  const category = getScoreCategory(totalScore);

  const categoryData = {
    leader: {
      title: "Impact Leader",
      icon: CheckCircle2,
      color: "text-impact-green",
      bgColor: "bg-impact-green/10",
      borderColor: "border-impact-green",
      message: "Your trips are creating real impact. But even leaders can expand their reach. See how our programs can help you scale what's working and tell your story more powerfully.",
      gapAnalysis: [
        "You're already measuring outcomes—we can amplify your story",
        "Your community connections are strong—we can make them deeper",
        "Your hands-on approach is working—we can add new dimensions"
      ]
    },
    emerging: {
      title: "Room to Grow",
      icon: TrendingUp,
      color: "text-kapes-orange",
      bgColor: "bg-kapes-orange/10",
      borderColor: "border-kapes-orange",
      message: "You're doing better than many schools, but there's a significant gap between what you're doing and what's possible. Your trips create memories—but are they creating lasting change?",
      gapAnalysis: [
        "Impact measurement could be stronger and more visible to parents",
        "Community connections may be brief rather than transformational",
        "Hands-on work could be more directly tied to solving real problems"
      ]
    },
    "falling-behind": {
      title: "Wake-Up Call",
      icon: AlertTriangle,
      color: "text-impact-rose",
      bgColor: "bg-impact-rose/10",
      borderColor: "border-impact-rose",
      message: "Let's be honest: your current trips may be doing more for Instagram than for communities. Parents are increasingly asking tough questions about what their money actually achieves. It's time for a new approach.",
      gapAnalysis: [
        "No measurable impact remains after students leave",
        "Community interactions are likely brief and superficial",
        "Students watch rather than build, observe rather than create",
        "You can't prove your impact to parents or prospective families"
      ]
    }
  };

  const data = categoryData[category];
  const Icon = data.icon;

  const handleBookConsultation = () => {
    window.open('https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone', '_blank');
  };

  return (
    <>
      <SEO
        title={`Your Score: ${totalScore}/${maxScore} | School Trip Impact Scorecard`}
        description="Your school trip impact assessment results with actionable recommendations for creating real social impact."
      />

      <div className="min-h-screen bg-gradient-to-b from-kapes-cream to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-academy text-kapes-charcoal">
                {name ? `${name.split(' ')[0]}, h` : "H"}ere's the truth about your trips
              </h1>
              {school && (
                <p className="text-lg text-dragon-gray">{school}</p>
              )}
            </div>

            {/* Score Display */}
            <Card className={`p-8 text-center ${data.bgColor} border-2 ${data.borderColor}`}>
              <div className="flex items-center justify-center mb-4">
                <Icon className={`h-16 w-16 ${data.color}`} />
              </div>
              <h2 className={`text-2xl md:text-3xl font-academy mb-2 ${data.color}`}>{data.title}</h2>
              <div className="text-5xl md:text-6xl font-gothic text-kapes-charcoal mb-2">
                {percentage}%
              </div>
              <p className="text-sm text-dragon-gray mb-4">
                Score: {totalScore} out of {maxScore} possible points
              </p>
              <p className="text-lg max-w-2xl mx-auto text-kapes-charcoal">{data.message}</p>
            </Card>

            {/* Gap Analysis */}
            <Card className="p-6 md:p-8 border-2">
              <h3 className="text-xl font-academy text-kapes-charcoal mb-4">What Your Score Reveals</h3>
              <ul className="space-y-3">
                {data.gapAnalysis.map((gap, index) => (
                  <li key={index} className="flex gap-3">
                    <AlertTriangle className={`h-5 w-5 ${category === 'leader' ? 'text-impact-green' : 'text-kapes-orange'} flex-shrink-0 mt-0.5`} />
                    <span className="text-dragon-gray">{gap}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* The Solution Section */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-academy text-kapes-charcoal mb-2">
                  There's a <span className="text-kapes-orange">better way</span>
                </h3>
                <p className="text-dragon-gray max-w-2xl mx-auto">
                  Our programs are designed specifically to fill the gaps most school trips leave behind.
                  Students don't just visit—they create measurable, lasting change.
                </p>
              </div>

              {/* Program Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Seeds2Education */}
                <Card className="overflow-hidden border-2 hover:border-impact-green transition-colors">
                  <div className="aspect-video relative">
                    <img
                      src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg"
                      alt="Seeds2Education program - students building school garden"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-impact-green text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold">
                      <Utensils className="w-4 h-4" />
                      Food Security
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-academy text-kapes-charcoal">Seeds2Education</h4>
                    <p className="text-dragon-gray text-sm">
                      <strong className="text-kapes-charcoal">The gap it fills:</strong> Most trips leave nothing behind.
                      Seeds2Education builds permaculture gardens that provide <strong>200+ daily meals</strong> to hungry
                      schoolchildren—long after your students go home.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-impact-green/10 text-impact-green px-2 py-1 rounded-full flex items-center gap-1">
                        <Leaf className="w-3 h-3" /> Permaculture Skills
                      </span>
                      <span className="bg-impact-green/10 text-impact-green px-2 py-1 rounded-full flex items-center gap-1">
                        <Users className="w-3 h-3" /> Community Partnership
                      </span>
                    </div>
                    <div className="pt-2">
                      <Button className="w-full btn-action" asChild>
                        <Link to="/programs/seeds2education">
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Water Empowering Women */}
                <Card className="overflow-hidden border-2 hover:border-impact-rose transition-colors">
                  <div className="aspect-video relative">
                    <img
                      src="https://res.cloudinary.com/dng12bd0a/image/upload/v1747159769/Filip-C-Agoo-Everland-Marketing-Kenya-13983_atg3tn.jpg"
                      alt="Water Empowering Women program - women's cooperative"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-impact-rose text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold">
                      <Droplets className="w-4 h-4" />
                      Water Access
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-academy text-kapes-charcoal">Water Empowering Women</h4>
                    <p className="text-dragon-gray text-sm">
                      <strong className="text-kapes-charcoal">The gap it fills:</strong> Brief photo ops don't create relationships.
                      Students work <strong>alongside women-led cooperatives</strong> building water infrastructure—
                      empowering local leaders while freeing girls to attend school.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-impact-rose/10 text-impact-rose px-2 py-1 rounded-full flex items-center gap-1">
                        <Droplets className="w-3 h-3" /> Water Infrastructure
                      </span>
                      <span className="bg-impact-rose/10 text-impact-rose px-2 py-1 rounded-full flex items-center gap-1">
                        <Users className="w-3 h-3" /> Women's Empowerment
                      </span>
                    </div>
                    <div className="pt-2">
                      <Button className="w-full btn-action" asChild>
                        <Link to="/programs/empowering-women">
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Comparison Table */}
            <Card className="p-6 md:p-8 border-2">
              <h3 className="text-xl font-academy text-kapes-charcoal mb-6 text-center">
                What Sets Us Apart
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-dragon-gray border-b pb-2">Traditional Trips</h4>
                  <ul className="space-y-2 text-sm text-dragon-gray">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span>
                      Photos with local children
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span>
                      One-time donations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span>
                      No measurable outcomes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span>
                      "Soft skills" as impact
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span>
                      International tour operators
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-impact-green border-b border-impact-green pb-2">Our Programs</h4>
                  <ul className="space-y-2 text-sm text-kapes-charcoal">
                    <li className="flex items-start gap-2">
                      <span className="text-impact-green mt-0.5">✓</span>
                      Working alongside families for days
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-impact-green mt-0.5">✓</span>
                      Building lasting infrastructure
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-impact-green mt-0.5">✓</span>
                      Meals served, gardens built, lives changed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-impact-green mt-0.5">✓</span>
                      Real skills: permaculture, water systems
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-impact-green mt-0.5">✓</span>
                      Women-led local cooperatives
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* CTA Section */}
            <Card className="p-6 md:p-8 bg-kapes-cream border-2 border-kapes-orange">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-academy text-kapes-charcoal">Ready to Create Real Impact?</h3>
                <p className="text-lg text-dragon-gray max-w-xl mx-auto">
                  Book a 30-minute call to discover how {school ? school : "your school"} can transform
                  trips from photo opportunities into life-changing experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    size="lg"
                    className="btn-action"
                    onClick={handleBookConsultation}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule a Call
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-kapes-orange text-kapes-orange hover:bg-kapes-orange hover:text-white"
                    asChild
                  >
                    <Link to="/programs">
                      Explore All Programs
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Retake Option */}
            <div className="text-center pt-4">
              <Button
                variant="ghost"
                className="text-dragon-gray hover:text-kapes-charcoal"
                onClick={() => navigate('/scorecard/quiz')}
              >
                Retake Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScorecardResults;
