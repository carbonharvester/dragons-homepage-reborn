
import { Clock, Calendar, Map, Users, Award, FileText } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import React from 'react';

// This interface is used locally for the data definition
interface TripDetailData {
  label: string;
  value: string;
  icon: LucideIcon;
}

// The actual exported data uses the icon components directly
// This will be transformed when used in components
const tripDetailsData: TripDetailData[] = [
  {
    label: "Duration",
    value: "4 Weeks",
    icon: Clock
  },
  {
    label: "Season",
    value: "Jul 28 - Aug 25 2026",
    icon: Calendar
  },
  {
    label: "Location",
    value: "Nairobi & Tsavo, Kenya",
    icon: Map
  },
  {
    label: "Group Size",
    value: "12 Students / 3 Instructors",
    icon: Users
  },
  {
    label: "Educational Credits",
    value: "CAS Points, Duke of Edinburgh",
    icon: Award
  },
  {
    label: "Certificate",
    value: "Kapes Sustainable Agriculture Certificate",
    icon: FileText
  }
];

// Transform LucideIcons to ReactNode before exporting
export const tripDetails = tripDetailsData.map(detail => ({
  ...detail,
  icon: React.createElement(detail.icon, { size: 20 })
}));

export const perfectFor = "Aged 16-20, Passionate About Sustainability, Enjoy Cultural Immersion, Interest in Agriculture, Active & Hands-on Learners, Open to New Experiences";
