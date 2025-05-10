
import React from 'react';
import { Calendar, Route, Map, Users, GraduationCap, Award } from 'lucide-react';
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
    value: "8 Days",
    icon: React.createElement(Calendar, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Season",
    value: "Year Round",
    icon: React.createElement(Route, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Location",
    value: "Tsavo, Kenya",
    icon: React.createElement(Map, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Group Size",
    value: "10-28 Students / 2-4 Instructors and Rangers",
    icon: React.createElement(Users, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Educational Credits (Optional)",
    value: "CAS Points, Duke of Edinburgh",
    icon: React.createElement(GraduationCap, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Certificate",
    value: "Kapes Cultural Impact Certificate",
    icon: React.createElement(Award, { className: "h-5 w-5 text-dragon" })
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
  description: "A 8 day journey to Tsavo, Kenya, to learn from rural women and support Zawadisha's life-changing microloan program.",
  duration: "8 Days",
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
