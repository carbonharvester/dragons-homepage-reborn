
import React from 'react';
import { programCategories } from '@/data/programsData';

interface ProgramCategorySelectorProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ProgramCategorySelector = ({ activeCategory, setActiveCategory }: ProgramCategorySelectorProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {programCategories.map((category) => (
        <button
          key={category.id}
          className={`px-6 py-3 rounded-md font-medium text-center min-w-[160px] h-12 transition-colors ${
            activeCategory === category.id
              ? 'bg-dragon text-white'
              : 'bg-white text-dragon border border-dragon hover:bg-dragon hover:text-white'
          }`}
          onClick={() => setActiveCategory(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default ProgramCategorySelector;
