
// Export all itinerary days
export * from './day1';
export * from './day2';
export * from './day3';
export * from './day4';
export * from './day5';
export * from './day6';
export * from './day7';
export * from './day8';

// Export the complete itinerary
import { day1 } from './day1';
import { day2 } from './day2';
import { day3 } from './day3';
import { day4 } from './day4';
import { day5 } from './day5';
import { day6 } from './day6';
import { day7 } from './day7';
import { day8 } from './day8';

export const tripItinerary = [
  day1,
  day2,
  day3,
  day4,
  day5,
  day6,
  day7,
  day8
];
