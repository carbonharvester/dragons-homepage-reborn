
import React from 'react';
import { Button } from "@/components/ui/button";
import { ReactNode } from 'react';
import CalendlyEmbed from '../CalendlyEmbed';
import { TripDetail } from './TripBrochureContent';
import { Link } from 'react-router-dom';
import { Calendar, Users, MapPin, Clock, LucideIcon } from 'lucide-react';

// Define the map of string icon names to their corresponding Lucide components
const iconMap: Record<string, React.ElementType> = {
  Calendar,
  Users,
  MapPin,
  Clock
};

interface TripDetailsCardProps {
  tripDetails: TripDetail[];
  isSchoolTrip?: boolean;
}

const TripDetailsCard = ({
  tripDetails,
  isSchoolTrip = false
}: TripDetailsCardProps) => {
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

  const formatValue = (value: string) => {
    // Check if this is the "When" field that contains sold out information
    if (value.includes("Sold Out")) {
      const lines = value.split('\n');
      return (
        <div>
          {lines.map((line, index) => (
            <div key={index}>
              {line.includes("Sold Out") ? (
                <span>
                  <span className="line-through text-gray-400">
                    {line.replace(" - Sold Out", "")}
                  </span>
                  <span className="text-red-500 font-medium ml-2">- Sold Out</span>
                </span>
              ) : (
                line
              )}
            </div>
          ))}
        </div>
      );
    }
    // For other fields, handle normal line breaks
    return value.split('\n').map((line, index) => (
      <div key={index}>{line}</div>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-fit">
      <h3 className="text-xl font-bold mb-4 text-dragon-dark border-b border-gray-200 pb-2">Trip Details</h3>
      <div className="space-y-4">
        {tripDetails.map((detail, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-3 mt-1">
              {renderIcon(detail.icon)}
            </div>
            <div>
              <p className="text-sm text-gray-500">{detail.label}</p>
              <div className="font-medium text-dragon-dark">
                {formatValue(detail.value)}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 space-y-4">
        {/* Apply Now Button - Removed for school trips and made disabled for others */}
        {!isSchoolTrip && (
          <Button className="w-full btn-primary" disabled>
            Apply Now (Next Opening - Sept 2025)
          </Button>
        )}
        
        <CalendlyEmbed url="https://calendly.com/kapesuniforms/discoverymeeting" text="Schedule Consultation" variant="outline" className="w-full bg-dragon-yellow text-dragon-dark hover:bg-amber-400 border-dragon-yellow" />
      </div>
    </div>
  );
};

export default TripDetailsCard;
