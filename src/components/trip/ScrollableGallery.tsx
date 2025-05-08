
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

interface GalleryItem {
  src: string;
  alt: string;
  type?: 'image' | 'video';
}

interface ScrollableGalleryProps {
  images: GalleryItem[];
}

const ScrollableGallery: React.FC<ScrollableGalleryProps> = ({ images }) => {
  const isMobile = useIsMobile();

  return (
    <div className="mt-24 mb-16">
      <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark text-center hero-heading">Photo Gallery</h2>
      
      <div className="relative px-4 md:px-8 lg:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false
          }}
          className="w-full"
        >
          <CarouselContent className="pb-4">
            {images.map((item, index) => (
              <CarouselItem 
                key={index} 
                className={isMobile ? "basis-full" : "basis-full md:basis-1/2 lg:basis-1/3"}
              >
                <div className={`rounded-lg overflow-hidden ${isMobile ? 'h-96' : 'h-80'}`}>
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      controls
                      muted
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious 
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-md"
          />
          <CarouselNext 
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-md"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default ScrollableGallery;
