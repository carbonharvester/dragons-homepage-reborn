
import React from 'react';
import { WeekProps } from './types';

interface WeekSelectorProps {
  weeks: WeekProps[];
  activeWeek: number;
  setActiveWeek: (index: number) => void;
}

const WeekSelector = ({ weeks, activeWeek, setActiveWeek }: WeekSelectorProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center mb-8 gap-2">
      {weeks.map((week, index) => (
        <button 
          key={index}
          onClick={() => setActiveWeek(index)}
          className={`py-2 px-4 rounded-full transition-all ${
            activeWeek === index 
              ? "bg-dragon text-white" 
              : "bg-dragon-beige text-dragon-dark hover:bg-dragon-sand"
          }`}
        >
          {week.title}
        </button>
      ))}
    </div>
  );
};

export default WeekSelector;
