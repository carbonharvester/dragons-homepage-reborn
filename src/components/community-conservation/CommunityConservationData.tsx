
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

interface CommunityConservationDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
}

const CommunityConservationData: React.FC<CommunityConservationDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false,
  navigationOnly = false
}) => {
  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero 
          title="Community Conservation"
          subtitle="Work alongside local conservation experts to protect endangered ecosystems while learning traditional ecological knowledge and sustainable practices."
          category="School Trip"
          imagePath="/lovable-uploads/5c2915df-6fcc-4fd9-a320-7025337ffd6a.png"
        />
      )}

      {/* Navigation Section */}
      {(navigationOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <ParentPageNavigation parentPath="/school-trips" parentName="School Trips" />
      )}

      {/* Main content */}
      {(contentOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripBrochureContent 
          tripDetails={tripDetails.map(detail => ({
            ...detail,
            icon: React.createElement(detail.icon, { className: "h-5 w-5 text-dragon" })
          }))}
          tripHighlights={tripHighlights.map(highlight => ({
            ...highlight,
            icon: <div className="text-white">
              {React.createElement(highlight.icon, { className: "h-8 w-8" })}
            </div>
          }))}
          galleryImages={galleryImages}
          learningOutcomes={learningOutcomes}
          tripItinerary={tripItinerary}
          programData={programData}
        />
      )}
    </>
  );
};

export default CommunityConservationData;
