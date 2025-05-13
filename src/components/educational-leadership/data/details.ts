
import React from 'react';
import { Clock, Calendar, Users, MapPin } from 'lucide-react';
import { TripDetail } from '@/components/trip/TripBrochureContent';

export const tripDetails: TripDetail[] = [
  {
    label: "Duration",
    value: "10 Days",
    icon: React.createElement(Clock, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "When",
    value: "July 3rd, 2026",
    icon: React.createElement(Calendar, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Participants",
    value: "Educators",
    icon: React.createElement(Users, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Location",
    value: "Nairobi, Voi, Maungu, Tsavo East",
    icon: React.createElement(MapPin, { className: "h-5 w-5 text-dragon" })
  },
  {
    label: "Group Size",
    value: "6",
    icon: React.createElement(Users, { className: "h-5 w-5 text-dragon" })
  }
];

export const perfectFor = "Environmental Science Teachers, Geography Teachers, Sustainability Coordinators, Curriculum Developers, School Trip Leaders, Co-Curricular Activities Coordinators, CAS Coordinators, Principals";
