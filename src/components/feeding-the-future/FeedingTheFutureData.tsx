
import React from 'react';
import TripBrochureContent from '../trip/TripBrochureContent';
import TripHero from '../trip/TripHero';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';
import TripHighlightsWrapper from './TripHighlightsWrapper';
import TripOverview from '../trip/TripOverview';
import { useIsMobile } from '@/hooks/use-mobile';
import { tripDetails, perfectFor } from './data/details';
import { galleryImages, learningOutcomes } from './data';
import { programData } from './data/programInfo';
import ProgramLocations from '../roots-of-change/ProgramLocations';
import ProgramItinerary from '../roots-of-change/ProgramItinerary';

interface FeedingTheFutureDataProps {
  heroOnly?: boolean;
  contentOnly?: boolean;
  navigationOnly?: boolean;
  customThumbnails?: Record<string, string>;
}

const FeedingTheFutureData: React.FC<FeedingTheFutureDataProps> = ({ 
  heroOnly = false, 
  contentOnly = false,
  navigationOnly = false,
  customThumbnails
}) => {
  const isMobile = useIsMobile();

  // Custom description and project goals specific to Feeding the Future
  const feedingDescription = [
    "Our Feeding the Future program is a four-week immersive experience focused on sustainable agriculture and permaculture design. Students participate in transforming unused or degraded land at schools into productive farms that provide nutritious meals for students.",
    "Working alongside local experts, participants will develop hands-on skills in permaculture techniques, water management, and climate-smart agriculture while learning how these practices contribute to food security in Kenya's diverse environments."
  ];
  
  const feedingProjectGoals = programData.goals;

  // Direct PDF brochure link
  const pdfBrochureLink = "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Feeding_the_Future.pdf";

  return (
    <>
      {/* Hero Section */}
      {(heroOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <TripHero 
          title="Feeding the Future"
          subtitle="A 4-week immersive experience in sustainable agriculture and food security initiatives across Kenya, combining permaculture techniques with community engagement."
          category="Summer Abroad"
          imagePath="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070"
        />
      )}

      {/* Navigation Section */}
      {(navigationOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <ParentPageNavigation parentPath="/summer-abroad" parentName="Summer Abroad" />
      )}

      {/* Main content */}
      {(contentOnly || (!heroOnly && !contentOnly && !navigationOnly)) && (
        <>
          <div className="container py-[6px]">
            <TripOverview 
              tripDetails={tripDetails}
              perfectFor={perfectFor}
              description={feedingDescription}
              projectGoals={feedingProjectGoals}
            />
            
            {/* Trip Highlights with explicit heading - only show if we're not on mobile */}
            {!isMobile && <TripHighlightsWrapper />}
            
            {/* Learning Outcomes Section */}
            <div className="mb-16 bg-dragon-beige p-8 md:p-12 rounded-lg">
              <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark text-center hero-heading">Learning Outcomes</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-bold mb-2 text-dragon-dark">{outcome.title}</h3>
                    <p className="text-dragon-gray">{outcome.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gallery Section */}
            <div className="mt-24 mb-16">
              <h2 className="text-3xl font-academy-bold mb-8 text-dragon-dark text-center hero-heading">Photo Gallery</h2>
              <div className="grid grid-cols-12 gap-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className={image.className}>
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Program Locations section */}
            <ProgramLocations />
            
            {/* Custom Program Itinerary section */}
            <div className="mb-16">
              <ProgramItinerary />
            </div>
            
            {/* Program Brochure section */}
            <div className="mb-16">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-dragon-dark">Program Brochure</h3>
                  <a 
                    href={pdfBrochureLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-dragon text-white rounded-md hover:bg-dragon-dark transition-colors"
                  >
                    <span className="mr-2">Download PDF</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </a>
                </div>
                <div className="p-6 bg-dragon-beige rounded-md">
                  <p className="text-dragon-gray">
                    Download our comprehensive program brochure to learn more about this trip, including detailed itinerary, program goals, and what to expect during your experience with Kapes Adventures.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="bg-dragon text-white rounded-lg p-6 md:p-12 text-center mb-16 mt-20 w-full">
              <h2 className="text-2xl md:text-4xl font-academy font-bold mb-4">Ready to Join Feeding the Future?</h2>
              <p className="text-base md:text-lg max-w-3xl mx-auto mb-6">
                Take the first step toward an impactful summer experience focusing on sustainable agriculture and food security in Kenya.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://calendly.com/kapesuniforms/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-dragon-yellow text-dragon-dark rounded-md hover:bg-amber-400 transition-colors font-medium"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FeedingTheFutureData;
