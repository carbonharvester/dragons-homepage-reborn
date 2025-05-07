
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { galleryImages } from './data/gallery';

const TripGalleryCarousel = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-academy mb-8 text-dragon-dark text-center">Experience Conservation</h2>
      
      {/* First section - Large carousel */}
      <Carousel className="mb-8">
        <CarouselContent>
          {galleryImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="rounded-lg overflow-hidden h-80 p-1">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative static mx-2" />
          <CarouselNext className="relative static mx-2" />
        </div>
      </Carousel>

      {/* Second section - Scroll area with thumbnails */}
      <div className="mt-8">
        <h3 className="text-xl font-academy mb-4 text-dragon-dark">Gallery Highlights</h3>
        <ScrollArea className="h-32 whitespace-nowrap rounded-md border border-dragon/20 p-2">
          <div className="flex gap-2">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="inline-block h-24 w-36 flex-shrink-0 cursor-pointer rounded-md overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-all hover:opacity-80"
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default TripGalleryCarousel;
