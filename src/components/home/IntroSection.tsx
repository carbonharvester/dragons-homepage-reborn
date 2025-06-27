
import React from 'react';
import SchoolLogosScroll from './SchoolLogosScroll';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const IntroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(1, {
    threshold: 0.2,
    delay: 100
  });

  return (
    <div className="py-16" ref={elementRef}>
      <div className="container-wide text-center">
        <div className={`transition-all duration-800 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-heading relative">
            Experience Learning Through Adventure
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-dragon transition-all duration-1000 ${isVisible ? 'w-32' : 'w-0'}`} style={{ transitionDelay: '400ms' }}></div>
          </h2>
        </div>
        
        <div className={`transition-all duration-600 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <p className="section-subheading mx-auto">Since 2023, we've specialised in immersive experiences that blend authentic cultural engagement, wilderness exploration, and transformative education—empowering students at top international schools while driving social impact and sustainability in African communities.</p>
        </div>
        
        <div className={`transition-all duration-600 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '600ms' }}>
          <SchoolLogosScroll />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
