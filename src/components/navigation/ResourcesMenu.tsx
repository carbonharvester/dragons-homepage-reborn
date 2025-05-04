
import React from 'react';
import { Link } from "react-router-dom";
import { resourcePages } from '@/data/navigationData';

const ResourcesMenu = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-screen max-w-7xl bg-white border-t border-gray-100 shadow-lg py-4 z-50 hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resourcePages.map((resource) => (
            <div key={resource.title} className="p-3">
              <Link 
                to={resource.href}
                className="text-dragon-dark font-medium text-base hover:text-dragon block"
              >
                {resource.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesMenu;
