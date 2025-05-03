
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import ProgramBrochure from "@/components/ProgramBrochure";

interface ProgramData {
  title: string;
  description: string;
  duration: string;
  season: string;
  location: string;
  goals: string[];
}

interface ProgramCTAProps {
  programData: ProgramData;
}

const ProgramCTA = ({ programData }: ProgramCTAProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <ProgramBrochure program={programData} />
        
        <div className="text-center mt-10">
          <h3 className="text-2xl font-bold text-dragon-dark mb-4">Ready to Capture Kenya?</h3>
          <p className="text-dragon-gray mb-6 max-w-2xl mx-auto">
            Join us for a transformative summer experience that will develop your creative skills, 
            connect you with diverse cultures, and create lasting impact in local communities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="btn-primary" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
            <CalendlyEmbed 
              url="https://calendly.com/kapesuniforms/discoverymeeting"
              text="Schedule Consultation"
              variant="outline"
              className="border-dragon text-dragon hover:bg-dragon hover:text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramCTA;
