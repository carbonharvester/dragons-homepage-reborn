import { WeekProps } from "./types";
import { 
  MapPinned, Droplet, LandPlot, Leaf, School, Trees, 
  Mountain, Handshake, Users, Building, TreeDeciduous
} from "lucide-react";

export const weeksData: WeekProps[] = [
  {
    title: "Week 1",
    dates: "July 28 - August 4, 2026",
    focus: "Farm Establishment and Community Building",
    days: [
      {
        day: "Monday",
        date: "July 28",
        title: "Arrival and Orientation",
        activities: [
          "Arrive in Nairobi, transfer to Wildebeest Eco Camp",
          "Welcome dinner with traditional Kenyan dishes",
          "Program orientation and team assignments",
        ],
        icon: MapPinned
      },
      {
        day: "Tuesday",
        date: "July 29",
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
        day: "Wednesday",
        date: "July 30",
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
        day: "Thursday",
        date: "July 31",
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
        day: "Friday",
        date: "August 1",
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
        day: "Saturday",
        date: "August 2",
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
        day: "Sunday",
        date: "August 3",
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
  },
  {
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
  },
  {
    title: "Week 3",
    dates: "August 11 - August 18, 2026",
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
  },
  {
    title: "Week 4",
    dates: "August 18 - August 25, 2026",
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
        title: "Travel to Nairobi and Cultural Day",
        activities: [
          "Travel back to Nairobi",
          "Check-in at Wildebeest Eco Camp",
          "Visit Bomas of Kenya for cultural experiences",
          "Participate in cultural workshop"
        ],
        icon: MapPinned
      },
      {
        day: "Saturday",
        date: "August 23",
        title: "Karura Forest Hike and Final Reflection",
        activities: [
          "Guided hike exploring Karura Forest trails",
          "Visit waterfalls and caves",
          "Complete CAS documentation",
          "Farewell dinner and closing ceremony"
        ],
        icon: Mountain
      },
      {
        day: "Sunday",
        date: "August 24",
        title: "Departure",
        activities: [
          "Final breakfast and check-out",
          "Transfer to Jomo Kenyatta International Airport",
          "Complete final reflections",
          "Depart for home countries"
        ],
        icon: MapPinned
      }
    ]
  }
];
