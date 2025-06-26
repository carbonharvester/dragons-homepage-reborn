
import React from 'react';
import { Button } from '@/components/ui/button';
import CalendlyEmbed from '@/components/CalendlyEmbed';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-dragon to-dragon-dark text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container-wide py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transform Your Students with Educational School Trips to Kenya
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Immersive, curriculum-aligned programs that combine cultural learning, community service, and wildlife conservation. Safe, impactful, and designed for schools worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CalendlyEmbed 
              url="https://calendly.com/kapesuniforms/discoverymeeting"
              text="Schedule Free Consultation"
              variant="secondary"
              size="lg"
              className="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90 shadow-lg"
            />
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-dragon" asChild>
              <a href="#programs">View Our Programs</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
