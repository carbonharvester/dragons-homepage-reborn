
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
  },
  {
    label: "Educational Credits",
    value: "CAS Points, Duke of Edinburgh",
    icon: Award
  },
  {
    label: "Certificate",
    value: "Kapes Food Stewardship Certificate",
    icon: FileText
  }
];

// Transform LucideIcons to ReactNode before exporting
export const tripDetails = tripDetailsData.map(detail => ({
  ...detail,
  icon: React.createElement(detail.icon, { size: 20 })
}));

export const perfectFor = "Ages 12-18, Food security interests, Agricultural science, Community service, Sustainable development";
