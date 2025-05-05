
import React from 'react';

interface HeroSectionProps {
  imgTimestamp: number;
}

const HeroSection = ({ imgTimestamp }: HeroSectionProps) => {
  return (
    <section className="relative bg-cover bg-center py-32" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&t=${imgTimestamp}')`
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container-wide relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-heading">Multi-Year Curriculum</h1>
          <p className="text-xl mb-8">
            A progressive educational journey that builds skills, confidence, and global citizenship over three transformative years.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
