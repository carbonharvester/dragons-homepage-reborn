
import { tripDetails, perfectFor } from './details';
import { learningOutcomes } from './learningOutcomes';
import { galleryImages } from './gallery';
import { tripHighlights } from './highlights';
import { programData } from './programInfo';

// Create trip itinerary data structure that matches what TripBrochureContent expects
export const tripItinerary = [
  {
    day: "Week 1",
    title: "Orientation & Permaculture Foundations",
    activities: [
      "Arrive in Nairobi and travel to training center",
      "Introduction to permaculture principles and ethics",
      "Site assessment and analysis techniques",
      "Design methodology for sustainable food systems",
      "Soil health and composting workshops"
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
  programData
};
