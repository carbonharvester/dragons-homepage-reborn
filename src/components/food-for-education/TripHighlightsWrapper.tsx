
import React from 'react';
import TripHighlights from '@/components/trip/TripHighlights';
import { tripHighlights } from './data/highlights';

const TripHighlightsWrapper = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-academy mb-8 text-dragon-dark text-center">Trip Highlights</h2>
      <TripHighlights highlights={tripHighlights} />
    </div>
  );
};

export default TripHighlightsWrapper;
