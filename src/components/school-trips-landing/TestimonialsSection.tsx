
import React from 'react';
import Testimonials from '@/components/Testimonials';

const TestimonialsSection = () => {
  return (
    <div className="bg-dragon">
      <div className="container-wide">
        <div className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Students Think?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hear directly from students about their life-changing experiences and personal growth during their time in Kenya.
          </p>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default TestimonialsSection;
