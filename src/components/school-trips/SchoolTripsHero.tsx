
import React from 'react';
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";

const SchoolTripsHero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center">
      <div className="absolute inset-0 z-0 bg-[url('https://cdn.shopify.com/s/files/1/0777/3326/5724/files/A7404093_2.jpg?v=1746502728')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      
      <div className="container-wide relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 hero-heading animate-fade-in">School Trips</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>Inspiring 7–8-day journeys that take students beyond the classroom to engage with communities and grow as global citizens, designed for schools worldwide.</p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{
            animationDelay: "0.4s"
          }}>
            <Button variant="outline" className="bg-white text-dragon border-white hover:bg-transparent hover:text-white hover:border-white transition-colors" asChild>
              <a href="#programs">Explore Our Trips</a>
            </Button>
            <Button className="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90 shadow-lg" asChild>
              <a href="#programs">Schedule a Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolTripsHero;
