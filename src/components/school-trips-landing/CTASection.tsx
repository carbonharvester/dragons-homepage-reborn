
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CalendlyEmbed from '@/components/CalendlyEmbed';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-dragon to-dragon-dark text-white">
      <div className="container-wide text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Students' Education?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Join leading international schools who have chosen Mission Kapes for life-changing educational experiences. Contact us today for a free consultation and custom program proposal.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <CalendlyEmbed 
            url="https://calendly.com/kapesuniforms/discoverymeeting"
            text="Get Free Consultation"
            variant="secondary"
            size="lg"
            className="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90 shadow-lg"
          />
          <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-dragon" asChild>
            <Link to="/partner-with-us">Request Information</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
