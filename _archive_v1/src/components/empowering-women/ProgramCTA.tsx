
import React from 'react';
import CalendlyEmbed from '@/components/CalendlyEmbed';

const ProgramCTA = () => {
  return (
    <div className="border-t border-gray-200 pt-8 mt-8 text-center">
      <h2 className="text-2xl font-bold text-dragon-dark mb-6">Ready to Make a Difference?</h2>
      <div className="flex justify-center">
        <CalendlyEmbed
          url="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
          text="Schedule a Consultation"
          variant="default"
          className="bg-dragon-yellow text-dragon-dark hover:bg-amber-400"
        />
      </div>
    </div>
  );
};

export default ProgramCTA;
