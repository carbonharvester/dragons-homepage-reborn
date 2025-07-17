
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProgramCard from './ProgramCard';
import ProgramScrollCards from './ProgramScrollCards';
import MultiYearCurriculum from './MultiYearCurriculum';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface ProgramCategoryContentProps {
  activeCategory: string;
  isMobile: boolean;
  programs?: any[];
  multiYearData?: any;
}

const ProgramCategoryContent = ({ activeCategory, isMobile, programs, multiYearData }: ProgramCategoryContentProps) => {
  // Helper function to render program cards - now using scroll cards for desktop
  const renderProgramCards = (programs) => {
    if (!programs) return null;
    
    if (isMobile) {
      return (
        <Carousel className="w-full px-4">
          <CarouselContent className="-ml-1">
            {programs.map((program, index) => (
              <CarouselItem key={index} className="basis-full pl-1 h-full">
                <div className="h-full">
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
      return <ProgramScrollCards programs={programs} category={activeCategory} />;
    }
  };

  return (
    <>
      {activeCategory === "multi-year" ? (
        <div className={`mt-8 ${activeCategory === "multi-year" ? "block" : "hidden"}`}>
          {multiYearData && <MultiYearCurriculum data={multiYearData} />}
          <div className="text-center mt-8">
            <Button className="btn-primary" asChild>
              <Link to="/programs">Learn More About Our Programs</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className={`mt-8 ${activeCategory ? "block" : "hidden"}`}>
          {renderProgramCards(programs)}
          <div className="text-center mt-8">
            <Button className="btn-primary" asChild>
              <Link to="/programs">Learn More About Our Programs</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProgramCategoryContent;
