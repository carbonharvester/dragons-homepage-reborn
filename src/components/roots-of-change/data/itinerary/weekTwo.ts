
import { WeekProps } from "../../types";
import { Droplet, Leaf, School, Handshake, MapPinned, Building } from "lucide-react";

export const weekTwoData: WeekProps = {
  title: "Week 2",
  dates: "August 4 - August 11, 2026",
  focus: "Farm Expansion and Community Workshops",
  days: [
    {
      day: "Monday",
      date: "August 4",
      title: "Greywater System and Bed Expansion",
      activities: [
        "Install greywater recycling system",
        "Map handwashing stations and dig trenches",
        "Expand vegetable beds for beans",
        "Evening workshop on greywater recycling"
      ],
      icon: Droplet
    },
    {
      day: "Tuesday",
      date: "August 5",
      title: "Greywater System and Crop Diversification",
      activities: [
        "Install greywater system for second location",
        "Prepare nursery pots for kale and peppers",
        "Plant companion crops for pest control",
        "Evening workshop on crop diversification"
      ],
      icon: Leaf
    },
    {
      day: "Wednesday",
      date: "August 6",
      title: "Student-Led Workshop",
      activities: [
        "Teach local students about composting and planting",
        "Use hands-on demonstrations for learning",
        "Collaborate on nursery planting and farm maintenance",
        "Evening reflection on teaching experience"
      ],
      icon: School
    },
    {
      day: "Thursday",
      date: "August 7",
      title: "Student-Led Workshop and Farm Maintenance",
      activities: [
        "Teach students about water harvesting",
        "Turn compost piles and apply compost tea",
        "Update farm log with observations",
        "Evening workshop on community leadership"
      ],
      icon: Handshake
    },
    {
      day: "Friday",
      date: "August 8",
      title: "Food For Education and Community Celebration",
      activities: [
        "Visit Food For Education facilities",
        "Participate in meal preparation or distribution",
        "Host farm showcase with local community",
        "Evening reflection on Week 2 impact"
      ],
      icon: Handshake
    },
    {
      day: "Saturday",
      date: "August 9",
      title: "Nairobi National Museum and Maasai Market",
      activities: [
        "Explore exhibits on Kenyan history and culture",
        "Participate in guided tour or art workshop",
        "Visit Maasai Market for crafts and artistry",
        "Evening cultural storytelling"
      ],
      icon: Building
    },
    {
      day: "Sunday",
      date: "August 10",
      title: "Travel to Tsavo and Wildlife Works Orientation",
      activities: [
        "Travel to Wildlife Works, Rukinga Sanctuary",
        "Check-in at Rukinga Camp",
        "Orientation to agroforestry and greenhouse projects",
        "Group reflection on Nairobi phase"
      ],
      icon: MapPinned
    }
  ]
};
