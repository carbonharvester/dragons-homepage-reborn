
import React from 'react';
import TripHighlights from '@/components/trip/TripHighlights';
import { tripHighlights } from './data';

const TripHighlightsWrapper = () => {
  // Convert the simple string emoji icons to JSX elements
  const highlightsWithJSX = tripHighlights.map(highlight => ({
    ...highlight,
    icon: (
      <div className="text-white text-2xl">{highlight.icon}</div>
    )
  }));

  return <TripHighlights highlights={highlightsWithJSX} />;
};

export default TripHighlightsWrapper;
