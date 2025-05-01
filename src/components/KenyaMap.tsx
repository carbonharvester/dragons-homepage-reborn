
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin } from "lucide-react";

const KenyaMap = () => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
      <AspectRatio ratio={16/9} className="relative">
        {/* Map background - realistic map of Kenya */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552189864-e144212f4bc0?auto=format&fit=crop&q=80" 
            alt="Realistic Map of Kenya"
            className="w-full h-full object-cover"
          />
          
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Nairobi pin */}
          <div className="absolute top-[47%] left-[54%] flex flex-col items-center">
            <MapPin size={28} className="text-dragon animate-bounce" />
            <div className="bg-white px-2 py-1 rounded-full shadow-md mt-1">
              <span className="text-xs font-semibold text-dragon-dark">Nairobi</span>
            </div>
          </div>
          
          {/* Compass */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
            <span className="text-xs font-serif font-bold">N</span>
            <div className="absolute w-0.5 h-5 bg-dragon-dark top-1"></div>
          </div>
          
          {/* Scale */}
          <div className="absolute bottom-4 left-4 flex flex-col items-center">
            <div className="flex items-center">
              <div className="h-1 w-12 bg-dragon-dark"></div>
              <div className="h-1 w-12 bg-dragon"></div>
            </div>
            <span className="text-xs text-dragon-dark mt-1 bg-white/80 px-2 py-1 rounded">0 500km</span>
          </div>
          
          {/* Title */}
          <div className="absolute top-4 left-4">
            <h3 className="text-sm md:text-base font-serif font-semibold text-white bg-dragon-dark/50 px-3 py-1 rounded-md">Kenya, East Africa</h3>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};

export default KenyaMap;
