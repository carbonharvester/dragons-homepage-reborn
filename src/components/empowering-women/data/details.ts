
import React from 'react';
import { Calendar, Route, Map, Users, GraduationCap, Award } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface TripDetail {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export const tripDetails: TripDetail[] = [
  {
    label: "Duration",
    value: "8 Days",
    icon: React.createElement(Calendar, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Season",
    value: "Year Round",
    icon: React.createElement(Route, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Location",
    value: "Tsavo, Kenya",
    icon: React.createElement(Map, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Group Size",
    value: "10-28 Students / 2-4 Instructors and Rangers",
    icon: React.createElement(Users, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Educational Credits (Optional)",
    value: "CAS Points, Duke of Edinburgh",
    icon: React.createElement(GraduationCap, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Certificate",
    value: "Kapes Cultural Impact Certificate",
    icon: React.createElement(Award, { className: "h-5 w-5 text-dragon" })
  }
];

export const perfectFor = "Aged 15-18, Passionate About Gender Equity and Social Justice, Enjoy Cultural Immersion and Global Learning, Seeking Personal Growth, Comfortable with Emotional and Physical Challenges, Value Community Engagement and Service, Interested in Leadership and Advocacy, Enjoy Adventure and Travel";
