
import { Clock, Calendar, Map, Users } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface TripDetail {
  label: string;
  value: string;
  icon: LucideIcon;
}

export const tripDetails: TripDetail[] = [
  {
    label: "Duration",
    value: "8 Days",
    icon: Clock
  },
  {
    label: "Season",
    value: "Year Round",
    icon: Calendar
  },
  {
    label: "Location",
    value: "Tsavo East, Kenya",
    icon: Map
  },
  {
    label: "Group Size",
    value: "10-28 Students / 2-4 Instructors and Rangers",
    icon: Users
  }
];

export const perfectFor = "Aged 12-15, Passionate About The Environmental, Love Wildlife, Enjoy Cultural Immersion, Seeking Personal Growth, Comfortable with Physical Challenges, Value Community Engagement, Interested in Adventure";
