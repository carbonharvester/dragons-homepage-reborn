
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";

const ItineraryCTA = () => {
  return (
    <div className="mt-12 text-center">
      <p className="text-dragon-gray mb-6 max-w-2xl mx-auto">
        Our itinerary is carefully crafted to provide a balance of learning, exploration, and community impact.
        Each day is designed to build your skills while immersing you in Kenya's diverse environments and cultures.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="btn-primary font-gothic uppercase tracking-wide text-lg" asChild>
          <Link to="/apply">Apply Now</Link>
        </Button>
        <CalendlyEmbed 
          url="https://calendly.com/kapesuniforms/discoverymeeting"
          text="Schedule Consultation"
          variant="outline"
          className="border-dragon text-dragon hover:bg-dragon hover:text-white font-gothic uppercase tracking-wide"
        />
      </div>
    </div>
  );
};

export default ItineraryCTA;
