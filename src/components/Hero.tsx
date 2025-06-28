
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import useScrollVideo from '@/hooks/useScrollVideo';

const Hero = () => {
  const location = useLocation();
  const isCapturingKenyaPage = location.pathname === "/programs/capturing-kenya";
  const { videoRef } = useScrollVideo({ 
    startOffset: 0, 
    endOffset: window.innerHeight * 1.5 
  });
  
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
      {/* Black background behind the video */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Scroll-controlled video */}
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          muted
          playsInline
          preload="metadata"
        >
          <source src="https://res.cloudinary.com/dng12bd0a/video/upload/v1751139310/202506281908_zwdanm.mp4" type="video/mp4" />
        </video>
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
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">Cultural immersion, wilderness exploration, and sustainable projects that empower communities and transforms lives</p>
          
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
