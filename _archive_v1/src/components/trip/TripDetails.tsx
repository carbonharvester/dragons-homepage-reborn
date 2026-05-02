
import React from 'react';
import TripDetailsCard from './TripDetailsCard';
import { TripDetail } from './TripBrochureContent';

interface TripDetailsProps {
  tripDetails: TripDetail[];
}

const TripDetails: React.FC<TripDetailsProps> = ({ tripDetails }) => {
  return (
    <div className="lg:w-1/3">
      <TripDetailsCard tripDetails={tripDetails} />
    </div>
  );
};

export default TripDetails;
