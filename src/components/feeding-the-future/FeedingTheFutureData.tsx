
import React from 'react';
import TripBrochureContent from '../trip/TripBrochureContent';
import TripHero from '../trip/TripHero';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';
import TripHighlightsWrapper from './TripHighlightsWrapper';
import TripOverview from '../trip/TripOverview';
import { useIsMobile } from '@/hooks/use-mobile';
import { tripDetails, perfectFor } from './data/details';
import { galleryImages, learningOutcomes } from './data';
import { programData } from './data/programInfo';
import { tripHighlights } from './data/highlights';
import { tripItinerary } from './data/index';
import ProgramItinerary from '../roots-of-change/ProgramItinerary';
import ProgramLocations from '../roots-of-change/ProgramLocations';

interface FeedingTheFutureDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
  customThumbnails?: Record<string, string>;
}

const FeedingTheFutureData: React.FC<FeedingTheFutureDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false,
  navigationOnly = false,
  customThumbnails
}) => {
  const isMobile = useIsMobile();

  // Custom description and project goals specific to Feeding the Future
  const feedingDescription = [
    "Our Feeding the Future program is a four-week immersive experience focused on sustainable agriculture and permaculture design. Students participate in transforming unused or degraded land at schools into productive farms that provide nutritious meals for students.",
    "Working alongside local experts, participants will develop hands-on skills in permaculture techniques, water management, and climate-smart agriculture while learning how these practices contribute to food security in Kenya's diverse environments."
  ];
  
  const feedingProjectGoals = programData.goals;

  // Direct PDF brochure link
  const pdfBrochureLink = "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Feeding_the_Future.pdf";

  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero 
          title="Feeding the Future"
          subtitle="A 4-week immersive experience in sustainable agriculture and food security initiatives across Kenya, combining permaculture techniques with community engagement."
          category="Summer Abroad"
          imagePath="https://res.cloudinary.com/dng12bd0a/image/upload/v1747129548/WhatsApp_Image_2025-05-13_at_12.12.32_2_qbmzae.jpg"
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
              description={feedingDescription}
              projectGoals={feedingProjectGoals}
              isSummerAbroad={true}
            />
            
            {/* Trip Highlights with explicit heading - only show if we're not on mobile */}
            {!isMobile && <TripHighlightsWrapper />}
            
            {/* Program Locations Section */}
            <ProgramLocations />
            
            {/* Detailed 4-Week Itinerary Section */}
            <ProgramItinerary />
            
            {/* Continue with other components using TripBrochureContent */}
            <TripBrochureContent 
              tripDetails={tripDetails}
              // Pass trip highlights but they'll be hidden since we're showing them with TripHighlightsWrapper
              tripHighlights={[]}
              galleryImages={galleryImages}
              learningOutcomes={learningOutcomes}
              tripItinerary={[]} // Empty to hide Sample Itinerary section
              programData={programData}
              perfectFor={perfectFor}
              description={feedingDescription}
              projectGoals={feedingProjectGoals}
              hideOverview={true}
              hideHighlights={!isMobile} // Show highlights in TripBrochureContent only on mobile
              pdfBrochureLink={pdfBrochureLink}
              customThumbnails={customThumbnails}
              hideStudentStories={true} // Hide student stories section
              isSummerAbroad={true}
            />
          </div>
        </>
      )}
    </>
  );
};

export default FeedingTheFutureData;
