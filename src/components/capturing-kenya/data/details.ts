
import { Calendar, MapPin, Clock, Users, DollarSign } from "lucide-react";

export const tripDetails = [
  {
    label: "Duration",
    value: "4 Weeks",
    icon: <Calendar className="h-5 w-5 text-dragon" />
  },
  {
    label: "Location",
    value: "Kenya",
    icon: <MapPin className="h-5 w-5 text-dragon" />
  },
  {
    label: "When",
    value: "Jul 1 - Jul 28 2026",
    icon: <Clock className="h-5 w-5 text-dragon" />
  },
  {
    label: "Ages",
    value: "16-20",
    icon: <Users className="h-5 w-5 text-dragon" />
  },
  {
    label: "Price",
    value: "$6,950 (plus airfare)",
    icon: <DollarSign className="h-5 w-5 text-dragon" />
  }
];

export const perfectFor = "Creative students interested in photography, videography, wildlife conservation, and cultural documentation";
