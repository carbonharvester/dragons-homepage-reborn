
import React from 'react';
import TripDetailsCard from './TripDetailsCard';
import { Calendar, Users, MapPin, Globe } from 'lucide-react';

const TripDetails = () => {
  // Create default trip details to pass to the card
  const defaultTripDetails = [
    {
      icon: <Calendar className="h-5 w-5 text-dragon" />,
      label: "Duration",
      value: "8 Days"
    },
    {
      icon: <Users className="h-5 w-5 text-dragon" />,
      label: "Age Group",
      value: "High School"
    },
    {
      icon: <MapPin className="h-5 w-5 text-dragon" />,
      label: "Location",
      value: "Kenya"
    },
    {
      icon: <Globe className="h-5 w-5 text-dragon" />,
      label: "Season",
      value: "Year Round"
    }
  ];

  return <TripDetailsCard tripDetails={defaultTripDetails} />;
};

export default TripDetails;
