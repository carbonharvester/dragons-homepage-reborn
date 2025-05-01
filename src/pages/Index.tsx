
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

const Index = () => {
  const schoolLogos = [
    { src: "/lovable-uploads/0d2ee059-b425-4a7d-a8ba-3ee2cd8fdfc0.png", alt: "British International School of Jeddah" },
    { src: "/lovable-uploads/38402d57-68c0-4b9b-9868-02bb45b85144.png", alt: "Arbor School" },
    { src: "/lovable-uploads/5de3bb89-b98b-471d-b489-b486b74a96b8.png", alt: "Fairgreen International School", scale: true },
    { src: "/lovable-uploads/e6394583-20d9-4609-8284-6ba2ca500c08.png", alt: "American Community School of Abu Dhabi", scale: true },
    { src: "/lovable-uploads/2586ddf8-8a65-45ca-ac88-f21c4e930c03.png", alt: "North London Collegiate School Dubai" },
    { src: "/lovable-uploads/f83bb6ef-1a09-47f6-9cee-60b23dd0823c.png", alt: "Cairo American College" },
  ];
  
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
              <div className="flex flex-wrap justify-center items-center gap-8">
                {schoolLogos.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Avatar className={`rounded-none bg-transparent ${logo.scale ? 'h-28 w-28' : 'h-20 w-20'}`}>
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
        <ProgramsSection />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>;
};

export default Index;
