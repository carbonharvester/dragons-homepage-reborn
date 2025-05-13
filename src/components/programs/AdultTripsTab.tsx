
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AdultTripsTab = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-dragon-dark">Adult Trips</h3>
      <p className="mb-6 text-lg">
        Our Adult Trips offer immersive learning experiences designed for professionals, educators, 
        and lifelong learners seeking to develop new skills, engage with global issues, and make 
        meaningful connections with communities in Kenya.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h4 className="text-xl font-bold mb-3 text-dragon-dark">Program Features:</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Expert-led workshops and hands-on learning experiences</li>
          <li>Professional development opportunities with certification</li>
          <li>Authentic cultural exchange and community engagement</li>
          <li>Connections with local experts and practitioners</li>
          <li>Comfortable accommodations and thoughtful logistics</li>
        </ul>
        
        <p className="mb-6">
          Adult Trips are perfect for individuals or groups looking to combine purposeful travel 
          with personal or professional development. Programs can be customized for specific groups, 
          organizations, or interests.
        </p>
      </div>
      
      <div className="text-center mt-8">
        <Button className="btn-primary" asChild>
          <Link to="/adult-programs">Learn More About Adult Trips</Link>
        </Button>
      </div>
    </div>
  );
};

export default AdultTripsTab;
