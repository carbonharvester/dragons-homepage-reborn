
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
    value: "Jan-Oct",
    icon: Calendar
  },
  {
    label: "Location",
    value: "Nairobi, Kenya",
    icon: Map
  },
  {
    label: "Group Size",
    value: "10-30 students",
    icon: Users
  }
];

export const perfectFor = "Ages 12-18, Food security interests, Agricultural science, Community service, Sustainable development";
