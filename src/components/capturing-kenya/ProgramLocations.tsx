
import React from 'react';
import { MapPin } from 'lucide-react';

const ProgramLocations = () => {
  // Key locations from the 4-week itinerary
  const locations = [
    {
      name: "Nairobi",
      description: "Kenya's vibrant capital city serving as your arrival and orientation point. Visit wildlife conservation centers and learn about urban photography.",
    },
    {
      name: "Maasai Mara",
      description: "World-famous wildlife reserve offering unparalleled opportunities to photograph the Big Five and witness the great migration (seasonal).",
    },
    {
      name: "Amboseli National Park",
      description: "Known for its large elephant herds and stunning views of Mount Kilimanjaro, perfect for landscape and wildlife photography.",
    },
    {
      name: "Tsavo Conservation Area",
      description: "Work with Wildlife Works to document conservation efforts and contribute to environmental storytelling projects.",
    },
    {
      name: "Coastal Kenya",
      description: "Capture the unique blend of Swahili culture, historical sites, and Indian Ocean landscapes in areas like Diani Beach and Lamu Island.",
    }
  ];

  return (
    <section id="locations" className="py-16 bg-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading">Program Locations</h2>
          <p className="section-subheading">
            Your photography journey will take you through Kenya's most visually stunning and diverse environments, 
            from iconic wildlife reserves to cultural hotspots.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="text-dragon h-5 w-5 mr-2" />
                  <h3 className="text-xl font-bold text-dragon-dark">{location.name}</h3>
                </div>
                <p className="text-dragon-gray">{location.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-dragon-gray italic">
            *Exact locations may vary based on wildlife movements, seasonal conditions, and unique photography opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramLocations;
