
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

interface TripHighlightProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface TripHighlightsProps {
  highlights: TripHighlightProps[];
}

const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {highlights.map((highlight, index) => (
            <CarouselItem key={index} className="basis-full">
              <Card className="border-none shadow-md mx-4 h-[400px]">
                <CardContent className="p-6 flex flex-col items-center text-center h-full justify-center">
                  <div className="w-16 h-16 rounded-full bg-dragon flex items-center justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-dragon-dark">{highlight.title}</h3>
                  <p className="text-dragon-gray">{highlight.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-md"
        />
        <CarouselNext 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-md"
        />
      </Carousel>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[900px] mx-auto">
      {highlights.map((highlight, index) => (
        <Card key={index} className="border-none shadow-md h-full">
          <CardContent className="p-6">
            <div className="w-16 h-16 rounded-full bg-dragon flex items-center justify-center mb-4">
              {highlight.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-dragon-dark">{highlight.title}</h3>
            <p className="text-dragon-gray">{highlight.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TripHighlights;
