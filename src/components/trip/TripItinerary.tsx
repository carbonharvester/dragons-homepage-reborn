
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
  itineraryDays = []
}: TripItineraryProps) => {
  return (
    <div className="py-10">
      {itineraryDays && itineraryDays.length > 0 ? (
        <div>
          <h2 className="text-3xl font-academy mb-8 text-dragon-dark text-center">Sample Itinerary</h2>
          <div className="space-y-6">
            {itineraryDays.map((day, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold">{day.day}: {day.title}</h3>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  {day.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="text-dragon-gray">{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center text-dragon-gray py-4">
          Detailed itinerary information coming soon!
        </div>
      )}
    </div>
  );
};

export default TripItinerary;
