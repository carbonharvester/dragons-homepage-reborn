
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { schoolTrips } from '@/data/programsData';

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-16 sm:py-20 bg-dragon-beige/50">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dragon-dark mb-4 leading-tight">
            Our Educational School Trip Programs
          </h2>
          <p className="text-lg sm:text-xl text-dragon-gray max-w-3xl mx-auto leading-relaxed">
            Each 8-day program is designed around a specific theme, allowing students to dive deep into important global issues while developing practical skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {schoolTrips.map((program, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 touch-manipulation"
            >
              <div className="h-48 sm:h-56 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="224"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <span className="bg-dragon-yellow/20 text-dragon-dark px-3 py-1 rounded-full text-sm font-medium">
                    {program.duration}
                  </span>
                  <span className="text-dragon-gray text-sm">{program.ageGroup}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dragon-dark mb-3 leading-tight">
                  {program.title}
                </h3>
                <p className="text-dragon-gray mb-4 leading-relaxed text-sm sm:text-base">
                  {program.description}
                </p>
                <Button 
                  className="w-full bg-dragon hover:bg-dragon-dark transition-colors duration-200 min-h-[44px] touch-manipulation" 
                  asChild
                >
                  <Link to={program.link}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90 transition-colors duration-200 min-h-[48px] touch-manipulation w-full sm:w-auto" 
            asChild
          >
            <Link to="/school-trips">View All School Trip Details</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
