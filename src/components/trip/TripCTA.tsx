
import React from 'react';
import { Button } from "@/components/ui/button";
import CalendlyEmbed from '../CalendlyEmbed';

interface TripCTAProps {
  isSchoolTrip?: boolean;
}

const TripCTA = ({
  isSchoolTrip = true
}: TripCTAProps) => {
  return (
    <div className="bg-dragon text-white rounded-lg p-6 md:p-12 text-center mb-16 mt-20 w-full">
      <h2 className="text-2xl md:text-4xl font-academy font-bold mb-4">
        {isSchoolTrip ? "Ready to Plan Your School Trip?" : "Ready to Make an Impact?"}
      </h2>
      <p className="text-base md:text-lg max-w-3xl mx-auto mb-6">
        {isSchoolTrip 
          ? "Contact our team today to discuss how we can create a transformative educational experience tailored to your school's curriculum, objectives, and schedule." 
          : "Join us on this transformative journey to address real-world challenges through sustainable practices while providing your students with an unforgettable educational experience."}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="secondary" size="lg" className="bg-dragon-yellow text-dragon-dark hover:bg-amber-400" asChild>
          <a href="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone" target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
        </Button>
      </div>
    </div>
  );
};

export default TripCTA;
