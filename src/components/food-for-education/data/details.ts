
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
    value: "Jan-Oct",
    icon: Calendar
  },
  {
    label: "Location",
    value: "Tsavo, Kenya",
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
  }
];

export const perfectFor = "Students ages 12-16, Environmental enthusiasts, Food sustainability advocates";
