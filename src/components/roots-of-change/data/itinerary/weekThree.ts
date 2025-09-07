
import { WeekProps } from "../../types";
import { Trees, Leaf, Users, School, Handshake, TreeDeciduous, MapPinned } from "lucide-react";

export const weekThreeData: WeekProps = {
  title: "Week 3",
  dates: "July 17 - July 23, 2025",
  focus: "Agroforestry and Greenhouse Work",
  days: [
    {
      day: "Friday",
      date: "July 17",
      title: "Travel and Tsavo Orientation",
      activities: [
        "Morning: Travel to Wildlife Works, Rukinga Sanctuary",
        "Afternoon: Check-in at camp and site orientation",
        "Introduction to agroforestry and greenhouse projects",
        "Evening: Tsavo ecosystem and conservation overview"
      ],
      icon: MapPinned
    },
    {
      day: "Saturday",
      date: "July 18",
      title: "Tsavo East National Park",
      activities: [
        "Full day educational excursion to Tsavo East National Park",
        "Wildlife observation and photography",
        "Learn about wildlife conservation and anti-poaching efforts", 
        "Evening: Wildlife photography review and reflection"
      ],
      icon: Trees
    },
    {
      day: "Sunday",
      date: "July 19",
      title: "Rest Day",
      activities: [
        "Free morning - personal time and rest",
        "Optional: Nature walks around Rukinga Sanctuary", 
        "Relaxed afternoon at camp",
        "Evening reflection and wildlife observation"
      ],
      icon: Trees
    },
    {
      day: "Monday",
      date: "July 20", 
      title: "Tree Planting - Phase 1",
      activities: [
        "Morning: Plant 150 native trees with proper spacing",
        "Afternoon: Mulch trees and set up temporary watering",
        "Learn tree identification and growth requirements",
        "Evening: Community conservation stories"
      ],
      icon: Trees
    },
    {
      day: "Tuesday", 
      date: "July 21",
      title: "Greenhouse Setup and Seedling Theory",
      activities: [
        "Morning: Greenhouse maintenance and organization",
        "Afternoon: Prepare 100 pots with compost mixture",
        "Theory: Seed germination and seedling care", 
        "Evening: Local plant species identification workshop"
      ],
      icon: Leaf
    },
    {
      day: "Wednesday",
      date: "July 22",
      title: "Tree Planting - Phase 2 and Seedling Work", 
      activities: [
        "Morning: Plant remaining 200 trees", 
        "Afternoon: Sow native tree seeds (baobab, moringa)",
        "Install permanent watering systems for trees",
        "Evening: Traditional ecological knowledge session"
      ],
      icon: Trees
    },
    {
      day: "Thursday",
      date: "July 23", 
      title: "Community Workshop and Engagement",
      activities: [
        "Morning: Work alongside local youth on tree care",
        "Afternoon: Teach local youth permaculture principles", 
        "Collaborative seedling care and maintenance",
        "Evening: Cultural exchange and reflection"
      ],
      icon: School
    }
  ]
};
