
import React from 'react';
import TripBrochureContent from '../trip/TripBrochureContent';
import TripHero from '../trip/TripHero';
import { 
  tripDetails, 
  tripHighlights, 
  galleryImages, 
  learningOutcomes, 
  tripItinerary, 
  programData 
} from './data';

const EmpoweringWomenData: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <TripHero 
        title="Exploring Women's Empowerment"
        subtitle="Empower Women, Transform Lives through an 8-day journey in Tsavo, Kenya"
        category="School Trip"
        imagePath="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Main content */}
      <TripBrochureContent 
        tripDetails={tripDetails}
        tripHighlights={tripHighlights}
        galleryImages={galleryImages}
        learningOutcomes={learningOutcomes}
        tripItinerary={tripItinerary}
        programData={programData}
      />
    </>
  );
};

export default EmpoweringWomenData;
