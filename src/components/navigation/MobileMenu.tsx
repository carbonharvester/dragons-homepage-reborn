
import React from 'react';
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { programCategories, resourcePages } from '@/data/navigationData';

interface MobileMenuProps {
  isMenuOpen: boolean;
  mobileProgramsExpanded: boolean;
  mobileResourcesExpanded: boolean;
  toggleMobilePrograms: () => void;
  toggleMobileResources: () => void;
  toggleMenu: () => void;
}

const MobileMenu = ({
  isMenuOpen,
  mobileProgramsExpanded,
  mobileResourcesExpanded,
  toggleMobilePrograms,
  toggleMobileResources,
  toggleMenu
}: MobileMenuProps) => {
  if (!isMenuOpen) return null;
  
  return (
    <div className="lg:hidden bg-white w-full absolute top-full left-0 shadow-lg py-4 animate-fade-in">
      <div className="container-wide flex flex-col space-y-4">
        {/* Programs Section */}
        <div className="border-b border-gray-200 pb-2">
          <button 
            className="flex items-center justify-between py-3 w-full" 
            onClick={toggleMobilePrograms}
          >
            <span className="font-medium text-base text-dragon-dark">Programs</span>
            <ChevronDown size={16} className={`text-dragon-gray transform transition-transform ${mobileProgramsExpanded ? 'rotate-180' : ''}`} />
          </button>
          
          {mobileProgramsExpanded && (
            <div className="pl-4 py-2 space-y-3">
              {programCategories.map(category => (
                <div key={category.title} className="mb-4">
                  <Link 
                    to={category.href}
                    className="block text-dragon-dark font-medium text-base py-2"
                    onClick={toggleMenu}
                  >
                    {category.title}
                  </Link>
                  
                  {category.programs.length > 0 && (
                    <ul className="pl-4 space-y-1">
                      {category.programs.map((program) => (
                        <li key={program.name}>
                          <Link 
                            to={program.href}
                            className="block text-dragon text-sm py-1"
                            onClick={toggleMenu}
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
          )}
        </div>

        {/* Resources Section */}
        <div className="border-b border-gray-200 pb-2">
          <button 
            className="flex items-center justify-between py-3 w-full"
            onClick={toggleMobileResources}
          >
            <span className="font-medium text-base text-dragon-dark">Resources</span>
            <ChevronDown size={16} className={`text-dragon-gray transform transition-transform ${mobileResourcesExpanded ? 'rotate-180' : ''}`} />
          </button>
          
          {mobileResourcesExpanded && (
            <div className="pl-4 space-y-2 py-2">
              {resourcePages.map(resource => (
                <Link 
                  key={resource.title}
                  to={resource.href}
                  className="block text-dragon text-sm py-1"
                  onClick={toggleMenu}
                >
                  {resource.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/about" className="text-dragon-gray hover:text-dragon py-3 font-medium text-base" onClick={toggleMenu}>
          About Us
        </Link>
        <a href="/#why-us" className="text-dragon-gray hover:text-dragon py-3 font-medium text-base" onClick={toggleMenu}>
          Why Kapes?
        </a>
        <Button className="btn-primary w-full mt-2" asChild>
          <Link to="/partner-with-us" onClick={toggleMenu}>Apply Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
