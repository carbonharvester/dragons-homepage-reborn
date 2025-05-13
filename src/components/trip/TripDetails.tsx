
import React from 'react';
import { TripDetail } from './TripBrochureContent';
import { Calendar, Users, MapPin, Clock, LucideIcon } from 'lucide-react';

// Define the map of string icon names to their corresponding Lucide components
const iconMap: Record<string, React.ElementType> = {
  Calendar,
  Users,
  MapPin,
  Clock
};

interface TripDetailsProps {
  details: TripDetail[];
}

const TripDetails: React.FC<TripDetailsProps> = ({ details }) => {
  const renderIcon = (icon: React.ReactNode | string) => {
    if (typeof icon === 'string') {
      // If the icon is a string that matches a key in our iconMap
      if (iconMap[icon]) {
        const IconComponent = iconMap[icon];
        return <IconComponent className="h-5 w-5 text-dragon" />;
      }
      // If it's a string but not in our map, return it as text (fallback)
      return icon;
    }
    // If it's already a ReactNode, return it directly
    return icon;
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-8">
      {details.map((detail, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="mb-2">
            {renderIcon(detail.icon)}
          </div>
          <span className="text-xs text-gray-600 mb-1">{detail.label}</span>
          <span className="font-medium">{detail.value}</span>
        </div>
      ))}
    </div>
  );
};

export default TripDetails;
