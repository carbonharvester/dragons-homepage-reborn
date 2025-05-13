
import { Users, Search, Book, Sprout, Shield, Leaf } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface TripHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const tripHighlights: TripHighlight[] = [
  {
    icon: Users,
    title: "Local Expertise",
    description: "Work alongside local conservation rangers in protected areas"
  },
  {
    icon: Search,
    title: "Wildlife Monitoring",
    description: "Participate in wildlife monitoring and data collection"
  },
  {
    icon: Book,
    title: "Traditional Skills",
    description: "Learn traditional skills from community elders"
  },
  {
    icon: Sprout,
    title: "Conservation Initiatives",
    description: "Contribute to ongoing conservation initiatives"
  },
  {
    icon: Shield,
    title: "Project Implementation",
    description: "Develop and implement a sustainable conservation project"
  },
  {
    icon: Leaf,
    title: "Ecological Knowledge",
    description: "Gain deep insights into traditional ecological knowledge and sustainable practices"
  }
];
