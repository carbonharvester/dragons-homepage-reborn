
import React from 'react';
import TripBrochureContent from '../trip/TripBrochureContent';
import TripHero from '../trip/TripHero';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';
import TripHighlightsWrapper from './TripHighlightsWrapper';
import TripOverview from '../trip/TripOverview';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  tripDetails, 
  tripHighlights, 
  galleryImages, 
  learningOutcomes, 
  tripItinerary, 
  programData,
  perfectFor
} from './data';

interface CommunityConservationDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
  isSchoolTrip?: boolean;
}

const CommunityConservationData: React.FC<CommunityConservationDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false,
  navigationOnly = false,
  isSchoolTrip = true
}) => {
  const isMobile = useIsMobile();
  
  // Conservation specific description and goals
  const conservationDescription = [
    "Tsavo National Park and its surrounding communities represent a delicate balance between human needs and wildlife conservation. This immersive 7-8 day journey introduces students to the complex challenges and innovative solutions at this critical intersection.",
    "Participants will work alongside local conservation teams on projects designed to reduce human-wildlife conflict, protect endangered species, and support sustainable livelihoods. Through hands-on activities and meaningful cultural exchange, students gain deep insights into community-based conservation approaches."
  ];
  
  const conservationGoals = [
    "Participate in community conservation projects that protect endangered wildlife and ecosystems",
    "Learn about traditional ecological knowledge and sustainable practices from local communities",
    "Engage in human-wildlife conflict mitigation efforts alongside conservation experts",
    "Support initiatives that create sustainable livelihoods through conservation",
    "Experience Kenya's remarkable biodiversity through guided nature walks and safari game drives"
  ];

  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero 
          title="Community Conservation"
          subtitle="Work alongside local conservation experts to protect endangered ecosystems while learning traditional ecological knowledge and sustainable practices."
          category="School Trip"
          imagePath="/lovable-uploads/fc764836-7162-400c-a486-00fe9d99f975.png"
        />
      )}

      {/* Navigation Section */}
      {(navigationOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <ParentPageNavigation parentPath="/school-trips" parentName="School Trips" />
      )}

      {/* Main content */}
      {(contentOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <>
          <div className="container py-[6px]">
            <TripOverview 
              tripDetails={tripDetails}
              perfectFor={perfectFor}
              description={conservationDescription}
              projectGoals={conservationGoals}
            />
            
            {/* Trip Highlights with explicit heading - only show if we're not on mobile */}
            {!isMobile && <TripHighlightsWrapper />}
            
            {/* Continue with other components */}
            <TripBrochureContent 
              tripDetails={tripDetails}
              tripHighlights={tripHighlights}
              galleryImages={galleryImages}
              learningOutcomes={learningOutcomes}
              tripItinerary={tripItinerary}
              programData={programData}
              perfectFor={perfectFor}
              description={conservationDescription}
              projectGoals={conservationGoals}
              hideOverview={true}
              hideHighlights={!isMobile} // Show highlights in TripBrochureContent only on mobile
              isSchoolTrip={isSchoolTrip}
            />
          </div>
        </>
      )}
    </>
  );
};

export default CommunityConservationData;
