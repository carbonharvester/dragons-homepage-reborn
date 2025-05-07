
import React from 'react';
import TripHighlights from '@/components/trip/TripHighlights';
import { tripHighlights as rawTripHighlights } from './data';

const TripHighlightsWrapper = () => {
  // Convert the Lucide icon components to JSX elements
  const highlightsWithJSX = rawTripHighlights.map(highlight => ({
    ...highlight,
    icon: React.createElement('span', { className: "text-white" }, 
          React.createElement(highlight.icon, { className: "h-8 w-8" }))
  }));

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-academy mb-8 text-dragon-dark text-center">Trip Highlights</h2>
      <TripHighlights highlights={highlightsWithJSX} />
    </div>
  );
};

export default TripHighlightsWrapper;
