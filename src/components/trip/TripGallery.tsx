
import React, { useState } from 'react';
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
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  // Function to handle image load events
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };
  
  return (
    <div className="mt-24 mb-16">
      <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark text-center hero-heading">Photo Gallery</h2>
      
      {isMobile ? (
        <div className="px-4">
          <Carousel 
            opts={{ align: "center", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="rounded-lg overflow-hidden aspect-square bg-gray-100 relative">
                      {!imagesLoaded[index] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                          <div className="w-8 h-8 border-4 border-dragon border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        loading="lazy"
                        className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${!imagesLoaded[index] ? 'opacity-0' : 'opacity-100'}`}
                        onLoad={() => handleImageLoad(index)}
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
            <div key={index} className={`${image.className} bg-gray-100 relative`}>
              {!imagesLoaded[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="w-8 h-8 border-4 border-dragon border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img 
                src={image.src} 
                alt={image.alt} 
                loading="lazy"
                className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${!imagesLoaded[index] ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TripGallery;
