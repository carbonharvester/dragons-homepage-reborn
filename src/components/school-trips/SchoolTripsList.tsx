
import React from 'react';
import { schoolTrips } from '@/data/programsData';
import ProgramCard from '@/components/programs/ProgramCard';

const SchoolTripsList = () => {
  return (
    <>
      <h2 id="programs" className="text-3xl font-academy text-dragon-dark text-center mb-8">Our School Trips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {schoolTrips.map((program, index) => <ProgramCard key={index} program={program} />)}
      </div>
    </>
  );
};

export default SchoolTripsList;
