
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

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
  priority?: boolean;
}

const ProgramCard = ({ program, buttonClassName, priority = false }: ProgramCardProps) => {
  const isMobile = useIsMobile();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000&auto=format";
  const imageToUse = imageError ? fallbackImage : program.image;

  return (
    <Card className={`overflow-hidden border-none shadow-md h-full flex flex-col ${isMobile ? 'min-h-[580px]' : ''}`}>
      <div className="relative">
        <AspectRatio ratio={16/9} className="bg-gray-200">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-8 h-8 border-4 border-dragon border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img 
            src={imageToUse}
            alt={program.title} 
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            width="400"
            height="225"
            className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              if (!imageError) {
                setImageError(true);
                console.log(`Failed to load image: ${program.image}, using fallback`);
              }
            }}
          />
        </AspectRatio>
      </div>
          
      <CardContent className={`p-6 flex flex-col justify-between ${isMobile ? 'flex-grow' : 'h-full'}`}>
        <div className={isMobile ? 'min-h-[280px]' : ''}>
          <h3 className="text-lg font-bold mb-1 text-dragon-dark line-clamp-2">{program.title}</h3>
          <p className="text-dragon-gray mb-3">{program.description}</p>
        </div>
        
        <div className="mt-auto">
          <Button 
            variant="outline" 
            className={`${buttonClassName || "w-full border-dragon text-dragon hover:bg-dragon hover:text-white"} h-12`}
            asChild
          >
            <Link to={program.link}>Learn More</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
