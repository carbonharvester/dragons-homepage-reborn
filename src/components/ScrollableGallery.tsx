
import React, { useState, useRef, useEffect } from 'react';
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
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0, 1, 2]));
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Function to handle image load events
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  // Setup intersection observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = Number(entry.target.getAttribute('data-index'));
        if (entry.isIntersecting) {
          setVisibleItems(prev => new Set(prev.add(index)));
        }
      });
    }, {
      rootMargin: '200px 0px', // Start loading images 200px before they enter viewport
      threshold: 0.1
    });

    itemsRef.current.forEach((item, index) => {
      if (item) {
        observerRef.current?.observe(item);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

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
                ref={el => itemsRef.current[index] = el}
                data-index={index}
              >
                <div className={`rounded-lg overflow-hidden ${isMobile ? 'h-96' : 'h-80'} bg-gray-100`}>
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      controls
                      muted
                      preload="metadata"
                      loading="lazy"
                    />
                  ) : (
                    <>
                      {!imagesLoaded[index] && (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                          <div className="w-8 h-8 border-4 border-dragon border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      {(index < 3 || visibleItems.has(index)) && (
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading={index < 3 ? "eager" : "lazy"}
                          fetchPriority={index < 3 ? "high" : "auto"}
                          width="400"
                          height="300"
                          className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${!imagesLoaded[index] ? 'opacity-0' : 'opacity-100'}`}
                          onLoad={() => handleImageLoad(index)}
                        />
                      )}
                    </>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {isMobile ? (
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static mr-2 translate-y-0 relative h-8 w-8 rounded-full bg-white text-dragon hover:bg-dragon-beige transition-colors shadow-md" />
              <CarouselNext className="static ml-2 translate-y-0 relative h-8 w-8 rounded-full bg-white text-dragon hover:bg-dragon-beige transition-colors shadow-md" />
            </div>
          ) : (
            <>
              <CarouselPrevious 
                className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-md"
              />
              <CarouselNext 
                className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-md"
              />
            </>
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default ScrollableGallery;
