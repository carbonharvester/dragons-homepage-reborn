
import React from 'react';
import { Link } from "react-router-dom";
import { programCategories } from '@/data/navigationData';

const ProgramsMenu = () => {
  return (
    <div className="absolute left-0 top-full mt-2 w-screen bg-white border-t border-gray-100 shadow-lg py-6 z-50 hidden lg:block">
      <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-4">
          <Link 
            to="/programs"
            className="text-dragon-dark font-medium text-base hover:text-dragon block mb-2"
          >
            All Programs
          </Link>
          <p className="text-sm text-gray-500 mb-4">Explore our full range of educational programs</p>
        </div>
        {programCategories.map((category) => (
          <div key={category.title} className="p-4">
            <Link 
              to={category.href}
              className="text-dragon-dark font-medium text-base hover:text-dragon block mb-2"
            >
              {category.title}
            </Link>
            <p className="text-sm text-gray-500 mb-4">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsMenu;
