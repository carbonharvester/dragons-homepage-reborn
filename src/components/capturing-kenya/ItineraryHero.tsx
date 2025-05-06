
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ChevronLeft } from "lucide-react";

interface ItineraryHeroProps {
  title: string;
  subtitle: string;
  duration: string;
  days: number;
  location: string;
}

const ItineraryHero = ({ title, subtitle, duration, days, location }: ItineraryHeroProps) => {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center">
      <div className="absolute inset-0 z-0 bg-[url('https://cdn.shopify.com/s/files/1/0777/3326/5724/files/DSC_0177.jpg?v=1746513529')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="container-wide relative z-10 text-white">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button variant="ghost" className="text-white hover:bg-white/20 -ml-4 mb-2" asChild>
              <Link to="/programs/capturing-kenya">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Program Overview
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2 font-academy">{title}</h1>
          <h2 className="text-xl md:text-2xl opacity-90 mb-6 font-gothic uppercase tracking-wider">{subtitle}</h2>
          <div className="flex flex-wrap gap-4 mb-3">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
              <Calendar className="h-5 w-5" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
              <Clock className="h-5 w-5" />
              <span>{days} Days</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
              <MapPin className="h-5 w-5" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItineraryHero;
