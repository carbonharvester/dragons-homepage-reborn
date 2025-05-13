
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
  // Extract a sample itinerary from the weeks data for the brochure
  sampleItinerary: [
    {
      day: "Week 1: Nairobi & Amboseli",
      activities: [
        "Photography workshops with professional mentors",
        "Wildlife photography in Amboseli National Park",
        "Hot air balloon ride over Amboseli at sunrise",
        "Maasai village cultural experience"
      ]
    },
    {
      day: "Week 2: Samburu",
      activities: [
        "Wildlife and landscape photography in Samburu Reserve",
        "Cultural immersion with Samburu communities",
        "Photography workshops with local youth",
        "Advanced editing techniques for unique environments"
      ]
    },
    {
      day: "Week 3: Lake Turkana",
      activities: [
        "Remote landscape photography at Lake Turkana",
        "Documentary style storytelling with Turkana people",
        "Environmental photography challenges",
        "Boat trip on Lake Turkana for unique perspectives"
      ]
    },
    {
      day: "Week 4: Nairobi",
      activities: [
        "Advanced editing workshops for portfolio development",
        "Community showcase of student work",
        "Certificate ceremony and professional feedback",
        "Final portfolio preparation for future opportunities"
      ]
    }
  ],
  pdfLink: "/capturing-kenya-program-brochure.pdf"
};
