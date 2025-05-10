
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import { TripDetail } from '@/components/trip/TripBrochureContent';

export const tripDetails: TripDetail[] = [
  {
    label: "Duration",
    value: "9 Days",
    icon: <Clock className="h-5 w-5 text-dragon" />
  },
  {
    label: "Season",
    value: "May-August",
    icon: <Calendar className="h-5 w-5 text-dragon" />
  },
  {
    label: "Participants",
    value: "Educators",
    icon: <Users className="h-5 w-5 text-dragon" />
  },
  {
    label: "Location",
    value: "Nairobi, Voi, Maungu, Tsavo East",
    icon: <MapPin className="h-5 w-5 text-dragon" />
  }
];
