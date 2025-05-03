
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TripCTA = () => {
  return (
    <div className="bg-dragon text-white rounded-lg p-8 md:p-12 text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Make an Impact?</h2>
      <p className="text-xl max-w-3xl mx-auto mb-8">
        Join us on this transformative journey to address food insecurity through 
        sustainable permaculture practices while providing your students with an 
        unforgettable educational experience.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="secondary" size="lg" className="text-dragon-dark hover:bg-secondary/90" asChild>
          <Link to="/partner-with-us">Apply Now</Link>
        </Button>
        <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-dragon" asChild>
          <a
            href="https://calendly.com/kapes-adventures/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Consultation
          </a>
        </Button>
      </div>
    </div>
  );
};

export default TripCTA;
