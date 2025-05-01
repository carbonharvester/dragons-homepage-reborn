
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin } from "lucide-react";

const KenyaMap = () => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
      <AspectRatio ratio={16/9} className="relative">
        {/* Map background */}
        <div className="absolute inset-0 bg-[#E8F4EA]">
          {/* Kenya illustrated map */}
          <svg 
            viewBox="0 0 800 500" 
            className="w-full h-full" 
            aria-label="Illustrated Map of Kenya"
          >
            {/* Background pattern */}
            <pattern 
              id="mapPattern" 
              patternUnits="userSpaceOnUse" 
              width="20" 
              height="20"
              patternTransform="rotate(45)"
            >
              <line 
                x1="0" 
                y1="0" 
                x2="0" 
                y2="20" 
                stroke="#C8E6C9" 
                strokeWidth="1.5" 
                opacity="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#mapPattern)" />
            
            {/* Water bodies */}
            <path 
              d="M650,200 Q700,250 650,350 L800,350 L800,150 Z" 
              fill="#AED1E6" 
              opacity="0.7"
              aria-label="Indian Ocean"
            />
            <path 
              d="M330,250 C370,220 390,250 370,290 C350,330 320,310 330,250 Z" 
              fill="#AED1E6" 
              opacity="0.8"
              aria-label="Lake Victoria"
            />
            
            {/* Neighboring countries */}
            <path 
              d="M100,100 L300,150 L280,300 L150,370 L50,280 Z" 
              fill="#D8E8D8" 
              stroke="#A5C0A7" 
              strokeWidth="2"
              aria-label="Neighboring Countries"
            />
            <path 
              d="M580,50 L700,130 L670,300 L550,280 Z" 
              fill="#D8E8D8" 
              stroke="#A5C0A7" 
              strokeWidth="2"
              aria-label="Neighboring Countries"
            />
            <path 
              d="M200,370 L380,350 L450,450 L150,450 Z" 
              fill="#D8E8D8" 
              stroke="#A5C0A7" 
              strokeWidth="2"
              aria-label="Neighboring Countries"
            />
            
            {/* Kenya */}
            <path 
              d="M300,150 L550,120 L670,300 L450,450 L380,350 L280,300 Z" 
              fill="#C8E6C9" 
              stroke="#88BB91" 
              strokeWidth="3"
              aria-label="Kenya"
            />

            {/* Mountain symbols */}
            <path 
              d="M400,180 L420,140 L440,180 Z" 
              fill="#88BB91" 
              stroke="#5D8C63" 
              strokeWidth="1"
              aria-label="Mount Kenya"
            />
            <path 
              d="M370,240 L385,210 L400,240 Z" 
              fill="#88BB91" 
              stroke="#5D8C63" 
              strokeWidth="1"
              aria-label="Mountains"
            />
            
            {/* Roads */}
            <line 
              x1="430" y1="250" x2="520" y2="290" 
              stroke="#F9D590" 
              strokeWidth="2" 
              strokeDasharray="2"
              aria-label="Road"
            />
            <line 
              x1="430" y1="250" x2="380" y2="300" 
              stroke="#F9D590" 
              strokeWidth="2" 
              strokeDasharray="2"
              aria-label="Road"
            />
          </svg>

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
            <span className="text-xs text-dragon-dark mt-1">0 500km</span>
          </div>
          
          {/* Title */}
          <div className="absolute top-4 left-4">
            <h3 className="text-sm md:text-base font-serif font-semibold text-dragon-dark">Kenya, East Africa</h3>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};

export default KenyaMap;
