import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { programCategories, whatWeDoItems } from '@/data/navigationData';

const DesktopNavigation = () => {
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {/* What We Do */}
      <div
        className="relative"
        onMouseEnter={() => setWhatWeDoOpen(true)}
        onMouseLeave={() => setWhatWeDoOpen(false)}
      >
        <button className="flex items-center py-2 px-4 text-kapes-charcoal hover:text-kapes-orange font-medium transition-colors">
          What We Do
          <ChevronDown size={16} className={`ml-1 transition-transform ${whatWeDoOpen ? 'rotate-180' : ''}`} />
        </button>
        {whatWeDoOpen && (
          <>
            <div className="absolute h-2 w-full left-0 top-full" />
            <div className="absolute left-0 top-[calc(100%+8px)] w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
              {whatWeDoItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="block px-5 py-3 hover:bg-kapes-cream transition-colors"
                >
                  <span className="font-semibold text-kapes-charcoal block">{item.title}</span>
                  <span className="text-sm text-gray-500">{item.description}</span>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Programs */}
      <div
        className="relative"
        onMouseEnter={() => setProgramsOpen(true)}
        onMouseLeave={() => setProgramsOpen(false)}
      >
        <button className="flex items-center py-2 px-4 text-kapes-charcoal hover:text-kapes-orange font-medium transition-colors">
          Programs
          <ChevronDown size={16} className={`ml-1 transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
        </button>
        {programsOpen && (
          <>
            <div className="absolute h-2 w-full left-0 top-full" />
            <div className="absolute left-0 top-[calc(100%+8px)] w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
              <Link
                to="/programs"
                className="block px-5 py-3 hover:bg-kapes-cream transition-colors border-b border-gray-100"
              >
                <span className="font-semibold text-kapes-charcoal">All Programs</span>
              </Link>
              {programCategories.map((program) => (
                <Link
                  key={program.title}
                  to={program.href}
                  className="block px-5 py-3 hover:bg-kapes-cream transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-semibold text-kapes-charcoal block">{program.title}</span>
                      <span className="text-sm text-gray-500">{program.description}</span>
                    </div>
                  </div>
                  {program.impact && (
                    <span className="inline-block mt-2 text-xs font-medium text-kapes-orange bg-kapes-orange/10 px-2 py-1 rounded-full">
                      {program.impact}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Our Impact - Direct Link */}
      <Link
        to="/impact"
        className="py-2 px-4 text-kapes-charcoal hover:text-kapes-orange font-medium transition-colors"
      >
        Our Impact
      </Link>

      {/* Stories Link */}
      <Link
        to="/blog"
        className="py-2 px-4 text-kapes-charcoal hover:text-kapes-orange font-medium transition-colors"
      >
        Stories
      </Link>

      {/* Trip Scorecard CTA */}
      <Button
        variant="outline"
        className="ml-2 border-2 border-kapes-orange text-kapes-orange hover:bg-kapes-orange hover:text-white font-semibold"
        asChild
      >
        <Link to="/scorecard">
          Trip Scorecard
        </Link>
      </Button>

      {/* Primary CTA */}
      <Button
        className="ml-2 btn-action"
        asChild
      >
        <Link to="/programs">
          Get Involved
        </Link>
      </Button>
    </nav>
  );
};

export default DesktopNavigation;
