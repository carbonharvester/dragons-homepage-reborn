
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Clock, Calendar } from "lucide-react";

const programs = [
  {
    title: "Nepal Semester",
    category: "Semester",
    duration: "3 Months",
    season: "Fall / Spring",
    description: "Trek through the Himalayas, live with local families, and study traditional Buddhist practices.",
    image: "https://images.unsplash.com/photo-1565073624497-7e274074d25c?q=80&w=2070&auto=format"
  },
  {
    title: "Peru Summer",
    category: "Summer",
    duration: "4 Weeks",
    season: "Summer",
    description: "Explore Andean villages, ancient Incan ruins, and vibrant cultural traditions.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format"
  },
  {
    title: "Thailand Gap Year",
    category: "Gap Year",
    duration: "9 Months",
    season: "Fall to Spring",
    description: "Immerse yourself in Thai culture, learn sustainable agriculture practices, and study local language.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2139&auto=format"
  },
  {
    title: "Morocco Adventure",
    category: "Summer",
    duration: "3 Weeks",
    season: "Summer",
    description: "Journey through ancient medinas, the Atlas Mountains, and Sahara Desert.",
    image: "https://images.unsplash.com/photo-1539020140153-e8c237112e3c?q=80&w=2070&auto=format"
  }
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-dragon-beige">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="section-heading">Transformative Programs</h2>
          <p className="section-subheading mx-auto">
            Discover cultural immersion experiences designed to challenge, inspire, and transform.
          </p>
        </div>

        {/* Program Type Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button variant="outline" className="border-dragon text-dragon hover:bg-dragon hover:text-white">
            All Programs
          </Button>
          <Button variant="outline" className="border-dragon-gray text-dragon-gray hover:bg-dragon hover:text-white">
            Semester
          </Button>
          <Button variant="outline" className="border-dragon-gray text-dragon-gray hover:bg-dragon hover:text-white">
            Summer
          </Button>
          <Button variant="outline" className="border-dragon-gray text-dragon-gray hover:bg-dragon hover:text-white">
            Gap Year
          </Button>
          <Button variant="outline" className="border-dragon-gray text-dragon-gray hover:bg-dragon hover:text-white">
            Adult
          </Button>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md h-full flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-dragon-yellow text-dragon-dark text-sm font-semibold py-1 px-3 rounded-full">
                  {program.category}
                </div>
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-dragon-dark">{program.title}</h3>
                <p className="text-dragon-gray mb-4 flex-grow">{program.description}</p>
                <div className="flex justify-between text-sm text-dragon-gray mb-4">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{program.season}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-dragon text-dragon hover:bg-dragon hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-primary">View All Programs</Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
