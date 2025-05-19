
import React from 'react';

const Accommodation = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-dragon-dark mb-4">Accommodation & Logistics</h2>
      <p className="text-dragon-gray mb-4">
        Students stay in dormitory-style accommodations at Camp, a sustainable eco-camp near Voi in the 
        Tsavo Conservancy. The camp features:
      </p>
      <ul className="list-disc pl-5 space-y-1 text-dragon-gray mb-4">
        <li>Gender-separated dormitory rooms</li>
        <li>Shared bathrooms with solar-powered showers and eco-toilets</li>
        <li>Communal dining area with traditional Kenyan meals</li>
        <li>Study and reflection spaces</li>
        <li>Access to Tsavo's communities and wildlife</li>
      </ul>
      <p className="text-dragon-gray mb-4">
        Travel includes flights to Nairobi's Jomo Kenyatta International Airport, followed by a scenic 4-hour train 
        journey to Voi. Students return to Nairobi by train on the final day for evening flights.
      </p>
    </div>
  );
};

export default Accommodation;
