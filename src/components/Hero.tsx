
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs');
    if (programsSection) {
      programsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=1500&auto=format')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container-wide relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Authentic Immersion Programs
            <span className="block mt-2 text-dragon-yellow">For Future Changmakers</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">Experience transformative education through cultural immersion, wilderness exploration, and authentic engagement in Africa</p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary text-lg" onClick={scrollToPrograms}>Find Your Program</Button>
            <Button className="bg-white text-dragon hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
