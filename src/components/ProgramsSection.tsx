
import React, { useState } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import { schoolTrips, summerAbroad, adultTrips, educatorTrips } from '@/data/programsData';
import ProgramCategorySelector from './programs/ProgramCategorySelector';
import ProgramCategoryContent from './programs/ProgramCategoryContent';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const ProgramsSection = () => {
  const [activeCategory, setActiveCategory] = useState("school-trips");
  const isMobile = useIsMobile();
  
  // Enhanced scroll animation with staggered reveals
  const { elementRef, isVisible } = useScrollAnimation(3, {
    threshold: 0.1,
    stagger: true,
    staggerDelay: 150
  });

  // Determine which programs to show based on active category (excluding multi-year)
  const getActivePrograms = () => {
    switch (activeCategory) {
      case "school-trips":
        return schoolTrips;
      case "summer-abroad":
        return summerAbroad;
      case "educator-trips":
        return educatorTrips;
      case "adult-trips":
        return adultTrips;
      default:
        return [];
    }
  };

  return (
    <section id="programs" className="py-20 bg-dragon-beige" ref={elementRef}>
      <div className="container-wide">
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-heading relative">
            Transformative Programs
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-dragon transition-all duration-1000 ${isVisible ? 'w-24' : 'w-0'}`} style={{ transitionDelay: '400ms' }}></div>
          </h2>
          <p className="section-subheading mx-auto">Discover cultural immersion experiences that challenge, inspire, and transform students while empowering African communities with sustainable impact.</p>
        </div>

        {/* Program Category Buttons with enhanced hover effects */}
        <div className={`transition-all duration-600 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <ProgramCategorySelector activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </div>

        {/* Program Content with staggered animation */}
        <div className={`transition-all duration-600 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '400ms' }}>
          <ProgramCategoryContent activeCategory={activeCategory} isMobile={isMobile} programs={getActivePrograms()} />
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
