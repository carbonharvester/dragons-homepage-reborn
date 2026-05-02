import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, MapPin, Gift, Calendar } from "lucide-react";

const StudentPortal = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="Student Portal | Kapes Adventures"
        description="Join thousands of students on life-changing adventures to Kenya. Browse trips, register your interest, and earn rewards."
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-dragon to-dragon-dark text-white py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Your Adventure Starts Here
              </h1>
              <p className="text-xl text-white/90">
                Discover life-changing educational trips to Kenya. Register your interest, 
                invite your friends, and earn rewards along the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg"
                  variant="secondary"
                  onClick={() => navigate("/student/signup")}
                >
                  Create Account
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                  onClick={() => navigate("/student/login")}
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dragon-dark mb-4">
                How the Student Portal Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Four simple steps to your adventure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-dragon/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-dragon" />
                  </div>
                  <CardTitle className="text-lg">1. Sign Up</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Create your account using your school enrollment code. 
                    Get your unique referral code instantly.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-dragon/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-dragon" />
                  </div>
                  <CardTitle className="text-lg">2. Browse Trips</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Explore available trips for your school. View detailed 
                    itineraries, dates, and what's included.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-dragon/10 flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-dragon" />
                  </div>
                  <CardTitle className="text-lg">3. Register Interest</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Click "I'm Interested" on trips you want to join. 
                    We'll notify your parents to complete the booking.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-dragon/10 flex items-center justify-center mb-4">
                    <Gift className="w-6 h-6 text-dragon" />
                  </div>
                  <CardTitle className="text-lg">4. Earn Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Share your referral code with friends. Both of you 
                    earn AED 250 credit when they sign up!
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-dragon-beige/20">
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-dragon-dark">
                  Why Join the Student Portal?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-dragon flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dragon-dark mb-1">
                        Early Access to Trips
                      </h3>
                      <p className="text-muted-foreground">
                        Be the first to know when new adventures open for registration
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-dragon flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dragon-dark mb-1">
                        Referral Rewards Program
                      </h3>
                      <p className="text-muted-foreground">
                        Earn AED 250 for every friend you refer who signs up
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-dragon flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dragon-dark mb-1">
                        Track Your Journey
                      </h3>
                      <p className="text-muted-foreground">
                        Monitor your interests, bookings, and upcoming adventures in one place
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-dragon flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dragon-dark mb-1">
                        Easy Parent Coordination
                      </h3>
                      <p className="text-muted-foreground">
                        We handle parent notifications and make booking seamless for families
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-gradient-to-br from-dragon to-dragon-dark text-white border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Ready to Start?</CardTitle>
                  <CardDescription className="text-white/80">
                    Join hundreds of students already exploring Kenya
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-white/90">
                      ✓ Browse school-approved trips
                    </p>
                    <p className="text-sm text-white/90">
                      ✓ Register interest in seconds
                    </p>
                    <p className="text-sm text-white/90">
                      ✓ Earn credits by sharing
                    </p>
                  </div>
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="w-full"
                    onClick={() => navigate("/student/signup")}
                  >
                    Create Free Account
                  </Button>
                  <p className="text-xs text-white/70 text-center">
                    You'll need your school enrollment code to sign up
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-dragon-dark">
              Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact your school administrator for your enrollment code, 
              or reach out to us directly for support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate("/faq")}
              >
                View FAQ
              </Button>
              <Button
                size="lg"
                onClick={() => window.open("https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone", "_blank")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default StudentPortal;
