
import React from 'react';
import { Calendar } from "lucide-react";
import { WeekProps } from './types';

interface WeekHeaderProps {
  week: WeekProps;
}

const WeekHeader = ({ week }: WeekHeaderProps) => {
  return (
    <div className="bg-dragon-beige p-6 rounded-lg mb-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="text-2xl font-academy text-dragon-dark">
          {week.title}: {week.dates}
        </h3>
        <div className="mt-2 md:mt-0 text-dragon inline-flex items-center bg-white px-4 py-1 rounded-full">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">{week.focus}</span>
        </div>
      </div>
    </div>
  );
};

export default WeekHeader;
