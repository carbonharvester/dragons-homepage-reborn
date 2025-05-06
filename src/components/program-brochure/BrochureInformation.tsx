
import React from 'react';

const BrochureInformation = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h4 className="font-bold text-dragon-dark mb-2">What's Included:</h4>
        <ul className="list-disc list-inside text-dragon-gray space-y-1">
          <li>Program overview and background</li>
          <li>Day-by-day itinerary details</li>
          <li>Project goals and outcomes</li>
          <li>Location information</li>
          <li>Contact information</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-dragon-dark mb-2">Perfect For:</h4>
        <ul className="list-disc list-inside text-dragon-gray space-y-1">
          <li>Students ages 12-18</li>
          <li>School groups focusing on experiential learning</li>
          <li>Students interested in sustainable agriculture</li>
          <li>Classes studying environmental science</li>
          <li>Groups wanting hands-on impact projects</li>
        </ul>
      </div>
    </div>
  );
};

export default BrochureInformation;
