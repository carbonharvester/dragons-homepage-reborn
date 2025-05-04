
import { LucideIcon } from "lucide-react";

export interface DayProps {
  day: string;
  date: string;
  title: string;
  activities: string[];
  icon: LucideIcon;
}

export interface WeekProps {
  title: string;
  dates: string;
  focus: string;
  days: DayProps[];
}
