
import React from 'react';
import TripOverview from './TripOverview';
import TripHighlights from './TripHighlights';
import TripGallery from './TripGallery';
import TripLearningOutcomes from './TripLearningOutcomes';
import TripItinerary from './TripItinerary';
import TripCTA from './TripCTA';
import ProgramBrochure from '../ProgramBrochure';
import Testimonials from '../Testimonials';

interface TripDetail {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface TripHighlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TripLearningOutcome {
  title: string;
  description: string;
}

interface TripItineraryDay {
  day: string;
  title: string;
  activities: string[];
}

interface ProgramData {
  title: string;
  description: string;
  duration: string;
  season: string;
  location: string;
  goals: string[];
}

interface TripBrochureContentProps {
  tripDetails: TripDetail[];
  tripHighlights: TripHighlight[];
  galleryImages: {
    src: string;
    alt: string;
    className: string;
  }[];
  learningOutcomes: TripLearningOutcome[];
  tripItinerary: TripItineraryDay[];
  programData: ProgramData;
  description?: string[];
  projectGoals?: string[];
}

const TripBrochureContent = ({
  tripDetails,
  tripHighlights,
  galleryImages,
  learningOutcomes,
  tripItinerary,
  programData,
  description,
  projectGoals
}: TripBrochureContentProps) => {
  return <div className="container py-[6px]">
      {/* Trip Overview */}
      <TripOverview tripDetails={tripDetails} description={description} projectGoals={projectGoals} />
      
      {/* Trip Highlights */}
      <TripHighlights highlights={tripHighlights} />
      
      {/* Photo Gallery */}
      <TripGallery images={galleryImages} />
      
      {/* Learning Outcomes */}
      <TripLearningOutcomes outcomes={learningOutcomes} />
      
      {/* Sample Itinerary */}
      <TripItinerary itineraryDays={tripItinerary} />
      
      {/* Program Brochure */}
      <ProgramBrochure program={programData} />
      
      {/* Student Stories Section - Moved above CTA */}
      <Testimonials />
      
      {/* CTA Section - always using isSchoolTrip=true since these are all school trips */}
      <TripCTA isSchoolTrip={true} />
    </div>;
};

export default TripBrochureContent;
