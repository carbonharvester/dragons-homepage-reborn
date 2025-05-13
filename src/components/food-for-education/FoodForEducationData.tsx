
import React from 'react';
import TripBrochureContent from '../trip/TripBrochureContent';
import TripHero from '../trip/TripHero';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';
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
          imagePath="/lovable-uploads/e5508599-0c51-43a7-8945-a0f299149c54.png"
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
              hideHighlights={false} // Show highlights directly in TripBrochureContent
              customThumbnails={customThumbnails}
            />
          </div>
        </>
      )}
    </>
  );
};

export default FoodForEducationData;
