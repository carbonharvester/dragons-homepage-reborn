
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
      title: "Team Building & Cultural Immersion",
      activities: [
        "Team building activities and icebreakers",
        "Nairobi city tour and cultural exploration",
        "Visit to local markets and food systems",
        "Group bonding activities",
        "Evening reflection and goal setting"
      ],
      icon: School
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
      title: "Permaculture Theory & Farm Assessment Begin",
      activities: [
        "Introduction to permaculture principles and ethics",
        "Site assessment and analysis techniques", 
        "Soil health fundamentals workshop",
        "Farm site visit and initial assessment",
        "Design methodology introduction"
      ],
      icon: LandPlot
    },
    {
      day: "Tuesday",
      date: "July 7",
      title: "Water System Planning & Installation Begin",
      activities: [
        "Morning: Water harvesting systems design theory",
        "Begin composting system construction",
        "Afternoon: Install gutters and collection points",
        "Evening workshop on soil fertility basics"
      ],
      icon: Droplet
    },
    {
      day: "Wednesday",
      date: "July 8", 
      title: "Water System Completion & Nursery Setup",
      activities: [
        "Morning: Prepare site for water tank installation",
        "Afternoon: Complete 10,000-liter tank installation and filters",
        "Begin filter system assembly and test system",
        "Build nursery table with shade cloth"
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
