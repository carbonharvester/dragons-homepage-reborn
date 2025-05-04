
import React from 'react';
import { Button } from "@/components/ui/button";

interface TripCTAProps {
  isSchoolTrip?: boolean;
}

const TripCTA = ({ isSchoolTrip = false }: TripCTAProps) => {
  return (
    <div className="bg-dragon text-white rounded-lg p-8 md:p-12 text-center">
      <h2 className="text-3xl md:text-4xl font-academy font-bold mb-4">
        {isSchoolTrip ? "Ready to Plan Your School Trip?" : "Ready to Make an Impact?"}
      </h2>
      <p className="text-xl max-w-3xl mx-auto mb-8">
        {isSchoolTrip 
          ? "Contact our team today to discuss how we can create a transformative educational experience tailored to your school's curriculum, objectives, and schedule." 
          : "Join us on this transformative journey to address food insecurity through sustainable permaculture practices while providing your students with an unforgettable educational experience."}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {!isSchoolTrip && (
          <Button variant="secondary" size="lg" className="text-dragon-dark hover:bg-secondary/90" asChild>
            <a 
              href="https://form.typeform.com/to/rtxmvp4L" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </Button>
        )}
        <Button 
          variant={isSchoolTrip ? "secondary" : "outline"} 
          size="lg" 
          className={isSchoolTrip ? "text-dragon-dark hover:bg-secondary/90" : "bg-transparent border-white text-white hover:bg-white hover:text-dragon"} 
          asChild
        >
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
