
import React from 'react';
import TripHighlights from './TripHighlights';
import TripGallery from './TripGallery';
import TripLearningOutcomes from './TripLearningOutcomes';
import TripItinerary from './TripItinerary';
import TripDetailsCard from './TripDetailsCard';
import TripCTA from './TripCTA';
import StudentStoriesSection from './StudentStoriesSection';
import ProgramBrochure from '../ProgramBrochure';
import { useIsMobile } from '@/hooks/use-mobile';
import { Calendar, Users, MapPin, Clock, LucideIcon } from 'lucide-react';

export interface TripHighlight {
  title: string;
  description: string;
  imagePath?: string; // Make imagePath optional
  icon: React.ReactNode;
}

export interface GalleryImage {
  src: string;
  alt: string;
  className?: string; // Make className optional
}

export interface LearningOutcome {
  title: string;
  description: string;
}

export interface TripItineraryDay {
  day: string;
  title: string;
  description?: string; // Make description optional
  activities?: string[]; // Add activities as optional
}

export interface TripDetail {
  label: string;
  value: string;
  icon: React.ReactNode | string;
}

export interface ProgramData {
  title: string;
  description?: string;
  duration?: string;
  season?: string;
  location?: string;
  goals?: string[];
}

export interface PerfectFor {
  title: string;
  description: string;
}

interface TripBrochureContentProps {
  tripDetails: TripDetail[];
  tripHighlights: TripHighlight[];
  galleryImages: GalleryImage[];
  learningOutcomes: LearningOutcome[];
  tripItinerary: TripItineraryDay[];
  programData: ProgramData;
  perfectFor: PerfectFor[] | string; // Allow both array and string
  description: string[];
  projectGoals: string[];
  hideOverview?: boolean;
  hideHighlights?: boolean;
  hideStudentStories?: boolean;
  hideLearningOutcomes?: boolean;
  pdfBrochureLink?: string;
  customThumbnails?: Record<string, string>;
  isEducatorTrip?: boolean;
}

const TripBrochureContent = ({
  tripDetails,
  tripHighlights,
  galleryImages,
  learningOutcomes,
  tripItinerary,
  programData,
  perfectFor,
  description,
  projectGoals,
  hideOverview = false,
  hideHighlights = false,
  hideStudentStories = false,
  hideLearningOutcomes = false,
  pdfBrochureLink,
  customThumbnails,
  isEducatorTrip = false
}: TripBrochureContentProps) => {
  const isMobile = useIsMobile();

  // Ensure galleryImages have className
  const processedGalleryImages = galleryImages.map(img => ({
    ...img,
    className: img.className || "object-cover h-full w-full"
  }));

  return (
    <>
      {/* Desktop Layout */}
      {!isMobile && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-16">
            {/* Trip Highlights */}
            {!hideHighlights && tripHighlights && tripHighlights.length > 0 && (
              <TripHighlights highlights={tripHighlights} />
            )}

            {/* Gallery */}
            <TripGallery images={processedGalleryImages} customThumbnails={customThumbnails} />

            {/* Learning Outcomes */}
            {!hideLearningOutcomes && (
              <TripLearningOutcomes outcomes={learningOutcomes} />
            )}

            {/* Itinerary */}
            <TripItinerary itinerary={tripItinerary} />

            {/* Program Brochure - only show if pdfBrochureLink is provided */}
            {pdfBrochureLink && (
              <ProgramBrochure program={programData} pdfLink={pdfBrochureLink} />
            )}

            {/* Student Stories - only show if not hidden */}
            {!hideStudentStories && <StudentStoriesSection />}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <TripDetailsCard 
              tripDetails={tripDetails} 
              isSchoolTrip={!isEducatorTrip}
              pdfBrochureLink={pdfBrochureLink}
            />
          </div>
        </div>
      )}

      {/* Mobile Layout */}
      {isMobile && (
        <div className="space-y-8">
          <TripDetailsCard 
            tripDetails={tripDetails} 
            isSchoolTrip={!isEducatorTrip}
            pdfBrochureLink={pdfBrochureLink}
          />

          {/* Trip Highlights */}
          {!hideHighlights && tripHighlights && tripHighlights.length > 0 && (
            <TripHighlights highlights={tripHighlights} />
          )}

          {/* Gallery */}
          <TripGallery images={processedGalleryImages} customThumbnails={customThumbnails} />

          {/* Learning Outcomes */}
          {!hideLearningOutcomes && (
            <TripLearningOutcomes outcomes={learningOutcomes} />
          )}

          {/* Itinerary */}
          <TripItinerary itinerary={tripItinerary} />

          {/* Program Brochure - only show if pdfBrochureLink is provided */}
          {pdfBrochureLink && (
            <ProgramBrochure program={programData} pdfLink={pdfBrochureLink} />
          )}

          {/* Student Stories - only show if not hidden */}
          {!hideStudentStories && <StudentStoriesSection />}
        </div>
      )}

      {/* CTA Section */}
      <TripCTA isSchoolTrip={!isEducatorTrip} />
    </>
  );
};

export default TripBrochureContent;
