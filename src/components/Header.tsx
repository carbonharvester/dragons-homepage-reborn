import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileMenu from './navigation/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileProgramsExpanded, setMobileProgramsExpanded] = useState(false);
  const [mobileResourcesExpanded, setMobileResourcesExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-white py-4'
      }`}
    >
      <div className="container-wide flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/9cdd3641-0b63-46d4-9b2d-9e6d3a85f70e.png"
            alt="Kapes Adventures - Travel That Transforms"
            className={`transition-all duration-300 ${isScrolled ? 'h-9' : 'h-10'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNavigation />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-dragon p-2 hover:bg-dragon/5 rounded-lg transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
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
