
import React from 'react';
import TripHighlights from '@/components/trip/TripHighlights';
import { tripHighlights } from './data/highlights';

const TripHighlightsWrapper = () => {
  // Since the tripHighlights already contain JSX elements for icons,
  // we don't need to convert them - just pass them through
  const highlightsWithJSX = tripHighlights.map(highlight => ({
    ...highlight,
    icon: highlight.icon
  }));

  return (
    <div className="mb-16 text-center flex flex-col items-center">
      <h2 className="text-3xl font-academy mb-8 text-dragon-dark text-center">Trip Highlights</h2>
      <TripHighlights highlights={highlightsWithJSX} />
    </div>
  );
};

export default TripHighlightsWrapper;
