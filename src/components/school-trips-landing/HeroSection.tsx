
import React from 'react';

const HeroSection = () => {
  // Responsive image URLs for different screen sizes
  const heroImageBase = 'https://res.cloudinary.com/dng12bd0a/image/upload';
  const heroImageId = 'v1750710691/IMG_2878_nkkymi_uvn1pi.jpg';
  
  // Responsive image transformations
  const mobileImage = `${heroImageBase}/w_768,h_768,c_fill,f_auto,q_auto/${heroImageId}`;
  const tabletImage = `${heroImageBase}/w_1024,h_768,c_fill,f_auto,q_auto/${heroImageId}`;
  const desktopImage = `${heroImageBase}/w_1920,h_1080,c_fill,f_auto,q_auto/${heroImageId}`;

  return (
    <section className="relative h-[100vh] min-h-[600px] max-h-[800px]">
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
            className="w-full h-full object-cover"
            width="1920" 
            height="1080" 
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
    </section>
  );
};

export default HeroSection;
