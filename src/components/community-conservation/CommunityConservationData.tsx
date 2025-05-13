
import React from 'react';
import TripBrochureContent from '../trip/TripBrochureContent';
import TripHero from '../trip/TripHero';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';
import TripHighlightsWrapper from './TripHighlightsWrapper';
import TripOverview from '../trip/TripOverview';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  tripDetails as rawTripDetails, 
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
  customThumbnails?: Record<string, string>;
}

const CommunityConservationData: React.FC<CommunityConservationDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false,
  navigationOnly = false,
  customThumbnails
}) => {
  const isMobile = useIsMobile();
  
  // Transform Lucide icons to React elements for compatibility
  const tripDetails = rawTripDetails.map(detail => ({
    ...detail,
    icon: React.createElement(detail.icon, { className: "h-5 w-5 text-dragon" })
  }));

  // Define custom trip description for the overview section
  const conservationDescription = [
    "Our introductory trip to Tsavo, Kenya immerses students in practical conservation work with Wildlife Works while exploring the magnificent Tsavo East National Park.",
    "Students ages 12-15 will experience wildlife monitoring, carbon cycle management, and traditional craft-making while developing outdoor skills through hiking and ranger-led activities. The program provides hands-on engagement with conservation enterprises and social initiatives that balance ecosystem protection with community development."
  ];

  // Define custom project goals
  const conservationProjectGoals = [
    "Experience conservation in action at Wildlife Works and Tsavo East National Park",
    "Learn about carbon cycle management and REDD+ conservation initiatives",
    "Engage with local communities and learn traditional craft-making skills",
    "Develop outdoor adventure skills including hiking and bush survival techniques",
    "Contribute to real conservation projects with measurable environmental impact"
  ];

  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero 
          title="Community Conservation"
          subtitle="Our introductory school trip where students meet local conservation experts protecting animals and trees, see Kenya's wildlife up close and learn traditional ecological knowledge and sustainable practices."
          category="School Trip"
          imagePath="https://res.cloudinary.com/dng12bd0a/image/upload/v1747129047/Collection_5_s7opwi.jpg"
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
              projectGoals={conservationProjectGoals}
            />
            
            {/* Trip Highlights with explicit heading - only show if we're not on mobile */}
            {!isMobile && <TripHighlightsWrapper />}
            
            {/* Continue with other components */}
            <TripBrochureContent 
              tripDetails={tripDetails}
              tripHighlights={tripHighlights.map(highlight => ({
                ...highlight,
                icon: React.createElement(highlight.icon, { className: "h-8 w-8 text-white" })
              }))}
              galleryImages={galleryImages}
              learningOutcomes={learningOutcomes}
              tripItinerary={tripItinerary}
              programData={programData}
              perfectFor={perfectFor}
              description={conservationDescription}
              projectGoals={conservationProjectGoals}
              hideOverview={true}
              hideHighlights={!isMobile} // Show highlights in TripBrochureContent only on mobile
              customThumbnails={customThumbnails}
              isSchoolTrip={true} // Explicitly set this to true since it's a school trip
            />
          </div>
        </>
      )}
    </>
  );
};

export default CommunityConservationData;
