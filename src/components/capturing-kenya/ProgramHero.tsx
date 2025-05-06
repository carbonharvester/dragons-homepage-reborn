
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { Calendar, Users, MapPin, DollarSign } from "lucide-react";

const ProgramHero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center">
      <div className="absolute inset-0 z-0 bg-[url('https://cdn.shopify.com/s/files/1/0777/3326/5724/files/A7404062.jpg?v=1746502708')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container-wide relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 hero-heading">Capturing Kenya</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
            A 4-week creative adventure to photograph and film Kenya's stunning landscapes, 
            wildlife, and cultures while developing professional skills.
          </p>
          
          {/* Program Details */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
              <Calendar className="h-5 w-5" />
              <span>4 Weeks (Summer)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
              <Users className="h-5 w-5" />
              <span>Ages 16-20</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
              <MapPin className="h-5 w-5" />
              <span>Kenya</span>
            </div>
          </div>

          {/* Group Size and Tuition */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-md">
              <Users className="h-5 w-5" />
              <div>
                <span className="block text-sm">Group Size</span>
                <span className="font-medium">12 Students / 3 Instructors</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-md">
              <DollarSign className="h-5 w-5" />
              <div>
                <span className="block text-sm">Tuition</span>
                <span className="font-medium">$8,750 <span className="text-sm font-normal opacity-90">plus airfare & insurance</span></span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary" asChild>
              <Link to="/programs/capturing-kenya/itinerary">Explore Full Itinerary</Link>
            </Button>
            <CalendlyEmbed 
              url="https://calendly.com/kapesuniforms/discoverymeeting"
              text="Schedule Consultation"
              variant="outline"
              className="bg-white text-dragon hover:bg-gray-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHero;
