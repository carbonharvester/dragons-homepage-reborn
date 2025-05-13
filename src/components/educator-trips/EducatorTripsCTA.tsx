
import React from 'react';
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";

const EducatorTripsCTA = () => {
  return (
    <div className="bg-dragon rounded-lg p-8 md:p-12 text-white text-center mb-16">
      <h2 className="text-3xl font-academy mb-4">Ready to Enhance Your Teaching?</h2>
      <p className="max-w-2xl mx-auto mb-6">
        Speak with our education specialists to learn how our educator trips can align with your professional development goals and transform your teaching practice.
      </p>
      <div className="flex justify-center">
        <Button className="bg-white text-dragon hover:bg-dragon-beige hover:text-dragon transition-colors" asChild>
          <CalendlyEmbed 
            url="https://calendly.com/kapesuniforms/discoverymeeting"
            text="Schedule a Consultation"
          />
        </Button>
      </div>
    </div>
  );
};

export default EducatorTripsCTA;
