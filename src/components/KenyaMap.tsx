
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin } from "lucide-react";

const KenyaMap = () => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
      <AspectRatio ratio={16/9} className="bg-[#E8F4EA] relative">
        {/* Simplified map illustration */}
        <div className="absolute inset-0 p-4">
          <div className="h-full w-full relative">
            {/* Map background with water bodies */}
            <div className="absolute bottom-0 right-0 w-[35%] h-[60%] bg-[#AED1E6] rounded-tl-3xl opacity-50" 
                 aria-label="Indian Ocean"></div>
            
            {/* Kenya landmass */}
            <div className="absolute top-[15%] left-[30%] w-[40%] h-[70%] bg-[#C8E6C9] rounded-lg shadow-sm"
                 aria-label="Kenya"></div>
                 
            {/* Neighboring countries - simplified shapes */}
            <div className="absolute top-[10%] left-[10%] w-[25%] h-[40%] bg-[#D8E8D8] rounded-lg"
                 aria-label="Uganda"></div>
            <div className="absolute top-[5%] right-[20%] w-[20%] h-[50%] bg-[#D8E8D8] rounded-lg"
                 aria-label="Ethiopia"></div>
            <div className="absolute bottom-[10%] left-[15%] w-[20%] h-[35%] bg-[#D8E8D8] rounded-lg"
                 aria-label="Tanzania"></div>
                 
            {/* Nairobi pin */}
            <div className="absolute top-[45%] left-[48%] flex flex-col items-center">
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
              <span className="text-xs text-dragon-dark mt-1">0 500km</span>
            </div>
            
            {/* Title */}
            <div className="absolute top-4 left-4">
              <h3 className="text-sm md:text-base font-serif font-semibold text-dragon-dark">Kenya, East Africa</h3>
            </div>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};

export default KenyaMap;
