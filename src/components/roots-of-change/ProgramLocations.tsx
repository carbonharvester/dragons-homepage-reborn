
import React from 'react';
import { MapPin, Calendar, Clock, School, Users } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProgramLocations = () => {
  const locations = [{
    name: "Nairobi",
    weeks: "Weeks 1-2",
    description: "Work with urban schools that have limited land, teaching how to maximize small spaces through vertical farming, container gardening, and intensive planting techniques. Learn to adapt permaculture principles to urban constraints.",
    activities: ["Urban farming techniques", "Composting for small spaces", "Vertical gardening systems", "Container growing optimization", "Rainwater harvesting in urban settings", "Working with school feeding programs"],
    image: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Nairobi_From_Nairobi_National_Park.jpg?v=1747107973"
  }, {
    name: "Tsavo Region",
    weeks: "Weeks 3-4",
    description: "Visit rural schools with extensive land resources but different challenges like water access and infrastructure. While staying in Kasigau Corridor, learn from Wildlife Works experts and apply permaculture strategies suited for larger rural environments.",
    activities: ["Water conservation techniques", "Large-scale composting systems", "Agroforestry planning", "Drought-resistant planting", "School farm design for large spaces", "Connecting with local farming traditions"],
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80"
  }];

  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-academy text-dragon-dark text-center mb-4">
          Program Locations
        </h2>
        
        <p className="text-center text-dragon-gray max-w-3xl mx-auto mb-12">
          Students will experience the contrast between urban and rural school environments, each with unique challenges and opportunities for permaculture implementation.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="h-64 overflow-hidden">
                <AspectRatio ratio={16/9} className="h-full">
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-dragon mr-2" />
                  <h3 className="text-xl font-bold text-dragon-dark">{location.name}</h3>
                  <span className="ml-2 bg-dragon-beige text-dragon-dark text-sm px-3 py-1 rounded-full">
                    {location.weeks}
                  </span>
                </div>
                <p className="text-dragon-gray mb-4">{location.description}</p>
                <h4 className="font-bold text-dragon-dark mb-2">Key Activities:</h4>
                <ul className="list-disc pl-5 text-dragon-gray space-y-1">
                  {location.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramLocations;
