import React from 'react';
import { MapPin, Calendar, Clock, School, Users } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProgramLocations = () => {
  // Updated locations based on the new 3-week itinerary
  const locations = [
    {
      name: "Nairobi & Samburu",
      weeks: "Week 1",
      description: "Begin your journey in Kenya's capital before immersing yourself in Samburu culture for portrait photography and cultural storytelling.",
      activities: [
        "Photography basics workshop in Nairobi",
        "Street photography in bustling markets",
        "Cultural immersion with Samburu community",
        "Portrait photography and storytelling workshops",
        "Traditional dances and craft-making documentation"
      ],
      image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1749402400/A7404248_tu5rld.jpg"
    },
    {
      name: "Amboseli & Tsavo",
      weeks: "Week 2",
      description: "Develop wildlife photography skills in two of Kenya's most renowned national parks, with Mount Kilimanjaro as your backdrop.",
      activities: [
        "Hot air balloon sunrise photography",
        "Wildlife photography with Mt. Kilimanjaro backdrop",
        "Elephant herd documentation in Amboseli",
        "Big cats and landscape photography in Tsavo",
        "Mzima Springs aquatic life photography"
      ],
      image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747119242/DSC_4401_bymb4c.jpg"
    },
    {
      name: "Mombasa & Coast",
      weeks: "Week 3",
      description: "Experience coastal photography, marine life documentation, and architectural photography in Kenya's historic coastal region.",
      activities: [
        "Scenic train journey photography to Mombasa",
        "Old Town architecture and culture documentation",
        "Sunrise beach photography sessions",
        "Underwater and marine life photography",
        "Diani Beach lifestyle photography"
      ],
      image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747119216/A7405250_gyo4co.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-academy text-dragon-dark text-center mb-4">
          Program Locations
        </h2>
        
        <p className="text-center text-dragon-gray max-w-3xl mx-auto mb-12">
          Journey across Kenya's diverse regions over three weeks, from urban environments to wildlife parks to coastal communities, each offering unique photography opportunities.
        </p>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <AspectRatio ratio={16/9}>
                <img 
                  src={location.image} 
                  alt={location.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </AspectRatio>
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
