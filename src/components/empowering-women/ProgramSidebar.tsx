
import React from 'react';
import { Users, GraduationCap, Award, Heart } from 'lucide-react';
import TripDetailsCard from '@/components/trip/TripDetailsCard';
import { tripDetails } from './data/details';

const ProgramSidebar = () => {
  // Convert Lucide icon components to ReactNode for TripDetailsCard
  const formattedDetails = tripDetails.map(detail => ({
    ...detail,
    icon: React.createElement(detail.icon, { className: "h-5 w-5 text-dragon" })
  }));

  return (
    <div className="lg:w-1/3">
      <TripDetailsCard tripDetails={formattedDetails} isSchoolTrip={true} />

      <div className="bg-dragon-beige p-8 rounded-lg shadow-md mt-8">
        <h3 className="text-xl font-bold text-dragon-dark mb-4">Perfect For</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <div className="bg-dragon rounded-full p-1 mt-1">
              <Users className="h-4 w-4 text-white" />
            </div>
            <span>Students ages 12-15</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-dragon rounded-full p-1 mt-1">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
            <span>Students wanting hands-on impact projects</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-dragon rounded-full p-1 mt-1">
              <Award className="h-4 w-4 text-white" />
            </div>
            <span>Students studying environmental science</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-dragon rounded-full p-1 mt-1">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span>CAS students</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-dragon rounded-full p-1 mt-1">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
            <span>Duke of Edinburgh Students</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgramSidebar;
