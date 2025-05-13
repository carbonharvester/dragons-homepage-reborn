
import React from 'react';
import { Button } from "@/components/ui/button";
import { programCategories } from '@/data/programsData';

interface ProgramCategorySelectorProps {
  activeCategory: string;
  setActiveCategory: (id: string) => void;
}

const ProgramCategorySelector = ({ activeCategory, setActiveCategory }: ProgramCategorySelectorProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {programCategories.map(category => (
        <Button 
          key={category.id} 
          onClick={() => setActiveCategory(category.id)} 
          className={`px-6 py-3 whitespace-normal h-auto ${
            activeCategory === category.id 
              ? "bg-dragon text-white" 
              : "bg-white border border-dragon text-dragon hover:bg-dragon hover:text-white"
          }`}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default ProgramCategorySelector;
