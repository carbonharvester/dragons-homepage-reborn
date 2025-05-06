
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { DollarSign, Users } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

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

const ProgramOverview = ({ programData }: ProgramOverviewProps) => {
  // Gallery images
  const galleryImages = [
    {
      src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/DSC_0177.jpg?v=1746513529",
      alt: "Student photographer capturing wildlife in Kenya"
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/A7404062.jpg?v=1746502708",
      alt: "Photography student with camera in Kenya"
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/55a9f399-0214-46a2-99d2-25dbc2cba06f.jpg?v=1746515494",
      alt: "Students working on photography project"
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/8aea54cf-37c5-43f0-8665-b4259a4acc7f.jpg?v=1746515558",
      alt: "Student learning photography techniques"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading">Program Overview</h2>
          <p className="section-subheading">
            Kapes Creative Capture is designed for budding photographers and filmmakers who want to 
            develop their skills while exploring Kenya's natural wonders and diverse cultures.
          </p>
        </div>

        {/* Program Details Box - Moved from hero */}
        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          <div className="flex items-center gap-2 bg-dragon-beige px-4 py-3 rounded-md">
            <Users className="h-5 w-5 text-dragon" />
            <div>
              <span className="block text-sm text-gray-600">Group Size</span>
              <span className="font-medium text-dragon-dark">12 Students / 3 Instructors</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-dragon-beige px-4 py-3 rounded-md">
            <DollarSign className="h-5 w-5 text-dragon" />
            <div>
              <span className="block text-sm text-gray-600">Tuition</span>
              <span className="font-medium text-dragon-dark">$8,750 <span className="text-sm font-normal text-gray-600">plus airfare & insurance</span></span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="relative">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center mt-4">
                <CarouselPrevious className="static translate-y-0 mr-2" />
                <CarouselNext className="static translate-y-0 ml-2" />
              </div>
            </Carousel>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-dragon-dark mb-2">Program Highlights</h3>
              <ul className="space-y-3">
                {programData.goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mr-2 mt-1"></span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dragon-dark mb-2">Led by Experts</h3>
              <p className="text-dragon-gray">
                Learn from professional photographers and videographers with experience in wildlife, 
                landscapes, and cultural documentation. Receive personalized mentoring to develop your 
                unique creative vision and technical skills.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dragon-dark mb-2">Community Impact</h3>
              <p className="text-dragon-gray">
                Your participation funds photography workshops for Kenyan youth, provides cameras to 
                local communities, and supports a community art exhibit in Nairobi. Make a lasting 
                difference while creating your portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
