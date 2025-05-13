
import React from 'react';
import SchoolLogosScroll from './SchoolLogosScroll';

const IntroSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container-wide text-center">
        <h2 className="section-heading">Experience Learning Through Adventure</h2>
        <p className="section-subheading mx-auto">Since 2023, we've specialised in immersive experiences that blend authentic cultural engagement, wilderness exploration, and transformative education—empowering students at top international schools while driving social impact and sustainability in African communities.</p>
        
        <SchoolLogosScroll />
      </div>
    </div>
  );
};

export default IntroSection;
