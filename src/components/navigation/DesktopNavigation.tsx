
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
      <div className="relative group">
        <Link 
          to="/programs" 
          className="flex items-center py-2 px-3 text-dragon-dark hover:text-dragon transition-colors"
          onMouseEnter={() => setProgramsMenuOpen(true)}
          onMouseLeave={() => setProgramsMenuOpen(false)}
        >
          <span>Programs</span>
          <ChevronDown size={16} className="ml-1" />
        </Link>
        {programsMenuOpen && <ProgramsMenu />}
      </div>
      
      <Link to="/podcast" className="py-2 px-3 text-dragon-dark hover:text-dragon transition-colors">
        Podcast
      </Link>
      
      <Link to="/about" className="py-2 px-3 text-dragon-dark hover:text-dragon transition-colors">
        About Us
      </Link>
      
      <div className="relative group">
        <button
          className="flex items-center py-2 px-3 text-dragon-dark hover:text-dragon transition-colors"
          onMouseEnter={() => setResourcesMenuOpen(true)}
          onMouseLeave={() => setResourcesMenuOpen(false)}
        >
          <span>Resources</span>
          <ChevronDown size={16} className="ml-1" />
        </button>
        {resourcesMenuOpen && <ResourcesMenu />}
      </div>
      
      <Link to="/blog" className="py-2 px-3 text-dragon-dark hover:text-dragon transition-colors">
        Blog
      </Link>
      
      <Link to="/partner-with-us" className="py-2 px-3 text-dragon-dark hover:text-dragon transition-colors">
        Partner With Us
      </Link>
      
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
