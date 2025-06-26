
import React from 'react';
import { Button } from '@/components/ui/button';
import CalendlyEmbed from '@/components/CalendlyEmbed';

const HeroSection = () => {
  // Responsive image URLs for different screen sizes
  const heroImageBase = 'https://res.cloudinary.com/dng12bd0a/image/upload';
  const heroImageId = 'v1750710691/IMG_2878_nkkymi_uvn1pi.jpg';
  
  // Responsive image transformations
  const mobileImage = `${heroImageBase}/w_768,h_768,c_fill,f_auto,q_auto/${heroImageId}`;
  const tabletImage = `${heroImageBase}/w_1024,h_768,c_fill,f_auto,q_auto/${heroImageId}`;
  const desktopImage = `${heroImageBase}/w_1920,h_1080,c_fill,f_auto,q_auto/${heroImageId}`;

  return (
    <section className="relative h-[100vh] min-h-[600px] max-h-[800px] flex items-center">
      {/* Black background behind the image */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Responsive hero image with optimized loading */}
        <picture className="absolute inset-0">
          {/* Mobile image */}
          <source 
            media="(max-width: 767px)" 
            srcSet={mobileImage}
          />
          {/* Tablet image */}
          <source 
            media="(max-width: 1023px)" 
            srcSet={tabletImage}
          />
          {/* Desktop image */}
          <source 
            media="(min-width: 1024px)" 
            srcSet={desktopImage}
          />
          {/* Fallback image with optimized loading */}
          <img 
            src={desktopImage}
            alt="Students on educational trip in Kenya" 
            className="w-full h-full object-cover opacity-80"
            width="1920" 
            height="1080" 
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </picture>
        
        {/* Enhanced overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
      </div>
      
      <div className="relative z-10 container-wide text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Transform Your Students with Educational School Trips to Kenya
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
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
              className="bg-transparent border-white text-white hover:bg-white hover:text-dragon transition-all duration-300 min-h-[48px] touch-manipulation w-full sm:w-auto" 
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

export default HeroSection;
