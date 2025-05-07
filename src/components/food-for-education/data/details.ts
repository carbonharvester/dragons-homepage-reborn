
import { Calendar, Clock, MapPin, Users, School } from 'lucide-react';
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
    value: "Jan-Oct",
    icon: Calendar
  },
  {
    label: "Location",
    value: "Nairobi, Kenya",
    icon: MapPin
  },
  {
    label: "Group Size",
    value: "10-30 students",
    icon: Users
  },
  {
    label: "Educational Credits",
    value: "CAS Points, Duke of Edinburgh",
    icon: School
  }
];

export const perfectFor = "Students ages 15-18, Food sustainability advocates, Schools with service-learning programs";
