
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const programCategories = [
  {
    title: "School Trips",
    href: "/school-trips",
    description: "Educational trips for schools focusing on immersive learning experiences.",
    programs: [
      { name: "Food For Education", href: "/programs/food-for-education" },
      { name: "Community Conservation", href: "/programs/community-conservation" },
      { name: "Empowering Young Women", href: "/programs/empowering-women" },
    ]
  },
  {
    title: "Summer Abroad",
    href: "/summer-abroad",
    description: "Summer programs abroad for students looking for adventure and education.",
    programs: [
      { name: "Food For Education", href: "/programs/food-for-education" },
      { name: "Capturing Kenya", href: "/programs/capturing-kenya" },
    ]
  },
  {
    title: "Multi-Year Curriculum",
    href: "/curriculum-guide",
    description: "Progressive multi-year educational travel curriculum for schools.",
    programs: []
  },
  {
    title: "Adult Programs",
    href: "/adult-programs",
    description: "Educational and immersive experiences designed for adults.",
    programs: [
      { name: "Permaculture Design Course", href: "/programs/permaculture-design-course" },
    ]
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <nav className="hidden lg:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <div className="relative">
                  <div className="text-dragon-gray hover:text-dragon font-medium text-base bg-transparent hover:bg-transparent px-3 py-2 cursor-pointer">
                    Programs
                  </div>
                  <div className="absolute top-full left-0 hidden hover:block z-50 shadow-lg rounded-md border-t border-gray-100 bg-white">
                    <div className="p-4 grid w-[600px] gap-6 md:grid-cols-2">
                      {programCategories.map((category) => (
                        <div key={category.title} className="space-y-3">
                          <Link
                            to={category.href}
                            className="block rounded-md transition-colors"
                          >
                            <h3 className="text-base font-bold text-dragon-dark">{category.title}</h3>
                          </Link>
                          <p className="text-xs text-dragon-gray mb-2 line-clamp-2">
                            {category.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="text-dragon-gray hover:text-dragon font-medium text-base px-3 py-2">
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/blog" className="text-dragon-gray hover:text-dragon font-medium text-base px-3 py-2">
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/#why-us" className="text-dragon-gray hover:text-dragon font-medium text-base px-3 py-2">
                  Why Choose Us
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="btn-primary">Enrol Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-dragon p-2" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white w-full absolute top-full left-0 shadow-lg py-4 animate-fade-in">
          <div className="container-wide flex flex-col space-y-4">
            <div className="border-b border-gray-200 pb-2">
              <div className="flex items-center justify-between py-3">
                <span className="font-medium text-base text-dragon-dark">Programs</span>
                <ChevronDown size={16} className="text-dragon-gray" />
              </div>
              <div className="pl-4 space-y-3 py-2">
                {programCategories.map(category => (
                  <div key={category.title} className="mb-4">
                    <Link 
                      to={category.href}
                      className="block text-dragon-dark font-medium text-base py-2"
                      onClick={toggleMenu}
                    >
                      {category.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/about" className="text-dragon-gray hover:text-dragon py-3 font-medium text-base" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/blog" className="text-dragon-gray hover:text-dragon py-3 font-medium text-base" onClick={toggleMenu}>
              Blog
            </Link>
            <a href="/#why-us" className="text-dragon-gray hover:text-dragon py-3 font-medium text-base" onClick={toggleMenu}>
              Why Choose Us
            </a>
            <Button className="btn-primary w-full mt-2">Apply Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
