
import React from 'react';
import { Button } from "@/components/ui/button";

const SchoolTripsHero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center">
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      
      <div className="container-wide relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 hero-heading animate-fade-in">School Trips</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl animate-fade-in" style={{animationDelay: "0.2s"}}>
            Inspiring journeys that take students beyond the classroom walls to engage with global communities and develop as conscious global citizens.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button className="bg-dragon hover:bg-dragon-dark text-white shadow-lg" asChild>
              <a href="#programs">Schedule Consultation</a>
            </Button>
            <Button variant="outline" className="bg-white text-dragon border-white hover:bg-transparent hover:text-white hover:border-white transition-colors" asChild>
              <a href="#programs">Explore Our Trips</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolTripsHero;
