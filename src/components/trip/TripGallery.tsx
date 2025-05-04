
import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

interface TripGalleryProps {
  images: {
    src: string;
    alt: string;
    className: string;
  }[];
}

const TripGallery = ({ images }: TripGalleryProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark text-center hero-heading">Trip Gallery</h2>
      
      {isMobile ? (
        <div className="px-4">
          <Carousel 
            opts={{ align: "center" }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="rounded-lg overflow-hidden aspect-square">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-4">
              <CarouselPrevious className="static mr-2 translate-y-0" />
              <CarouselNext className="static ml-2 translate-y-0" />
            </div>
          </Carousel>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-4">
          {images.map((image, index) => (
            <div key={index} className={image.className}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TripGallery;
