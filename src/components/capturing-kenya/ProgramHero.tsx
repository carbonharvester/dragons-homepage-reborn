
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";

const ProgramHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center">
      {/* Black background behind the image */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Image with controlled opacity */}
        <div className="absolute inset-0 bg-[url('https://cdn.shopify.com/s/files/1/0777/3326/5724/files/KleinNettoh--2_1.jpg?v=1747112188')] bg-cover bg-center opacity-80"></div>
        {/* Enhanced overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container-wide relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 hero-heading">Capturing Kenya</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
            A 4-week creative adventure to photograph and film Kenya's stunning landscapes, 
            wildlife, and cultures while developing professional skills.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary" asChild>
              <Link to="/programs/capturing-kenya/itinerary">Explore Full Itinerary</Link>
            </Button>
            <CalendlyEmbed 
              url="https://calendly.com/kapesuniforms/discoverymeeting"
              text="Schedule Consultation"
              variant="outline"
              className="bg-white text-dragon hover:bg-gray-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHero;
