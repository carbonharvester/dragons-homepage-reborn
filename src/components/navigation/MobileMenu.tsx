import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Button } from '@/components/ui/button';
import { programCategories, whatWeDoItems } from '@/data/navigationData';

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
  toggleMenu
}: MobileMenuProps) => {
  const [whatWeDoExpanded, setWhatWeDoExpanded] = useState(false);
  const [programsExpanded, setProgramsExpanded] = useState(false);

  if (!isMenuOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-white">
      {/* Header with close button */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
        <Link to="/" onClick={toggleMenu}>
          <img
            src="/lovable-uploads/9cdd3641-0b63-46d4-9b2d-9e6d3a85f70e.png"
            alt="Kapes Adventures"
            className="h-10"
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="p-2 text-kapes-charcoal hover:text-kapes-orange transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="px-6 py-6 overflow-y-auto max-h-[calc(100vh-180px)]">
        {/* What We Do */}
        <div className="border-b border-gray-100 py-4">
          <button
            onClick={() => setWhatWeDoExpanded(!whatWeDoExpanded)}
            className="flex items-center justify-between w-full text-lg font-semibold text-kapes-charcoal"
          >
            What We Do
            {whatWeDoExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {whatWeDoExpanded && (
            <div className="mt-3 space-y-3 pl-4">
              {whatWeDoItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={toggleMenu}
                  className="block"
                >
                  <span className="font-medium text-kapes-charcoal">{item.title}</span>
                  <span className="block text-sm text-gray-500">{item.description}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Programs */}
        <div className="border-b border-gray-100 py-4">
          <button
            onClick={() => setProgramsExpanded(!programsExpanded)}
            className="flex items-center justify-between w-full text-lg font-semibold text-kapes-charcoal"
          >
            Programs
            {programsExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {programsExpanded && (
            <div className="mt-3 space-y-4 pl-4">
              <Link
                to="/programs"
                onClick={toggleMenu}
                className="block font-medium text-kapes-charcoal"
              >
                All Programs
              </Link>
              {programCategories.map((program) => (
                <Link
                  key={program.title}
                  to={program.href}
                  onClick={toggleMenu}
                  className="block"
                >
                  <span className="font-medium text-kapes-charcoal">{program.title}</span>
                  <span className="block text-sm text-gray-500">{program.description}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Our Impact - Direct Link */}
        <div className="border-b border-gray-100 py-4">
          <Link
            to="/impact"
            onClick={toggleMenu}
            className="text-lg font-semibold text-kapes-charcoal"
          >
            Our Impact
          </Link>
        </div>

        {/* Stories - Direct Link */}
        <div className="border-b border-gray-100 py-4">
          <Link
            to="/blog"
            onClick={toggleMenu}
            className="text-lg font-semibold text-kapes-charcoal"
          >
            Stories
          </Link>
        </div>

        {/* Trip Scorecard - Direct Link */}
        <div className="border-b border-gray-100 py-4">
          <Link
            to="/scorecard"
            onClick={toggleMenu}
            className="text-lg font-semibold text-kapes-orange"
          >
            Trip Scorecard
          </Link>
        </div>
      </nav>

      {/* Fixed CTA at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100 space-y-3">
        <Button
          variant="outline"
          className="w-full border-2 border-kapes-orange text-kapes-orange hover:bg-kapes-orange hover:text-white text-lg py-6"
          asChild
        >
          <Link to="/scorecard" onClick={toggleMenu}>
            Trip Scorecard
          </Link>
        </Button>
        <Button className="w-full btn-action text-lg py-6" asChild>
          <Link to="/programs" onClick={toggleMenu}>
            Get Involved
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
