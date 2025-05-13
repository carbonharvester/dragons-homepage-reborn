import React from 'react';
interface TripItineraryDayProps {
  day: string;
  title: string;
  activities: string[];
}
interface TripItineraryProps {
  itineraryDays: TripItineraryDayProps[];
}
const TripItinerary = ({
  itineraryDays
}: TripItineraryProps) => {
  return;
};
export default TripItinerary;