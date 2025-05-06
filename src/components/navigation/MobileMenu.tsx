
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import CalendlyEmbed from '../CalendlyEmbed';
import { programCategories } from '@/data/navigationData';

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
  const [expandedCategories, setExpandedCategories] = useState<{[key: string]: boolean}>({});

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle]
    }));
  };

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
                
                {programCategories.map((category) => (
                  <div key={category.title} className="py-1">
                    <div className="flex items-center justify-between">
                      <Link 
                        to={category.href} 
                        className="block py-1 text-dragon-dark"
                        onClick={toggleMenu}
                      >
                        {category.title}
                      </Link>
                      {category.programs && category.programs.length > 0 && (
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            toggleCategory(category.title);
                          }}
                          className="p-1"
                        >
                          {expandedCategories[category.title] ? 
                            <ChevronUp size={16} /> : 
                            <ChevronDown size={16} />
                          }
                        </button>
                      )}
                    </div>
                    
                    {expandedCategories[category.title] && category.programs && (
                      <div className="pl-3 mt-1 space-y-1 border-l border-dragon-beige">
                        {category.programs.map((program) => (
                          <Link 
                            key={program.title}
                            to={program.href}
                            className="block py-1 text-sm text-dragon-dark"
                            onClick={toggleMenu}
                          >
                            {program.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
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
