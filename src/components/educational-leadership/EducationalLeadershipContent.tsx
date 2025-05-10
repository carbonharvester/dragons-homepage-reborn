
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
import TripOverview from '../trip/TripOverview';
import TripHighlights from '../trip/TripHighlights';
import TripLearningOutcomes from '../trip/TripLearningOutcomes';
import ScrollableGallery from '../trip/ScrollableGallery';
import TripItinerary from '../trip/TripItinerary';
import ProgramBrochure from '../ProgramBrochure';
import VideoSection from '../VideoSection';
import TripCTA from '../trip/TripCTA';

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
          <TripOverview 
            tripDetails={tripDetails}
            description={[
              "Our Educational Leadership program is an immersive 9-day professional development journey for teachers of environmental science, sustainability, geography, and related disciplines. This field-based experience takes place across Kenya from Nairobi to Tsavo, where educators observe first-hand the impact of student-led projects.",
              "Participants experience the same transformative activities that students engage in through Kapes programs, from sustainable gardens and water harvesting systems to conservation initiatives and cultural exchanges. The program combines practical field experiences with reflective discussions, allowing educators to bring authentic global perspectives back to their classrooms."
            ]}
            projectGoals={[
              "Experience the impact of student-led projects in Kenyan communities",
              "Gain insights into sustainable practices for food security and conservation",
              "Develop field-based teaching strategies for environmental education",
              "Engage with local organizations addressing global challenges",
              "Connect classroom theory with real-world sustainability solutions"
            ]}
            perfectFor={perfectFor}
          />
          
          {/* Trip Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-academy mb-8 text-dragon-dark text-center">Trip Highlights</h2>
            <TripHighlights highlights={tripHighlights} />
          </div>
          
          {/* Video Section */}
          <VideoSection 
            videoId="Vxj4QkH9Idc" 
            title="Educational Leadership in Kenya" 
            description="Hear from educators who've experienced our transformative professional development program"
            quote={{
              text: "This experience completely transformed how I teach environmental science. I came back with so many practical field techniques and a deeper understanding of global sustainability issues that I could share with my students.",
              author: "Sarah Kim, High School Science Teacher"
            }}
          />
          
          {/* Learning Outcomes */}
          <TripLearningOutcomes outcomes={learningOutcomes} />
          
          {/* Photo Gallery */}
          <ScrollableGallery images={galleryImages} />
          
          {/* Sample Itinerary */}
          <TripItinerary itineraryDays={tripItinerary} />
          
          {/* Program Brochure */}
          <ProgramBrochure program={programData} />
          
          {/* CTA Section */}
          <TripCTA isSchoolTrip={false} />
        </div>
      </div>
    </>
  );
};

export default EducationalLeadershipContent;
