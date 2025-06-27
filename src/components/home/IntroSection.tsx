
import React from 'react';
import SchoolLogosScroll from './SchoolLogosScroll';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const IntroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(1, {
    threshold: 0.2,
    delay: 100
  });

  return (
    <div className="py-16 bg-white relative overflow-hidden" ref={elementRef}>
      {/* African Pattern Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 opacity-20">
        <img 
          src="/lovable-uploads/cf30b0db-eae7-47de-8db9-886a54aeacac.png" 
          alt="" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute bottom-8 right-8 w-20 h-12 opacity-15">
        <img 
          src="/lovable-uploads/cf30b0db-eae7-47de-8db9-886a54aeacac.png" 
          alt="" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <div className="container-wide text-center relative z-10">
        <div className={`transition-all duration-800 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-heading">
            Experience Learning Through Adventure
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
