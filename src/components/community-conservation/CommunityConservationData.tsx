
import React from 'react';
import TripBrochureContent from '../trip/TripBrochureContent';
import TripHero from '../trip/TripHero';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';
import { 
  tripDetails, 
  tripHighlights, 
  galleryImages, 
  learningOutcomes, 
  tripItinerary, 
  programData,
  perfectFor
} from './data';

interface CommunityConservationDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
}

const CommunityConservationData: React.FC<CommunityConservationDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false,
  navigationOnly = false
}) => {
  // Define custom trip description for the overview section
  const tripDescription = [
    "This 8 day journey to Tsavo, Kenya immerses students in practical conservation work with Wildlife Works while exploring the magnificent Tsavo East National Park.",
    "Students will experience wildlife monitoring, carbon cycle management, and traditional craft-making while developing outdoor skills through hiking and ranger-led activities. The program provides hands-on engagement with conservation enterprises and social initiatives that balance ecosystem protection with community development."
  ];

  // Define custom project goals
  const projectGoals = [
    "Experience conservation in action at Wildlife Works and Tsavo East National Park",
    "Learn about carbon cycle management and REDD+ conservation initiatives",
    "Engage with local communities and learn traditional craft-making skills",
    "Develop outdoor adventure skills including hiking and bush survival techniques"
  ];

  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero 
          title="Community Conservation"
          subtitle="Work alongside local conservation experts to protect endangered ecosystems while learning traditional ecological knowledge and sustainable practices."
          category="School Trip"
          imagePath="/lovable-uploads/5c2915df-6fcc-4fd9-a320-7025337ffd6a.png"
        />
      )}

      {/* Navigation Section */}
      {(navigationOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <ParentPageNavigation parentPath="/school-trips" parentName="School Trips" />
      )}

      {/* Main content */}
      {(contentOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripBrochureContent 
          tripDetails={tripDetails.map(detail => ({
            ...detail,
            icon: React.createElement(detail.icon, { className: "h-5 w-5 text-dragon" })
          }))}
          tripHighlights={tripHighlights.map(highlight => ({
            ...highlight,
            icon: <div className="text-white">
              {React.createElement(highlight.icon, { className: "h-8 w-8" })}
            </div>
          }))}
          galleryImages={galleryImages}
          learningOutcomes={learningOutcomes}
          tripItinerary={tripItinerary}
          programData={programData}
          description={tripDescription}
          projectGoals={projectGoals}
          perfectFor={perfectFor}
        />
      )}
    </>
  );
};

export default CommunityConservationData;
