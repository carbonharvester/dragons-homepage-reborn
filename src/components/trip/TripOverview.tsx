
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
}

const TripOverview = ({ tripDetails }: TripOverviewProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-academy mb-6 text-dragon-dark">Trip Overview</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <p className="text-lg text-dragon-gray mb-6">
            This immersive 7-8 day program transforms unused school land into a productive
            permaculture farm. In Kenya, where about 1 in 3 children suffer from stunted growth 
            due to malnutrition, this initiative addresses critical food security challenges.
          </p>
          <p className="text-lg text-dragon-gray mb-6">
            Students will help establish a 200 sq meter pilot farm focused on onions and tomatoes, 
            which will be purchased by Food For Education in exchange for meals for students in need. 
            This sustainable model supports students, serves as a replicable solution for other schools,
            and offers participants hands-on experience with permaculture principles.
          </p>
          
          <div className="bg-dragon-beige p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold mb-4 text-dragon-dark">Project Goals</h3>
            <ul className="list-disc pl-5 space-y-3 text-dragon-gray">
              <li>Establish pilot farm focused on onions and tomatoes</li>
              <li>Supply produce for school meals to address hunger</li>
              <li>Create sustainable farming systems using permaculture</li>
              <li>Educate and empower students to address food insecurity</li>
            </ul>
          </div>
        </div>
        
        <TripDetailsCard tripDetails={tripDetails} />
      </div>
    </div>
  );
};

export default TripOverview;
