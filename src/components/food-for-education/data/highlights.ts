
import { Leaf, School, Users, Binoculars, Camera, Globe } from "lucide-react";
import { LucideIcon } from "lucide-react";

// Interface that matches what TripHighlights component expects
export interface TripHighlightData {
  icon: LucideIcon;
  title: string;
  description: string;
}

// The raw data with Lucide icons
const tripHighlightsData: TripHighlightData[] = [
  {
    icon: Leaf,
    title: "Hands-On Permaculture",
    description: "Create sustainable farming systems using permaculture principles that regenerate soil and maximise yields."
  },
  {
    icon: School,
    title: "Meaningful Impact",
    description: "Directly contribute to a project that provides meals for up to 300 students, improving nutrition and learning outcomes."
  },
  {
    icon: Users,
    title: "Cultural Exchange",
    description: "Engage with local students, educators and community members while learning about Kenyan culture and cuisine."
  },
  {
    icon: Binoculars,
    title: "Nairobi National Park",
    description: "Explore Kenya's unique wildlife sanctuary with Nairobi's skyline as backdrop, learning about conservation efforts and ecosystems."
  },
  {
    icon: Camera,
    title: "Ngong Hills Cultural Hike",
    description: "Trek across the scenic Ngong Hills, exploring Maasai culture and local flora and fauna while learning about the intersection of ecosystems and sustainable agriculture."
  },
  {
    icon: Globe,
    title: "Textile Upcycling Workshop",
    description: "Visit Africa Collects Textiles to participate in weaving workshops, transforming old uniforms into useful products and understand the circular economy's role in community development."
  }
];

// Export the raw data with Lucide icons
export const tripHighlights = tripHighlightsData;
