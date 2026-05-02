
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from '@/components/ui/use-toast';
import ImageDialog from '@/components/ui/ImageDialog';

// Define interfaces to handle both formats of gallery items
interface BaseGalleryItem {
  src: string;
  alt: string;
  type?: 'image' | 'video';
}

interface GalleryItem extends BaseGalleryItem {
  className?: string;
}

interface ScrollableGalleryProps {
  images: (GalleryItem | BaseGalleryItem)[];
}

const ScrollableGallery: React.FC<ScrollableGalleryProps> = ({ images }) => {
  const isMobile = useIsMobile();
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // States for image dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<BaseGalleryItem | null>(null);

  // Function to handle image load events
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  // Function to handle image error events
  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
    console.error(`Failed to load image at index ${index}`);
  };

  // Function to handle image click
  const handleImageClick = (item: BaseGalleryItem) => {
    if (item.type === 'video') return; // Don't open dialog for videos
    
    setSelectedImage(item);
    setIsDialogOpen(true);
  };

  // Filter out images with empty src values and handle errors
  const validImages = images.filter(item => item.src && item.src.trim() !== '');

  // Setup intersection observer for loading priority optimization
  useEffect(() => {
    if (validImages.length === 0) return;
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target.querySelector('img');
          if (img && img.loading === 'lazy') {
            // Prioritize loading for visible images
            img.loading = 'eager';
          }
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
  }, [validImages.length]);

  // If there are no valid images, show a message
  if (validImages.length === 0) {
    return (
      <div className="mt-24 mb-16 text-center">
        <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark hero-heading">Photo Gallery</h2>
        <p className="text-lg text-dragon-gray">No images available at this time.</p>
      </div>
    );
  }

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
            {validImages.map((item, index) => (
              <CarouselItem 
                key={index} 
                className={isMobile ? "basis-full" : "basis-full md:basis-1/2 lg:basis-1/3"}
                ref={el => itemsRef.current[index] = el}
                data-index={index}
              >
                <div className={`rounded-lg overflow-hidden ${isMobile ? 'h-80 w-80 mx-auto' : 'aspect-square'} bg-gray-100`}>
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      controls
                      muted
                      preload="metadata"
                    />
                  ) : (
                    <>
                      {!imagesLoaded[index] && !imageErrors[index] && (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                          <div className="w-8 h-8 border-4 border-dragon border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      {imageErrors[index] ? (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                          <p className="text-gray-500">Image not available</p>
                        </div>
                      ) : (
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading={index < 3 ? "eager" : "lazy"}
                          fetchPriority={index < 3 ? "high" : "auto"}
                          width="400"
                          height="400"
                          className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer ${!imagesLoaded[index] ? 'opacity-0' : 'opacity-100'}`}
                          onLoad={() => handleImageLoad(index)}
                          onError={() => handleImageError(index)}
                          onClick={() => handleImageClick(item)}
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

      {/* Image dialog for expanded view */}
      {selectedImage && (
        <ImageDialog 
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </div>
  );
};

export default ScrollableGallery;
