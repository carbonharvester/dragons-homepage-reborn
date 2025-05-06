
import { Clock, Calendar, MapPin, Users, School, Leaf } from "lucide-react";

// Trip details
export const tripDetails = [
  { label: "Duration", value: "7-8 Days", icon: <Clock className="h-5 w-5 text-dragon" /> },
  { label: "Season", value: "Jan-Oct", icon: <Calendar className="h-5 w-5 text-dragon" /> },
  { label: "Location", value: "Nairobi, Kenya", icon: <MapPin className="h-5 w-5 text-dragon" /> },
  { label: "Age Group", value: "15-18 years", icon: <Users className="h-5 w-5 text-dragon" /> },
  { label: "Group Size", value: "10-30 students", icon: <School className="h-5 w-5 text-dragon" /> },
];

// Trip highlights
export const tripHighlights = [
  {
    icon: <Leaf className="h-8 w-8 text-white" />,
    title: "Hands-On Permaculture",
    description: "Create sustainable farming systems using permaculture principles that regenerate soil and maximise yields."
  },
  {
    icon: <School className="h-8 w-8 text-white" />,
    title: "Meaningful Impact",
    description: "Directly contribute to a project that provides meals for up to 300 students, improving nutrition and learning outcomes."
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Cultural Exchange",
    description: "Engage with local students, educators and community members while learning about Kenyan culture and cuisine."
  }
];

// Learning outcomes
export const learningOutcomes = [
  {
    title: "Sustainability Education",
    description: "Students gain practical knowledge of sustainable agriculture and resource management principles."
  },
  {
    title: "Global Citizenship",
    description: "Develop empathy and understanding of global food security challenges and solutions."
  },
  {
    title: "Project Management",
    description: "Learn to plan, implement, and evaluate community development projects with tangible outcomes."
  },
  {
    title: "Team Collaboration",
    description: "Work together to solve real-world problems while developing leadership and communication skills."
  }
];

// Sample itinerary - Updated with correct information
export const tripItinerary = [
  {
    day: "Day 1",
    title: "Arrival in Nairobi",
    activities: [
      "Arrive at Jomo Kenyatta International Airport, Nairobi",
      "Clear customs and meet the trip leader and local guide",
      "Transfer by coach to accommodation and check-in",
      "Welcome dinner with traditional Kenyan dishes",
      "Orientation: Introduction to the permaculture project, Kapes' mission, and Food For Education's role in addressing food insecurity for 250 local students"
    ]
  },
  {
    day: "Day 2",
    title: "Nairobi National Park",
    activities: [
      "Breakfast at the camp",
      "Guided game drive in Nairobi National Park",
      "Explore wildlife with Nairobi's skyline as backdrop",
      "Learn about conservation and Kenya's ecosystems",
      "Picnic lunch in the park",
      "Return to accommodation for dinner and optional group activities"
    ]
  },
  {
    day: "Day 3",
    title: "Ngong Hills Hike",
    activities: [
      "Guided hike in Ngong Hills",
      "Trek across 7 hills, enjoying views of the Great Rift Valley and Nairobi",
      "Learn about local flora, fauna, and Maasai culture from guides",
      "Picnic lunch at Ngong Hills",
      "Workshop on Kenya's ecosystems and permaculture led by a local expert"
    ]
  },
  {
    day: "Day 4",
    title: "Food For Education Visit",
    activities: [
      "Visit to Food For Education facilities",
      "Introduction to their mission to provide school meals using locally sourced produce",
      "Tour facilities to understand the link to the farm project",
      "Discuss Kapes' mission to empower changemakers and combat food insecurity",
      "Orientation for the permaculture project and the farm's onion and tomato focus"
    ]
  },
  {
    day: "Day 5",
    title: "Permaculture Project - Water Harvesting and Composting Setup",
    activities: [
      "Install water harvesting system with two 10,000-liter water tanks",
      "Attach PVC gutters to school roof, adding leaf excluder and first flush system",
      "Lunch at the school with local students",
      "Construct three compost bins using concrete posts, metal roofing, and wire",
      "Set up a 200-liter drum for ongoing kitchen waste",
      "Workshop on water harvesting and composting"
    ]
  },
  {
    day: "Day 6",
    title: "Permaculture Project - Compost Processing and Vetiver Planting",
    activities: [
      "Build compost pile using pre-collected food waste, green and brown materials",
      "Produce biochar to add to compost and drum",
      "Lunch with local students",
      "Plant 500 vetiver slips along a 50-meter contour line",
      "Mulch with grass clippings and water with harvested rainwater",
      "Cultural activity: Visit a local market or attend a traditional cooking class"
    ]
  },
  {
    day: "Day 7",
    title: "Permaculture Project - Nursery Setup and Irrigation",
    activities: [
      "Build a nursery table with wooden posts, metal roofing, and shade cloth",
      "Prepare compost with biochar and fill reusable pots for onions and tomatoes",
      "Lunch at the school with local students",
      "Install drip irrigation for vegetable beds and test with rainwater",
      "Workshop on nursery management and irrigation led by a local expert"
    ]
  },
  {
    day: "Day 8",
    title: "Project Completion & Departure",
    activities: [
      "Build vegetable beds and plant nursery seeds",
      "Apply grass clippings or wood chips to beds",
      "Handover ceremony with instructions for school staff on maintenance",
      "Celebrate the farm's role in addressing food insecurity",
      "Final lunch with local students",
      "Transfer to airport for departure"
    ]
  }
];

export const galleryImages = [
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/55a9f399-0214-46a2-99d2-25dbc2cba06f.jpg?v=1746515494",
    alt: "Students working on sustainable farming project",
    className: "col-span-12 md:col-span-8 h-64 md:h-80 overflow-hidden rounded-lg"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/8aea54cf-37c5-43f0-8665-b4259a4acc7f.jpg?v=1746515558",
    alt: "Students learning about permaculture techniques",
    className: "col-span-12 md:col-span-4 h-64 md:h-80 overflow-hidden rounded-lg"
  },
  {
    src: "/lovable-uploads/9754806b-a818-4c3f-bb62-aeffe98e97f5.png",
    alt: "Students working in garden",
    className: "col-span-12 md:col-span-4 h-64 overflow-hidden rounded-lg"
  },
  {
    src: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1280",
    alt: "Close-up of planting seedlings",
    className: "col-span-12 md:col-span-8 h-64 overflow-hidden rounded-lg"
  }
];

// Program data for the brochure download
export const programData = {
  title: "Food For Education",
  description: "Transform unused school land into productive gardens while addressing food insecurity through sustainable agriculture.",
  duration: "7-8 Days",
  season: "Jan-Oct",
  location: "Nairobi, Kenya",
  goals: [
    "Establish pilot farm focused on onions and tomatoes",
    "Supply produce for school meals to address hunger",
    "Create sustainable farming systems using permaculture",
    "Educate and empower students to address food insecurity"
  ]
};
