
import React, { useRef } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryItem {
  src: string;
  alt: string;
  type?: 'image' | 'video';
}

interface ScrollableGalleryProps {
  images: GalleryItem[];
  video?: {
    src: string;
    poster?: string;
  };
}

const ScrollableGallery: React.FC<ScrollableGalleryProps> = ({ images, video }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-24 mb-16">
      <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark text-center hero-heading">Photo Gallery</h2>
      
      {/* Video Section (if provided) */}
      {video && (
        <div className="mb-8 max-w-4xl mx-auto">
          <video 
            controls 
            className="w-full h-auto rounded-lg shadow-lg"
            poster={video.poster}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      
      <div className="relative">
        {/* Navigation buttons */}
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-md"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Scroll left</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-md"
          onClick={scrollRight}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Scroll right</span>
        </Button>
        
        {/* Scrollable area */}
        <ScrollArea className="w-full">
          <div 
            ref={scrollContainerRef}
            className="flex space-x-4 pb-4 px-8 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((item, index) => (
              <div 
                key={index} 
                className="flex-none relative"
              >
                <div className="rounded-lg overflow-hidden h-80 w-80">
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
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ScrollableGallery;
