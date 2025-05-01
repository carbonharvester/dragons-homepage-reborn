
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Clock, Calendar } from "lucide-react";

const programs = [
  {
    title: "Feeding the Future",
    category: "Summer",
    duration: "7 Days",
    season: "Summer",
    description: "Join sustainable agriculture initiatives to address food security challenges in rural communities through hands-on farming and education programs.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format"
  },
  {
    title: "Community Centred Conservation",
    category: "Semester",
    duration: "3 Months",
    season: "Fall / Spring",
    description: "Work alongside local conservation experts to protect endangered ecosystems while learning traditional ecological knowledge and sustainable practices.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2139&auto=format"
  },
  {
    title: "Empowering Women",
    category: "Gap Year",
    duration: "6 Months",
    season: "Year Round",
    description: "Support women-led initiatives focusing on education, entrepreneurship and leadership in communities working to achieve gender equity and economic independence.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format"
  }
];

const ProgramsSection = () => {
  return <section id="programs" className="py-20 bg-dragon-beige">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="section-heading">Transformative Programs</h2>
          <p className="section-subheading mx-auto">
            Discover cultural immersion experiences designed to challenge, inspire, and transform.
          </p>
        </div>

        {/* Program Type Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          
          
          
          
          
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => <Card key={index} className="overflow-hidden border-none shadow-md h-full flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
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
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-primary">View All Programs</Button>
        </div>
      </div>
    </section>;
};

export default ProgramsSection;
