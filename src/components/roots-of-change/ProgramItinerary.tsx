
import React, { useState } from 'react';
import WeekSelector from './WeekSelector';
import WeekItinerary from './WeekItinerary';
import { weeksData } from './itineraryData';

const ProgramItinerary = () => {
  const [activeWeek, setActiveWeek] = useState<number>(0);

  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-academy text-dragon-dark text-center mb-8">
          Four-Week Program Itinerary
        </h2>
        
        <p className="text-center text-dragon-gray max-w-3xl mx-auto mb-10">
          This immersive 28-day program takes students across Kenya, from urban farms in Nairobi to 
          wildlife conservation areas in Tsavo, creating an unforgettable journey of learning and impact.
        </p>
        
        {/* Week Tabs */}
        <WeekSelector 
          weeks={weeksData}
          activeWeek={activeWeek}
          setActiveWeek={setActiveWeek}
        />
        
        {/* Active Week Content */}
        <WeekItinerary week={weeksData[activeWeek]} />
        
        <div className="mt-12 text-center">
          <p className="text-dragon-gray italic">
            Note: This is a sample itinerary and may be adjusted based on weather conditions, 
            group size, and specific educational objectives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramItinerary;
