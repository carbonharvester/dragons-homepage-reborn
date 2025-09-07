
import { WeekProps } from "../../types";
import { Droplet, Leaf, School, Handshake, MapPinned, Building, Trees } from "lucide-react";

export const weekTwoData: WeekProps = {
  title: "Week 2",
  dates: "July 10 - July 16, 2025",
  focus: "Farm Expansion and Community Workshops",
  days: [
    {
      day: "Friday",
      date: "July 10",
      title: "Raised Beds Construction and Planting",
      activities: [
        "Morning: Complete raised bed construction (10 beds)",
        "Afternoon: Plant onions and tomatoes in beds",
        "Apply compost and mulching techniques",
        "Evening: Companion planting theory session"
      ],
      icon: Leaf
    },
    {
      day: "Saturday",
      date: "July 11",
      title: "Nairobi National Park - Conservation Experience",
      activities: [
        "Early morning: Guided game drive in Nairobi National Park",
        "Learn about conservation and Kenya's ecosystems",
        "Picnic lunch in the park",
        "Afternoon: Visit animal orphanage and rehabilitation center"
      ],
      icon: Trees
    },
    {
      day: "Sunday",
      date: "July 12",
      title: "Rest Day",
      activities: [
        "Free morning - personal time and rest",
        "Optional: Explore Nairobi city center",
        "Relaxed afternoon at Ubuntu Kreative Village",
        "Evening reflection and planning for next week"
      ],
      icon: Droplet
    },
    {
      day: "Monday", 
      date: "July 13",
      title: "Greywater System Design and Installation",
      activities: [
        "Morning: Theory - Greywater recycling principles",
        "Afternoon: Map handwashing stations and plan trenches", 
        "Begin digging trenches (Day 1)",
        "Evening: Prepare lesson plans for teaching local students"
      ],
      icon: Droplet
    },
    {
      day: "Tuesday",
      date: "July 14", 
      title: "Greywater Installation and Student Prep",
      activities: [
        "Morning: Complete trench digging and install pipes",
        "Afternoon: Connect greywater system (first location)",
        "Prepare raised bed area (100 sq meters)",
        "Evening: Pedagogy workshop - Teaching practical skills"
      ],
      icon: Droplet
    },
    {
      day: "Wednesday",
      date: "July 15",
      title: "Student-Led Workshop - Composting and Planting", 
      activities: [
        "Morning: Teach local students composting techniques",
        "Afternoon: Hands-on planting workshop with students",
        "Collaborative nursery maintenance activities", 
        "Evening reflection on teaching experience"
      ],
      icon: School
    },
    {
      day: "Thursday", 
      date: "July 16",
      title: "Second Greywater System and Travel Prep",
      activities: [
        "Morning: Install second greywater system",
        "Afternoon: Host farm showcase for local community",
        "Pack and prepare for travel to Tsavo",
        "Farewell dinner with Ubuntu Kreative Village community"
      ],
      icon: Building
    }
  ]
};
