
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
    </div>
  );
};

export default ProgramSidebar;
