
import { WeekProps } from "../../types";
import { Droplet, Trees, Handshake, TreeDeciduous, Users, MapPinned } from "lucide-react";

export const weekFourData: WeekProps = {
  title: "Week 4",
  dates: "August 18 - August 25, 2025",
  focus: "Sustainability and Program Wrap-Up",
  days: [
    {
      day: "Monday",
      date: "August 18",
      title: "Greenhouse Sustainability",
      activities: [
        "Install drip irrigation for seedlings",
        "Package 200 seedlings for community distribution",
        "Train community youth on greenhouse maintenance",
        "Evening workshop on sustainability"
      ],
      icon: Droplet
    },
    {
      day: "Tuesday",
      date: "August 19",
      title: "Agroforestry Finalization",
      activities: [
        "Apply compost to tree bases",
        "Check water systems and tree health",
        "Create tree maintenance guide for communities",
        "Evening reflection on project sustainability"
      ],
      icon: Trees
    },
    {
      day: "Wednesday",
      date: "August 20",
      title: "Community Presentation and Feedback",
      activities: [
        "Present project contributions to community leaders",
        "Share maintenance guides and collect feedback",
        "Plant final trees or distribute seedlings",
        "Evening workshop on documentation"
      ],
      icon: Handshake
    },
    {
      day: "Thursday",
      date: "August 21",
      title: "Final Community Celebration",
      activities: [
        "Showcase agroforestry plots and greenhouse",
        "Celebrate with community lunch and performances",
        "Participate in farewell activities with youth",
        "Evening reflection on program impact"
      ],
      icon: Handshake
    },
    {
      day: "Friday",
      date: "August 22",
      title: "Tsavo East Conservation Day",
      activities: [
        "Full day excursion to Tsavo East National Park",
        "Learn about wildlife conservation challenges",
        "Meet with park rangers to discuss anti-poaching efforts",
        "Evening wildlife viewing and photography session"
      ],
      icon: TreeDeciduous
    },
    {
      day: "Saturday",
      date: "August 23",
      title: "Kasigau Cultural Immersion",
      activities: [
        "Visit local villages in Kasigau Corridor",
        "Participate in traditional crafting and cooking",
        "Complete final program documentation and reflections",
        "Farewell celebration with Wildlife Works staff"
      ],
      icon: Users
    },
    {
      day: "Sunday",
      date: "August 24",
      title: "Travel to Nairobi and Farewell Dinner",
      activities: [
        "Morning departure for Nairobi",
        "Check-in at Wildebeest Eco Camp",
        "Final group reflection and celebration",
        "Farewell dinner at local restaurant"
      ],
      icon: MapPinned
    }
  ]
};
