
import React from 'react';
import { MapPin, Calendar, Clock, School, Users } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProgramLocations = () => {
  // Key locations from the 4-week itinerary based on actual travel plans
  const locations = [
    {
      name: "Nairobi",
      weeks: "Week 1",
      description: "Kenya's vibrant capital city serving as your arrival and orientation point. Visit wildlife conservation centers and learn about urban photography.",
      activities: [
        "Urban photography workshops",
        "Wildlife conservation center visits",
        "Technical skills development",
        "Cultural photography in local communities",
        "Camera settings and lighting basics"
      ],
      image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747119235/DSC_0177_nvivx5.jpg"
    },
    {
      name: "Amboseli",
      weeks: "Week 1",
      description: "Known for its large elephant herds and stunning views of Mount Kilimanjaro, perfect for landscape and wildlife photography.",
      activities: [
        "Wildlife photography with Mt. Kilimanjaro backdrop",
        "Hot air balloon rides at sunrise",
        "Maasai village cultural photography",
        "Wildlife portrait techniques",
        "Advanced editing workshops"
      ],
      image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747119242/DSC_4401_bymb4c.jpg"
    },
    {
      name: "Samburu",
      weeks: "Week 2",
      description: "Home to unique wildlife species like Grevy's zebra and cultural experiences with the Samburu people.",
      activities: [
        "Rare wildlife species photography",
        "Cultural immersion with Samburu people",
        "Portrait photography workshops",
        "Landscape photography at Ewaso Ng'iro River",
        "One-on-one mentor sessions"
      ],
      image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747119216/A7405250_gyo4co.jpg"
    },
    {
      name: "Lake Turkana",
      weeks: "Week 3",
      description: "Capture the raw beauty of the jade sea, engage with the Turkana people, and document cultural traditions in this remote setting.",
      activities: [
        "Sunrise photography of turquoise waters",
        "Documentary filmmaking with Turkana communities",
        "Environmental storytelling workshops",
        "Youth photography workshops in villages",
        "Boat trip photography excursions"
      ],
      image: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747119190/1e93affc-4105-40dd-aa24-f5fd875d2fd5_ftinmr.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-academy text-dragon-dark text-center mb-4">
          Program Locations
        </h2>
        
        <p className="text-center text-dragon-gray max-w-3xl mx-auto mb-12">
          Students will experience diverse environments across Kenya, each offering unique photography and videography opportunities and challenges.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
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
