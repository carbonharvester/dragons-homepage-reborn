import React from 'react';
import { MapPin, Calendar, Clock, School, Users } from "lucide-react";
const ProgramLocations = () => {
  const locations = [{
    name: "Nairobi",
    weeks: "Weeks 1-2",
    description: "Work with two urban schools to establish or expand permaculture farms, leveraging Nairobi's accessibility and Food For Education partnership.",
    activities: ["Farm assessment and water harvesting", "Composting and biochar production", "Vetiver planting and nursery setup", "Vegetable bed installation", "Greywater system implementation", "Student-led workshops"],
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1280"
  }, {
    name: "Tsavo Region",
    weeks: "Weeks 3-4",
    description: "Partner with Wildlife Works in Rukinga Sanctuary for agroforestry and greenhouse projects, focusing on reforestation, carbon credits, and community livelihoods.",
    activities: ["Native tree planting", "Seedling propagation in greenhouses", "Community engagement with local youth", "Agroforestry maintenance", "Data collection for carbon credits", "Sustainability training"],
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80"
  }];
  return <section className="py-16 bg-white">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-academy text-dragon-dark text-center mb-4">
          Program Locations
        </h2>
        
        <p className="text-center text-dragon-gray max-w-3xl mx-auto mb-12">
          Students will experience the diversity of Kenya through two distinct phases of the program.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {locations.map((location, index) => <div key={index} className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="h-64 overflow-hidden">
                <img src={location.image} alt={location.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
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
                  {location.activities.map((activity, idx) => <li key={idx}>{activity}</li>)}
                </ul>
              </div>
            </div>)}
        </div>
        
        
      </div>
    </section>;
};
export default ProgramLocations;