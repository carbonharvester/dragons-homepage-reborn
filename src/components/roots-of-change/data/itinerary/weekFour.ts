
import { WeekProps } from "../../types";
import { Droplet, Trees, Handshake, TreeDeciduous, Users, MapPinned } from "lucide-react";

export const weekFourData: WeekProps = {
  title: "Week 4",
  dates: "July 24 - July 31, 2025",
  focus: "Sustainability and Program Wrap-Up",
  days: [
    {
      day: "Friday",
      date: "July 24",
      title: "Greenhouse Expansion and Sustainability",
      activities: [
        "Morning: Theory - Sustainable greenhouse management",
        "Afternoon: Install drip irrigation system (Day 1)",
        "Package 100 seedlings for community distribution",
        "Evening: Long-term sustainability planning workshop"
      ],
      icon: Droplet
    },
    {
      day: "Saturday",
      date: "July 25",
      title: "Agroforestry Maintenance and Documentation",
      activities: [
        "Morning: Complete drip irrigation installation",
        "Afternoon: Apply compost to all tree bases",
        "Monitor tree health and document growth data",
        "Create maintenance guide for community use"
      ],
      icon: Trees
    },
    {
      day: "Sunday",
      date: "July 26",
      title: "Tsavo East National Park - Conservation Focus",
      activities: [
        "Full day educational excursion to Tsavo East",
        "Meet with park rangers about anti-poaching efforts",
        "Learn about wildlife conservation challenges",
        "Evening: Wildlife photography and observation"
      ],
      icon: TreeDeciduous
    },
    {
      day: "Monday",
      date: "July 27",
      title: "Community Presentation and Knowledge Transfer",
      activities: [
        "Morning: Present project results to community leaders",
        "Afternoon: Distribute seedlings and maintenance guides",
        "Train community youth on greenhouse care",
        "Evening: Feedback collection and program evaluation"
      ],
      icon: Handshake
    },
    {
      day: "Tuesday",
      date: "July 28",
      title: "Cultural Immersion and Final Celebration",
      activities: [
        "Morning: Visit local villages in Kasigau Corridor",
        "Afternoon: Traditional crafting and cooking workshops",
        "Community lunch and cultural performances",
        "Evening: Farewell celebration with Wildlife Works staff"
      ],
      icon: Users
    },
    {
      day: "Wednesday",
      date: "July 29",
      title: "Program Documentation and Reflection",
      activities: [
        "Morning: Complete final project documentation",
        "Afternoon: Group reflection on program impact",
        "Prepare presentations for return home",
        "Evening: Personal journaling and goal setting"
      ],
      icon: Handshake
    },
    {
      day: "Thursday",
      date: "July 30",
      title: "Return to Nairobi and Final Reflection",
      activities: [
        "Morning: Travel back to Nairobi",
        "Afternoon: Check-in at Ubuntu Kreative Village",
        "Final group reflection and program evaluation",
        "Farewell dinner at local restaurant"
      ],
      icon: MapPinned
    },
    {
      day: "Friday",
      date: "July 31",
      title: "Departure",
      activities: [
        "Final breakfast and program closing ceremony",
        "Transfer to Jomo Kenyatta International Airport",
        "Departure to home countries",
        "Safe travels and program completion"
      ],
      icon: MapPinned
    }
  ]
};
