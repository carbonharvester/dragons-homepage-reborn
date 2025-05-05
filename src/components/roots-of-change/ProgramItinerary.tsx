
import React, { useState } from 'react';
import WeekSelector from './WeekSelector';
import WeekItinerary from './WeekItinerary';
import { weeksData } from './itineraryData';
import ItineraryHeader from './itinerary/ItineraryHeader';
import ItineraryFooter from './itinerary/ItineraryFooter';

const ProgramItinerary = () => {
  const [activeWeek, setActiveWeek] = useState<number>(0);

  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <ItineraryHeader />
        
        {/* Week Tabs */}
        <WeekSelector 
          weeks={weeksData}
          activeWeek={activeWeek}
          setActiveWeek={setActiveWeek}
        />
        
        {/* Active Week Content */}
        <WeekItinerary week={weeksData[activeWeek]} />
        
        <ItineraryFooter />
      </div>
    </section>
  );
};

export default ProgramItinerary;
