
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
    value: "7-8 Days",
    icon: Clock
  },
  {
    label: "Season",
    value: "Year Round",
    icon: Calendar
  },
  {
    label: "Location",
    value: "Various conservation areas in Kenya",
    icon: Map
  },
  {
    label: "Group Size",
    value: "12-15 Students / 2-3 Instructors",
    icon: Users
  }
];
