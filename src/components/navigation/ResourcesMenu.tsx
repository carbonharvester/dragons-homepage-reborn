
import React from 'react';
import { Link } from "react-router-dom";
import { resourcePages } from '@/data/navigationData';

const ResourcesMenu = () => {
  // Filter out the "All Programs" and "Podcast" items from the resources menu
  const filteredResources = resourcePages.filter(resource => 
    resource.title !== "All Programs" && resource.title !== "Podcast"
  );
  
  // Define the order to match the footer
  const orderedResourceTitles = [
    "Blog", 
    "Discover Kenya",
    "Health & Safety",
    "Partner with Us",
    "FAQ"
  ];
  
  // Sort the resources according to the order in the footer
  const sortedResources = [...filteredResources].sort((a, b) => {
    const indexA = orderedResourceTitles.indexOf(a.title);
    const indexB = orderedResourceTitles.indexOf(b.title);
    return indexA - indexB;
  });

  return (
    <div className="absolute left-0 top-[calc(100%+4px)] w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
      <div className="flex flex-col">
        {sortedResources.map((resource, index) => (
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
