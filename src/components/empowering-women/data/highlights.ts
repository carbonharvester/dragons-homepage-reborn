
import { Droplets, Home, Paintbrush, Utensils, Mountain, Shield, Sprout, Award } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface TripHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const tripHighlights: TripHighlight[] = [
  {
    icon: Droplets,
    title: "Water Walk Experience",
    description: "Carry jerry cans alongside local women to understand water collection challenges before rainwater tanks."
  },
  {
    icon: Home,
    title: "Home Visits",
    description: "Visit women's homes to see Zawadisha products in action and hear stories of transformation."
  },
  {
    icon: Paintbrush,
    title: "Cultural Crafting",
    description: "Create elephant dung paper, beaded bracelets, and woven baskets with the Neema Women's Group."
  },
  {
    icon: Utensils,
    title: "Traditional Cooking",
    description: "Learn to cook authentic Kenyan dishes with local women using fresh, local ingredients."
  },
  {
    icon: Mountain,
    title: "Tsavo Safari",
    description: "Experience Kenya's magnificent wildlife while learning about human-wildlife coexistence challenges."
  },
  {
    icon: Shield,
    title: "Kasaine Fence Project",
    description: "Create and install metal sheet noise deterrents on farm fences to help local farmers protect crops from elephants."
  },
  {
    icon: Sprout,
    title: "Microloan Impact",
    description: "Each trip directly funds a microloan for solar lamps, rainwater tanks, or clean cookstoves for rural women."
  },
  {
    icon: Award,
    title: "Educational Credits",
    description: "Earn CAS points and credits toward Duke of Edinburgh's Award while making a real difference."
  }
];
