
import { School, TreeDeciduous, Users, Sun, Camera } from 'lucide-react';
import { TripHighlight } from '@/components/trip/TripBrochureContent';

export const tripHighlights: TripHighlight[] = [
  {
    icon: <School className="h-10 w-10 text-dragon" />,
    title: "School & Community Visits",
    description: "Visit partner schools to observe sustainable gardens and water harvesting systems implemented by student groups, and engage with community members to hear first-hand impact stories."
  },
  {
    icon: <TreeDeciduous className="h-10 w-10 text-dragon" />,
    title: "Conservation Projects",
    description: "Work alongside Wildlife Works experts to learn about REDD+ programs, participate in hands-on agroforestry activities, and experience reforestation initiatives that Kapes student trips contribute to."
  },
  {
    icon: <Users className="h-10 w-10 text-dragon" />,
    title: "Cultural Immersion",
    description: "Engage with the Neema Women's Group through traditional dancing, crafts workshops, and meaningful cultural exchange, gaining insights into authentic activities from Kapes student programs."
  },
  {
    icon: <Sun className="h-10 w-10 text-dragon" />,
    title: "Outdoor Learning",
    description: "Hike the Murungu Hills with conservation experts, experience a 'Water Walk' with local women, and develop field-based teaching strategies applicable to your classroom."
  },
  {
    icon: <Camera className="h-10 w-10 text-dragon" />,
    title: "Tsavo East Safari",
    description: "Experience Kenya's iconic wildlife on game drives and guided walks in Tsavo East National Park, developing an understanding of biodiversity conservation to enrich your environmental curriculum."
  }
];
