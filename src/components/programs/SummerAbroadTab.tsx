
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SummerAbroadTab = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-dragon-dark">Summer Abroad</h3>
      <p className="mb-6 text-lg">Our summer programs offer 3–4-week immersive experiences for students eager to develop new skills, explore career interests, and make lasting contributions to Kenyan communities.</p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h4 className="text-xl font-bold mb-3 text-dragon-dark">Program Features:</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Intensive skill-building with expert local mentors and practitioners</li>
          <li>Project-based learning with real-world applications</li>
          <li>Cultural immersion and language exposure</li>
          <li>Leadership development and global citizenship education</li>
          <li>College-ready portfolio development and reflection</li>
        </ul>
        
        <p className="mb-6">Summer programs are designed for students who want to dive deep into their interests while experiencing Kenya's rich culture and landscapes—contributing to communities and gaining valuable experience for college and future careers.</p>
      </div>
      
      <div className="text-center mt-8">
        <Button className="btn-primary" asChild>
          <Link to="/summer-abroad">Explore Summer Programs</Link>
        </Button>
      </div>
    </div>
  );
};

export default SummerAbroadTab;
