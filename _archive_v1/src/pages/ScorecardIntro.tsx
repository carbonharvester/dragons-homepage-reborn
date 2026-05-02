import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEO from "@/components/SEO";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";

const countries = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Jordan",
  "Lebanon",
  "Egypt",
  "Kenya",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Ethiopia",
  "South Africa",
  "Nigeria",
  "Ghana",
  "Morocco",
  "India",
  "Pakistan",
  "Bangladesh",
  "Singapore",
  "Malaysia",
  "Indonesia",
  "Thailand",
  "Vietnam",
  "Philippines",
  "China",
  "Hong Kong",
  "Japan",
  "South Korea",
  "Australia",
  "New Zealand",
  "United Kingdom",
  "Germany",
  "France",
  "Netherlands",
  "Switzerland",
  "Spain",
  "Italy",
  "United States",
  "Canada",
  "Mexico",
  "Brazil",
  "Other"
];

const ScorecardIntro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    school: "",
    country: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to quiz with user data
    navigate('/scorecard/quiz', { state: { userData: formData } });
  };

  return (
    <>
      <SEO
        title="Start Your Assessment | School Trip Impact Scorecard"
        description="Take our 5-minute assessment to discover if your school trips are creating real social impact."
      />

      <div className="min-h-screen bg-gradient-to-b from-kapes-cream to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-kapes-orange/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-kapes-orange flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  5 Minutes • 20 Questions
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-academy text-kapes-charcoal mb-4">
                Before we begin...
              </h1>
              <p className="text-lg text-dragon-gray">
                Tell us a bit about yourself so we can personalize your results
                and send you actionable recommendations.
              </p>
            </div>

            {/* Form Card */}
            <Card className="p-6 md:p-8 border-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-kapes-charcoal font-medium">
                    Your Name <span className="text-kapes-orange">*</span>
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="border-2 focus:border-kapes-orange"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title" className="text-kapes-charcoal font-medium">
                    Your Title/Role <span className="text-kapes-orange">*</span>
                  </Label>
                  <Input
                    id="title"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Head of Service Learning, Trip Coordinator, Principal..."
                    className="border-2 focus:border-kapes-orange"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="school" className="text-kapes-charcoal font-medium">
                    School Name <span className="text-kapes-orange">*</span>
                  </Label>
                  <Input
                    id="school"
                    required
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    placeholder="International School of..."
                    className="border-2 focus:border-kapes-orange"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country" className="text-kapes-charcoal font-medium">
                    Country <span className="text-kapes-orange">*</span>
                  </Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => setFormData({ ...formData, country: value })}
                    required
                  >
                    <SelectTrigger className="border-2 focus:border-kapes-orange">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-kapes-charcoal font-medium">
                    Email Address <span className="text-kapes-orange">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane.smith@school.edu"
                    className="border-2 focus:border-kapes-orange"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-kapes-charcoal font-medium">
                    Phone Number <span className="text-dragon-gray text-sm font-normal">(Optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="border-2 focus:border-kapes-orange"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-action text-lg py-6 mt-6"
                >
                  Start the Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              {/* Trust indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-dragon-gray">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-impact-green" />
                    <span>Your data is secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-impact-green" />
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-impact-green" />
                    <span>Instant results</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* What to expect */}
            <div className="mt-8 text-center">
              <p className="text-sm text-dragon-gray">
                You'll answer 20 questions about your current school trip program.
                At the end, you'll receive a personalized score and recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScorecardIntro;
