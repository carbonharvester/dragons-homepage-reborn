
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Globe, Calendar, Route, School, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";

// Program categories
const categories = [
  { id: "school-trips", label: "School Trips" },
  { id: "summer-abroad", label: "Summer Abroad" },
  { id: "multi-year", label: "Multi-Year Curriculum" },
];

// Programs data with updated image paths for all programs
const schoolTrips = [{
  title: "Food For Education",
  duration: "5-7 Days",
  season: "Jan-Nov", 
  description: "Join sustainable agriculture initiatives to address food security challenges in rural communities through hands-on farming and education programmes.",
  image: "/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png", 
  link: "/programs/food-for-education",
  icon: Globe
}, {
  title: "Community Conservation",
  duration: "5-7 Days",
  season: "Year Round",
  description: "Work alongside local conservation experts to protect endangered ecosystems while learning traditional ecological knowledge and sustainable practices.",
  image: "/lovable-uploads/5c2915df-6fcc-4fd9-a320-7025337ffd6a.png",
  link: "/programs/community-conservation",
  icon: Globe
}, {
  title: "Empowering Young Women",
  duration: "5-7 Days",
  season: "Year Round",
  description: "Support women-led initiatives focusing on education, entrepreneurship and leadership in communities working to achieve gender equity and economic independence.",
  image: "/lovable-uploads/2b64c2a8-18d5-43cc-a376-e32137687104.png",
  link: "/programs/empowering-women",
  icon: Globe
}];

const summerAbroad = [{
  title: "Empowering Young Women",
  duration: "2-3 Weeks",
  season: "Jun-Aug",
  description: "Support women-led initiatives focusing on education, entrepreneurship and leadership in communities working to achieve gender equity and economic independence.",
  image: "/lovable-uploads/2b64c2a8-18d5-43cc-a376-e32137687104.png",
  link: "/programs/empowering-women",
  icon: Globe
}, {
  title: "Safari & Sustainability",
  duration: "2-3 Weeks",
  season: "Jun-Aug",
  description: "Experience African wildlife conservation firsthand while learning about sustainable tourism practices that protect natural habitats.",
  image: "/lovable-uploads/39251f62-b5a3-49bb-a861-ede7fdc3f6cf.png",
  link: "/programs/safari-sustainability",
  icon: Globe
}];

const multiYearProgram = {
  title: "Multi-Year Travel Curriculum",
  subtitle: "Global Education Through Adventure",
  description: "Transform your school's global education with a three-year travel curriculum tailored to your needs. Our progressive trips to Africa build student skills, earn CAS and Duke of Edinburgh credits, and empower communities through sustainable projects.",
  years: [
    {
      title: "Year 1: Foundation Trip",
      ageRange: "Ages 12–13",
      description: "Discover Kenya through tree planting, safaris, and cultural workshops. Earn CAS points and a Kapes Foundation Certificate.",
      icon: School
    },
    {
      title: "Year 2: Development Trip",
      ageRange: "Ages 14–16",
      description: "Build a classroom in Tanzania, live with a host family, and trek. Gain leadership skills and a Kapes Development Certificate.",
      icon: Users
    },
    {
      title: "Year 3: Leadership Trip",
      ageRange: "Ages 17–18",
      description: "Lead a health workshop in Ghana, design your own project, and earn a Kapes Leadership Certificate. Complete Duke of Edinburgh's Gold Award.",
      icon: GraduationCap
    }
  ]
};

const ProgramsSection = () => {
  const [activeCategory, setActiveCategory] = useState("school-trips");
  
  return (
    <section id="programs" className="py-20 bg-dragon-beige">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="section-heading">Transformative Programs</h2>
          <p className="section-subheading mx-auto">
            Discover cultural immersion experiences designed to challenge, inspire, and transform.
          </p>
        </div>

        {/* Program Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 ${
                activeCategory === category.id
                  ? "bg-dragon text-white"
                  : "bg-white border border-dragon text-dragon hover:bg-dragon hover:text-white"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* School Trips Content */}
        <div className={`mt-8 ${activeCategory === "school-trips" ? "block" : "hidden"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolTrips.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>

        {/* Summer Abroad Content */}
        <div className={`mt-8 ${activeCategory === "summer-abroad" ? "block" : "hidden"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {summerAbroad.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>

        {/* Multi-Year Curriculum Content */}
        <div className={`mt-8 ${activeCategory === "multi-year" ? "block" : "hidden"}`}>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-dragon-dark">{multiYearProgram.title}</h3>
                <h4 className="text-xl text-dragon mb-4">{multiYearProgram.subtitle}</h4>
                <p className="text-dragon-gray mb-8">{multiYearProgram.description}</p>
                
                <div className="space-y-6">
                  {multiYearProgram.years.map((year, idx) => (
                    <div key={idx} className="flex gap-4 border-l-4 border-dragon pl-4 py-2">
                      <div className="bg-dragon text-white p-2 rounded-full shrink-0">
                        <year.icon size={24} />
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-dragon-dark">{year.title}</h5>
                        <p className="text-sm text-dragon-gray mb-1">{year.ageRange}</p>
                        <p>{year.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h5 className="text-lg font-bold text-dragon-dark mb-3">Customize Your Curriculum</h5>
                  <p className="mb-6">We work with you to design a program that fits your school's curriculum, values, and goals. Whether it's STEM, arts, or social justice, your travel curriculum will be unique.</p>
                  
                  <div className="flex flex-wrap gap-4 mt-6">
                    <Button className="btn-primary" asChild>
                      <Link to="/curriculum-guide">Learn More</Link>
                    </Button>
                    <Button variant="outline" className="border-dragon text-dragon hover:bg-dragon hover:text-white" asChild>
                      <Link to="/partner-with-us">Schedule Consultation</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Program Card component for individual programs
const ProgramCard = ({ program }) => {
  return (
    <Card className="overflow-hidden border-none shadow-md h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <AspectRatio ratio={16/9} className="bg-muted">
          <img 
            src={program.image} 
            alt={program.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format";
              console.log(`Failed to load image: ${program.image}, using fallback`);
            }}
          />
        </AspectRatio>
      </div>
          
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-md font-bold mb-3 text-dragon-dark">{program.title}</h3>
        <p className="text-dragon-gray mb-4 flex-grow">{program.description}</p>
        <div className="flex justify-between text-sm text-dragon-gray mb-4">
          <div className="flex items-center">
            <Route size={16} className="mr-1" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{program.season}</span>
          </div>
        </div>
        <Button variant="outline" className="w-full border-dragon text-dragon hover:bg-dragon hover:text-white" asChild>
          <Link to={program.link}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProgramsSection;
