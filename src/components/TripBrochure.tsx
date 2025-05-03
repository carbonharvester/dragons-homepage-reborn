
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, Clock, Leaf, MapPin, School, Users } from "lucide-react";

interface TripHighlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TripDetail {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface TripLearningOutcome {
  title: string;
  description: string;
}

interface TripItineraryDay {
  day: string;
  title: string;
  activities: string[];
}

const TripBrochure = () => {
  // Trip details
  const tripDetails: TripDetail[] = [
    { label: "Duration", value: "5-7 Days", icon: <Clock className="h-5 w-5 text-dragon" /> },
    { label: "Season", value: "Jan-Nov", icon: <Calendar className="h-5 w-5 text-dragon" /> },
    { label: "Location", value: "Nairobi, Kenya", icon: <MapPin className="h-5 w-5 text-dragon" /> },
    { label: "Age Group", value: "12-18 years", icon: <Users className="h-5 w-5 text-dragon" /> },
    { label: "Group Size", value: "10-30 students", icon: <School className="h-5 w-5 text-dragon" /> },
  ];

  // Trip highlights
  const tripHighlights: TripHighlight[] = [
    {
      icon: <Leaf className="h-8 w-8 text-white" />,
      title: "Hands-On Permaculture",
      description: "Create sustainable farming systems using permaculture principles that regenerate soil and maximize yields."
    },
    {
      icon: <School className="h-8 w-8 text-white" />,
      title: "Meaningful Impact",
      description: "Directly contribute to a project that provides meals for up to 300 students, improving nutrition and learning outcomes."
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Cultural Exchange",
      description: "Engage with local students, educators and community members while learning about Kenyan culture and cuisine."
    }
  ];

  // Learning outcomes
  const learningOutcomes: TripLearningOutcome[] = [
    {
      title: "Sustainability Education",
      description: "Students gain practical knowledge of sustainable agriculture and resource management principles."
    },
    {
      title: "Global Citizenship",
      description: "Develop empathy and understanding of global food security challenges and solutions."
    },
    {
      title: "Project Management",
      description: "Learn to plan, implement, and evaluate community development projects with tangible outcomes."
    },
    {
      title: "Team Collaboration",
      description: "Work together to solve real-world problems while developing leadership and communication skills."
    }
  ];

  // Sample itinerary
  const tripItinerary: TripItineraryDay[] = [
    {
      day: "Day 1",
      title: "Arrival & Orientation",
      activities: [
        "Arrive at Jomo Kenyatta International Airport",
        "Transfer to accommodation and check-in",
        "Welcome dinner with traditional Kenyan dishes",
        "Project orientation and introduction to Food For Education"
      ]
    },
    {
      day: "Day 2",
      title: "Food For Education Visit",
      activities: [
        "Visit Food For Education facilities",
        "Meet with program coordinators and local staff",
        "Learn about school meal programs and their impact",
        "Tour the project site and understand current challenges"
      ]
    },
    {
      day: "Day 3",
      title: "Permaculture Project - Day 1",
      activities: [
        "Install water harvesting system with 10,000-liter tanks",
        "Set up gutters and filtration systems",
        "Construct compost bins for the farm",
        "Workshop on water conservation techniques"
      ]
    },
    {
      day: "Day 4",
      title: "Permaculture Project - Day 2",
      activities: [
        "Build compost piles using food waste and local materials",
        "Plant vetiver hedgerows for sustainable mulch",
        "Set up erosion control systems",
        "Workshop on soil health and fertility"
      ]
    },
    {
      day: "Day 5",
      title: "Permaculture Project - Day 3",
      activities: [
        "Construct nursery tables with shade cloth",
        "Install drip irrigation system for vegetable beds",
        "Create garden beds for onions and tomatoes",
        "Plant seeds in nursery pots"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/ec51d2d5-5e96-4e9f-b5d6-5627994d2fa5.png" 
            alt="Food For Education project" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        </div>
        <div className="container relative z-10 h-full flex flex-col justify-center text-white pt-16">
          <div className="inline-block bg-dragon px-4 py-1 rounded-full text-sm font-medium mb-4">
            School Trip
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Food For Education
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Transform unused school land into productive gardens while addressing
            food insecurity through sustainable agriculture.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container py-16">
        {/* Trip Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6 text-dragon-dark">Trip Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-lg text-dragon-gray mb-6">
                This immersive 5-7 day program transforms unused school land into a productive
                permaculture farm. In Kenya, where about 1 in 3 children suffer from stunted growth 
                due to malnutrition, this initiative addresses critical food security challenges.
              </p>
              <p className="text-lg text-dragon-gray mb-6">
                Students will help establish a 200 sq meter pilot farm focused on onions and tomatoes, 
                which will be purchased by Food For Education in exchange for meals for students in need. 
                This sustainable model supports students, serves as a replicable solution for other schools,
                and offers participants hands-on experience with permaculture principles.
              </p>
              
              <div className="bg-dragon-beige p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4 text-dragon-dark">Project Goals</h3>
                <ul className="list-disc pl-5 space-y-3 text-dragon-gray">
                  <li>Establish pilot farm focused on onions and tomatoes</li>
                  <li>Supply produce for school meals to address hunger</li>
                  <li>Create sustainable farming systems using permaculture</li>
                  <li>Educate and empower students to address food insecurity</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 h-fit">
              <h3 className="text-xl font-bold mb-4 text-dragon-dark border-b border-gray-200 pb-2">Trip Details</h3>
              <div className="space-y-4">
                {tripDetails.map((detail, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-3">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{detail.label}</p>
                      <p className="font-medium text-dragon-dark">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-4">
                <Button className="w-full bg-dragon hover:bg-dragon-dark" asChild>
                  <Link to="/partner-with-us">Apply Now</Link>
                </Button>
                <Button variant="outline" className="w-full border-dragon text-dragon hover:bg-dragon-beige" asChild>
                  <a 
                    href="https://calendly.com/kapes-adventures/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Schedule Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trip Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8 text-dragon-dark text-center">Trip Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tripHighlights.map((highlight, index) => (
              <Card key={index} className="border-none shadow-md h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-dragon flex items-center justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-dragon-dark">{highlight.title}</h3>
                  <p className="text-dragon-gray">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Photo Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8 text-dragon-dark text-center">Trip Gallery</h2>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 h-64 md:h-80 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/9754806b-a818-4c3f-bb62-aeffe98e97f5.png" 
                alt="Students working in garden" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="col-span-12 md:col-span-4 h-64 md:h-80 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1280" 
                alt="Students learning about sustainable farming" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="col-span-12 md:col-span-4 h-64 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80" 
                alt="Sustainable composting system" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="col-span-12 md:col-span-8 h-64 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1280" 
                alt="Close-up of planting seedlings" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
        
        {/* Learning Outcomes */}
        <div className="mb-16 bg-dragon-beige p-8 md:p-12 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold text-dragon-dark">Learning Outcomes</h2>
            <div className="flex items-center mt-4 md:mt-0">
              <BookOpen className="h-6 w-6 text-dragon mr-2" />
              <span className="text-dragon font-medium">Educational Value</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-dragon-dark">{outcome.title}</h3>
                <p className="text-dragon-gray">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Sample Itinerary */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8 text-dragon-dark text-center">Sample Itinerary</h2>
          <div className="space-y-6">
            {tripItinerary.map((day, index) => (
              <div key={index} className="border-l-4 border-dragon pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-dragon">{day.day}: {day.title}</h3>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-dragon-gray">
                  {day.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-dragon-gray italic">
              Note: This is a sample itinerary and may be adjusted based on weather conditions, 
              group size, and specific educational objectives.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-dragon text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join us on this transformative journey to address food insecurity through 
            sustainable permaculture practices while providing your students with an 
            unforgettable educational experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" className="text-dragon-dark hover:bg-secondary/90" asChild>
              <Link to="/partner-with-us">Apply Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-dragon" asChild>
              <a
                href="https://calendly.com/kapes-adventures/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripBrochure;
