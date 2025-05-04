
import { Calendar, Route, Map, Users, GraduationCap, Award } from 'lucide-react';

export const programData = {
  title: "Kapes Zawadisha Immersion",
  description: "An 8-day journey to Tsavo, Kenya, to learn from rural women and support Zawadisha's life-changing microloan program.",
  duration: "8 Days",
  season: "Year Round",
  location: "Tsavo, Kenya",
  goals: [
    "Experience daily challenges of rural Kenyan women to build empathy",
    "Learn about Zawadisha's microloan program through home visits",
    "Engage in cultural activities like crafting and dancing",
    "Contribute to community projects with measurable impact",
    "Connect with Kenya's natural beauty through safari and hiking"
  ]
};

export const tripHighlights = [
  {
    icon: "💧",
    title: "Water Walk Experience",
    description: "Carry jerry cans alongside local women to understand water collection challenges before rainwater tanks."
  },
  {
    icon: "🏠",
    title: "Home Visits",
    description: "Visit women's homes to see Zawadisha products in action and hear stories of transformation."
  },
  {
    icon: "🧶",
    title: "Cultural Crafting",
    description: "Create elephant dung paper, beaded bracelets, and woven baskets with the Neema Women's Group."
  },
  {
    icon: "🍲",
    title: "Traditional Cooking",
    description: "Learn to cook authentic Kenyan dishes with local women using fresh, local ingredients."
  },
  {
    icon: "🦁",
    title: "Tsavo Safari",
    description: "Experience Kenya's magnificent wildlife while learning about human-wildlife coexistence challenges."
  },
  {
    icon: "🛡️",
    title: "Kasaine Fence Project",
    description: "Create and install metal sheet noise deterrents on farm fences to help local farmers protect crops from elephants."
  },
  {
    icon: "🌱",
    title: "Microloan Impact",
    description: "Each trip directly funds a microloan for solar lamps, rainwater tanks, or clean cookstoves for rural women."
  },
  {
    icon: "🏆",
    title: "Educational Credits",
    description: "Earn CAS points and credits toward Duke of Edinburgh's Award while making a real difference."
  }
];

export const tripItinerary = [
  {
    day: "Day 1 (Friday)",
    title: "Arrival in Nairobi & Train to Voi",
    activities: [
      "Arrive at Jomo Kenyatta International Airport, meet Kapes staff and Zawadisha representatives",
      "Board the Nairobi-Voi train (4 hours) with journaling about first impressions",
      "Arrive at Rukinga Camp for welcome dinner featuring traditional Kenyan dishes",
      "Evening introduction to the Neema Women's Group and Zawadisha's microloan program"
    ]
  },
  {
    day: "Day 2 (Saturday)",
    title: "Safari in Tsavo East National Park",
    activities: [
      "Early morning game drive to observe elephants, lions, and other wildlife",
      "Picnic lunch in the park followed by a second game drive",
      "Group discussion about human-wildlife coexistence and women's resource challenges",
      "Evening workshop on Zawadisha's impact through stories of women beneficiaries"
    ]
  },
  {
    day: "Day 3 (Sunday)",
    title: "Hike in Murangu Hills",
    activities: [
      "Guided hike carrying light jerry cans to simulate women's daily water collection",
      "Picnic lunch at the summit with storytelling by a Zawadisha Peer Educator",
      "Learn about local flora used by women for fuel and medicine",
      "Evening workshop on Zawadisha's microloan model with examples of positive impacts"
    ]
  },
  {
    day: "Day 4 (Monday)",
    title: "Water Walk & Home Visits",
    activities: [
      "Participate in a water walk with Neema Women's Group carrying 10-20 liter jerry cans",
      "Visit women's homes to see Zawadisha products in action (solar lamps, cookstoves)",
      "Interview women about life changes due to these innovations",
      "Evening reflective discussion on privilege and resilience with Kapes staff"
    ]
  },
  {
    day: "Day 5 (Tuesday)",
    title: "Cultural Immersion & Crafting",
    activities: [
      "Learn traditional Taita or Duruma dance with the Neema Women's Group",
      "Create elephant dung paper, beaded bracelets from recycled magazines, and woven baskets",
      "Traditional cooking lesson with local ingredients and preparation methods",
      "Enjoy self-prepared dinner with the Neema Women's Group"
    ]
  },
  {
    day: "Day 6 (Wednesday)",
    title: "Kasaine Fence Project",
    activities: [
      "Visit a local farm to learn about human-wildlife conflict from farmers",
      "Workshop on creating Kasaine fences using metal sheets as elephant deterrents",
      "Work alongside farmers to install metal sheets on farm perimeters",
      "Discuss sustainable solutions for human-wildlife coexistence and conservation"
    ]
  },
  {
    day: "Day 7 (Thursday)",
    title: "Reflection & Farewell",
    activities: [
      "Morning cooking class to learn traditional Kenyan recipes",
      "Receive Kapes Cultural Impact Certificate during farewell ceremony",
      "Farewell dinner with the Neema Women's Group",
      "Final evening reflection and journaling on the trip experience"
    ]
  },
  {
    day: "Day 8 (Friday)",
    title: "Return to Nairobi & Departure",
    activities: [
      "Morning breakfast and final packing at Rukinga Camp",
      "Board the Voi-Nairobi train with final group reflection on the journey",
      "Arrive in Nairobi for lunch and brief city tour if time allows",
      "Transfer to Jomo Kenyatta International Airport for evening flights"
    ]
  }
];

export const galleryImages = [
  {
    src: "/lovable-uploads/2b64c2a8-18d5-43cc-a376-e32137687104.png",
    alt: "Students engaging with Zawadisha women", 
    className: "col-span-12 md:col-span-6 h-64"
  },
  {
    src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    alt: "Women's leadership workshop", 
    className: "col-span-12 md:col-span-6 h-64"
  },
  {
    src: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Students learning traditional crafts", 
    className: "col-span-12 md:col-span-4 h-64"
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1631&q=80",
    alt: "Water walk experience", 
    className: "col-span-12 md:col-span-4 h-64"
  },
  {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1520&q=80",
    alt: "Microloan impact in rural community", 
    className: "col-span-12 md:col-span-4 h-64"
  }
];

export const tripDetails = [
  {
    label: "Duration",
    value: "8 Days (Friday to Friday)",
    icon: null // Will be populated in the component
  },
  {
    label: "Season",
    value: "Year Round",
    icon: null // Will be populated in the component
  },
  {
    label: "Location",
    value: "Tsavo, Kenya (Rukinga Camp)",
    icon: null // Will be populated in the component
  },
  {
    label: "Group Size",
    value: "10-15 Students",
    icon: null // Will be populated in the component
  },
  {
    label: "Educational Credits",
    value: "CAS Points, Duke of Edinburgh",
    icon: null // Will be populated in the component
  },
  {
    label: "Certificate",
    value: "Kapes Cultural Impact Certificate",
    icon: null // Will be populated in the component
  }
];
