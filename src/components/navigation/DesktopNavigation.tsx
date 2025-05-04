
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ProgramsMenu from './ProgramsMenu';
import ResourcesMenu from './ResourcesMenu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const DesktopNavigation = () => {
  const [programsMenuOpen, setProgramsMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  
  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {/* Main navigation items */}
      <div 
        className="relative"
        onMouseEnter={() => setProgramsMenuOpen(true)}
        onMouseLeave={() => setProgramsMenuOpen(false)}
      >
        <button
          className="flex items-center py-2 px-3 text-dragon-dark hover:text-dragon transition-colors"
        >
          <span>Programs</span>
          <ChevronDown size={16} className="ml-1" />
        </button>
        {/* Invisible bridge to prevent gap between button and menu */}
        <div className="absolute h-4 w-full left-0 top-full"></div>
        {programsMenuOpen && <ProgramsMenu />}
      </div>
      
      <Link to="/about" className="py-2 px-3 text-dragon-dark hover:text-dragon transition-colors">
        About Us
      </Link>
      
      <div 
        className="relative"
        onMouseEnter={() => setResourcesMenuOpen(true)}
        onMouseLeave={() => setResourcesMenuOpen(false)}
      >
        <button
          className="flex items-center py-2 px-3 text-dragon-dark hover:text-dragon transition-colors"
        >
          <span>Resources</span>
          <ChevronDown size={16} className="ml-1" />
        </button>
        {/* Invisible bridge to prevent gap between button and menu */}
        <div className="absolute h-4 w-full left-0 top-full"></div>
        {resourcesMenuOpen && <ResourcesMenu />}
      </div>
      
      <Button size="sm" asChild>
        <a 
          href="https://form.typeform.com/to/example" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-2"
        >
          Apply Now
        </a>
      </Button>
    </nav>
  );
};

export default DesktopNavigation;
