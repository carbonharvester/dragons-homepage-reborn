
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Hero = () => {
  const location = useLocation();
  const isCapturingKenyaPage = location.pathname === "/programs/capturing-kenya";
  
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
      {/* Black background behind the image */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Image with controlled opacity */}
        <div className="absolute inset-0 bg-[url('https://cdn.shopify.com/s/files/1/0777/3326/5724/files/klein-500-2_1.jpg?v=1747050056')] bg-cover bg-center opacity-80"></div>
        {/* Enhanced overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container-wide relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="hero-heading block">Transformative Educational</span>
            <span className="block mt-2 text-dragon-yellow">Travel Experiences</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">Cultural immersion, wilderness exploration, and sustainable projects that empower communities and transform education</p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary text-lg h-12 w-full sm:w-auto" onClick={scrollToPrograms}>Explore Programs</Button>
            <Button className="bg-white text-dragon hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg h-12 w-full sm:w-auto" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
