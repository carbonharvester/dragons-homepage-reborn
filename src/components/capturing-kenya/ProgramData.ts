
import { Camera, VideoIcon, Globe, Briefcase, Users, BookOpen } from "lucide-react";
import { ProgramDataType, Outcome } from "./types";

export const programData: ProgramDataType = {
  title: "Capturing Kenya",
  description: "A 4-week creative adventure to photograph and film Kenya's stunning landscapes, wildlife, and cultures while developing professional skills.",
  duration: "4 Weeks",
  season: "Jul 28 - Aug 25 2026",
  location: "Kenya (Various locations)",
  ages: "16-20",
  goals: [
    "Master photography and videography techniques in diverse environments",
    "Build a professional portfolio showcasing Kenya's landscapes, wildlife, and cultures",
    "Contribute to conservation efforts by documenting wildlife and habitats",
    "Develop storytelling skills through visual narratives of community initiatives",
    "Learn post-processing with industry-standard tools and workflows",
    "Create a final project that combines technical skill with creative vision"
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
