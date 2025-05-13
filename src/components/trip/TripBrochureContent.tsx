
import React, { useEffect } from 'react';
import TripOverview from './TripOverview';
import TripHighlights from './TripHighlights';
import ScrollableGallery from './ScrollableGallery';
import TripLearningOutcomes from './TripLearningOutcomes';
import TripItinerary from './TripItinerary';
import TripCTA from './TripCTA';
import ProgramBrochure from '../ProgramBrochure';
import Testimonials from '../Testimonials';
import { useIsMobile } from '@/hooks/use-mobile';

export interface TripDetail {
  label: string;
  value: string;
  icon: React.ReactNode | string;
}

export interface TripHighlight {
  icon: React.ReactNode | string;
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
  perfectFor?: string;
  hideOverview?: boolean;
  hideHighlights?: boolean;
  pdfBrochureLink?: string;
  customThumbnails?: Record<string, string>;
  isEducatorTrip?: boolean;
  hideStudentStories?: boolean;
}

const TripBrochureContent: React.FC<TripBrochureContentProps> = ({
  tripDetails,
  tripHighlights,
  galleryImages,
  learningOutcomes,
  tripItinerary,
  programData,
  description,
  projectGoals,
  perfectFor,
  hideOverview = false,
  hideHighlights = false,
  pdfBrochureLink,
  customThumbnails,
  isEducatorTrip = false,
  hideStudentStories = false
}: TripBrochureContentProps) => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    console.log('TripBrochureContent mounted with programData:', programData);
    console.log('PDF Brochure Link:', pdfBrochureLink);
  }, [programData, pdfBrochureLink]);

  return <div className="container py-0">
      {/* Trip Overview */}
      {!hideOverview && <TripOverview tripDetails={tripDetails} description={description} projectGoals={projectGoals} perfectFor={perfectFor} />}
      
      {/* Trip Highlights */}
      {!hideHighlights && <div className="mb-16 text-center">
          <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark text-center hero-heading">Trip Highlights</h2>
          <TripHighlights highlights={tripHighlights} />
        </div>}

      {/* Learning Outcomes */}
      <TripLearningOutcomes outcomes={learningOutcomes} />
      
      {/* Photo Gallery - Using consolidated component */}
      <ScrollableGallery images={galleryImages} />
      
      {/* Sample Itinerary */}
      <TripItinerary itineraryDays={tripItinerary} />
      
      {/* Program Brochure */}
      <ProgramBrochure program={programData} pdfLink={pdfBrochureLink} />
      
      {/* Student Stories Section - Only show for student trips, not for educator trips, and when not explicitly hidden */}
      {!isEducatorTrip && !hideStudentStories && <Testimonials />}
      
      {/* CTA Section */}
      <TripCTA isSchoolTrip={!isEducatorTrip} />
    </div>;
};

export default TripBrochureContent;
