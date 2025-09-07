
import { WeekProps } from "../../types";
import { MapPinned, Droplet, LandPlot, Leaf, School, Trees, Mountain } from "lucide-react";

export const weekOneData: WeekProps = {
  title: "Week 1",
  dates: "July 3 - July 9, 2025",
  focus: "Farm Establishment and Community Building",
  days: [
    {
      day: "Friday",
      date: "July 3",
      title: "Arrival and Orientation",
      activities: [
        "Arrive in Nairobi, transfer to Ubuntu Kreative Village",
        "Welcome dinner with traditional Kenyan dishes",
        "Program orientation and team introductions",
        "Site safety briefing and equipment overview"
      ],
      icon: MapPinned
    },
    {
      day: "Saturday",
      date: "July 4",
      title: "Permaculture Theory and Farm Assessment",
      activities: [
        "Morning: Outdoor classroom - Permaculture principles and ethics",
        "Afternoon: Site assessment with local staff",
        "Soil testing and analysis workshop",
        "Evening reflection and goal setting"
      ],
      icon: LandPlot
    },
    {
      day: "Sunday",
      date: "July 5",
      title: "Rest Day",
      activities: [
        "Free morning - personal time and rest",
        "Optional: Visit local markets in Nairobi",
        "Relaxed afternoon at Ubuntu Kreative Village",
        "Evening reflection and journaling"
      ],
      icon: Droplet
    },
    {
      day: "Monday",
      date: "July 6",
      title: "Water System Planning and Composting Setup",
      activities: [
        "Morning: Theory - Water harvesting systems design",
        "Afternoon: Begin composting system construction", 
        "Build first compost bin and gather materials",
        "Evening workshop on soil fertility basics"
      ],
      icon: Droplet
    },
    {
      day: "Tuesday",
      date: "July 7",
      title: "Water Harvesting Installation - Day 1",
      activities: [
        "Morning: Install gutters and collection points",
        "Afternoon: Prepare site for water tank installation",
        "Begin filter system assembly", 
        "Evening: Water conservation theory session"
      ],
      icon: Droplet
    },
    {
      day: "Wednesday",
      date: "July 8", 
      title: "Water Harvesting Installation - Day 2 & Nursery Setup",
      activities: [
        "Morning: Complete 10,000-liter tank installation",
        "Afternoon: Connect filters and test system",
        "Build nursery table with shade cloth",
        "Evening: Plant propagation workshop"
      ],
      icon: Leaf
    },
    {
      day: "Thursday",
      date: "July 9",
      title: "Biochar Production and Community Engagement",
      activities: [
        "Morning: Theory - Soil carbon and biochar benefits", 
        "Afternoon: Produce biochar (multiple small batches)",
        "Complete 3-bin composting system",
        "Plant 25-meter vetiver hedgerow with local students"
      ],
      icon: LandPlot
    }
  ]
};
