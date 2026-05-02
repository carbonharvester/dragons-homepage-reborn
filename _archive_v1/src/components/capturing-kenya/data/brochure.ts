
import { weeks } from './index';
import { programData, outcomes } from '../ProgramData';

// Structured data for the PDF brochure
export const brochureData = {
  title: programData.title,
  description: programData.description,
  duration: programData.duration,
  season: programData.season,
  location: programData.location,
  goals: programData.goals,
  outcomes: outcomes.map(outcome => ({
    title: outcome.title,
    description: outcome.description
  })),
  // Extract a proper itinerary from the weeks data for the brochure
  sampleItinerary: [
    {
      day: "Week 1",
      activities: [
        "Arrival in Nairobi and orientation to Kenya's photography landscape",
        "Wildlife photography workshop at Nairobi National Park",
        "Multi-day safari photography in Amboseli National Park",
        "Maasai cultural documentation experience"
      ]
    },
    {
      day: "Week 2",
      activities: [
        "Travel to Samburu National Reserve for wildlife photography",
        "Portrait photography sessions with Samburu communities",
        "Night sky and astrophotography workshop",
        "Landscape photography at the Matthews Range"
      ]
    },
    {
      day: "Week 3",
      activities: [
        "Documentary photography at Lake Turkana",
        "Environmental storytelling through photography",
        "Cultural exchange with Turkana communities",
        "Specialized wildlife photography at Sibiloi National Park"
      ]
    },
    {
      day: "Week 4",
      activities: [
        "Return to Nairobi for advanced editing workshops",
        "Portfolio development sessions with professional photographers",
        "Final project presentations and community exhibition",
        "Graduation and certificate ceremony"
      ]
    }
  ],
  pdfLink: "/capturing-kenya-program-brochure.pdf"
};
