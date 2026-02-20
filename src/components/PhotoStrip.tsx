import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  {
    src: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg",
    alt: "Students working in permaculture garden",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/A7404093_2.jpg?v=1746502728",
    alt: "School trip group in Kenya",
  },
  {
    src: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747159769/Filip-C-Agoo-Everland-Marketing-Kenya-13983_atg3tn.jpg",
    alt: "Women's water cooperative",
  },
  {
    src: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160176/Collection_5_s7opwi.jpg",
    alt: "Community engagement",
  },
  {
    src: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747200052/IMG_0252_gstfij.jpg",
    alt: "Educator journey in Kenya",
  },
  {
    src: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160296/WhatsApp_Image_2025-05-13_at_12.12.32_2_qbmzae.jpg",
    alt: "Students learning from community",
  },
];

const PhotoStrip = () => {
  return (
    <section className="py-4 md:py-6 bg-white overflow-hidden">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5 md:gap-2 max-w-7xl mx-auto px-1.5 md:px-2">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="aspect-square overflow-hidden rounded-lg md:rounded-xl"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoStrip;
