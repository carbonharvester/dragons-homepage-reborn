
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProgramCard from './programs/ProgramCard';
import MultiYearCurriculum from './programs/MultiYearCurriculum';
import { 
  programCategories, 
  schoolTrips, 
  summerAbroad, 
  adultTrips, 
  multiYearProgram 
} from '@/data/programsData';

const ProgramsSection = () => {
  const [activeCategory, setActiveCategory] = useState("school-trips");
  
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
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {programCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 ${
                activeCategory === category.id
                  ? "bg-dragon text-white"
                  : "bg-white border border-dragon text-dragon hover:bg-dragon hover:text-white"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* School Trips Content */}
        <div className={`mt-8 ${activeCategory === "school-trips" ? "block" : "hidden"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolTrips.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>

        {/* Summer Abroad Content */}
        <div className={`mt-8 ${activeCategory === "summer-abroad" ? "block" : "hidden"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {summerAbroad.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>

        {/* Adult Trips Content */}
        <div className={`mt-8 ${activeCategory === "adult-trips" ? "block" : "hidden"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {adultTrips.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="btn-primary" asChild>
              <Link to="/adult-programs">View All Adult Programs</Link>
            </Button>
          </div>
        </div>

        {/* Multi-Year Curriculum Content */}
        <div className={`mt-8 ${activeCategory === "multi-year" ? "block" : "hidden"}`}>
          <MultiYearCurriculum data={multiYearProgram} />
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
