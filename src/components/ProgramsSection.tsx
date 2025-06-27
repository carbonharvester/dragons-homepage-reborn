
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
    <section id="programs" className="py-20 bg-dragon-beige relative overflow-hidden" ref={elementRef}>
      {/* African Pattern Border Decorations */}
      <div className="absolute top-0 left-0 w-full h-2 opacity-30">
        <img 
          src="https://res.cloudinary.com/dng12bd0a/image/upload/v1751043470/7ee27c1f-ab9e-4f81-9513-781c149dcbb2_sagcne.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-12 h-32 opacity-20">
        <img 
          src="https://res.cloudinary.com/dng12bd0a/image/upload/v1751043470/7ee27c1f-ab9e-4f81-9513-781c149dcbb2_sagcne.png" 
          alt="" 
          className="w-full h-full object-cover rounded-r-lg"
        />
      </div>
      
      <div className="container-wide relative z-10">
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-heading">
            Transformative Programs
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
