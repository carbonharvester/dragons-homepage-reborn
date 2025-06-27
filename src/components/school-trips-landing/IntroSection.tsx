
import React from 'react';
import { Button } from '@/components/ui/button';
import CalendlyEmbed from '@/components/CalendlyEmbed';

const IntroSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-pattern-extra-subtle">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-dragon-dark">
            Transform Your Students with Educational School Trips to Kenya
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-dragon-gray max-w-3xl mx-auto leading-relaxed">
            Immersive, curriculum-aligned programs that combine cultural learning, community service, and wildlife conservation. Safe, impactful, and designed for schools worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <CalendlyEmbed 
              url="https://calendly.com/kapesuniforms/discoverymeeting"
              text="Schedule Free Consultation"
              variant="secondary"
              size="lg"
              className="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90 shadow-lg min-h-[48px] touch-manipulation w-full sm:w-auto"
            />
            <Button 
              variant="outline" 
              size="lg" 
              className="border-dragon text-dragon hover:bg-dragon hover:text-white transition-all duration-300 min-h-[48px] touch-manipulation w-full sm:w-auto" 
              asChild
            >
              <a href="#programs">View Our Programs</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
