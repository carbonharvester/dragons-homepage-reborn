
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EducatorTripsTab = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-dragon-dark">Educator Trips</h3>
      <p className="mb-6 text-lg">Our educator trips offer professional development opportunities for teachers and school staff to gain global perspectives, develop innovative teaching methods, and build international educational partnerships.</p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h4 className="text-xl font-bold mb-3 text-dragon-dark">Program Features:</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Hands-on workshops with local educators and educational leaders</li>
          <li>Cultural immersion experiences to deepen global understanding</li>
          <li>Collaborative projects with Kenyan schools and educational organizations</li>
          <li>Development of globally-focused teaching resources and lesson plans</li>
          <li>Opportunities to establish lasting school partnerships and exchange programs</li>
          <li>Professional development credits available for participating educators</li>
        </ul>
        
        <p className="mb-6">
          Our educator trips are designed to inspire teaching innovation, develop cultural competence,
          and equip educators with practical tools to bring global perspectives back to their classrooms.
        </p>
      </div>
      
      <div className="text-center mt-8">
        <Button className="btn-primary" asChild>
          <Link to="/educator-trips">Explore Educator Trips</Link>
        </Button>
      </div>
    </div>
  );
};

export default EducatorTripsTab;
