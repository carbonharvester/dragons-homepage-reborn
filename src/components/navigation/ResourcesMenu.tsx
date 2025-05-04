
import React from 'react';
import { Link } from "react-router-dom";
import { resourcePages } from '@/data/navigationData';

const ResourcesMenu = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-screen max-w-md bg-white border border-gray-200 rounded-md shadow-lg py-3 z-50 hidden lg:block">
      <div className="px-4">
        <div className="flex flex-col space-y-2">
          {resourcePages.map((resource, index) => (
            <div key={resource.title} className="py-2">
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
