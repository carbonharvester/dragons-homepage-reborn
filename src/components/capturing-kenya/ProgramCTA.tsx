
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import CapturingKenyaBrochure from "./ProgramBrochurePDF";
import { programData } from './ProgramData';

const ProgramCTA = () => {
  return (
    <section className="py-16 bg-dragon">
      <div className="container-wide">
        <CapturingKenyaBrochure />
        
        <div className="text-center mt-10">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Capture Kenya?</h3>
          <p className="text-white mb-6 max-w-2xl mx-auto">
            Join us for a transformative summer experience that will develop your creative skills, 
            connect you with diverse cultures, and create lasting impact in local communities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="btn-primary bg-white text-dragon hover:bg-gray-100" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
            <CalendlyEmbed 
              url="https://calendly.com/kapesuniforms/discoverymeeting"
              text="Schedule Consultation"
              variant="secondary"
              className="bg-dragon-yellow text-dragon-dark hover:bg-amber-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramCTA;
