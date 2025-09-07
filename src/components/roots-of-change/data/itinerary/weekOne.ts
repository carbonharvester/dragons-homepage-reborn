
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
        "Program orientation and team assignments",
      ],
      icon: MapPinned
    },
    {
      day: "Saturday",
      date: "July 4",
      title: "Farm Assessment and Water Harvesting",
      activities: [
        "Assess existing farm with local staff",
        "Install/upgrade water harvesting system",
        "Set up 10,000-liter tank, gutters, and filters",
        "Evening workshop on permaculture principles"
      ],
      icon: Droplet
    },
    {
      day: "Sunday",
      date: "July 5",
      title: "Composting and Biochar",
      activities: [
        "Assess farm area",
        "Build 3-bin composting system",
        "Produce 40-60 liters of biochar",
        "Evening workshop on soil fertility"
      ],
      icon: LandPlot
    },
    {
      day: "Monday",
      date: "July 6",
      title: "Vetiver and Nursery Setup",
      activities: [
        "Plant 50-meter vetiver hedgerow",
        "Build nursery table with shade cloth",
        "Prepare 30 pots for onions and tomatoes",
        "Evening cultural activity"
      ],
      icon: Leaf
    },
    {
      day: "Tuesday",
      date: "July 7",
      title: "Vegetable Beds and Community Engagement",
      activities: [
        "Clear 200 sq meter plot for raised beds",
        "Build 20 raised beds for onions and tomatoes",
        "Collaborate with local students on farm tasks",
        "Evening reflection session"
      ],
      icon: School
    },
    {
      day: "Wednesday",
      date: "July 8",
      title: "Nairobi National Park",
      activities: [
        "Guided game drive in Nairobi National Park",
        "Learn about conservation and Kenya's ecosystems",
        "Picnic lunch in the park",
        "Optional visit to animal orphanage"
      ],
      icon: Trees
    },
    {
      day: "Thursday",
      date: "July 9",
      title: "Ngong Hills Hike",
      activities: [
        "Guided hike across Ngong Hills",
        "Enjoy views of the Great Rift Valley",
        "Learn about local flora, fauna, and Maasai culture",
        "Group reflection and goal setting for Week 2"
      ],
      icon: Mountain
    }
  ]
};
