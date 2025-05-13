
import React from 'react';
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";

const EducatorTripsHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center">
      {/* Black background behind the image */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Image with controlled opacity */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070')] bg-cover bg-center opacity-80"></div>
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      <div className="container-wide relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 hero-heading animate-fade-in">Educator Trips</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>Professional development journeys that expand teaching perspectives, inspire educational innovation, and build global classroom connections through immersive experiences in Kenya.</p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <Button variant="outline" className="bg-white text-dragon border-white hover:bg-transparent hover:text-white hover:border-white transition-colors" asChild>
              <a href="#programs">Explore Our Programs</a>
            </Button>
            <Button className="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90 shadow-lg" asChild>
              <CalendlyEmbed 
                url="https://calendly.com/kapesuniforms/discoverymeeting"
                text="Schedule a Consultation"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducatorTripsHero;
