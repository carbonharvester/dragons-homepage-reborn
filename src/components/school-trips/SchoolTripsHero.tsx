
import React from 'react';
import { Button } from "@/components/ui/button";

const SchoolTripsHero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center">
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container-wide relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 hero-heading">School Trips</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
            Transformative educational journeys designed for schools worldwide, offering students genuine cultural immersion, meaningful community engagement, and life-changing experiences beyond traditional tourism.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-dragon hover:bg-dragon-dark text-white" asChild>
              <a href="#programs">Schedule Consultation </a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dragon" asChild>
              
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolTripsHero;
