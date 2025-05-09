
import React from 'react';
import { schoolTrips } from '@/data/programsData';
import ProgramCard from '@/components/programs/ProgramCard';

const SchoolTripsList = () => {
  return (
    <>
      <div className="text-center mb-12">
        <div className="inline-block bg-dragon-beige px-4 py-1 rounded-full text-dragon-dark text-sm font-medium mb-3">Available Programs</div>
        <h2 id="programs" className="text-3xl font-academy text-dragon-dark mb-4">Our School Trips</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {schoolTrips.map((program, index) => (
          <div key={index} className="transform transition-all hover:-translate-y-2 h-full flex w-full">
            <ProgramCard 
              program={program} 
              buttonClassName="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90 hover:text-dragon-dark border-dragon-yellow"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SchoolTripsList;
