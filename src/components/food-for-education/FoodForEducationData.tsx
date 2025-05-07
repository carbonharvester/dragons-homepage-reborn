
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

interface FoodForEducationDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
}

const FoodForEducationData: React.FC<FoodForEducationDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false 
}) => {
  return (
    <>
      {/* Hero Section - only render if heroOnly is true or neither heroOnly nor contentOnly is true */}
      {(heroOnly || (!heroOnly && !contentOnly)) && (
        <TripHero 
          title="Food For Education"
          subtitle="Transform unused school land into productive gardens while addressing food insecurity through sustainable agriculture."
          category="School Trip"
          imagePath="/lovable-uploads/ec51d2d5-5e96-4e9f-b5d6-5627994d2fa5.png"
        />
      )}

      {/* Main content - only render if contentOnly is true or neither heroOnly nor contentOnly is true */}
      {(contentOnly || (!heroOnly && !contentOnly)) && (
        <TripBrochureContent 
          tripDetails={tripDetails}
          tripHighlights={tripHighlights}
          galleryImages={galleryImages}
          learningOutcomes={learningOutcomes}
          tripItinerary={tripItinerary}
          programData={programData}
        />
      )}
    </>
  );
};

export default FoodForEducationData;
