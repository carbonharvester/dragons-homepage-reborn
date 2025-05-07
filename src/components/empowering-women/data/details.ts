
import { Calendar, Route, Map, Users, GraduationCap, Award } from 'lucide-react';
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
    icon: Calendar
  },
  {
    label: "Season",
    value: "Year Round",
    icon: Route
  },
  {
    label: "Location",
    value: "Tsavo, Kenya (Rukinga Camp)",
    icon: Map
  },
  {
    label: "Group Size",
    value: "10-28 Students / 2-4 Instructors and Rangers",
    icon: Users
  },
  {
    label: "Educational Credits (Optional)",
    value: "CAS Points, Duke of Edinburgh",
    icon: GraduationCap
  },
  {
    label: "Certificate",
    value: "Kapes Cultural Impact Certificate",
    icon: Award
  }
];

export const perfectFor = "Ages 12-16";
