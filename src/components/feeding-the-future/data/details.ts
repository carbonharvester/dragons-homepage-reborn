
import { Clock, Calendar, MapPin, Users, DollarSign } from 'lucide-react';
import React from 'react';

export const tripDetails = [
  {
    label: "Duration",
    value: "4 Weeks",
    icon: React.createElement(Clock, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "When",
    value: "Jul 28 - Aug 25 2026",
    icon: React.createElement(Calendar, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Location",
    value: "Nairobi & Tsavo, Kenya",
    icon: React.createElement(MapPin, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Ages",
    value: "16-20",
    icon: React.createElement(Users, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Group Size",
    value: "12 Students / 3 Instructors",
    icon: React.createElement(Users, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Price",
    value: "$7,950 (plus airfare)",
    icon: React.createElement(DollarSign, { className: "h-5 w-5 text-dragon" })
  }
];

export const perfectFor = "Aged 16-20, Passionate About Sustainability, Enjoy Cultural Immersion, Interest in Agriculture, Active & Hands-on Learners, Open to New Experiences";
