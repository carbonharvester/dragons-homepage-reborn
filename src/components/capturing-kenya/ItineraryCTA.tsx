
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ItineraryCTA = () => {
  return (
    <div className="mt-12 text-center">
      <p className="text-dragon-gray mb-6 max-w-2xl mx-auto">
        Our itinerary is carefully crafted to provide a balance of learning, exploration, and community impact.
        Each day is designed to build your skills while immersing you in Kenya's diverse environments and cultures.
      </p>
      {/* CTA buttons removed for student-focused summer program */}
    </div>
  );
};

export default ItineraryCTA;
