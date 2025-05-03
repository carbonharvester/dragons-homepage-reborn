
import React from 'react';

interface TripGalleryProps {
  images: {
    src: string;
    alt: string;
    className: string;
  }[];
}

const TripGallery = ({ images }: TripGalleryProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-serif font-bold mb-8 text-dragon-dark text-center">Trip Gallery</h2>
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
    </div>
  );
};

export default TripGallery;
