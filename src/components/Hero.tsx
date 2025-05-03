
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Users, DollarSign } from "lucide-react";

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
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=1500&auto=format')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container-wide relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="hero-heading block">Transformative Educational</span>
            <span className="block mt-2 text-dragon-yellow">Travel Experiences</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">School trips, summer programs, and multi-year curriculums that combine cultural immersion, wilderness exploration, and authentic engagement in Africa</p>
          
          {/* Program Details - Only show on Capturing Kenya page */}
          {isCapturingKenyaPage && (
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-md">
                <Users className="h-5 w-5" />
                <div>
                  <span className="block text-sm">Group Size</span>
                  <span className="font-medium">12 Students / 3 Instructors</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-md">
                <DollarSign className="h-5 w-5" />
                <div>
                  <span className="block text-sm">Tuition</span>
                  <span className="font-medium">$8,750 <span className="text-sm font-normal opacity-90">plus airfare & insurance</span></span>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary text-lg" onClick={scrollToPrograms}>Explore Programs</Button>
            <Button className="bg-white text-dragon hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
