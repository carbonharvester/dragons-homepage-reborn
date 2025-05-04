
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProgramCard from './programs/ProgramCard';
import MultiYearCurriculum from './programs/MultiYearCurriculum';
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { 
  programCategories, 
  schoolTrips, 
  summerAbroad, 
  adultTrips, 
  multiYearProgram 
} from '@/data/programsData';

const ProgramsSection = () => {
  const [activeCategory, setActiveCategory] = useState("school-trips");
  const isMobile = useIsMobile();
  
  // Helper function to render program cards in either grid or carousel
  const renderProgramCards = (programs) => {
    if (isMobile) {
      return (
        <Carousel className="w-full px-4">
          <CarouselContent>
            {programs.map((program, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="p-1">
                  <ProgramCard program={program} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-4">
            <CarouselPrevious className="static mr-2 translate-y-0" />
            <CarouselNext className="static ml-2 translate-y-0" />
          </div>
        </Carousel>
      );
    } else {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      );
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
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {programCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 whitespace-normal h-auto ${
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
          {renderProgramCards(schoolTrips)}
          <div className="text-center mt-8">
            <p className="max-w-3xl mx-auto mb-6 text-dragon-gray">
              Our School Trips program offers 5-7 day immersive experiences designed to complement your curriculum 
              and provide students with hands-on learning focused on specific themes and projects.
            </p>
            <Button className="btn-primary" asChild>
              <Link to="/programs">Learn More About Our Programs</Link>
            </Button>
          </div>
        </div>

        {/* Summer Abroad Content */}
        <div className={`mt-8 ${activeCategory === "summer-abroad" ? "block" : "hidden"}`}>
          {renderProgramCards(summerAbroad)}
          <div className="text-center mt-8">
            <p className="max-w-3xl mx-auto mb-6 text-dragon-gray">
              Our Summer Abroad programs offer 3-4 week immersive experiences for students seeking 
              to develop skills, explore interests, and make meaningful contributions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-primary" asChild>
                <Link to="/summer-abroad">View All Summer Programs</Link>
              </Button>
              <Button variant="outline" className="border-dragon text-dragon hover:bg-dragon hover:text-white" asChild>
                <a 
                  href="https://form.typeform.com/to/rtxmvp4L" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Adult Programs Content */}
        <div className={`mt-8 ${activeCategory === "adult-trips" ? "block" : "hidden"}`}>
          {renderProgramCards(adultTrips)}
          <div className="text-center mt-8">
            <p className="max-w-3xl mx-auto mb-6 text-dragon-gray">
              Adult Programs are perfect for individuals or groups looking to combine purposeful 
              travel with personal or professional development in Kenya.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-primary" asChild>
                <Link to="/adult-programs">View All Adult Programs</Link>
              </Button>
              <Button variant="outline" className="border-dragon text-dragon hover:bg-dragon hover:text-white" asChild>
                <a 
                  href="https://form.typeform.com/to/rtxmvp4L" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Multi-Year Curriculum Content */}
        <div className={`mt-8 ${activeCategory === "multi-year" ? "block" : "hidden"}`}>
          <MultiYearCurriculum data={multiYearProgram} />
          <div className="text-center mt-8">
            <p className="max-w-3xl mx-auto mb-6 text-dragon-gray">
              Our Multi-Year Curriculum provides a comprehensive educational journey that builds upon 
              itself year after year, creating a cohesive learning experience.
            </p>
            <Button className="btn-primary" asChild>
              <Link to="/multi-year-curriculum">Learn More About Multi-Year Curriculum</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
