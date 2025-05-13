
import React from 'react';

interface TripHeroProps {
  title: string;
  subtitle: string;
  category: string;
  imagePath: string;
}

const TripHero = ({ title, subtitle, category, imagePath }: TripHeroProps) => {
  return (
    <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
      {/* Black background behind the image */}
      <div className="absolute inset-0 bg-black">
        {/* Image with controlled opacity */}
        <div className="absolute inset-0 opacity-80">
          <img 
            src={imagePath} 
            alt={`${title} project`} 
            className="w-full h-full object-cover" 
          />
        </div>
        {/* Enhanced gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      </div>
      <div className="container relative z-10 h-full flex flex-col justify-center text-white pt-16">
        <div className="mb-8">
          <div className="inline-block bg-dragon px-4 py-1 rounded-full text-sm font-medium">
            {category}
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-academy-bold hero-heading mb-8">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-12">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default TripHero;
