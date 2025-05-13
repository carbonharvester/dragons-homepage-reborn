
import { WeekProps } from "../../types";
import { Trees, Leaf, Users, School, Handshake, TreeDeciduous } from "lucide-react";

export const weekThreeData: WeekProps = {
  title: "Week 3",
  dates: "August 11 - August 18, 2025",
  focus: "Agroforestry and Greenhouse Work",
  days: [
    {
      day: "Monday",
      date: "August 11",
      title: "Agroforestry - Tree Planting",
      activities: [
        "Plant 500 native trees for carbon credits",
        "Prepare planting sites with compost",
        "Mulch trees and set up watering systems",
        "Evening workshop on carbon credits"
      ],
      icon: Trees
    },
    {
      day: "Tuesday",
      date: "August 12",
      title: "Greenhouse - Seedling Propagation",
      activities: [
        "Prepare 200 pots with compost",
        "Sow native tree seeds like baobab and moringa",
        "Maintain greenhouse and organize nursery",
        "Evening workshop on seedling care"
      ],
      icon: Leaf
    },
    {
      day: "Wednesday",
      date: "August 13",
      title: "Community Engagement and Workshop Preparation",
      activities: [
        "Join local youth in agroforestry tasks",
        "Learn about community livelihoods",
        "Prepare permaculture workshop for local youth",
        "Evening reflection session"
      ],
      icon: Users
    },
    {
      day: "Thursday",
      date: "August 14",
      title: "Student-Led Workshop for Tsavo Youth",
      activities: [
        "Teach local youth about permaculture principles",
        "Use hands-on activities for tree care and soil health",
        "Plant trees or maintain seedlings together",
        "Evening workshop on community conservation"
      ],
      icon: School
    },
    {
      day: "Friday",
      date: "August 15",
      title: "Agroforestry Maintenance and Data Collection",
      activities: [
        "Weed around trees and apply mulch",
        "Check water systems and monitor growth",
        "Collect data for carbon credit program",
        "Evening reflection on agroforestry impact"
      ],
      icon: Trees
    },
    {
      day: "Saturday",
      date: "August 16",
      title: "Tsavo East National Park",
      activities: [
        "Guided game drive in Tsavo East",
        "Observe elephants, lions, and buffalo",
        "Learn about savanna ecosystems",
        "Evening stargazing activity"
      ],
      icon: TreeDeciduous
    },
    {
      day: "Sunday",
      date: "August 17",
      title: "Rest and Community Cultural Day",
      activities: [
        "Morning rest and journaling time",
        "Participate in community cultural events",
        "Experience Maasai dance and storytelling",
        "Group reflection on Week 3"
      ],
      icon: Handshake
    }
  ]
};
