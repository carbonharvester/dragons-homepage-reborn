import React from 'react';
import { Button } from "@/components/ui/button";
import { ReactNode } from 'react';
import CalendlyEmbed from '../CalendlyEmbed';
interface TripDetailProps {
  label: string;
  value: string;
  icon: ReactNode;
}
interface TripDetailsCardProps {
  tripDetails: TripDetailProps[];
  isSchoolTrip?: boolean;
}
const TripDetailsCard = ({
  tripDetails,
  isSchoolTrip = false
}: TripDetailsCardProps) => {
  return <div className="bg-white rounded-lg shadow-md p-6 h-fit">
      <h3 className="text-xl font-bold mb-4 text-dragon-dark border-b border-gray-200 pb-2">Trip Details</h3>
      <div className="space-y-4">
        {tripDetails.map((detail, index) => <div key={index} className="flex items-center">
            <div className="mr-3">
              {detail.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{detail.label}</p>
              <p className="font-medium text-dragon-dark">{detail.value}</p>
            </div>
          </div>)}
      </div>
      
      <div className="mt-6 space-y-4">
        {!isSchoolTrip && <Button className="w-full bg-dragon hover:bg-dragon-dark" asChild>
            
          </Button>}
        <CalendlyEmbed url="https://calendly.com/kapesuniforms/discoverymeeting" text="Schedule Consultation" variant="outline" className="w-full bg-dragon-yellow text-dragon-dark hover:bg-amber-400 border-dragon-yellow" />
      </div>
    </div>;
};
export default TripDetailsCard;