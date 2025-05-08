
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
    value: "Various conservation areas in Kenya",
    icon: Map
  },
  {
    label: "Group Size",
    value: "10-28 Students / 2-4 Instructors and Rangers",
    icon: Users
  }
];

export const perfectFor = "Ages 12-16, Environmental science, Conservation enthusiasts, CAS & Duke of Edinburgh, Wildlife protection, Outdoor adventure";

