
import { Leaf, School, Users, Globe, GraduationCap, Heart } from "lucide-react";
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
    title: "Permaculture Development",
    description: "Turn degraded land at schools across Kenya into productive farms."
  },
  {
    icon: GraduationCap,
    title: "Skill Building",
    description: "Gain hands-on experience in advanced permaculture techniques including water management, waste management, and climate smart agriculture while developing leadership skills."
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Strengthen ties with Kenyan students and communities through collaborative projects, workshops, and cultural exchange that support local food security initiatives."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Foster cross-cultural collaboration and understanding through immersive experiences in both urban and rural Kenyan communities."
  },
  {
    icon: Heart,
    title: "Sustainable Solutions",
    description: "Work with local partners to implement long-term sustainable solutions that continue to benefit communities well beyond your trip."
  },
  {
    icon: School,
    title: "Educational Leadership",
    description: "Develop your capacity as an advocate for sustainable food systems by learning to teach others about permaculture principles and practices."
  }
];

// Export the raw data with Lucide icons
export const tripHighlights = tripHighlightsData;
