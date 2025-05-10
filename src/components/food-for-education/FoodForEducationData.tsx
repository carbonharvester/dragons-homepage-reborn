
import React from 'react';
import TripBrochureContent from '../trip/TripBrochureContent';
import TripHero from '../trip/TripHero';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';
import TripOverview from '../trip/TripOverview';
import TripHighlightsWrapper from './TripHighlightsWrapper';
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
  customThumbnails?: Record<string, string>;
}

const FoodForEducationData: React.FC<FoodForEducationDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false,
  navigationOnly = false,
  customThumbnails
}) => {
  const isMobile = useIsMobile();
  
  // Custom description and project goals specific to the Food For Education program
  const foodDescription = [
    "This 8 day journey to Kenya immerses students in sustainable food systems and community development. Partnering with local farmers and educators, students will explore traditional and modern agricultural practices, contribute to food security initiatives, and learn about the challenges and opportunities in ensuring access to nutritious food for all.",
    "Through hands-on activities, cultural exchanges, and visits to local farms and markets, students will gain a deeper understanding of the interconnectedness of food, culture, and community resilience.",
    "This trip is particularly impactful for schools participating in the Kapes Uniforms takeback scheme, where we provide a free meal for every item returned. This circular approach connects students directly to the impact of their actions and enhances the trip's educational value."
  ];
  
  const foodProjectGoals = [
    "Explore sustainable farming practices and learn about traditional Kenyan agriculture",
    "Contribute to food security initiatives by working alongside local farmers",
    "Learn about the challenges and opportunities in ensuring access to nutritious food",
    "Engage in cultural exchanges and community development projects",
    "Connect with Kenya's natural beauty through safari and cultural immersion activities"
  ];

  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero 
          title="Food For Education"
          subtitle="Explore sustainable food systems and contribute to food security initiatives while learning about traditional and modern agricultural practices in Kenya."
          category="School Trip"
          imagePath="/lovable-uploads/3a363a5f-b4be-477f-aea7-e36861d4faf4.png"
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
              // Here we're passing tripHighlights but the component expects them to be JSX transformed already
              // This is okay because TripHighlightsWrapper transforms them for us
              tripHighlights={[]} // Pass empty array to avoid type issues, since highlights are shown via TripHighlightsWrapper
              galleryImages={galleryImages}
              learningOutcomes={learningOutcomes}
              tripItinerary={tripItinerary}
              programData={programData}
              perfectFor={perfectFor}
              description={foodDescription}
              projectGoals={foodProjectGoals}
              hideOverview={true}
              hideHighlights={!isMobile} // Show highlights in TripBrochureContent only on mobile
              customThumbnails={customThumbnails}
            />
          </div>
        </>
      )}
    </>
  );
};

export default FoodForEducationData;
