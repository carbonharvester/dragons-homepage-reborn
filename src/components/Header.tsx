
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
              src="/lovable-uploads/112da32d-2905-42eb-9b60-624e1e17abad.png" 
              alt="Kapes Adventures - Travel That Transforms" 
              className="h-16"
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
