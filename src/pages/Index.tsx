
import React from 'react';
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
import { useEffect, useState } from 'react';

const Index = () => {
  const [api, setApi] = useState<any>(null);
  
  // Auto scrolling effect
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000); // Scroll every 2 seconds
    
    return () => clearInterval(interval);
  }, [api]);
  
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
              <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5">
                      <div className="p-1">
                        <Avatar className="h-20 w-20 mx-auto">
                          <AvatarImage 
                            src={`https://images.unsplash.com/photo-${1486312338219 + index * 10000}-ce68d2c6f44d?q=80&w=200&auto=format`} 
                            alt={`School logo ${index + 1}`} 
                          />
                          <AvatarFallback>
                            <University className="h-10 w-10 text-dragon" />
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
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
