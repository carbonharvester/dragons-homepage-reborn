
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SchoolTripsTab = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-dragon-dark">School Trips</h3>
      <p className="mb-6 text-lg">Our school trips offer 8 day immersive experiences that complement your curriculum, providing hands-on learning through themed projects with lasting impact.</p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h4 className="text-xl font-bold mb-3 text-dragon-dark">Program Features:</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Curriculum-aligned experiences with pre and post-trip resources</li>
          <li>Project-based learning opportunities with measurable community impact</li>
          <li>Collaborative work with local communities and experts</li>
          <li>Comprehensive risk management and 24/7 support</li>
          <li>Customisable itineraries based on your school's needs</li>
        </ul>
        
        <p className="mb-6">
          Each school trip focuses on a specific project theme, allowing students to engage 
          deeply with important global issues while developing practical skills and cross-cultural 
          understanding.
        </p>
      </div>
      
      <div className="text-center mt-8">
        <Button className="btn-primary" asChild>
          <Link to="/school-trips">Explore School Trips</Link>
        </Button>
      </div>
    </div>
  );
};

export default SchoolTripsTab;
