
import React from 'react';
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import CalendlyEmbed from '../CalendlyEmbed';

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
                <Link to="/programs" className="block py-2 text-dragon-dark" onClick={toggleMenu}>
                  All Programs
                </Link>
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
                <Link to="/blog" className="block py-2 text-dragon-dark" onClick={toggleMenu}>
                  Blog
                </Link>
                <Link to="/podcast" className="block py-2 text-dragon-dark" onClick={toggleMenu}>
                  Podcast
                </Link>
                <Link to="/discover-kenya" className="block py-2 text-dragon-dark" onClick={toggleMenu}>
                  Discover Kenya
                </Link>
                <Link to="/health-and-safety" className="block py-2 text-dragon-dark" onClick={toggleMenu}>
                  Health & Safety
                </Link>
                <Link to="/partner-with-us" className="block py-2 text-dragon-dark" onClick={toggleMenu}>
                  Partner With Us
                </Link>
                <Link to="/faq" className="block py-2 text-dragon-dark" onClick={toggleMenu}>
                  FAQ
                </Link>
              </div>
            )}
          </div>
          
          <CalendlyEmbed 
            url="https://calendly.com/kapesuniforms/discoverymeeting"
            text="Schedule Consultation"
            variant="default" 
            className="bg-dragon text-white py-2 px-4 rounded text-center"
            onClick={toggleMenu}
          />
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
