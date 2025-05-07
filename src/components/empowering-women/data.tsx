
import React from 'react';
import { Droplets, Home, Paintbrush, Utensils, Mountain, Shield, Sprout, Award } from 'lucide-react';
import { Calendar, Route, Map, Users, GraduationCap, Heart } from 'lucide-react';
import { perfectFor } from './data/details';

// Export all data from separate files (maintaining imports)
export * from './data/itinerary/index';
export * from './data/gallery';
export * from './data/details';

// Export perfectFor explicitly to ensure it's available
export { perfectFor };

// Trip details
export const tripDetails = [
  {
    label: "Duration",
    value: "7-8 Days",
    icon: React.createElement(Calendar, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Season",
    value: "Year Round",
    icon: React.createElement(Route, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Location",
    value: "Tsavo, Kenya (Rukinga Camp)",
    icon: React.createElement(Map, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Group Size",
    value: "12-28 Students",
    icon: React.createElement(Users, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Educational Credits",
    value: "Optional",
    icon: React.createElement(GraduationCap, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Certificate",
    value: "Kapes Cultural Impact Certificate",
    icon: React.createElement(Award, { className: "h-5 w-5 text-dragon" })
  }
];

// Trip highlights
export const tripHighlights = [
  {
    icon: React.createElement(Droplets, { className: "h-8 w-8 text-white" }),
    title: "Water Walk Experience",
    description: "Carry jerry cans alongside local women to understand water collection challenges before rainwater tanks."
  },
  {
    icon: React.createElement(Home, { className: "h-8 w-8 text-white" }),
    title: "Home Visits",
    description: "Visit women's homes to see Zawadisha products in action and hear stories of transformation."
  },
  {
    icon: React.createElement(Paintbrush, { className: "h-8 w-8 text-white" }),
    title: "Cultural Crafting",
    description: "Create elephant dung paper, beaded bracelets, and woven baskets with the Neema Women's Group."
  },
  {
    icon: React.createElement(Utensils, { className: "h-8 w-8 text-white" }),
    title: "Traditional Cooking",
    description: "Learn to cook authentic Kenyan dishes with local women using fresh, local ingredients."
  },
  {
    icon: React.createElement(Mountain, { className: "h-8 w-8 text-white" }),
    title: "Tsavo Safari",
    description: "Experience Kenya's magnificent wildlife while learning about human-wildlife coexistence challenges."
  },
  {
    icon: React.createElement(Shield, { className: "h-8 w-8 text-white" }),
    title: "Kasaine Fence Project",
    description: "Create and install metal sheet noise deterrents on farm fences to help local farmers protect crops from elephants."
  }
];

// Learning outcomes
export const learningOutcomes = [
  {
    title: "Cultural Understanding",
    description: "Develop deep empathy for challenges faced by women in rural Kenya through immersive experiences."
  },
  {
    title: "Social Entrepreneurship",
    description: "Learn how microfinance initiatives create sustainable change and economic empowerment."
  },
  {
    title: "Gender Equity",
    description: "Analyze barriers to women's economic participation and explore practical solutions."
  },
  {
    title: "Leadership Development",
    description: "Strengthen communication, teamwork, and problem-solving skills through collaborative projects."
  }
];

// Program data for brochure download
export const programData = {
  title: "Exploring Women's Empowerment",
  description: "A 7-8 day journey to Tsavo, Kenya, to learn from rural women and support Zawadisha's life-changing microloan program.",
  duration: "7-8 Days",
  season: "Year Round",
  location: "Tsavo, Kenya",
  goals: [
    "Experience daily challenges of rural Kenyan women to build empathy",
    "Learn about Zawadisha's microloan program through home visits",
    "Engage in cultural activities like crafting and dancing",
    "Contribute to community projects with measurable impact",
    "Connect with Kenya's natural beauty through safari and hiking"
  ]
};
