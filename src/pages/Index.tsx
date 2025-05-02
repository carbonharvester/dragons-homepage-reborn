
import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import ProgramsSection from '@/components/ProgramsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { University } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const schoolLogos = [
    { src: "/lovable-uploads/0d2ee059-b425-4a7d-a8ba-3ee2cd8fdfc0.png", alt: "British International School of Jeddah" },
    { src: "/lovable-uploads/38402d57-68c0-4b9b-9868-02bb45b85144.png", alt: "Arbor School" },
    { src: "/lovable-uploads/5de3bb89-b98b-471d-b489-b486b74a96b8.png", alt: "Fairgreen International School", scale: true },
    { src: "/lovable-uploads/e6394583-20d9-4609-8284-6ba2ca500c08.png", alt: "American Community School of Abu Dhabi", scale: true },
    { src: "/lovable-uploads/2586ddf8-8a65-45ca-ac88-f21c4e930c03.png", alt: "North London Collegiate School Dubai" },
    { src: "/lovable-uploads/f83bb6ef-1a09-47f6-9cee-60b23dd0823c.png", alt: "Cairo American College" },
    { src: "/lovable-uploads/111df4fd-1e0e-41f8-af3c-7460449109f0.png", alt: "American School of Dubai", scale: true },
  ];
  
  const [visibleLogos, setVisibleLogos] = useState<typeof schoolLogos>([]);
  const logoDisplayCount = 5;
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Function to shuffle the array using Fisher-Yates algorithm
  const shuffleArray = (array: typeof schoolLogos) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  
  // Update visible logos periodically
  useEffect(() => {
    // Initialize with first set of logos
    setVisibleLogos(schoolLogos.slice(0, logoDisplayCount));
    
    // Auto-rotate logos
    const interval = setInterval(() => {
      // Get the current visible logos
      const currentLogos = [...visibleLogos];
      
      // Remove the first logo
      currentLogos.shift();
      
      // Add a new logo that's not currently visible
      const remainingLogos = schoolLogos.filter(
        logo => !currentLogos.some(currentLogo => currentLogo.src === logo.src)
      );
      
      // If we have remaining logos, add one; otherwise shuffle and restart
      if (remainingLogos.length > 0) {
        currentLogos.push(remainingLogos[0]);
      } else {
        const shuffled = shuffleArray(schoolLogos);
        currentLogos.push(shuffled[0]);
      }
      
      setVisibleLogos(currentLogos);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [visibleLogos]);
  
  // Auto-scroll functionality for mobile
  useEffect(() => {
    if (!isMobile || !carouselRef.current) return;
    
    const scrollableDiv = carouselRef.current?.querySelector('.embla__container');
    if (!scrollableDiv) return;
    
    const interval = setInterval(() => {
      const itemWidth = scrollableDiv.querySelector('.embla__slide')?.clientWidth || 0;
      const currentScroll = scrollableDiv.scrollLeft;
      const maxScroll = scrollableDiv.scrollWidth - scrollableDiv.clientWidth;
      
      // Calculate next scroll position
      let nextScroll = currentScroll + itemWidth;
      
      // Reset to beginning if at end
      if (nextScroll >= maxScroll - 10) {
        nextScroll = 0;
      }
      
      scrollableDiv.scrollTo({
        left: nextScroll,
        behavior: 'smooth'
      });
    }, 3000); // Change logo every 3 seconds
    
    return () => clearInterval(interval);
  }, [isMobile]);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <div className="py-16 bg-white">
          <div className="container-wide text-center">
            <h2 className="section-heading">Experience Learning Through Adventure</h2>
            <p className="section-subheading mx-auto">Since 2023, we've specialised in immersive experiences that combine authentic cultural engagement, wilderness exploration, and transformative education, with social impact and sustainability.</p>
            
            <div className="mt-12">
              <div className="px-4" ref={carouselRef}>
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
                  {visibleLogos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center animate-fade-in">
                      <Avatar className={`rounded-none bg-transparent ${logo.scale ? 'h-28 w-28 md:h-36 md:w-36' : 'h-16 w-16 md:h-20 md:w-20'}`}>
                        <AvatarImage 
                          src={logo.src} 
                          alt={logo.alt} 
                          className="object-contain h-full w-full"
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
          </div>
        </div>
        <ProgramsSection />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>;
};

export default Index;
