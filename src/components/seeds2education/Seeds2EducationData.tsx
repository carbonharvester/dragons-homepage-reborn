
import React from 'react';
import TripBrochureContent from '../trip/TripBrochureContent';
import TripHero from '../trip/TripHero';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';
import TripHighlightsWrapper from './TripHighlightsWrapper';
import TripOverview from '../trip/TripOverview';
import { useIsMobile } from '@/hooks/use-mobile';
import { tripDetails, galleryImages, learningOutcomes, tripItinerary, perfectFor } from './data';
import { programData } from './data/programInfo';

interface Seeds2EducationDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
  customThumbnails?: Record<string, string>;
}

const Seeds2EducationData: React.FC<Seeds2EducationDataProps> = ({
  heroOnly = false,
  contentOnly = false,
  navigationOnly = false,
  customThumbnails
}) => {
  const isMobile = useIsMobile();

  // Custom description and project goals specific to Seeds2Education
  const programDescription = [
    "In Kenya, 1 in 4 children face stunted growth due to malnutrition, with hunger posing a significant barrier to education. It limits focus, attendance, and long-term potential. The Seeds2Education Program is designed to combat this crisis by turning degraded land at schools into thriving gardens and food forests.",
    "Students work alongside local children and local experts to plant nutrient-rich crops, creating sustainable food sources that provide daily meals for students in need. Through hands-on permaculture workshops and cultural exchanges, this trip empowers students to drive food security, foster global citizenship, and leave a lasting legacy of nourishment for Kenyan communities."
  ];

  const projectGoals = programData.goals;

  // Updated PDF brochure link
  const pdfBrochureLink = "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Food_For_Education_2025.pdf?v=1750708949";

  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero
          title="Seeds2Education"
          subtitle="Transform degraded school land into vibrant gardens using permaculture farming techniques to provide nutritious meals for local children, fostering long-term food security."
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
              description={programDescription}
              projectGoals={projectGoals}
              isSchoolTrip={true}
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
              description={programDescription}
              projectGoals={projectGoals}
              hideOverview={true}
              hideHighlights={!isMobile} // Show highlights in TripBrochureContent only on mobile
              pdfBrochureLink={pdfBrochureLink}
              customThumbnails={customThumbnails}
              isEducatorTrip={false}
              isSchoolTrip={true}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Seeds2EducationData;
