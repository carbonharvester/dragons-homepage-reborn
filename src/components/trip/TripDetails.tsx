
import React from 'react';
import TripDetailsCard from './TripDetailsCard';
import { TripDetail } from './TripBrochureContent';

interface TripDetailsProps {
  tripDetails: TripDetail[];
  isSchoolTrip?: boolean;
  pdfBrochureLink?: string;
}

const TripDetails: React.FC<TripDetailsProps> = ({ 
  tripDetails, 
  isSchoolTrip,
  pdfBrochureLink 
}) => {
  return (
    <div className="lg:w-1/3">
      <TripDetailsCard 
        tripDetails={tripDetails} 
        isSchoolTrip={isSchoolTrip}
        pdfBrochureLink={pdfBrochureLink}
      />
    </div>
  );
};

export default TripDetails;
