
import React from 'react';
import { BookOpen, Calendar, Clock, Leaf, MapPin, School, Users } from "lucide-react";
import TripHero from './trip/TripHero';
import TripOverview from './trip/TripOverview';
import TripHighlights from './trip/TripHighlights';
import TripGallery from './trip/TripGallery';
import TripLearningOutcomes from './trip/TripLearningOutcomes';
import TripItinerary from './trip/TripItinerary';
import TripCTA from './trip/TripCTA';
import ProgramBrochure from './ProgramBrochure';

interface TripDetail {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface TripHighlight {
  icon: React.ReactNode;
  title: string;
  description: string;
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
    { label: "Season", value: "Jan-Oct", icon: <Calendar className="h-5 w-5 text-dragon" /> },
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
  
  const galleryImages = [
    {
      src: "/lovable-uploads/9754806b-a818-4c3f-bb62-aeffe98e97f5.png",
      alt: "Students working in garden",
      className: "col-span-12 md:col-span-8 h-64 md:h-80 overflow-hidden rounded-lg"
    },
    {
      src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1280",
      alt: "Students learning about sustainable farming",
      className: "col-span-12 md:col-span-4 h-64 md:h-80 overflow-hidden rounded-lg"
    },
    {
      src: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80",
      alt: "Sustainable composting system",
      className: "col-span-12 md:col-span-4 h-64 overflow-hidden rounded-lg"
    },
    {
      src: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1280",
      alt: "Close-up of planting seedlings",
      className: "col-span-12 md:col-span-8 h-64 overflow-hidden rounded-lg"
    }
  ];
  
  // Program data for the brochure download
  const programData = {
    title: "Food For Education",
    description: "Transform unused school land into productive gardens while addressing food insecurity through sustainable agriculture.",
    duration: "5-7 Days",
    season: "Jan-Oct",
    location: "Nairobi, Kenya",
    goals: [
      "Establish pilot farm focused on onions and tomatoes",
      "Supply produce for school meals to address hunger",
      "Create sustainable farming systems using permaculture",
      "Educate and empower students to address food insecurity"
    ]
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <TripHero 
        title="Food For Education"
        subtitle="Transform unused school land into productive gardens while addressing food insecurity through sustainable agriculture."
        category="School Trip"
        imagePath="/lovable-uploads/ec51d2d5-5e96-4e9f-b5d6-5627994d2fa5.png"
      />

      {/* Main content */}
      <div className="container py-16">
        {/* Trip Overview */}
        <TripOverview tripDetails={tripDetails} />
        
        {/* Trip Highlights */}
        <TripHighlights highlights={tripHighlights} />
        
        {/* Photo Gallery */}
        <TripGallery images={galleryImages} />
        
        {/* Learning Outcomes */}
        <TripLearningOutcomes outcomes={learningOutcomes} />
        
        {/* Sample Itinerary */}
        <TripItinerary itineraryDays={tripItinerary} />
        
        {/* Program Brochure */}
        <ProgramBrochure program={programData} />
        
        {/* CTA Section */}
        <TripCTA />
      </div>
    </div>
  );
};

export default TripBrochure;
