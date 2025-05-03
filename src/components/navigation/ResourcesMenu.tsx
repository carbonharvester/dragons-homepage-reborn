
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
        <ul className="grid gap-3">
          {resourcePages.map((resource) => (
            <li key={`${resource.title}-${timestamp}`}>
              <NavigationMenuLink asChild>
                <Link 
                  to={resource.href}
                  className="block p-2 hover:bg-gray-50 rounded text-dragon-dark hover:text-dragon"
                >
                  {resource.title}
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
