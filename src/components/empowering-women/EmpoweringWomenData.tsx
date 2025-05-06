
import React from 'react';
import TripBrochureContent from '../trip/TripBrochureContent';
import TripHero from '../trip/TripHero';
import { 
  tripDetails, 
  tripHighlights, 
  galleryImages, 
  learningOutcomes, 
  tripItinerary, 
  programData 
} from './data';
import TripOverview from '../trip/TripOverview';
import TripHighlightsWrapper from './TripHighlightsWrapper';
import TripGallery from '../trip/TripGallery';
import TripLearningOutcomes from '../trip/TripLearningOutcomes';
import TripItinerary from '../trip/TripItinerary';
import ProgramBrochure from '../ProgramBrochure';
import TripCTA from '../trip/TripCTA';

const empoweringWomenGoals = [
  "Experience the daily challenges faced by rural Kenyan women",
  "Support Zawadisha's microloan program for life-changing products",
  "Learn about sustainable solutions for water and energy access",
  "Engage in cultural exchange through crafts and traditional cooking"
];

const empoweringWomenDescription = [
  "This immersive 7-8 day journey to Tsavo, Kenya will introduce you to the lives of rural Kenyan women and the innovative microloan program by Zawadisha that's transforming their communities.",
  "Students will experience firsthand the daily challenges these women face through activities like the water walk, home visits, and cultural immersion. By supporting Zawadisha's work providing solar lamps, rainwater tanks, and clean cookstoves, participants will gain deep insights into sustainable development, women's empowerment, and social entrepreneurship."
];

const EmpoweringWomenData: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <TripHero 
        title="Exploring Women's Empowerment"
        subtitle="Empower Women, Transform Lives through an 8-day journey in Tsavo, Kenya"
        category="School Trip"
        imagePath="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Main content */}
      <div className="container py-16">
        {/* Trip Overview */}
        <TripOverview 
          tripDetails={tripDetails} 
          projectGoals={empoweringWomenGoals}
          description={empoweringWomenDescription}
        />
        
        {/* Trip Highlights */}
        <TripHighlightsWrapper />
        
        {/* Photo Gallery */}
        <TripGallery images={galleryImages} />
        
        {/* Learning Outcomes */}
        <TripLearningOutcomes outcomes={learningOutcomes} />
        
        {/* Sample Itinerary */}
        <TripItinerary itineraryDays={tripItinerary} />
        
        {/* Program Brochure */}
        <ProgramBrochure program={programData} />
        
        {/* CTA Section */}
        <TripCTA />
      </div>
    </>
  );
};

export default EmpoweringWomenData;
