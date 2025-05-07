
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { DollarSign, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

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
  // Gallery images
  const galleryImages = [{
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/DSC_0177.jpg?v=1746513529",
    alt: "Student photographer capturing wildlife in Kenya"
  }, {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/A7404062.jpg?v=1746502708",
    alt: "Photography student with camera in Kenya"
  }, {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/1e93affc-4105-40dd-aa24-f5fd875d2fd5_d59babc0-95fd-4333-b3b9-754cd20f3610.jpg?v=1746515665",
    alt: "Students photographing wildlife in Kenya"
  }, {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/A7404516.jpg?v=1746515670",
    alt: "Student with camera in natural setting"
  }, {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/55a9f399-0214-46a2-99d2-25dbc2cba06f.jpg?v=1746515494",
    alt: "Students working on photography project"
  }, {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/8aea54cf-37c5-43f0-8665-b4259a4acc7f.jpg?v=1746515558",
    alt: "Student learning photography techniques"
  }];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Program Info Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-academy text-dragon-dark mb-6">Program Overview</h2>
            
            <p className="text-dragon-gray mb-8">{programData.description}</p>
            
            <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-dragon-dark mb-4">Program Goals</h3>
              <ul className="space-y-3">
                {programData.goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-dragon-beige rounded-full w-6 h-6 text-dragon-dark mr-3 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-dragon-gray">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Users className="h-8 w-8 text-dragon mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Age Group</h4>
                  <p className="text-lg font-semibold text-dragon-dark">{programData.ages}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <DollarSign className="h-8 w-8 text-dragon mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Location</h4>
                  <p className="text-lg font-semibold text-dragon-dark">{programData.location}</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-dragon hover:bg-dragon/90">Request Info</Button>
              <Button variant="outline">Download Brochure</Button>
            </div>
          </div>
          
          {/* Gallery Column */}
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/1">
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg h-[400px]">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 gap-2">
                <CarouselPrevious className="relative inline-flex h-10 w-10" />
                <CarouselNext className="relative inline-flex h-10 w-10" />
              </div>
            </Carousel>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-dragon-dark mb-4">Program Details</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 border-b border-gray-100 pb-2">
                  <span className="font-medium text-dragon-gray">Duration:</span>
                  <span className="text-dragon-dark">{programData.duration}</span>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-100 pb-2">
                  <span className="font-medium text-dragon-gray">Season:</span>
                  <span className="text-dragon-dark">{programData.season}</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium text-dragon-gray">Location:</span>
                  <span className="text-dragon-dark">{programData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
