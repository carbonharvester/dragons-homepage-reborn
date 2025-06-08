import { Calendar, MapPin, Clock, Users, DollarSign } from "lucide-react";
import React from 'react';

export const tripDetails = [
  {
    label: "Duration",
    value: "3 Weeks",
    icon: React.createElement(Calendar, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "When",
    value: "Jul 21 - Aug 10 2025\nJul 1 - Jul 21 2026",
    icon: React.createElement(Clock, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Location",
    value: "Kenya",
    icon: React.createElement(MapPin, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Ages",
    value: "16-20",
    icon: React.createElement(Users, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Group Size",
    value: "12 students/2 instructors & 1 guide",
    icon: React.createElement(Users, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Price",
    value: "$6,950 (plus airfare)",
    icon: React.createElement(DollarSign, { className: "h-5 w-5 text-dragon" })
  }
];

export const perfectFor = "Interested In Photography";
