
import React from 'react';
import { Link } from "react-router-dom";
import { programCategories } from '@/data/navigationData';

const ProgramsMenu = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-screen max-w-md bg-white border border-gray-200 rounded-md shadow-lg py-3 z-50 hidden lg:block">
      <div className="px-4">
        <div className="flex flex-col space-y-2">
          <div className="py-2 border-b border-gray-100">
            <Link 
              to="/programs"
              className="text-dragon-dark font-medium text-base hover:text-dragon block"
            >
              All Programs
            </Link>
          </div>
          {programCategories.map((category, index) => (
            <div key={category.title} className="py-2">
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
    </div>
  );
};

export default ProgramsMenu;
