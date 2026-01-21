
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CalendlyEmbed from '@/components/CalendlyEmbed';

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-dragon to-dragon-dark text-white">
      <div className="container-wide text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
          Ready to Transform Your Students' Education?
        </h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
          Join leading international schools who have chosen Mission Kapes for life-changing educational experiences. Contact us today for a free consultation and custom program proposal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <CalendlyEmbed 
            url="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone"
            text="Get Free Consultation"
            variant="secondary"
            size="lg"
            className="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90 shadow-lg min-h-[48px] touch-manipulation w-full sm:w-auto transition-colors duration-200"
          />
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-dragon transition-all duration-300 min-h-[48px] touch-manipulation w-full sm:w-auto"
            asChild
          >
            <Link to="/faq">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
