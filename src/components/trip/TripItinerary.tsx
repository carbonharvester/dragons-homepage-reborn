
import React from 'react';

interface TripItineraryDayProps {
  day: string;
  title: string;
  activities: string[];
}

interface TripItineraryProps {
  itineraryDays: TripItineraryDayProps[];
}

const TripItinerary = ({ itineraryDays }: TripItineraryProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark text-center hero-heading">Sample Itinerary</h2>
      <div className="space-y-6">
        {itineraryDays.map((day, index) => (
          <div key={index} className="border-l-4 border-dragon pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className="text-xl font-bold text-dragon">{day.day}: {day.title}</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-dragon-gray">
              {day.activities.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-dragon-gray italic">
          Note: This is a sample itinerary and may be adjusted based on weather conditions, 
          group size, and specific educational objectives.
        </p>
      </div>
    </div>
  );
};

export default TripItinerary;
