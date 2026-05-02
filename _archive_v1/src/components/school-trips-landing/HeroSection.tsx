
import React from 'react';
import VideoPlayer from '@/components/video/VideoPlayer';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-black">
      <div className="w-full">
        <VideoPlayer 
          videoUrl="https://cdn.shopify.com/videos/c/o/v/44b5817ef9b647a5a68e4ffd1c092f05.mp4" 
          title="Educational School Trips to Kenya" 
          initialPlaying={false}
          showPreview={true}
          muted={false}
          autoplayOnScroll={false}
          className="hero edge-to-edge w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
