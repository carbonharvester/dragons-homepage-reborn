
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  // Helper function to render a highlight card with consistent styling
  const renderHighlightCard = (highlight: TripHighlightProps, index: number) => (
    <Card key={index} className="border-none shadow-none h-full">
      <CardContent className="p-6">
        <div className="w-16 h-16 rounded-full bg-dragon flex items-center justify-center mb-4">
          {highlight.icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-dragon-dark">{highlight.title}</h3>
        <p className="text-dragon-gray">{highlight.description}</p>
      </CardContent>
    </Card>
  );

  // On mobile, use carousel
  if (isMobile) {
    return (
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {highlights.map((highlight, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/1">
              {renderHighlightCard(highlight, index)}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="static mr-2 translate-y-0 relative h-8 w-8 rounded-full bg-white text-dragon hover:bg-dragon-beige transition-colors shadow-md" />
          <CarouselNext className="static ml-2 translate-y-0 relative h-8 w-8 rounded-full bg-white text-dragon hover:bg-dragon-beige transition-colors shadow-md" />
        </div>
      </Carousel>
    );
  }

  // On desktop, use the grid layout
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {highlights.map((highlight, index) => renderHighlightCard(highlight, index))}
    </div>
  );
};

export default TripHighlights;
