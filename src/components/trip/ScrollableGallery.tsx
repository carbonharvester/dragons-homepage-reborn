
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface GalleryItem {
  src: string;
  alt: string;
  type?: 'image' | 'video';
}

interface ScrollableGalleryProps {
  images: GalleryItem[];
}

const ScrollableGallery: React.FC<ScrollableGalleryProps> = ({ images }) => {
  return (
    <div className="mt-24 mb-16">
      <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark text-center hero-heading">Photo Gallery</h2>
      
      <div className="relative px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {images.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="rounded-lg overflow-hidden h-80">
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
          
          <CarouselPrevious className="left-0 bg-white/80 hover:bg-white rounded-full shadow-md" />
          <CarouselNext className="right-0 bg-white/80 hover:bg-white rounded-full shadow-md" />
        </Carousel>
      </div>
    </div>
  );
};

export default ScrollableGallery;
