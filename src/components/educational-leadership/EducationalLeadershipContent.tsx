
import React from 'react';
import TripHero from '../trip/TripHero';
import ParentPageNavigation from '../navigation/ParentPageNavigation';
import { 
  tripDetails,
  tripHighlights,
  galleryImages,
  learningOutcomes,
  tripItinerary,
  programData,
  perfectFor
} from './data';
import TripBrochureContent from '../trip/TripBrochureContent';

const EducationalLeadershipContent = () => {
  return (
    <>
      {/* Hero Section */}
      <TripHero 
        title="Educational Leadership"
        subtitle="An immersive professional development program for teachers of environmental science, sustainability, and geography. Experience Kenya's diverse ecosystems and learn how student-led projects create lasting impact."
        category="Educator Trip"
        imagePath="/lovable-uploads/741a3f8a-9da4-4fa9-a3d2-363c5231bed5.png"
      />
      
      {/* Main Content */}
      <div className="bg-white">
        <div className="container-wide py-4">
          <ParentPageNavigation parentPath="/educator-trips" parentName="Educator Trips" />
        </div>
        
        <div className="container py-[6px]">
          <TripBrochureContent 
            tripDetails={tripDetails}
            tripHighlights={tripHighlights}
            galleryImages={galleryImages}
            learningOutcomes={learningOutcomes}
            tripItinerary={tripItinerary}
            programData={programData}
            perfectFor={perfectFor}
            isEducatorTrip={true}
          />
        </div>
      </div>
    </>
  );
};

export default EducationalLeadershipContent;
