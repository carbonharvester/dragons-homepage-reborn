
import React from 'react';
import { Week } from './types';
import { ChevronDown, ChevronUp } from "lucide-react";
import WeekDetail from './WeekDetail';

interface WeekToggleListProps {
  weeks: Week[];
  expandedWeeks: Record<string, boolean>;
  toggleWeekDetails: (weekId: string) => void;
}

const WeekToggleList = ({ weeks, expandedWeeks, toggleWeekDetails }: WeekToggleListProps) => {
  return (
    <div className="space-y-8">
      {weeks.map((week) => (
        <div key={week.number} className="border border-gray-100 rounded-xl shadow-sm overflow-hidden">
          <button 
            className="w-full bg-dragon p-6 text-white flex justify-between items-center"
            onClick={() => toggleWeekDetails(`week${week.number}`)}
          >
            <div>
              <h3 className="text-2xl font-bold text-left font-academy">Week {week.number}: {week.title}</h3>
              <p className="opacity-90 text-left font-gothic uppercase tracking-wide">{week.subtitle}</p>
            </div>
            {expandedWeeks[`week${week.number}`] ? 
              <ChevronUp className="h-6 w-6" /> : 
              <ChevronDown className="h-6 w-6" />
            }
          </button>
          
          <WeekDetail 
            week={week} 
            expanded={expandedWeeks[`week${week.number}`]} 
          />
        </div>
      ))}
    </div>
  );
};

export default WeekToggleList;
