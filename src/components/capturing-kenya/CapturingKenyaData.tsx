
import React from 'react';
import TripBrochureContent from '../trip/TripBrochureContent';
import TripHero from '../trip/TripHero';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';
import TripHighlightsWrapper from './TripHighlightsWrapper';
import TripOverview from '../trip/TripOverview';
import { useIsMobile } from '@/hooks/use-mobile';
import { tripDetails, perfectFor } from './data/details';
import { programData, galleryImages, learningOutcomes } from './ProgramData';
import { weeks } from './data';
import ProgramItinerary from '../capturing-kenya/ProgramItinerary';
import ProgramLocations from './ProgramLocations';
import TripLearningOutcomes from '../trip/TripLearningOutcomes';

interface CapturingKenyaDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
  customThumbnails?: Record<string, string>;
}

const CapturingKenyaData: React.FC<CapturingKenyaDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false,
  navigationOnly = false,
  customThumbnails
}) => {
  const isMobile = useIsMobile();

  // Custom description and project goals specific to Capturing Kenya
  const capturingDescription = [
    "Welcome to Capturing Kenya, a unique 4-week summer adventure that combines photography, videography, and conservation in one unforgettable experience. This program is designed for creative young minds who want to develop their visual storytelling skills while exploring Kenya's diverse landscapes and wildlife.",
    "Under the guidance of professional photographers and local experts, you'll learn technical skills, composition techniques, and editing workflows as you create a compelling portfolio showcasing Kenya's natural beauty and cultural richness. Throughout the journey, you'll contribute to real conservation efforts by documenting wildlife and helping create visual resources for local organizations."
  ];
  
  const capturingProjectGoals = programData.goals;

  // Direct PDF brochure link
  const pdfBrochureLink = "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Capturing_Kenya.pdf";

  // Log weeks data to help with debugging
  console.log("Weeks data in CapturingKenyaData:", weeks);

  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero 
          title="Capturing Kenya"
          subtitle="A 4-week creative adventure to photograph and film Kenya's stunning landscapes, wildlife, and cultures while developing professional skills."
          category="Summer Abroad"
          imagePath="https://res.cloudinary.com/dng12bd0a/image/upload/v1747118596/KleinNettoh--2_1_dxa20b.jpg"
        />
      )}

      {/* Navigation Section */}
      {(navigationOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <ParentPageNavigation parentPath="/summer-abroad" parentName="Summer Abroad" />
      )}

      {/* Main content */}
      {(contentOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <>
          <div className="container py-[6px]">
            <TripOverview 
              tripDetails={tripDetails}
              perfectFor={perfectFor}
              description={capturingDescription}
              projectGoals={capturingProjectGoals}
            />
            
            {/* Trip Highlights with explicit heading - only show if we're not on mobile */}
            {!isMobile && <TripHighlightsWrapper />}
            
            {/* Learning Outcomes Section - Now positioned above Program Locations */}
            <TripLearningOutcomes outcomes={learningOutcomes} />
            
            {/* Program Locations Section - Now using our custom component */}
            <ProgramLocations />
            
            {/* Detailed 4-Week Itinerary Section */}
            <ProgramItinerary weeks={weeks} />
            
            {/* Continue with other components using TripBrochureContent */}
            <TripBrochureContent 
              tripDetails={tripDetails}
              // Pass trip highlights but they'll be hidden since we're showing them with TripHighlightsWrapper
              tripHighlights={[]}
              galleryImages={galleryImages}
              learningOutcomes={learningOutcomes}
              tripItinerary={[]}
              programData={programData}
              perfectFor={perfectFor}
              description={capturingDescription}
              projectGoals={capturingProjectGoals}
              hideOverview={true}
              hideHighlights={!isMobile} // Show highlights in TripBrochureContent only on mobile
              pdfBrochureLink={pdfBrochureLink}
              customThumbnails={customThumbnails}
              hideStudentStories={true} // Hide student stories section
            />
          </div>
        </>
      )}
    </>
  );
};

export default CapturingKenyaData;
