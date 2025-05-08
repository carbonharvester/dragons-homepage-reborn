
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

interface TripLearningOutcomeProps {
  title: string;
  description: string;
}

interface TripLearningOutcomesProps {
  outcomes: TripLearningOutcomeProps[];
}

const TripLearningOutcomes = ({ outcomes }: TripLearningOutcomesProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="mb-16 bg-dragon-beige p-8 md:p-12 rounded-lg">
      <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark text-center hero-heading">Learning Outcomes</h2>
      
      {isMobile ? (
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {outcomes.map((outcome, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="bg-white p-6 mx-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2 text-dragon-dark">{outcome.title}</h3>
                  <p className="text-dragon-gray">{outcome.description}</p>
                </div>
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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-dragon-dark">{outcome.title}</h3>
              <p className="text-dragon-gray">{outcome.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TripLearningOutcomes;
