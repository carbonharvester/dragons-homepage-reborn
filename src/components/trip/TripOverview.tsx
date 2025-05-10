
import React from 'react';
import TripDetailsCard from './TripDetailsCard';
import { ReactNode } from 'react';
import { Users, Calendar, MapPin } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { TripDetail } from './TripBrochureContent';

interface TripOverviewProps {
  tripDetails: TripDetail[];
  projectGoals?: string[];
  description?: string[];
  perfectFor?: string;
}

const TripOverview = ({ tripDetails, projectGoals, description, perfectFor }: TripOverviewProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mb-16 mt-2">
      <h2 className="text-3xl font-academy mb-6 text-dragon-dark">Trip Overview</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className={`${isMobile ? '' : 'lg:col-span-2'} flex flex-col`}>
          {description ? (
            description.map((paragraph, index) => (
              <p key={index} className="text-lg text-dragon-gray mb-6">
                {paragraph}
              </p>
            ))
          ) : (
            <>
              <p className="text-lg text-dragon-gray mb-6">
                This immersive 7-8 day journey to Tsavo, Kenya will introduce you to the lives of rural Kenyan women 
                and the innovative microloan program by Zawadisha that's transforming their communities.
              </p>
              <p className="text-lg text-dragon-gray mb-6">
                Students will experience firsthand the daily challenges these women face through activities like 
                the water walk, home visits, and cultural immersion. By supporting Zawadisha's work providing 
                solar lamps, rainwater tanks, and clean cookstoves, participants will gain deep insights into 
                sustainable development, women's empowerment, and social entrepreneurship.
              </p>
            </>
          )}
          
          {/* Show TripDetailsCard after the description on mobile */}
          {isMobile && (
            <div className="mb-8">
              <TripDetailsCard tripDetails={tripDetails} />
            </div>
          )}
          
          <div className="bg-dragon-beige p-8 rounded-lg mb-8 flex-grow flex flex-col">
            <h3 className="text-2xl font-academy text-dragon-dark mb-6">Trip Goals</h3>
            <ul className="list-disc pl-5 space-y-4 text-dragon-gray text-base">
              {projectGoals ? (
                projectGoals.map((goal, index) => (
                  <li key={index} className="pb-1">{goal}</li>
                ))
              ) : (
                <>
                  <li className="pb-1">Experience the daily challenges faced by rural Kenyan women</li>
                  <li className="pb-1">Support Zawadisha's microloan program for life-changing products</li>
                  <li className="pb-1">Learn about sustainable solutions for water and energy access</li>
                  <li className="pb-1">Engage in cultural exchange through crafts and traditional cooking</li>
                </>
              )}
            </ul>
          </div>
        </div>
        
        {/* Show TripDetailsCard in normal position on desktop */}
        {!isMobile && (
          <TripDetailsCard tripDetails={tripDetails} />
        )}
      </div>
      
      {perfectFor && (
        <div className="mt-8 w-full">
          <h3 className="text-2xl font-academy text-dragon-dark mb-6">
            {perfectFor.includes("Educators") || perfectFor.includes("Teacher") ? "Perfect For" : "Perfect For Students"}
          </h3>
          
          <div className="flex flex-wrap gap-4">
            {perfectFor.split(', ').map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-dragon-beige px-4 py-2 rounded-full">
                <Users className="h-5 w-5 text-dragon" />
                <span>{item.trim()}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TripOverview;
