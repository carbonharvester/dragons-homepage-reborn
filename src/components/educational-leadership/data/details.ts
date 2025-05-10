
import React from 'react';
import { Calendar, MapPin, Users, GraduationCap, Award } from 'lucide-react';

export const tripDetails = [
  {
    label: "Duration",
    value: "10 Days",
    icon: React.createElement(Calendar, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Season",
    value: "June-August",
    icon: React.createElement(Calendar, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Location",
    value: "Various conservation areas in Kenya",
    icon: React.createElement(MapPin, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Group Size",
    value: "8-16 Educators / 2-3 Facilitators",
    icon: React.createElement(Users, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Professional Credits",
    value: "Continuing Education Units Available",
    icon: React.createElement(GraduationCap, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Certificate",
    value: "Global Environmental Education Certificate",
    icon: React.createElement(Award, { className: "h-5 w-5 text-dragon" })
  }
];

export const perfectFor = "Environmental Science Teachers, Geography Educators, Sustainability Coordinators, Science Department Heads, Outdoor Education Specialists, Curriculum Developers";
