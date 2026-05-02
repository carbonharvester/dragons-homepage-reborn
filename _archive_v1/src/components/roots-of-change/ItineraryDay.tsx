
import React from 'react';
import { Clock } from "lucide-react";
import { DayProps } from './types';

interface ItineraryDayProps {
  day: DayProps;
}

const ItineraryDay = ({ day }: ItineraryDayProps) => {
  const Icon = day.icon;
  
  return (
    <div className="border-l-4 border-dragon pl-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
        <div>
          <h4 className="text-xl font-bold text-dragon flex items-center">
            <Icon className="h-5 w-5 mr-2" />
            {day.day}, {day.date}: {day.title}
          </h4>
          <div className="flex items-center text-sm text-dragon-gray mt-1">
            <Clock className="h-3 w-3 mr-1" /> 08:30 - 16:00
          </div>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-1 text-dragon-gray">
        {day.activities.map((activity, idx) => (
          <li key={idx}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItineraryDay;
