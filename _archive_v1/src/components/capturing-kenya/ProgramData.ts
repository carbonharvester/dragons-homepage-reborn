
import { Camera, VideoIcon, Globe, Briefcase, Users, BookOpen } from "lucide-react";
import { ProgramDataType, Outcome } from "./types";

export const programData: ProgramDataType = {
  title: "Capturing Kenya",
  description: "A 3-week creative adventure to photograph and film Kenya's diverse landscapes, wildlife, and cultures while developing professional skills.",
  duration: "3 Weeks",
  season: "Jul 1 - Jul 21 2026",
  location: "Kenya (Various locations)",
  ages: "16-20",
  goals: [
    "Master photography and videography techniques across diverse environments - from urban to wildlife to coastal",
    "Build a professional portfolio showcasing Kenya's landscapes, wildlife, and cultures",
    "Develop advanced portrait and cultural storytelling skills through Samburu community immersion",
    "Learn wildlife photography techniques in world-renowned parks like Amboseli and Tsavo",
    "Experience unique perspectives through hot air balloon and train journey photography",
    "Create a final portfolio that demonstrates technical skill and creative storytelling vision"
  ]
};

export const outcomes: Outcome[] = [
  {
    title: "Technical Mastery",
    description: "Develop advanced camera skills including manual controls, composition, and specialized techniques for wildlife, landscape, and portrait photography.",
    icon: Camera
  },
  {
    title: "Visual Storytelling",
    description: "Learn to craft compelling visual narratives that communicate powerful stories about Kenya's landscapes, wildlife, and communities.",
    icon: VideoIcon
  },
  {
    title: "Cultural Immersion",
    description: "Gain deep understanding of diverse Kenyan cultures and ethical approaches to documentary photography and videography.",
    icon: Globe
  },
  {
    title: "Professional Skills",
    description: "Master industry-standard editing software, workflow management, and portfolio development to prepare for future opportunities.",
    icon: Briefcase
  },
  {
    title: "Team Collaboration",
    description: "Work with peers on collaborative projects, developing essential skills in communication, feedback, and group creative processes.",
    icon: Users
  },
  {
    title: "Conservation Awareness",
    description: "Understand how visual media can support conservation efforts and raise awareness about environmental challenges.",
    icon: BookOpen
  }
];

// Export learning outcomes directly from the outcomes array
export const learningOutcomes = outcomes.map(outcome => ({
  title: outcome.title,
  description: outcome.description
}));

// Gallery images for the scrollable gallery
export const galleryImages = [
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/KleinNettoh--1.jpg?v=1747112174",
    alt: "Student photographing wildlife in Kenya",
    className: "min-w-[280px] h-[220px] md:min-w-[400px] md:h-[300px] rounded-lg object-cover"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/KleinNettoh--2_1.jpg?v=1747112188",
    alt: "Students learning camera techniques in the field",
    className: "min-w-[280px] h-[220px] md:min-w-[400px] md:h-[300px] rounded-lg object-cover"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/KleinNettoh--3.jpg?v=1747112174",
    alt: "Wildlife photography in Maasai Mara",
    className: "min-w-[280px] h-[220px] md:min-w-[400px] md:h-[300px] rounded-lg object-cover"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/KleinNettoh--4.jpg?v=1747112174",
    alt: "Cultural photography experience with local communities",
    className: "min-w-[280px] h-[220px] md:min-w-[400px] md:h-[300px] rounded-lg object-cover"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/KleinNettoh--5.jpg?v=1747112174",
    alt: "Landscape photography in Kenya's diverse environments",
    className: "min-w-[280px] h-[220px] md:min-w-[400px] md:h-[300px] rounded-lg object-cover"
  }
];
