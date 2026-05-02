
import { tripDetails, perfectFor } from './details';
import { learningOutcomes } from './learningOutcomes';
import { galleryImages } from './gallery';
import { tripHighlights } from './highlights';
import { programData } from './programInfo';
import { problemData } from './problemData';

// Create trip itinerary data structure that matches what TripBrochureContent expects
export const tripItinerary = [
  {
    day: "July 3 (Thursday)",
    title: "Arrival & Welcome",
    activities: [
      "Arrive in Nairobi and travel to training center",
      "Welcome dinner and program orientation",
      "Meet fellow participants and instructors",
      "Evening cultural introduction"
    ]
  },
  {
    day: "July 4 (Saturday)",
    title: "Team Building & Cultural Immersion",
    activities: [
      "Team building activities and icebreakers",
      "Nairobi city tour and cultural exploration",
      "Visit to local markets and food systems",
      "Group bonding activities",
      "Evening reflection and goal setting"
    ]
  },
  {
    day: "July 5 (Sunday)",
    title: "Rest & Reflection",
    activities: [
      "Free time and personal reflection",
      "Optional cultural activities",
      "Journal writing and program preparation",
      "Rest and recovery day"
    ]
  },
  {
    day: "July 7 (Monday)",
    title: "Permaculture Theory & Farm Assessment Begin",
    activities: [
      "Introduction to permaculture principles and ethics",
      "Site assessment and analysis techniques",
      "Soil health fundamentals workshop",
      "Farm site visit and initial assessment",
      "Design methodology introduction"
    ]
  },
  {
    day: "Week 2",
    title: "School Garden Implementation",
    activities: [
      "Travel to school project site",
      "Land preparation and soil improvement",
      "Garden bed creation using various techniques",
      "Planting of diverse crops and companion plants",
      "Water management system installation"
    ]
  },
  {
    day: "Week 3",
    title: "Food Forest & Sustainability",
    activities: [
      "Food forest design and establishment",
      "Seed saving and propagation techniques",
      "Natural pest management strategies",
      "Workshops with local students on garden maintenance",
      "Community knowledge exchange events"
    ]
  },
  {
    day: "Week 4",
    title: "Project Completion & Knowledge Transfer",
    activities: [
      "Finalize garden infrastructure and planting",
      "Create maintenance plans with school community",
      "Nutrition and food preparation workshops",
      "Educational materials development for future reference",
      "Celebration and project handover ceremony"
    ]
  }
];

// Re-export everything needed by component
export {
  tripDetails,
  perfectFor,
  learningOutcomes,
  galleryImages,
  tripHighlights,
  programData,
  problemData
};
