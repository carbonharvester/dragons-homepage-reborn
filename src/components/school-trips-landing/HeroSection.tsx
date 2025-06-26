
import React from 'react';
import { Button } from '@/components/ui/button';
import CalendlyEmbed from '@/components/CalendlyEmbed';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      {/* Black background behind the image */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Hero image with controlled opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80" 
          style={{backgroundImage: 'url(https://res.cloudinary.com/dng12bd0a/image/upload/v1750710691/IMG_2878_nkkymi_uvn1pi.jpg)'}}
        >
          {/* Hidden image for SEO with proper attributes */}
          <img 
            src="https://res.cloudinary.com/dng12bd0a/image/upload/v1750710691/IMG_2878_nkkymi_uvn1pi.jpg" 
            alt="Students on educational trip in Kenya" 
            className="hidden" 
            width="1920" 
            height="1080" 
            fetchPriority="high"
          />
        </div>
        {/* Enhanced overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 container-wide text-white">
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
