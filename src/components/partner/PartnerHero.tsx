
import React from 'react';
import { Button } from "@/components/ui/button";

const PartnerHero = () => {
  return (
    <section className="bg-gradient-to-r from-dragon-dark to-dragon py-20 md:py-32">
      <div className="container-wide text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 hero-heading">
          Partner With Kapes Adventures
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-10">
          Expand your offering with purpose-driven travel experiences while sharing in the success through our generous profit-sharing model.
        </p>
        <Button 
          className="bg-dragon-yellow hover:bg-amber-400 text-dragon-dark px-8 py-6 text-lg rounded-md"
          onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Become a Partner
        </Button>
      </div>
    </section>
  );
};

export default PartnerHero;
