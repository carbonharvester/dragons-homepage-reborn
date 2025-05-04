
import React from 'react';
import { Link } from "react-router-dom";
import { programCategories } from '@/data/navigationData';

const ProgramsMenu = () => {
  return (
    <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50 hidden lg:block">
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
              className="text-dragon-dark font-medium text-base hover:text-dragon block"
            >
              {category.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsMenu;
