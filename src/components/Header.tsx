
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return <header className="bg-white sticky top-0 z-50 shadow-sm">
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
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="flex space-x-6">
            <a href="/#programs" className="text-dragon-gray hover:text-dragon font-medium">Programs</a>
            <Link to="/about" className="text-dragon-gray hover:text-dragon font-medium">About Us</Link>
            <a href="/#why-us" className="text-dragon-gray hover:text-dragon font-medium">Why Choose Us</a>
            <a href="/#stories" className="text-dragon-gray hover:text-dragon font-medium">Student Stories</a>
          </div>
          <Button className="btn-primary">Enrol Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-dragon p-2" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="lg:hidden bg-white w-full absolute top-full left-0 shadow-lg py-4 animate-fade-in">
          <div className="container-wide flex flex-col space-y-4">
            <a href="/#programs" className="text-dragon-gray hover:text-dragon py-2 font-medium" onClick={toggleMenu}>
              Programs
            </a>
            <Link to="/about" className="text-dragon-gray hover:text-dragon py-2 font-medium" onClick={toggleMenu}>
              About Us
            </Link>
            <a href="/#why-us" className="text-dragon-gray hover:text-dragon py-2 font-medium" onClick={toggleMenu}>
              Why Choose Us
            </a>
            <a href="/#stories" className="text-dragon-gray hover:text-dragon py-2 font-medium" onClick={toggleMenu}>
              Student Stories
            </a>
            <Button className="btn-primary w-full">Apply Now</Button>
          </div>
        </div>}
    </header>;
};

export default Header;
