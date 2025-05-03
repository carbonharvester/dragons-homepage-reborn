
import React from 'react';
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { resourcePages } from '@/data/navigationData';

const ResourcesMenu = () => {
  // Use timestamp for cache busting
  const timestamp = Date.now();
  
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-dragon-gray font-medium text-base">
        <span className="flex items-center">
          Resources
          <ChevronDown size={16} className="ml-1" />
        </span>
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white p-4 shadow-lg rounded-lg">
        <ul className="grid grid-cols-2 gap-3 w-[400px]">
          {resourcePages.map((resource) => (
            <li key={`${resource.title}-${timestamp}`}>
              <NavigationMenuLink asChild>
                <Link 
                  to={resource.href}
                  className="block p-2 hover:bg-gray-50 rounded text-dragon-dark hover:text-dragon"
                >
                  <div className="font-medium">{resource.title}</div>
                  {resource.description && (
                    <p className="text-xs text-gray-500 mt-1">{resource.description}</p>
                  )}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ResourcesMenu;
