
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
} from './data/index';

interface EmpoweringWomenDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
}

const EmpoweringWomenData: React.FC<EmpoweringWomenDataProps> = ({ 
  heroOnly = false,
  contentOnly = false
}) => {
  return (
    <>
      {/* Hero Section - only render if heroOnly is true or neither heroOnly nor contentOnly is true */}
      {(heroOnly || (!heroOnly && !contentOnly)) && (
        <TripHero 
          title="Exploring Women's Empowerment"
          subtitle="Partner with Zawadisha and engage with rural Kenyan women through microfinance initiatives that provide life-changing clean technologies."
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

export default EmpoweringWomenData;
