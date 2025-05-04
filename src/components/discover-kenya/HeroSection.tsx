
import React from "react";

const HeroSection = () => {
  // Add a random query parameter to force image reload
  const imgTimestamp = Date.now();
  
  return (
    <section 
      className="bg-cover bg-center py-32 relative"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop&t=${imgTimestamp}')` 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container-wide relative z-10">
        <h1 className="text-4xl md:text-5xl font-academy text-white mb-4">Discover Kenya</h1>
        <p className="text-lg text-white max-w-3xl">
          Explore the incredible diversity of landscapes, wildlife, cultures, and experiences that make Kenya a world-renowned destination for educational travel.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
