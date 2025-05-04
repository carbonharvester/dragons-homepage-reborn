import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { summerAbroad } from '@/data/programsData';
import ProgramCard from '@/components/programs/ProgramCard';
import { Button } from '@/components/ui/button';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { Calendar, Users, MapPin } from "lucide-react";
const SummerAbroad = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <SEO title="Summer Abroad Programs" description="Immersive summer programs in Kenya for students looking to expand their horizons through cultural experiences and educational adventures." keywords="summer abroad, student travel, Kenya, cultural immersion, educational travel, summer programs" />
      <Header />
      <main>
        <section className="relative h-[70vh] min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1513977055326-8ae6272d90a7?q=80&w=2070&auto=format')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="container-wide relative z-10 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 hero-heading">Summer Abroad Programs</h1>
              <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
                Unforgettable summer experiences that combine adventure, learning, and positive impact in the beautiful landscapes of Africa.
              </p>
              
              {/* Program Details - Similar to Capturing Kenya */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Calendar className="h-5 w-5" />
                  <span>3-4 Week Programs</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Users className="h-5 w-5" />
                  <span>Ages 17-21</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <MapPin className="h-5 w-5" />
                  <span>Kenya</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <CalendlyEmbed url="https://calendly.com/kapesuniforms/discoverymeeting" text="Schedule a Consultation" className="btn-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Introduction Section */}
        <section className="py-12 bg-dragon-beige">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl md:text-3xl font-academy text-dragon-dark mb-4 text-center">
                Transform Your Summer into an Adventure of a Lifetime
              </h2>
              
              <p className="mb-6 text-dragon-gray">
                Imagine waking up to the sounds of Kenya's wildlife, spending your days working alongside local communities on meaningful projects, and developing skills that will last a lifetime. Our summer programs aren't just trips—they're transformative journeys designed to challenge you, inspire you, and change the way you see the world.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-dragon-beige p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dragon mb-3">Not Your Average Summer Break</h3>
                  <p>
                    Forget about typical tourist experiences. You'll be fully immersed in Kenyan culture—living in local communities, learning from expert mentors, and contributing to projects with real-world impact. Whether you're helping implement sustainable farming techniques or documenting wildlife conservation efforts through photography, every day brings new challenges and discoveries.
                  </p>
                </div>
                
                <div className="bg-dragon-beige p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dragon mb-3">Skills That Stand Out</h3>
                  <p>
                    Universities and employers are looking for more than just good grades. They want to see initiative, cross-cultural competence, and real-world problem-solving skills—exactly what you'll develop during our programs. You'll return home with a portfolio of work, leadership experience, and stories that will make your college applications and résumés truly stand out.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-dragon-beige p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dragon mb-3">Friends Across Continents</h3>
                  <p>
                    The bonds you'll form during these intense shared experiences don't end when the summer does. You'll connect with like-minded peers from around the world and build relationships with Kenyan community members that often last for years. Many of our alumni maintain these global friendships well into their university years and beyond.
                  </p>
                </div>
                
                <div className="bg-dragon-beige p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dragon mb-3">Safety & Support</h3>
                  <p>
                    Adventure doesn't mean unnecessary risk. Our programs feature comprehensive safety protocols, 24/7 staff support, and carefully vetted accommodations. Parents can rest easy knowing that while you're pushing your boundaries, you're doing so within a framework designed with your wellbeing as the top priority.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="font-bold text-dragon-dark text-lg mb-4">
                  Ready to make this summer count? Explore our programs below and take the first step toward an experience that will change how you see yourself—and the world.
                </p>
                <Button className="btn-primary" asChild>
                  <a href="https://form.typeform.com/to/rtxmvp4L" target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-heading font-academy">Our Summer Programs</h2>
              <p className="section-subheading">
                Explore our diverse range of summer programs designed to provide transformative experiences
                for students in the beautiful landscapes of Kenya.
              </p>
            </div>
            
            {/* Display Summer Abroad Programs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {summerAbroad.map((program, index) => <ProgramCard key={index} program={program} />)}
            </div>

            <div className="bg-dragon-beige rounded-lg p-8 text-center">
              <h3 className="text-2xl font-academy text-dragon-dark mb-4">Why Choose Our Summer Programs?</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4">
                  <h4 className="text-xl font-bold text-dragon mb-2">Experiential Learning</h4>
                  <p>Learn through direct experiences and hands-on projects that make a real difference.</p>
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-bold text-dragon mb-2">Cultural Immersion</h4>
                  <p>Engage with local communities and traditions in meaningful and respectful ways.</p>
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-bold text-dragon mb-2">Professional Guidance</h4>
                  <p>Work alongside experts in fields like conservation, education, and creative media.</p>
                </div>
              </div>
              <Button className="bg-dragon hover:bg-dragon-dark text-white" asChild>
                <a href="https://form.typeform.com/to/rtxmvp4L" target="_blank" rel="noopener noreferrer">
                  Join Our Next Adventure
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default SummerAbroad;