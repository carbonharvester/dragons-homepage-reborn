
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
    <div className="mb-16">
      {/* Content will go here */}
      <p>Program overview content</p>
    </div>
  );
};

export default ProgramOverview;
