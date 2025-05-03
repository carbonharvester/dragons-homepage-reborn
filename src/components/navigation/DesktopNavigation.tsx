
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import ProgramsMenu from './ProgramsMenu';
import ResourcesMenu from './ResourcesMenu';

const DesktopNavigation = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      <NavigationMenu>
        <NavigationMenuList className="gap-6">
          <ProgramsMenu />
          <ResourcesMenu />
          
          <NavigationMenuItem>
            <Link to="/about" className="text-dragon-gray hover:text-dragon font-medium text-base px-3 py-2">
              About Us
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/#why-us" className="text-dragon-gray hover:text-dragon font-medium text-base px-3 py-2">
              Why Kapes?
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button className="btn-primary" asChild>
        <Link to="/partner-with-us">Apply Now</Link>
      </Button>
    </nav>
  );
};

export default DesktopNavigation;
