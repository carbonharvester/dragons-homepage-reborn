
import React from 'react';
import { Link } from "react-router-dom";
import { resourcePages } from '@/data/navigationData';

const ResourcesMenu = () => {
  return (
    <div className="absolute left-0 top-[calc(100%+4px)] w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
      <div className="flex flex-col">
        {resourcePages.map((resource, index) => (
          <div key={resource.title} className="py-2 px-4">
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
  );
};

export default ResourcesMenu;
