
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
import Testimonials from '../Testimonials';
import TripCTA from '../trip/TripCTA';
import VideoSection from '../VideoSection';

const EducationalLeadershipContent = () => {
  return (
    <>
      {/* Hero Section */}
      <TripHero 
        title="Educational Leadership"
        subtitle="An immersive professional development program for teachers of environmental science, sustainability, and geography. Work alongside local conservation experts to develop field-based curriculum while experiencing Kenya's diverse ecosystems firsthand."
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
              "Our Educational Leadership program is an immersive 10-day professional development journey for teachers of environmental science, sustainability, geography, and related disciplines. This field-based experience takes place in Kenya's diverse ecosystems, where educators work alongside local conservation experts.",
              "Participants gain firsthand knowledge of field-based teaching techniques while developing curriculum resources they can immediately implement in their classrooms. The program combines theoretical frameworks with practical experience, allowing teachers to deeply engage with environmental concepts in real-world settings."
            ]}
            projectGoals={[
              "Develop field-based teaching strategies for environmental science and sustainability education",
              "Create curriculum resources that connect global environmental challenges to classroom learning",
              "Build a professional network of educators focused on environmental literacy",
              "Experience conservation in action at Wildlife Works and Tsavo East National Park",
              "Engage with local communities to understand indigenous knowledge systems"
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
          
          {/* Testimonials */}
          <Testimonials />
          
          {/* CTA Section */}
          <TripCTA isSchoolTrip={false} />
        </div>
      </div>
    </>
  );
};

export default EducationalLeadershipContent;
