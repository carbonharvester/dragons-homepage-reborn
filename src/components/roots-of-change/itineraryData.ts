
import { WeekProps } from "./types";
import { 
  MapPinned, Droplet, LandPlot, Leaf, School, Trees, 
  Mountain, Handshake, Users, Building, TreeDeciduous
} from "lucide-react";

export const weeksData: WeekProps[] = [
  {
    title: "Week 1",
    dates: "June 28 - July 4, 2026",
    focus: "Farm Establishment and Community Building",
    days: [
      {
        day: "Monday",
        date: "June 28",
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
        date: "June 29",
        title: "School A - Farm Assessment and Water Harvesting",
        activities: [
          "Assess existing farm with School A staff",
          "Install/upgrade water harvesting system",
          "Set up 10,000-liter tank, gutters, and filters",
          "Evening workshop on permaculture principles"
        ],
        icon: Droplet
      },
      {
        day: "Wednesday",
        date: "June 30",
        title: "School B - Composting and Biochar",
        activities: [
          "Assess School B farm",
          "Build 3-bin composting system",
          "Produce 40-60 liters of biochar",
          "Evening workshop on soil fertility"
        ],
        icon: LandPlot
      },
      {
        day: "Thursday",
        date: "July 1",
        title: "School A - Vetiver and Nursery Setup",
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
        date: "July 2",
        title: "School B - Vegetable Beds and Community Engagement",
        activities: [
          "Clear 200 sq meter plot for raised beds",
          "Build 20 raised beds for onions and tomatoes",
          "Collaborate with School B students on farm tasks",
          "Evening reflection session"
        ],
        icon: School
      },
      {
        day: "Saturday",
        date: "July 3",
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
        date: "July 4",
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
    dates: "July 5 - July 11, 2026",
    focus: "Farm Expansion and Community Workshops",
    days: [
      {
        day: "Monday",
        date: "July 5",
        title: "School A - Greywater System and Bed Expansion",
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
        date: "July 6",
        title: "School B - Greywater System and Crop Diversification",
        activities: [
          "Install greywater system tailored to School B",
          "Prepare nursery pots for kale and peppers",
          "Plant companion crops for pest control",
          "Evening workshop on crop diversification"
        ],
        icon: Leaf
      },
      {
        day: "Wednesday",
        date: "July 7",
        title: "School A - Student-Led Workshop",
        activities: [
          "Teach School A students about composting and planting",
          "Use hands-on demonstrations for learning",
          "Collaborate on nursery planting and farm maintenance",
          "Evening reflection on teaching experience"
        ],
        icon: School
      },
      {
        day: "Thursday",
        date: "July 8",
        title: "School B - Student-Led Workshop and Farm Maintenance",
        activities: [
          "Teach School B students about water harvesting",
          "Turn compost piles and apply compost tea",
          "Update farm log with observations",
          "Evening workshop on community leadership"
        ],
        icon: Handshake
      },
      {
        day: "Friday",
        date: "July 9",
        title: "Food For Education and Community Celebration",
        activities: [
          "Visit Food For Education facilities",
          "Participate in meal preparation or distribution",
          "Host farm showcase with School A community",
          "Evening reflection on Week 2 impact"
        ],
        icon: Handshake
      },
      {
        day: "Saturday",
        date: "July 10",
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
        date: "July 11",
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
    dates: "July 12 - July 18, 2026",
    focus: "Agroforestry and Greenhouse Work",
    days: [
      {
        day: "Monday",
        date: "July 12",
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
        date: "July 13",
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
        date: "July 14",
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
        date: "July 15",
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
        date: "July 16",
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
        date: "July 17",
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
        date: "July 18",
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
    dates: "July 19 - July 25, 2026",
    focus: "Sustainability and Program Wrap-Up",
    days: [
      {
        day: "Monday",
        date: "July 19",
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
        date: "July 20",
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
        date: "July 21",
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
        date: "July 22",
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
        date: "July 23",
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
        date: "July 24",
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
        date: "July 25",
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
