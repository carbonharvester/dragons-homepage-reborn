
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

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Summer Abroad Programs"
        description="Immersive summer programs in Kenya for students looking to expand their horizons through cultural experiences and educational adventures."
        keywords="summer abroad, student travel, Kenya, cultural immersion, educational travel, summer programs"
      />
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
                Unforgettable summer experiences that combine adventure, learning, and positive impact in the beautiful landscapes of Kenya.
              </p>
              
              {/* Program Details - Similar to Capturing Kenya */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Calendar className="h-5 w-5" />
                  <span>3-4 Week Programs</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Users className="h-5 w-5" />
                  <span>Ages 16-20</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <MapPin className="h-5 w-5" />
                  <span>Kenya</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <CalendlyEmbed 
                  url="https://calendly.com/kapesuniforms/discoverymeeting"
                  text="Schedule a Consultation"
                  className="btn-primary"
                />
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
              {summerAbroad.map((program, index) => (
                <ProgramCard key={index} program={program} />
              ))}
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
              <Button className="btn-primary" asChild>
                <a 
                  href="https://form.typeform.com/to/rtxmvp4L" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SummerAbroad;
