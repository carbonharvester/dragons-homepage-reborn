
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

interface FoodForEducationDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
  isSchoolTrip?: boolean;
}

const FoodForEducationData: React.FC<FoodForEducationDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false,
  navigationOnly = false,
  isSchoolTrip = true
}) => {
  const isMobile = useIsMobile();
  
  // Food for Education specific description and goals
  const foodDescription = [
    "Food insecurity affects millions of children in rural Kenya, impacting their health, educational outcomes, and future opportunities. This 7-8 day immersive journey introduces students to sustainable food systems and the organizations working to address hunger in local communities.",
    "Participants will engage in hands-on agricultural activities, meal preparation, and food distribution while learning about the complex factors that influence food security and access. This program combines meaningful service with deep cultural exchange and wildlife experiences."
  ];
  
  const foodProjectGoals = [
    "Participate in sustainable farming practices that support local school feeding programs",
    "Learn about traditional and modern agricultural techniques adapted for Kenya's climate",
    "Engage with community members to understand cultural perspectives on food and nutrition",
    "Contribute to preparing and distributing nutritious meals for local schoolchildren",
    "Explore the connections between conservation, agriculture, and food security"
  ];

  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero 
          title="Food For Education"
          subtitle="Join sustainable food systems initiatives that feed 200+ schoolchildren daily while learning about traditional and modern agricultural practices."
          category="School Trip"
          imagePath="/lovable-uploads/9cdd3641-0b63-46d4-9b2d-9e6d3a85f70e.png"
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
              description={foodDescription}
              projectGoals={foodProjectGoals}
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
              description={foodDescription}
              projectGoals={foodProjectGoals}
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

export default FoodForEducationData;
