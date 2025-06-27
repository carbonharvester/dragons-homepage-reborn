
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
    <div className="relative p-4">
      {/* African Pattern Border */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4">
          <img 
            src="https://res.cloudinary.com/dng12bd0a/image/upload/v1751049716/79e99227-186c-4136-92b5-ff01bb133598_j9lovq.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-4">
          <img 
            src="https://res.cloudinary.com/dng12bd0a/image/upload/v1751049716/79e99227-186c-4136-92b5-ff01bb133598_j9lovq.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-4">
          <img 
            src="https://res.cloudinary.com/dng12bd0a/image/upload/v1751049716/79e99227-186c-4136-92b5-ff01bb133598_j9lovq.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-4">
          <img 
            src="https://res.cloudinary.com/dng12bd0a/image/upload/v1751049716/79e99227-186c-4136-92b5-ff01bb133598_j9lovq.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <Card className={`overflow-hidden border-none shadow-md h-full flex flex-col transition-shadow duration-300 hover:shadow-xl group relative z-10 ${isMobile ? 'min-h-[580px]' : ''}`}>
        <div className="relative overflow-hidden">
          <AspectRatio ratio={1/1} className="bg-gray-200">
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
              height="400"
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                if (!imageError) {
                  setImageError(true);
                  console.log(`Failed to load image: ${program.image}, using fallback`);
                }
              }}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dragon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </AspectRatio>
        </div>
            
        <CardContent className={`p-6 flex flex-col justify-between group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-dragon-beige/20 transition-all duration-500 ${isMobile ? 'flex-grow' : 'h-full'}`}>
          <div className={isMobile ? 'min-h-[280px]' : ''}>
            <h3 className="text-lg font-bold mb-1 text-dragon-dark line-clamp-2 group-hover:text-dragon transition-colors duration-300 underline-animate">{program.title}</h3>
            <p className="text-dragon-gray mb-3 group-hover:text-dragon-dark transition-colors duration-300">{program.description}</p>
          </div>
          
          <div className="mt-auto">
            <Button 
              variant="outline" 
              className={`${buttonClassName || "w-full border-dragon text-dragon hover:bg-dragon hover:text-white"} h-12 transition-all duration-300 hover:shadow-lg`}
              asChild
            >
              <Link to={program.link}>Learn More</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgramCard;
