
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { schoolTrips } from '@/data/programsData';

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-dragon-beige/50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dragon-dark mb-4">
            Our Educational School Trip Programs
          </h2>
          <p className="text-xl text-dragon-gray max-w-3xl mx-auto">
            Each 8-day program is designed around a specific theme, allowing students to dive deep into important global issues while developing practical skills.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {schoolTrips.map((program, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-dragon-yellow/20 text-dragon-dark px-3 py-1 rounded-full text-sm font-medium">
                    {program.duration}
                  </span>
                  <span className="text-dragon-gray text-sm">{program.ageGroup}</span>
                </div>
                <h3 className="text-xl font-bold text-dragon-dark mb-3">{program.title}</h3>
                <p className="text-dragon-gray mb-4">{program.description}</p>
                <Button className="w-full bg-dragon hover:bg-dragon-dark" asChild>
                  <Link to={program.link}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90" asChild>
            <Link to="/school-trips">View All School Trip Details</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
