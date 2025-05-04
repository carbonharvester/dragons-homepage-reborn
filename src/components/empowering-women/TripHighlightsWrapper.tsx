
import React from 'react';
import TripHighlights from '@/components/trip/TripHighlights';
import { tripHighlights } from './data';

const TripHighlightsWrapper = () => {
  // Convert the Lucide icon components to JSX elements
  const highlightsWithJSX = tripHighlights.map(highlight => ({
    ...highlight,
    icon: (
      <div className="text-white">
        {React.createElement(highlight.icon, { className: "h-8 w-8" })}
      </div>
    )
  }));

  return <TripHighlights highlights={highlightsWithJSX} />;
};

export default TripHighlightsWrapper;
