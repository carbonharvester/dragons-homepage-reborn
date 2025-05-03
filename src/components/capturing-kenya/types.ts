
import { ReactNode } from 'react';

export interface Week {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  base: string;
  impact: string;
  image: string;
  highlights: string[];
  days: {
    day: number;
    title: string;
    activities: string[];
  }[];
}

export interface Outcome {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ProgramDataType {
  title: string;
  description: string;
  duration: string;
  season: string;
  location: string;
  ages: string;
  goals: string[];
}
