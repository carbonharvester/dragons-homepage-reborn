
import React from 'react';
import TripBrochureContent from '../trip/TripBrochureContent';
import TripHero from '../trip/TripHero';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';
import TripHighlightsWrapper from './TripHighlightsWrapper';
import TripOverview from '../trip/TripOverview';
import { useIsMobile } from '@/hooks/use-mobile';
import { tripDetails, galleryImages, learningOutcomes, tripItinerary, perfectFor } from './data';
import { programData } from './data/programInfo';

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

  // Custom description and project goals specific to Food For Education
  const foodDescription = [
    "In many Kenyan communities, school children often go without proper nutrition, which impacts their ability to learn and thrive. Using permaculture principles, this program transforms unused school land into productive gardens.",
    "Students will work alongside local experts to develop sustainable food systems that provide nutritious meals for school children while teaching valuable agricultural skills that address food insecurity."
  ];
  
  const foodProjectGoals = programData.goals;

  // Direct PDF brochure link
  const pdfBrochureLink = "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Food_For_Education.pdf?v=1747049829";

  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero 
          title="Food For Education"
          subtitle="Transform unused school land into vibrant gardens using permaculture farming techniques. Students will create sustainable food systems to provide nutritious meals for local children, fostering long-term food security."
          category="School Trip"
          imagePath="https://res.cloudinary.com/dng12bd0a/image/upload/v1747119030/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg"
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
              // Here we're passing an empty array to avoid type issues, since highlights are shown via TripHighlightsWrapper
              tripHighlights={[]}
              galleryImages={galleryImages}
              learningOutcomes={learningOutcomes}
              tripItinerary={tripItinerary}
              programData={programData}
              perfectFor={perfectFor}
              description={foodDescription}
              projectGoals={foodProjectGoals}
              hideOverview={true}
              hideHighlights={!isMobile} // Show highlights in TripBrochureContent only on mobile
              pdfBrochureLink={pdfBrochureLink}
              customThumbnails={customThumbnails}
            />
          </div>
        </>
      )}
    </>
  );
};

export default FoodForEducationData;
