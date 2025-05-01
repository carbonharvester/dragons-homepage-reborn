
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, School, Navigation } from "lucide-react";

// Kirigu Primary School coordinates (approximate based on Nairobi area)
const kirigu = {
  name: "Kirigu Primary School",
  lat: -1.3021,
  lng: 36.7719 // Approximate coordinates for Kirigu area in Nairobi
};

// Other city coordinates
const cities = [
  { name: "Nairobi", position: { lat: -1.2921, lng: 36.8219 }, isPrimary: false },
  { name: "Mombasa", position: { lat: -4.0435, lng: 39.6682 }, isPrimary: false },
  { name: "Kisumu", position: { lat: -0.1022, lng: 34.7617 }, isPrimary: false }
];

const KenyaMap = () => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
      <AspectRatio ratio={16/9} className="relative">
        {/* Static Map Image */}
        <div className="w-full h-full bg-dragon-beige/20 relative">
          {/* Kenya Map Image - Using an actual map of Kenya */}
          <img 
            src="https://images.unsplash.com/photo-1538503657467-6ccca16dc10e?q=80&w=2070&auto=format&fit=crop"
            alt="Map of Kenya" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?q=80&w=2070&auto=format&fit=crop";
              console.log("Failed to load Kenya map image, using fallback");
            }}
          />
          
          {/* Map Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dragon-beige/10"></div>
          
          {/* Kirigu Primary School Marker - Make it prominent */}
          <div className="absolute" style={{ 
            left: `${((kirigu.lng - 34) / 6) * 100}%`, 
            top: `${((kirigu.lat + 4.5) / 4.5) * 100}%`,
            transform: 'translate(-50%, -100%)'
          }}>
            <div className="flex flex-col items-center">
              <div className="relative animate-bounce mb-1">
                <School size={24} className="text-dragon fill-dragon-dark" />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-dragon"></div>
              </div>
              <div className="bg-white px-2 py-1 rounded shadow-md text-xs font-semibold text-dragon-dark whitespace-nowrap">
                Kirigu Primary School
                <span className="text-[10px] block text-gray-600">Food For Education Project</span>
              </div>
            </div>
          </div>
          
          {/* Other City Markers */}
          {cities.map((city, index) => (
            <div 
              key={index}
              className="absolute" 
              style={{ 
                left: `${((city.position.lng - 34) / 6) * 100}%`, 
                top: `${((city.position.lat + 4.5) / 4.5) * 100}%`,
                transform: 'translate(-50%, -100%)'
              }}
            >
              <div className="flex flex-col items-center">
                <MapPin size={18} className="text-dragon-dark mb-1" />
                <div className="bg-white px-2 py-0.5 rounded shadow-md text-xs font-semibold text-dragon-gray">
                  {city.name}
                </div>
              </div>
            </div>
          ))}

          {/* Compass for map orientation */}
          <div className="absolute bottom-3 right-3 bg-white/80 p-2 rounded-full shadow-md">
            <Navigation size={24} className="text-dragon-dark" />
          </div>
        </div>

        {/* Overlay title */}
        <div className="absolute top-4 left-4 z-10">
          <h3 className="text-sm md:text-base font-serif font-semibold text-white bg-dragon-dark/70 px-3 py-1 rounded-md">
            Kenya, East Africa
          </h3>
        </div>
      </AspectRatio>
    </div>
  );
};

export default KenyaMap;
