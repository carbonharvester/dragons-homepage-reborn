
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
      title: "Agroforestry Theory and Site Preparation",
      activities: [
        "Morning: Outdoor classroom - Agroforestry principles",
        "Afternoon: Site assessment for tree planting areas",
        "Prepare planting sites and gather materials",
        "Evening: Carbon credits and climate change workshop"
      ],
      icon: Trees
    },
    {
      day: "Sunday",
      date: "July 19",
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
      day: "Monday",
      date: "July 20",
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
      day: "Tuesday",
      date: "July 21",
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
      day: "Wednesday",
      date: "July 22",
      title: "Community Workshop Preparation",
      activities: [
        "Morning: Work alongside local youth on tree care",
        "Afternoon: Prepare permaculture workshop materials",
        "Learn about community livelihoods and challenges",
        "Evening: Teaching methodology and cultural exchange"
      ],
      icon: Users
    },
    {
      day: "Thursday",
      date: "July 23",
      title: "Student-Led Community Workshop",
      activities: [
        "Morning: Teach local youth permaculture principles",
        "Afternoon: Hands-on tree planting with community",
        "Collaborative seedling care and maintenance",
        "Evening: Reflection on community engagement"
      ],
      icon: School
    }
  ]
};
