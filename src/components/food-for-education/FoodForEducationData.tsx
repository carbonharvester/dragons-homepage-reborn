
import React from 'react';
import TripBrochureContent from '../trip/TripBrochureContent';
import TripHero from '../trip/TripHero';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';
import TripHighlightsWrapper from './TripHighlightsWrapper';
import TripOverview from '../trip/TripOverview';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  tripDetails as rawTripDetails, 
  tripHighlights as rawTripHighlights, 
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
}

const FoodForEducationData: React.FC<FoodForEducationDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false,
  navigationOnly = false
}) => {
  const isMobile = useIsMobile();
  
  // Transform Lucide icons to React elements for compatibility
  const tripDetails = rawTripDetails.map(detail => ({
    ...detail,
    icon: (
      <div className="text-dragon">
        <detail.icon className="h-5 w-5" />
      </div>
    )
  }));

  // Transform highlights with JSX elements
  const tripHighlights = rawTripHighlights.map(highlight => ({
    ...highlight,
    icon: (
      <div className="text-white">
        <highlight.icon className="h-8 w-8" />
      </div>
    )
  }));

  // Custom description and project goals specific to the Food For Education program
  const foodDescription = [
    "In many rural Kenyan schools, inconsistent access to nutritious food impacts student attendance and academic performance. This collaborative program transforms unused school land into productive food gardens through sustainable permaculture practices.",
    "During this immersive 8 day journey, students will work alongside local communities to establish gardens that provide ongoing meals for schoolchildren while learning about food security challenges and solutions that protect both people and ecosystems."
  ];
  
  const foodProjectGoals = [
    "Design and establish permaculture food gardens at local schools using sustainable techniques",
    "Learn practical gardening skills including composting, water conservation, and planting methods",
    "Understand the relationship between food security, education, and community development",
    "Connect with Kenya's natural environment through wildlife experiences and cultural immersion",
    "Create measurable impact that continues to provide nutritious food for schoolchildren"
  ];

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
        <>
          <div className="container py-[6px]">
            <TripOverview 
              tripDetails={tripDetails}
              perfectFor={perfectFor}
              description={foodDescription}
              projectGoals={foodProjectGoals}
            />
            
            {/* Trip Highlights with explicit heading - only show if we're not on mobile
                since mobile will show highlights through TripBrochureContent */}
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
            />
          </div>
        </>
      )}
    </>
  );
};

export default FoodForEducationData;
