
import React from 'react';
import { Calendar, Map, Users, Clock } from 'lucide-react';

// Trip Details
export const tripDetails = [
  {
    label: "Duration",
    value: "7-8 Days",
    icon: <Clock className="h-5 w-5 text-dragon" />
  },
  {
    label: "Season",
    value: "Year Round",
    icon: <Calendar className="h-5 w-5 text-dragon" />
  },
  {
    label: "Location",
    value: "Various conservation areas in Kenya",
    icon: <Map className="h-5 w-5 text-dragon" />
  },
  {
    label: "Group Size",
    value: "12-15 Students / 2-3 Instructors",
    icon: <Users className="h-5 w-5 text-dragon" />
  }
];

// Trip Highlights
export const tripHighlights = [
  {
    icon: <div className="w-12 h-12 rounded-full bg-dragon-beige flex items-center justify-center">
      <Users className="h-6 w-6 text-dragon" />
    </div>,
    title: "Local Expertise",
    description: "Work alongside local conservation rangers in protected areas"
  },
  {
    icon: <div className="w-12 h-12 rounded-full bg-dragon-beige flex items-center justify-center">
      <Users className="h-6 w-6 text-dragon" />
    </div>,
    title: "Wildlife Monitoring",
    description: "Participate in wildlife monitoring and data collection"
  },
  {
    icon: <div className="w-12 h-12 rounded-full bg-dragon-beige flex items-center justify-center">
      <Users className="h-6 w-6 text-dragon" />
    </div>,
    title: "Traditional Skills",
    description: "Learn traditional skills from community elders"
  },
  {
    icon: <div className="w-12 h-12 rounded-full bg-dragon-beige flex items-center justify-center">
      <Users className="h-6 w-6 text-dragon" />
    </div>,
    title: "Conservation Initiatives",
    description: "Contribute to ongoing conservation initiatives"
  },
  {
    icon: <div className="w-12 h-12 rounded-full bg-dragon-beige flex items-center justify-center">
      <Users className="h-6 w-6 text-dragon" />
    </div>,
    title: "Project Implementation",
    description: "Develop and implement a sustainable conservation project"
  }
];

// Gallery Images
export const galleryImages = [
  {
    src: "/lovable-uploads/5c2915df-6fcc-4fd9-a320-7025337ffd6a.png",
    alt: "Students working on conservation",
    className: "col-span-12 md:col-span-8 h-80 rounded-lg overflow-hidden"
  },
  {
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    alt: "Wildlife conservation",
    className: "col-span-12 md:col-span-4 h-80 rounded-lg overflow-hidden"
  },
  {
    src: "https://images.unsplash.com/photo-1610555356070-d0efb6505f81",
    alt: "Conservation area",
    className: "col-span-12 md:col-span-4 h-80 rounded-lg overflow-hidden"
  },
  {
    src: "https://images.unsplash.com/photo-1609151376730-f246ec8f9e65",
    alt: "Local conservation methods",
    className: "col-span-12 md:col-span-8 h-80 rounded-lg overflow-hidden"
  }
];

// Learning Outcomes
export const learningOutcomes = [
  {
    title: "Traditional Conservation Practices",
    description: "Learn about indigenous conservation techniques and their modern applications"
  },
  {
    title: "Ecosystem Management",
    description: "Understand biodiversity protection strategies and ecosystem services"
  },
  {
    title: "Human-Wildlife Conflict",
    description: "Explore resolution strategies for conflicts between wildlife and communities"
  },
  {
    title: "Sustainable Resource Management",
    description: "Learn techniques for managing natural resources sustainably"
  },
  {
    title: "Community-Based Conservation",
    description: "Develop projects that integrate community needs with conservation goals"
  }
];

// Trip Itinerary
export const tripItinerary = [
  {
    day: "Day 1",
    title: "Arrival & Orientation",
    activities: [
      "Arrive in Nairobi and transfer to accommodation",
      "Welcome dinner and program orientation",
      "Introduction to conservation challenges in Kenya"
    ]
  },
  {
    day: "Day 2",
    title: "Conservation Basics",
    activities: [
      "Morning lecture on ecosystem management principles",
      "Visit to local conservation organization headquarters",
      "Evening discussion on traditional ecological knowledge"
    ]
  },
  {
    day: "Day 3",
    title: "Field Work Introduction",
    activities: [
      "Travel to conservation area",
      "Introduction to field techniques and safety protocols",
      "Initial survey work with conservation rangers"
    ]
  },
  {
    day: "Day 4",
    title: "Community Engagement",
    activities: [
      "Visit nearby community affected by conservation efforts",
      "Learn about human-wildlife conflict from local perspective",
      "Participate in community discussion forum"
    ]
  },
  {
    day: "Day 5",
    title: "Practical Conservation",
    activities: [
      "Full day of hands-on conservation work",
      "Wildlife monitoring and data collection",
      "Habitat restoration activities"
    ]
  },
  {
    day: "Day 6",
    title: "Project Development",
    activities: [
      "Work in teams to develop conservation mini-projects",
      "Consult with local experts on project viability",
      "Refine project plans and prepare for implementation"
    ]
  },
  {
    day: "Day 7",
    title: "Project Implementation",
    activities: [
      "Implement conservation projects with community members",
      "Document process and outcomes",
      "Evening reflection and farewell dinner"
    ]
  },
  {
    day: "Day 8",
    title: "Departure",
    activities: [
      "Morning debrief and program evaluation",
      "Knowledge sharing session with local stakeholders",
      "Departure to Nairobi for international flights"
    ]
  }
];

// Program Data
export const programData = {
  title: "Community Conservation Program",
  description: "Work alongside local conservation experts to protect endangered ecosystems while learning traditional ecological knowledge and sustainable practices.",
  duration: "7-8 Days",
  season: "Year Round",
  location: "Various conservation areas in Kenya",
  goals: [
    "Learn traditional conservation practices",
    "Contribute to ecosystem management",
    "Develop human-wildlife conflict solutions",
    "Implement sustainable resource management"
  ]
};
