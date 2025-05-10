
import React from 'react';
import { TripDetail } from './TripBrochureContent';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';

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
    if (typeof icon === 'string' && iconMap[icon]) {
      const IconComponent = iconMap[icon];
      return <IconComponent className="h-5 w-5 text-dragon" />;
    }
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
