
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
  // Convert Lucide icons to ReactNode for tripDetails
  const formattedTripDetails = tripDetails.map(detail => ({
    ...detail,
    icon: React.createElement(detail.icon, { className: "h-5 w-5 text-dragon" })
  }));

  // Convert Lucide icons to ReactNode for tripHighlights
  const formattedTripHighlights = tripHighlights.map(highlight => ({
    ...highlight,
    icon: React.createElement(highlight.icon, { className: "h-8 w-8 text-white" })
  }));

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
          tripDetails={formattedTripDetails}
          tripHighlights={formattedTripHighlights}
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
