
import React from 'react';
import TripDetailsCard from './TripDetails';
import { ReactNode } from 'react';

interface TripDetailProps {
  label: string;
  value: string;
  icon: ReactNode;
}

interface TripOverviewProps {
  tripDetails: TripDetailProps[];
  projectGoals?: string[];
  description?: string[];
}

const TripOverview = ({ tripDetails, projectGoals, description }: TripOverviewProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-academy mb-6 text-dragon-dark">Trip Overview</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col">
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
          
          <div className="bg-dragon-beige p-8 rounded-lg mt-auto flex-grow flex flex-col">
            <h3 className="text-2xl font-bold mb-6 text-dragon-dark">Project Goals</h3>
            <ul className="list-disc pl-5 space-y-4 text-dragon-gray text-lg">
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
        
        <TripDetailsCard tripDetails={tripDetails} />
      </div>
    </div>
  );
};

export default TripOverview;
