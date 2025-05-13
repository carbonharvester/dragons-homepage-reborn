
import { Droplets, Home, Paintbrush, Utensils, Mountain, Shield } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface TripHighlightData {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const tripHighlights: TripHighlightData[] = [
  {
    icon: Droplets,
    title: "Water Walk Experience",
    description: "Carry jerry cans alongside local women to understand water collection challenges and the impact of water tanks."
  },
  {
    icon: Home,
    title: "Community Visits",
    description: "Visit local homes to witness how water scarcity affects daily life and hear stories of transformation."
  },
  {
    icon: Paintbrush,
    title: "Tank Mural Painting",
    description: "Create a colorful mural on a water tank that will serve the community for years to come."
  },
  {
    icon: Shield,
    title: "Water Tank Installation",
    description: "Work alongside local technicians to install a water tank that will provide clean water to the community."
  },
  {
    icon: Mountain,
    title: "Tsavo Safari",
    description: "Experience Kenya's magnificent wildlife while learning about human-wildlife coexistence challenges."
  },
  {
    icon: Utensils,
    title: "Cultural Immersion",
    description: "Create traditional crafts with the Neema Women's Group and share meals to build cross-cultural connections."
  }
];
