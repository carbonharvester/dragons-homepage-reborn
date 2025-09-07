import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { summerAbroad } from '@/data/programsData';
import ProgramCard from '@/components/programs/ProgramCard';
import { Button } from '@/components/ui/button';
import WaitingListForm from '@/components/WaitingListForm';
import { Calendar, Users, MapPin } from "lucide-react";
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';

const SummerAbroad = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Summer Abroad Programs" description="Immersive summer programs in Kenya for students looking to expand their horizons through cultural experiences and educational adventures." keywords="summer abroad, student travel, Kenya, cultural immersion, educational travel, summer programs" />
      <Header />
      <main>
        <section className="relative h-[70vh] min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dng12bd0a/image/upload/v1747126747/Klein-08863_ef3b4d.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="container-wide relative z-10 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 hero-heading">Summer Abroad Programs</h1>
              <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">Unforgettable 3-4 week summer experiences for ages 17–21, combining adventure, learning, and positive impact in Africa's stunning landscapes.</p>
              
              {/* Schedule Consultation removed for student-focused programs */}
            </div>
          </div>
        </section>

        {/* Navigation and content in a continuous section */}
        <div className="container-wide py-8">
          <ParentPageNavigation parentPath="/programs" parentName="Programs" />
        </div>

        {/* Enhanced Introduction Section */}
        <section className="py-12 bg-dragon-beige">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl md:text-3xl font-academy text-dragon-dark mb-4 text-center">
                Transform Your Summer into an Adventure of a Lifetime
              </h2>
              
              <p className="mb-6 text-dragon-gray">
                Picture waking up to wildlife calls, planting crops with farmers by day, and making ugali with locals by night—while developing skills that last a lifetime. Our summer programs aren't just trips—they're transformative journeys that challenge, inspire, and change how you see the world.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-dragon-beige p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dragon mb-3">Not Your Average Summer Break</h3>
                  <p>
                    Forget tourist traps. You'll dive into culture—living with communities, learning from mentors, and tackling projects with real impact. Whether you're farming sustainably with locals or capturing wildlife conservation through photography, every day brings new adventures and discoveries.
                  </p>
                </div>
                
                <div className="bg-dragon-beige p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dragon mb-3">Skills That Stand Out</h3>
                  <p>
                    Universities and employers want initiative, cross-cultural competence, and problem-solving—skills you'll gain here. You'll build confidence speaking in groups, adapt to new challenges, and return with a portfolio, leadership experience, and stories that make your college apps and résumés shine.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-dragon-beige p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dragon mb-3">Friends Across Continents</h3>
                  <p>
                    The bonds you'll form during these shared experiences last beyond summer. You'll connect with peers from around the world and build lasting friendships with community members—relationships our alumni often carry into university and beyond.
                  </p>
                </div>
                
                <div className="bg-dragon-beige p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dragon mb-3">Safety & Support</h3>
                  <p>
                    Adventure doesn't mean risk. With 24/7 support, guides trained in first aid, vetted homestays, and access to medical facilities in urban centers like Nairobi, you'll push your boundaries safely. Comprehensive travel insurance with emergency evacuation is required.
                  </p>
                </div>
              </div>
              
              {/* Student Testimonial */}
              
              
              <div className="text-center">
                <p className="font-bold text-dragon-dark text-lg mb-4">
                  Ready to Make This Summer Count?
                </p>
                <p className="text-dragon-gray mb-4">
                  Don't miss out—spots are limited! Explore our programs and take the first step toward an experience that will change how you see yourself—and the world.
                </p>
                <WaitingListForm>
                  <Button className="btn-primary">
                    Apply Now
                  </Button>
                </WaitingListForm>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-heading font-academy">Our Summer Programs</h2>
              <p className="section-subheading">
                Explore our diverse summer programs designed to provide transformative experiences in stunning landscapes.
              </p>
            </div>
            
            {/* Display Summer Abroad Programs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {summerAbroad.map((program, index) => (
                <div key={index} className="h-full">
                  <ProgramCard program={program} />
                </div>
              ))}
            </div>

            {/* A Day in the Life Section */}
            

            {/* Why Choose Section */}
            <div className="bg-dragon-beige rounded-lg p-8 text-center">
              <h3 className="text-2xl font-academy text-dragon-dark mb-4">Why Choose Our Summer Programs?</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4">
                  <h4 className="text-xl font-bold text-dragon mb-2">Experiential Learning</h4>
                  <p>Learn through hands-on projects that make a real difference, building skills you'll use for life.</p>
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-bold text-dragon mb-2">Cultural Immersion</h4>
                  <p>Engage with communities and traditions in meaningful, respectful ways, gaining a global perspective.</p>
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-bold text-dragon mb-2">Professional Guidance</h4>
                  <p>Work with experts in conservation, education, and creative media, guiding you to create impactful work.</p>
                </div>
              </div>
              <WaitingListForm>
                <Button className="bg-dragon-yellow text-dragon-dark hover:bg-amber-400">
                  Apply Now
                </Button>
              </WaitingListForm>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SummerAbroad;
