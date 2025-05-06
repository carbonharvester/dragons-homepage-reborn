
import React from 'react';
import { Button } from "@/components/ui/button";

const SchoolTripsCTA = () => {
  return (
    <div className="relative bg-gradient-to-br from-dragon to-dragon-dark text-white rounded-lg p-8 md:p-12 text-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-dragon-yellow opacity-10 rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-dragon-yellow opacity-10 rounded-full -ml-20 -mb-20"></div>
      
      <div className="relative z-10">
        <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm mb-4">Start Your Journey</span>
        <h2 className="text-3xl md:text-4xl font-academy font-bold mb-4">Ready to Plan Your School Trip?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
          Contact our team today to discuss how we can create a transformative educational experience 
          tailored to your school's curriculum, objectives, and schedule.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90 shadow-lg group" 
            asChild
          >
            <a 
              href="https://calendly.com/kapes-adventures/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <span>Schedule Consultation</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-2 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SchoolTripsCTA;
