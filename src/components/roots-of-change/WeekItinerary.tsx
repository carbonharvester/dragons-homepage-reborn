
import React from 'react';
import { WeekProps } from './types';
import WeekHeader from './WeekHeader';
import ItineraryDay from './ItineraryDay';

interface WeekItineraryProps {
  week: WeekProps;
}

const WeekItinerary = ({ week }: WeekItineraryProps) => {
  return (
    <div>
      <WeekHeader week={week} />
      <div className="space-y-8">
        {week.days.map((day, index) => (
          <ItineraryDay key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

export default WeekItinerary;
