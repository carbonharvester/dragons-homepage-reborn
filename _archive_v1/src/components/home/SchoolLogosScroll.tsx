
import React, { useRef, useState, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { University } from 'lucide-react';

interface SchoolLogo {
  src: string;
  alt: string;
  scale?: boolean;
}

const SchoolLogosScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const schoolLogos = [{
    src: "/lovable-uploads/0d2ee059-b425-4a7d-a8ba-3ee2cd8fdfc0.png",
    alt: "British International School of Jeddah"
  }, {
    src: "/lovable-uploads/38402d57-68c0-4b9b-9868-02bb45b85144.png",
    alt: "Arbor School"
  }, {
    src: "/lovable-uploads/5de3bb89-b98b-471d-b489-b486b74a96b8.png",
    alt: "Fairgreen International School",
    scale: true
  }, {
    src: "/lovable-uploads/e6394583-20d9-4609-8284-6ba2ca500c08.png",
    alt: "American Community School of Abu Dhabi",
    scale: true
  }, {
    src: "/lovable-uploads/2586ddf8-8a65-45ca-ac88-f21c4e930c03.png",
    alt: "North London Collegiate School Dubai"
  }, {
    src: "/lovable-uploads/f83bb6ef-1a09-47f6-9cee-60b23dd0823c.png",
    alt: "Cairo American College"
  }, {
    src: "/lovable-uploads/111df4fd-1e0e-41f8-af3c-7460449109f0.png",
    alt: "American School of Dubai",
    scale: true
  }];

  // Duplicate the logos for infinite scrolling
  const duplicatedLogos = [...schoolLogos, ...schoolLogos];

  // Setup IntersectionObserver for lazy loading sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    // Create observer for scroll animation section
    const containerObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, observerOptions);

    // Observe the scroll container
    if (scrollContainerRef.current) {
      containerObserver.observe(scrollContainerRef.current);
    }

    return () => {
      containerObserver.disconnect();
    };
  }, []);

  // Horizontal scrolling effect - only run if section is visible
  useEffect(() => {
    if (!isVisible) return;
    
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    let scrollAmount = scrollContainer.scrollWidth / 2; // Start from the middle
    const speed = 0.5; // pixels per frame
    let animationFrameId: number;
    
    const scroll = () => {
      scrollAmount -= speed; // Decrease to scroll right to left

      // Reset when we've scrolled the width of the first set of logos
      if (scrollAmount <= 0) {
        scrollAmount = scrollContainer.scrollWidth / 2;
      }
      scrollContainer.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);
  
  return (
    <div className="mt-12 relative overflow-hidden">
      <div className="w-full overflow-hidden">
        <div 
          ref={scrollContainerRef} 
          className="flex items-center gap-8 lg:gap-16 overflow-x-hidden whitespace-nowrap py-4 px-4" 
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center">
              <Avatar className={`rounded-none bg-transparent ${logo.scale ? 'h-28 w-28 md:h-36 md:w-36' : 'h-16 w-16 md:h-20 md:w-20'}`}>
                <AvatarImage 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="object-contain h-full w-full" 
                  loading="lazy"
                />
                <AvatarFallback className="bg-transparent">
                  <University className="h-10 w-10 text-dragon" />
                </AvatarFallback>
              </Avatar>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolLogosScroll;
