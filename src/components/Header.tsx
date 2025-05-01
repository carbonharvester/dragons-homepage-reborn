
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-wide flex justify-between items-center py-4">
        <a href="/" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-dragon">
            <span className="font-serif italic">Mission</span> KAPES
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="flex space-x-6">
            <a href="#programs" className="text-dragon-gray hover:text-dragon font-medium">Programs</a>
            <a href="#about" className="text-dragon-gray hover:text-dragon font-medium">About Us</a>
            <a href="#why-us" className="text-dragon-gray hover:text-dragon font-medium">Why Choose Us</a>
            <a href="#stories" className="text-dragon-gray hover:text-dragon font-medium">Student Stories</a>
          </div>
          <Button className="btn-primary">Enroll Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-dragon p-2" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="lg:hidden bg-white w-full absolute top-full left-0 shadow-lg py-4 animate-fade-in">
          <div className="container-wide flex flex-col space-y-4">
            <a href="#programs" className="text-dragon-gray hover:text-dragon py-2 font-medium" onClick={toggleMenu}>
              Programs
            </a>
            <a href="#about" className="text-dragon-gray hover:text-dragon py-2 font-medium" onClick={toggleMenu}>
              About Us
            </a>
            <a href="#why-us" className="text-dragon-gray hover:text-dragon py-2 font-medium" onClick={toggleMenu}>
              Why Choose Us
            </a>
            <a href="#stories" className="text-dragon-gray hover:text-dragon py-2 font-medium" onClick={toggleMenu}>
              Student Stories
            </a>
            <Button className="btn-primary w-full">Apply Now</Button>
          </div>
        </div>}
    </header>;
};
export default Header;
