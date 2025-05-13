
import React from 'react';
import { educatorTrips } from '@/data/programsData';
import ProgramCard from '@/components/programs/ProgramCard';

const EducatorTripsList = () => {
  return (
    <>
      <div className="text-center mb-12">
        <div className="inline-block bg-dragon-beige px-4 py-1 rounded-full text-dragon-dark text-sm font-medium mb-3">Available Programs</div>
        <h2 id="programs" className="text-3xl font-academy text-dragon-dark mb-4">Our Educator Trips</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {educatorTrips.map((program, index) => (
          <div key={index} className="transform transition-all hover:-translate-y-2 h-full">
            <ProgramCard 
              program={program} 
              buttonClassName="bg-dragon text-white hover:bg-dragon/90 hover:text-white border-dragon"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default EducatorTripsList;
