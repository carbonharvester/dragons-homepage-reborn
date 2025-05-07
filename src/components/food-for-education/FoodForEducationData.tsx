
import React from 'react';
import TripBrochureContent from '../trip/TripBrochureContent';
import TripHero from '../trip/TripHero';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';
import { 
  tripDetails, 
  tripHighlights, 
  galleryImages, 
  learningOutcomes, 
  tripItinerary, 
  programData 
} from './data';
import { perfectFor } from './data/details';

interface FoodForEducationDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
}

const FoodForEducationData: React.FC<FoodForEducationDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false,
  navigationOnly = false
}) => {
  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero 
          title="Food For Education"
          subtitle="Transform unused school land into productive gardens while addressing food insecurity through sustainable agriculture."
          category="School Trip"
          imagePath="/lovable-uploads/ec51d2d5-5e96-4e9f-b5d6-5627994d2fa5.png"
        />
      )}

      {/* Navigation Section */}
      {(navigationOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <ParentPageNavigation parentPath="/school-trips" parentName="School Trips" />
      )}

      {/* Main content */}
      {(contentOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripBrochureContent 
          tripDetails={tripDetails}
          tripHighlights={tripHighlights}
          galleryImages={galleryImages}
          learningOutcomes={learningOutcomes}
          tripItinerary={tripItinerary}
          programData={programData}
          perfectFor={perfectFor}
        />
      )}
    </>
  );
};

export default FoodForEducationData;
