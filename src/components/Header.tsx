
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileMenu from './navigation/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileProgramsExpanded, setMobileProgramsExpanded] = useState(false);
  const [mobileResourcesExpanded, setMobileResourcesExpanded] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobilePrograms = () => {
    setMobileProgramsExpanded(!mobileProgramsExpanded);
  };

  const toggleMobileResources = () => {
    setMobileResourcesExpanded(!mobileResourcesExpanded);
  };
  
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-wide flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/741a3f8a-9da4-4fa9-a3d2-363c5231bed5.png" 
              alt="Kapes logo" 
              className="h-8 mr-2 filter brightness-0 sepia(100%) hue-rotate(116deg) saturate(1000%) contrast(0.8)"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNavigation />

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-dragon p-2" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isMenuOpen={isMenuOpen}
        mobileProgramsExpanded={mobileProgramsExpanded}
        mobileResourcesExpanded={mobileResourcesExpanded}
        toggleMobilePrograms={toggleMobilePrograms}
        toggleMobileResources={toggleMobileResources}
        toggleMenu={toggleMenu}
      />
    </header>
  );
};

export default Header;
