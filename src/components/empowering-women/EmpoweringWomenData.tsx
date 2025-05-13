
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

interface EmpoweringWomenDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
}

const EmpoweringWomenData: React.FC<EmpoweringWomenDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false,
  navigationOnly = false
}) => {
  const isMobile = useIsMobile();
  
  // Custom description and project goals specific to the Water Empowering Women program
  const waterDescription = [
    "In rural Kenyan communities near Tsavo, women and their families often face significant barriers to accessing clean water. Women and girls typically bear the responsibility of fetching water, walking long distances (sometimes 5–10 km daily) to rivers or unreliable sources.",
    "This burden limits their time for education, income-generating activities, or family care, perpetuating cycles of poverty and gender inequality. Through this immersive 8 day journey, students will experience firsthand the water challenges faced by rural Kenyan women and contribute to sustainable water access solutions."
  ];
  
  const waterProjectGoals = [
    "Experience the daily water collection challenges faced by rural Kenyan women through an immersive water walk",
    "Install water tanks in local communities to provide reliable access to clean water",
    "Learn about the relationship between water access, gender equality, and community development",
    "Contribute to projects that reduce health risks from waterborne diseases and wildlife encounters",
    "Connect with Kenya's natural beauty through safari and cultural immersion activities"
  ];

  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero 
          title="Water Empowering Women"
          subtitle="Partner with local communities and engage with rural Kenyan women through water access initiatives that provide life-changing clean water solutions."
          category="School Trip"
          imagePath="/lovable-uploads/2b64c2a8-18d5-43cc-a376-e32137687104.png"
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
              description={waterDescription}
              projectGoals={waterProjectGoals}
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
              description={waterDescription}
              projectGoals={waterProjectGoals}
              hideOverview={true}
              hideHighlights={!isMobile} // Show highlights in TripBrochureContent only on mobile
            />
          </div>
        </>
      )}
    </>
  );
};

export default EmpoweringWomenData;
