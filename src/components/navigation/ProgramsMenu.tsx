
import React from 'react';
import { Link } from "react-router-dom";
import { programCategories } from '@/data/navigationData';

const ProgramsMenu = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-screen max-w-7xl bg-white border-t border-gray-100 shadow-lg py-4 z-50 hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3">
            <Link 
              to="/programs"
              className="text-dragon-dark font-medium text-base hover:text-dragon block"
            >
              All Programs
            </Link>
          </div>
          {programCategories.map((category) => (
            <div key={category.title} className="p-3">
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
