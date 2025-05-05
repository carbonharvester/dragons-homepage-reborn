
import React from 'react';
import { Button } from "@/components/ui/button";

const SchoolTripsCTA = () => {
  return (
    <div className="bg-dragon text-white rounded-lg p-8 md:p-12 text-center">
      <h2 className="text-3xl md:text-4xl font-academy font-bold mb-4">Ready to Plan Your School Trip?</h2>
      <p className="text-xl max-w-3xl mx-auto mb-8">
        Contact our team today to discuss how we can create a transformative educational experience 
        tailored to your school's curriculum, objectives, and schedule.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="secondary" size="lg" className="text-dragon-dark hover:bg-secondary/90" asChild>
          <a href="https://calendly.com/kapes-adventures/30min" target="_blank" rel="noopener noreferrer">
            Schedule Consultation
          </a>
        </Button>
      </div>
    </div>
  );
};

export default SchoolTripsCTA;
