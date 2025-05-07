
import React from 'react';
import { Calendar, MapPin, Users, GraduationCap } from 'lucide-react';

const BrochureInformation = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div>
        <h3 className="text-xl font-bold mb-4 text-dragon-dark">What You'll Receive</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-dragon mr-2">•</span>
            <span className="text-dragon-gray">Complete day-by-day itinerary</span>
          </li>
          <li className="flex items-start">
            <span className="text-dragon mr-2">•</span>
            <span className="text-dragon-gray">Health and safety information</span>
          </li>
          <li className="flex items-start">
            <span className="text-dragon mr-2">•</span>
            <span className="text-dragon-gray">Learning outcomes and curriculum connections</span>
          </li>
          <li className="flex items-start">
            <span className="text-dragon mr-2">•</span>
            <span className="text-dragon-gray">Accommodation and transportation details</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4 text-dragon-dark">Preparing For Your Trip</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-dragon mr-2">•</span>
            <span className="text-dragon-gray">Suggested packing list</span>
          </li>
          <li className="flex items-start">
            <span className="text-dragon mr-2">•</span>
            <span className="text-dragon-gray">Pre-trip learning resources</span>
          </li>
          <li className="flex items-start">
            <span className="text-dragon mr-2">•</span>
            <span className="text-dragon-gray">Visa and documentation requirements</span>
          </li>
          <li className="flex items-start">
            <span className="text-dragon mr-2">•</span>
            <span className="text-dragon-gray">FAQs for students and parents</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BrochureInformation;
