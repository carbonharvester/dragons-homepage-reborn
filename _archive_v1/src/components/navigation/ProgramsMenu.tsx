
import React from 'react';
import { Link } from "react-router-dom";
import { programCategories } from '@/data/navigationData';

const ProgramsMenu = () => {
  return (
    <div className="absolute left-0 top-[calc(100%+4px)] w-72 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
      <div className="flex flex-col">
        <div className="py-2 px-4 border-b border-gray-100">
          <Link 
            to="/programs"
            className="text-dragon-dark font-medium text-base hover:text-dragon block"
          >
            All Programs
          </Link>
        </div>
        
        {programCategories.map((category, index) => (
          <div key={category.title} className="py-2 px-4">
            <Link 
              to={category.href}
              className="text-dragon-dark font-medium text-base hover:text-dragon block mb-1"
            >
              {category.title}
            </Link>
            
            {category.programs && category.programs.length > 0 && (
              <div className="pl-3 mt-1 space-y-1 border-l border-gray-100">
                {category.programs.map((program) => (
                  <Link 
                    key={program.title}
                    to={program.href}
                    className="text-dragon-dark text-sm hover:text-dragon block py-1"
                  >
                    {program.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsMenu;
