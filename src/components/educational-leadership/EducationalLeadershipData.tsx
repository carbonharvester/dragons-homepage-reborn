
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
  detailsPerfectFor as perfectFor
} from './data';

interface EducationalLeadershipDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
  customThumbnails?: Record<string, string>;
}

const EducationalLeadershipData: React.FC<EducationalLeadershipDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false,
  navigationOnly = false,
  customThumbnails
}) => {
  const isMobile = useIsMobile();

  // Custom description and project goals
  const description = [
    "Our Educational Leadership program is an immersive professional development journey for teachers of environmental science, sustainability, geography, and related disciplines. Starting in Nairobi and traversing through Voi, Maungu, and Tsavo East, educators experience first-hand the impact of student-led projects in Kenyan communities.",
    "Participants will engage with organizations like Food For Education, Wildlife Works, and local community groups while experiencing the same transformative activities that students engage in through Kapes programs. From sustainable gardens and water harvesting systems to conservation initiatives and cultural exchanges, this program bridges classroom theory with authentic global experiences."
  ];
  
  const projectGoals = [
    "Experience student-initiated projects at Kirigu Primary School and learn about food security's role in education",
    "Develop practical conservation skills through hands-on activities with Wildlife Works' greenhouse and agroforestry team",
    "Engage with local women's groups and understand gender empowerment through cultural exchange",
    "Learn field-based teaching strategies for environmental education through guided hikes and wildlife observation",
    "Connect classroom curriculum to water access challenges through community experiences and water walks"
  ];

  // Direct PDF brochure link
  const pdfBrochureLink = "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Educational_Leadership.pdf";

  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero 
          title="Educational Leadership"
          subtitle="An immersive professional development program for teachers of environmental science, sustainability, and geography. Experience Kenya's diverse ecosystems and learn how student-led projects create lasting impact."
          category="Educator Trip"
          imagePath="https://res.cloudinary.com/dng12bd0a/image/upload/v1747130203/IMG_0252_gstfij.jpg"
        />
      )}

      {/* Navigation Section */}
      {(navigationOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <ParentPageNavigation parentPath="/educator-trips" parentName="Educator Trips" />
      )}

      {/* Main content */}
      {(contentOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <>
          <div className="container py-[6px]">
            <TripOverview 
              tripDetails={tripDetails}
              perfectFor={perfectFor}
              description={description}
              projectGoals={projectGoals}
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
              description={description}
              projectGoals={projectGoals}
              hideOverview={true}
              hideHighlights={!isMobile} // Show highlights in TripBrochureContent only on mobile
              pdfBrochureLink={pdfBrochureLink}
              customThumbnails={customThumbnails}
              isEducatorTrip={true} // Indicate this is an educator trip
              hideStudentStories={true} // Hide student stories section
            />
          </div>
        </>
      )}
    </>
  );
};

export default EducationalLeadershipData;
