
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
  // Create updated description and goals based on the itinerary
  const description = [
    "Our Educational Leadership program is an immersive 9-day professional development journey for teachers of environmental science, sustainability, geography, and related disciplines. Starting in Nairobi and traversing through Voi, Maungu, and Tsavo East, educators experience first-hand the impact of student-led projects in Kenyan communities.",
    "Participants will engage with organizations like Food For Education, Wildlife Works, and local community groups while experiencing the same transformative activities that students engage in through Kapes programs. From sustainable gardens and water harvesting systems to conservation initiatives and cultural exchanges, this program bridges classroom theory with authentic global experiences."
  ];
  
  const projectGoals = [
    "Experience student-initiated projects at Kirigu Primary School and learn about food security's role in education",
    "Develop practical conservation skills through hands-on activities with Wildlife Works' greenhouse and agroforestry team",
    "Engage with local women's groups and understand gender empowerment through cultural exchange",
    "Learn field-based teaching strategies for environmental education through guided hikes and wildlife observation",
    "Connect classroom curriculum to water access challenges through community experiences and water walks"
  ];

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
            description={description}
            projectGoals={projectGoals}
          />
        </div>
      </div>
    </>
  );
};

export default EducationalLeadershipContent;
