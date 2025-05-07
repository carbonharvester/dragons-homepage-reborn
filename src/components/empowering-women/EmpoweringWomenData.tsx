
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

interface EmpoweringWomenDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
}

const EmpoweringWomenData: React.FC<EmpoweringWomenDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false,
  navigationOnly = false
}) => {
  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero 
          title="Water Empowering Women"
          subtitle="Partner with local communities and engage with rural Kenyan women through water access initiatives that provide life-changing clean water solutions."
          category="School Trip"
          imagePath="/lovable-uploads/2b64c2a8-18d5-43cc-a376-e32137687104.png"
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
        />
      )}
    </>
  );
};

export default EmpoweringWomenData;
