
import React, { useState } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import { schoolTrips, summerAbroad, adultTrips, multiYearProgram } from '@/data/programsData';
import ProgramCategorySelector from './programs/ProgramCategorySelector';
import ProgramCategoryContent from './programs/ProgramCategoryContent';

const ProgramsSection = () => {
  const [activeCategory, setActiveCategory] = useState("school-trips");
  const isMobile = useIsMobile();
  
  // Determine which programs to show based on active category
  const getActivePrograms = () => {
    switch (activeCategory) {
      case "school-trips":
        return schoolTrips;
      case "summer-abroad":
        return summerAbroad;
      case "adult-trips":
        return adultTrips;
      default:
        return [];
    }
  };

  return (
    <section id="programs" className="py-20 bg-dragon-beige">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="section-heading">Transformative Programs</h2>
          <p className="section-subheading mx-auto">
            Discover cultural immersion experiences designed to challenge, inspire, and transform.
          </p>
        </div>

        {/* Program Category Buttons */}
        <ProgramCategorySelector 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Program Content */}
        <ProgramCategoryContent 
          activeCategory={activeCategory}
          isMobile={isMobile}
          programs={getActivePrograms()}
          multiYearData={multiYearProgram}
        />
      </div>
    </section>
  );
};

export default ProgramsSection;
