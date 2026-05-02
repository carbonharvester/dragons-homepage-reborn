
import React, { useState, useRef } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import ImageDialog from "@/components/ui/ImageDialog";

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
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // States for image dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

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
  const handleImageClick = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setIsDialogOpen(true);
  };
  
  // Filter out images with empty src values
  const validImages = images.filter(item => item.src && item.src.trim() !== '');

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
      
      {isMobile ? (
        <div className="px-4">
          <Carousel 
            opts={{ align: "center", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {validImages.map((image, index) => (
                <CarouselItem 
                  key={index} 
                  className="md:basis-1/2 lg:basis-1/3" 
                  data-index={index}
                  ref={el => itemsRef.current[index] = el}
                >
                  <div className="p-1">
                    <div className="rounded-lg overflow-hidden aspect-square bg-gray-100 relative">
                      {!imagesLoaded[index] && !imageErrors[index] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                          <div className="w-8 h-8 border-4 border-dragon border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      {imageErrors[index] ? (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                          <p className="text-gray-500">Image not available</p>
                        </div>
                      ) : (
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          loading={index < 3 ? "eager" : "lazy"}
                          fetchPriority={index < 3 ? "high" : "auto"}
                          width="400" 
                          height="400"
                          className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer ${!imagesLoaded[index] ? 'opacity-0' : 'opacity-100'}`}
                          onLoad={() => handleImageLoad(index)}
                          onError={() => handleImageError(index)}
                          onClick={() => handleImageClick(image)}
                        />
                      )}
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
          {validImages.map((image, index) => {
            // Extract the grid column classes but maintain aspect-square
            const colClasses = image.className.split(' ')
              .filter(cls => cls.includes('col-span'))
              .join(' ');
            
            return (
              <div 
                key={index} 
                className={`${colClasses} aspect-square bg-gray-100 relative rounded-lg overflow-hidden`}
                data-index={index}
                ref={el => itemsRef.current[index] = el}
              >
                {!imagesLoaded[index] && !imageErrors[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="w-8 h-8 border-4 border-dragon border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                {imageErrors[index] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <p className="text-gray-500">Image not available</p>
                  </div>
                ) : (
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    loading={index < 3 ? "eager" : "lazy"}
                    fetchPriority={index < 3 ? "high" : "auto"}
                    width="600"
                    height="600"
                    className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer ${!imagesLoaded[index] ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                    onClick={() => handleImageClick(image)}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
      
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

export default TripGallery;
