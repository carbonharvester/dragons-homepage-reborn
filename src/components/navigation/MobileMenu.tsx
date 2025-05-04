
import React from 'react';
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  return (
    <div className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ${
      isMenuOpen ? "max-h-[1000px] border-t border-gray-100" : "max-h-0"
    }`}>
      <div className="container-wide py-4">
        <nav className="flex flex-col space-y-4">
          <Link to="/programs" className="py-2 text-dragon-dark" onClick={toggleMenu}>
            All Programs
          </Link>
          
          <div>
            <button 
              className="flex items-center justify-between w-full py-2 text-dragon-dark"
              onClick={toggleMobilePrograms}
              aria-expanded={mobileProgramsExpanded}
            >
              <span>Programs</span>
              {mobileProgramsExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {mobileProgramsExpanded && (
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-dragon-beige">
                <Link to="/school-trips" className="block py-2 text-dragon-dark" onClick={toggleMenu}>
                  School Trips
                </Link>
                <Link to="/summer-abroad" className="block py-2 text-dragon-dark" onClick={toggleMenu}>
                  Summer Abroad
                </Link>
                <Link to="/multi-year-curriculum" className="block py-2 text-dragon-dark" onClick={toggleMenu}>
                  Multi-Year Curriculum
                </Link>
                <Link to="/adult-programs" className="block py-2 text-dragon-dark" onClick={toggleMenu}>
                  Adult Programs
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/podcast" className="py-2 text-dragon-dark" onClick={toggleMenu}>
            Podcast
          </Link>
          
          <Link to="/about" className="py-2 text-dragon-dark" onClick={toggleMenu}>
            About Us
          </Link>
          
          <div>
            <button 
              className="flex items-center justify-between w-full py-2 text-dragon-dark"
              onClick={toggleMobileResources}
              aria-expanded={mobileResourcesExpanded}
            >
              <span>Resources</span>
              {mobileResourcesExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {mobileResourcesExpanded && (
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-dragon-beige">
                <Link to="/discover-kenya" className="block py-2 text-dragon-dark" onClick={toggleMenu}>
                  Discover Kenya
                </Link>
                <Link to="/health-and-safety" className="block py-2 text-dragon-dark" onClick={toggleMenu}>
                  Health & Safety
                </Link>
                <Link to="/faq" className="block py-2 text-dragon-dark" onClick={toggleMenu}>
                  FAQ
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/blog" className="py-2 text-dragon-dark" onClick={toggleMenu}>
            Blog
          </Link>
          
          <Link to="/partner-with-us" className="py-2 text-dragon-dark" onClick={toggleMenu}>
            Partner With Us
          </Link>
          
          <a 
            href="https://form.typeform.com/to/example" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-dragon text-white py-2 px-4 rounded text-center"
            onClick={toggleMenu}
          >
            Apply Now
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
