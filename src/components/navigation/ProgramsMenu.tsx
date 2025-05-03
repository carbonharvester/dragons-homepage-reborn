
import React from 'react';
import { Link } from "react-router-dom";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { programCategories } from '@/data/navigationData';

const ProgramsMenu = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-dragon-gray hover:text-dragon font-medium text-base bg-transparent hover:bg-transparent focus:bg-transparent px-3 py-2">
        Programs
      </NavigationMenuTrigger>
      <NavigationMenuContent className="z-50">
        <div className="p-4 grid w-[600px] gap-6 md:grid-cols-2">
          {programCategories.map((category) => (
            <div key={category.title} className="space-y-3">
              <Link
                to={category.href}
                className="block rounded-md transition-colors"
              >
                <h3 className="text-base font-bold text-dragon-dark">{category.title}</h3>
              </Link>
              
              {category.programs.length > 0 && (
                <ul className="text-sm space-y-1">
                  {category.programs.map((program) => (
                    <li key={program.name}>
                      <Link 
                        to={program.href}
                        className="text-dragon hover:text-dragon-dark transition-colors"
                      >
                        {program.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ProgramsMenu;
