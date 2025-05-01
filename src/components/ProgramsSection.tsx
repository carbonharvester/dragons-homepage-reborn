
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Globe, Clock, Calendar } from "lucide-react";

// Programs data with updated image path for the Food For Education program
const programs = [{
  title: "Food For Education",
  category: "Summer",
  duration: "5-7 Days",
  season: "Year Round",
  description: "Join sustainable agriculture initiatives to address food security challenges in rural communities through hands-on farming and education programmes.",
  image: "/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png" // Using the uploaded image
}, {
  title: "Community Centred Conservation",
  category: "Semester",
  duration: "5-7 Days",
  season: "Year Round",
  description: "Work alongside local conservation experts to protect endangered ecosystems while learning traditional ecological knowledge and sustainable practices.",
  image: "/conservation.jpg" // Will be uploaded to public folder
}, {
  title: "Empowering Women",
  category: "Gap Year",
  duration: "5-7 Days",
  season: "Year Round",
  description: "Support women-led initiatives focusing on education, entrepreneurship and leadership in communities working to achieve gender equity and economic independence.",
  image: "/empowering-women.jpg" // Will be uploaded to public folder
}];

const ProgramsSection = () => {
  return <section id="programs" className="py-20 bg-dragon-beige">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="section-heading">Transformative Programs</h2>
          <p className="section-subheading mx-auto">
            Discover cultural immersion experiences designed to challenge, inspire, and transform.
          </p>
        </div>

        {/* Removed Program Type Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md h-full flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.src = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format";
                      console.log(`Failed to load image: ${program.image}, using fallback`);
                    }}
                  />
                </AspectRatio>
              </div>
                
              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-dragon-dark">{program.title}</h3>
                <p className="text-dragon-gray mb-4 flex-grow">{program.description}</p>
                <div className="flex justify-between text-sm text-dragon-gray mb-4">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{program.season}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-dragon text-dragon hover:bg-dragon hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default ProgramsSection;
