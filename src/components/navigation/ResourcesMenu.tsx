
import React from 'react';
import { Link } from "react-router-dom";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { resourcePages } from '@/data/navigationData';

const ResourcesMenu = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-dragon-gray hover:text-dragon font-medium text-base bg-transparent hover:bg-transparent focus:bg-transparent px-3 py-2">
        Resources
      </NavigationMenuTrigger>
      <NavigationMenuContent className="z-50">
        <div className="p-4 grid w-[500px] gap-4 md:grid-cols-2">
          {resourcePages.map((resource) => (
            <Link
              key={resource.title}
              to={resource.href}
              className="block p-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-base font-bold text-dragon-dark mb-1">{resource.title}</h3>
              <p className="text-xs text-dragon-gray line-clamp-2">
                {resource.description}
              </p>
            </Link>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ResourcesMenu;
