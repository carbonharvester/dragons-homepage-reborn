
import React from 'react';
import HomeVideoSection from '@/components/HomeVideoSection';

const HeroSection = () => {
  return (
    <section className="relative h-[100vh] min-h-[600px] max-h-[800px] bg-black">
      <div className="absolute inset-0">
        <HomeVideoSection 
          videoUrl="https://cdn.shopify.com/videos/c/o/v/44b5817ef9b647a5a68e4ffd1c092f05.mp4" 
          title="Educational School Trips to Kenya" 
          initialPlaying={false}
          showPreview={true}
          muted={false}
          autoplayOnScroll={false}
        />
      </div>
    </section>
  );
};

export default HeroSection;
