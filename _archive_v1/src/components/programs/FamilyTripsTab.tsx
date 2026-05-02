import React from 'react';
import { familyTrips } from '@/data/programsData';
import ProgramCard from './ProgramCard';

const FamilyTripsTab = () => {
  return (
    <>
      <div className="text-center mb-12">
        <div className="inline-block bg-dragon-beige px-4 py-1 rounded-full text-dragon-dark text-sm font-medium mb-3">Available Programs</div>
        <h2 className="text-3xl font-academy text-dragon-dark mb-4">Family Adventure Programs</h2>
        <p className="text-lg text-dragon-dark/80 max-w-3xl mx-auto">
          Embark on meaningful journeys together as a family. Our family trips combine conservation, cultural immersion, and adventure, creating unforgettable experiences that strengthen family bonds while making a positive impact.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {familyTrips.map((program, index) => (
          <div key={index} className="transform transition-all hover:-translate-y-2 h-full">
            <ProgramCard 
              program={program} 
              buttonClassName="bg-dragon text-white hover:bg-dragon/90 border-dragon"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FamilyTripsTab;