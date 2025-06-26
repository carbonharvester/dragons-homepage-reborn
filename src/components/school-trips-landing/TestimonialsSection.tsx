
import React from 'react';
import Testimonials from '@/components/Testimonials';

const TestimonialsSection = () => {
  return (
    <section className="bg-dragon">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="text-center py-6 sm:py-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            What Students Think?
          </h2>
        </div>
      </div>
      <div className="overflow-hidden">
        <Testimonials />
      </div>
    </section>
  );
};

export default TestimonialsSection;
