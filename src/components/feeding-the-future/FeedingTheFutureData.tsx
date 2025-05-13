
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
          imagePath="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070"
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
            />
            
            {/* Trip Highlights with explicit heading - only show if we're not on mobile */}
            {!isMobile && <TripHighlightsWrapper />}
            
            {/* Continue with other components using TripBrochureContent */}
            <TripBrochureContent 
              tripDetails={tripDetails}
              // Pass trip highlights but they'll be hidden since we're showing them with TripHighlightsWrapper
              tripHighlights={[]}
              galleryImages={galleryImages}
              learningOutcomes={learningOutcomes}
              tripItinerary={tripItinerary}
              programData={programData}
              perfectFor={perfectFor}
              description={feedingDescription}
              projectGoals={feedingProjectGoals}
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

export default FeedingTheFutureData;
