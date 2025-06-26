
import React from 'react';
import Testimonials from '@/components/Testimonials';

const TestimonialsSection = () => {
  return (
    <section className="bg-dragon">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="text-center py-10 sm:py-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            What Students Think?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Hear directly from students about their life-changing experiences and personal growth during their time in Kenya.
          </p>
        </div>
      </div>
      <div className="overflow-hidden">
        <Testimonials />
      </div>
    </section>
  );
};

export default TestimonialsSection;
