
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { DollarSign, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProgramOverviewProps {
  programData: {
    title: string;
    description: string;
    duration: string;
    season: string;
    location: string;
    ages: string;
    goals: string[];
  };
}

const ProgramOverview = ({
  programData
}: ProgramOverviewProps) => {
  // Gallery images with empty src values
  const galleryImages = [{
    src: "",
    alt: "Student photographer capturing wildlife in Kenya"
  }, {
    src: "",
    alt: "Photography student with camera in Kenya"
  }, {
    src: "",
    alt: "Student with camera capturing Kenyan landscape"
  }, {
    src: "",
    alt: "Student photographer in natural setting"
  }, {
    src: "",
    alt: "Photography student during Kenya program"
  }];
  
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-academy mb-6 text-dragon-dark">Program Overview</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col">
          <p className="text-lg text-dragon-gray mb-6">
            Welcome to Capturing Kenya, a unique 4-week summer adventure that combines photography, videography, and conservation in one unforgettable experience. This program is designed for creative young minds who want to develop their visual storytelling skills while exploring Kenya's diverse landscapes and wildlife.
          </p>
          <p className="text-lg text-dragon-gray mb-6">
            Under the guidance of professional photographers and local experts, you'll learn technical skills, composition techniques, and editing workflows as you create a compelling portfolio showcasing Kenya's natural beauty and cultural richness. Throughout the journey, you'll contribute to real conservation efforts by documenting wildlife and helping create visual resources for local organizations.
          </p>
          
          {/* Mobile view for details card */}
          <div className="lg:hidden mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 h-fit">
              <h3 className="text-xl font-bold mb-4 text-dragon-dark border-b border-gray-200 pb-2">Program Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-3">
                    <Users className="h-5 w-5 text-dragon" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ages</p>
                    <p className="font-medium text-dragon-dark">{programData.ages}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-3">
                    <DollarSign className="h-5 w-5 text-dragon" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-medium text-dragon-dark">$6,950 (plus airfare)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-3">
                    <Users className="h-5 w-5 text-dragon" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Group Size</p>
                    <p className="font-medium text-dragon-dark">12-16 students</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <CalendlyEmbed url="https://calendly.com/kapesuniforms/discoverymeeting" text="Schedule Consultation" variant="outline" className="w-full bg-dragon-yellow text-dragon-dark hover:bg-amber-400 border-dragon-yellow" />
              </div>
            </div>
          </div>
          
          <div className="bg-dragon-beige p-8 rounded-lg mb-8 flex-grow flex flex-col">
            <h3 className="text-2xl font-academy text-dragon-dark mb-6">Program Goals</h3>
            <ul className="list-disc pl-5 space-y-4 text-dragon-gray text-base">
              {programData.goals.map((goal, index) => (
                <li key={index} className="pb-1">{goal}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Desktop view for details card */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-dragon-dark border-b border-gray-200 pb-2">Program Details</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-3">
                  <Users className="h-5 w-5 text-dragon" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ages</p>
                  <p className="font-medium text-dragon-dark">{programData.ages}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3">
                  <DollarSign className="h-5 w-5 text-dragon" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium text-dragon-dark">$6,950 (plus airfare)</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3">
                  <Users className="h-5 w-5 text-dragon" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Group Size</p>
                  <p className="font-medium text-dragon-dark">12-16 students</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <CalendlyEmbed url="https://calendly.com/kapesuniforms/discoverymeeting" text="Schedule Consultation" variant="outline" className="w-full bg-dragon-yellow text-dragon-dark hover:bg-amber-400 border-dragon-yellow" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Gallery */}
      <div className="mt-10 mb-6">
        <h3 className="text-2xl font-academy text-dragon-dark mb-6">Program Gallery</h3>
        <Carousel 
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false
          }}
          className="w-full"
        >
          <CarouselContent className="pb-4">
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-64">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-4">
            <CarouselPrevious className="static mr-2 translate-y-0 relative h-8 w-8 rounded-full bg-white text-dragon hover:bg-dragon-beige transition-colors shadow-md" />
            <CarouselNext className="static ml-2 translate-y-0 relative h-8 w-8 rounded-full bg-white text-dragon hover:bg-dragon-beige transition-colors shadow-md" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProgramOverview;
