
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Route, Calendar, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface ProgramCardProps {
  program: {
    title: string;
    duration: string;
    season: string;
    description: string;
    image: string;
    link: string;
    icon: React.ElementType;
    ageGroup?: string;
    location?: string;
  };
  buttonClassName?: string;
}

const ProgramCard = ({ program, buttonClassName }: ProgramCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-md h-full flex flex-col">
      <div className="relative">
        <AspectRatio ratio={16/9} className="bg-muted">
          <img 
            src={program.image} 
            alt={program.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format";
              console.log(`Failed to load image: ${program.image}, using fallback`);
            }}
          />
        </AspectRatio>
      </div>
          
      <CardContent className="p-6 flex-grow flex flex-col h-full">
        <h3 className="text-lg md:text-lg font-bold mb-1 text-dragon-dark h-[2.5rem] line-clamp-2">{program.title}</h3>
        <p className="text-dragon-gray mb-3 h-[6.5rem] line-clamp-5 overflow-hidden">{program.description}</p>
        <div className="flex flex-row flex-wrap justify-between text-xs text-dragon-gray mb-4 gap-x-2 h-[1.5rem]">
          <div className="flex items-center">
            <Route size={14} className="mr-1 min-w-4" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1 min-w-4" />
            <span>{program.season}</span>
          </div>
          {program.ageGroup && (
            <div className="flex items-center">
              <Users size={14} className="mr-1 min-w-4" />
              <span>{program.ageGroup}</span>
            </div>
          )}
          {program.location && (
            <div className="flex items-center">
              <MapPin size={14} className="mr-1 min-w-4" />
              <span>{program.location}</span>
            </div>
          )}
        </div>
        <Button 
          variant="outline" 
          className={buttonClassName || "w-full border-dragon text-dragon hover:bg-dragon hover:text-white"} 
          asChild
        >
          <Link to={program.link}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
