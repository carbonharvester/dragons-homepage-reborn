
import React from 'react';
import { Users, GraduationCap, Award, Heart } from 'lucide-react';
import TripDetailsCard from '@/components/trip/TripDetailsCard';
import { tripDetails } from './data/details';

const ProgramSidebar = () => {
  // The tripDetails already have ReactNode icons, so no conversion needed
  return (
    <div className="lg:w-1/3">
      <TripDetailsCard tripDetails={tripDetails} isSchoolTrip={true} />
    </div>
  );
};

export default ProgramSidebar;
