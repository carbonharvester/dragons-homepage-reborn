
import React from 'react';
import CalendlyEmbed from '@/components/CalendlyEmbed';

const ProgramCTA = () => {
  return (
    <div className="border-t border-gray-200 pt-8 mt-8">
      <h2 className="text-2xl font-bold text-dragon-dark mb-6">Ready to Make a Difference?</h2>
      <div className="flex flex-wrap gap-4">
        <CalendlyEmbed
          url="https://calendly.com/kapesuniforms/discoverymeeting"
          text="Schedule a Consultation"
          variant="outline"
          className="border-dragon text-dragon hover:bg-dragon hover:text-white"
        />
      </div>
    </div>
  );
};

export default ProgramCTA;
