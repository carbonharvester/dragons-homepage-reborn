
import React from 'react';
import { Link } from "react-router-dom";
import { resourcePages } from '@/data/navigationData';

const ResourcesMenu = () => {
  return (
    <div className="absolute left-0 top-full mt-2 w-screen bg-white border-t border-gray-100 shadow-lg py-6 z-50 hidden lg:block">
      <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resourcePages.map((resource) => (
          <div key={resource.title} className="p-4">
            <Link 
              to={resource.href}
              className="text-dragon-dark font-medium text-base hover:text-dragon block mb-2"
            >
              {resource.title}
            </Link>
            <p className="text-sm text-gray-500 mb-4">{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesMenu;
