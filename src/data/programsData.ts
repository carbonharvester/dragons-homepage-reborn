
import { Globe, School, Users, GraduationCap, Camera, Leaf } from "lucide-react";

// Program categories
export const programCategories = [
  { id: "school-trips", label: "School Trips" },
  { id: "summer-abroad", label: "Summer Abroad" },
  { id: "multi-year", label: "Multi-Year Curriculum" },
  { id: "adult-trips", label: "Adult Programs" },
];

// Programs data
export const schoolTrips = [
  { title: "Food For Education", duration: "5-7 Days", season: "Jan-Nov", description: "Join sustainable agriculture initiatives to address food security challenges in rural communities through hands-on farming and education programmes.", image: "/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png", link: "/programs/food-for-education", icon: Globe },
  { title: "Community Conservation", duration: "5-7 Days", season: "Year Round", description: "Work alongside local conservation experts to protect endangered ecosystems while learning traditional ecological knowledge and sustainable practices.", image: "/lovable-uploads/5c2915df-6fcc-4fd9-a320-7025337ffd6a.png", link: "/programs/community-conservation", icon: Globe },
  { title: "Exploring Women's Empowerment", duration: "8 Days", season: "Year Round", description: "A transformative journey to support Zawadisha's microloan program for rural women while experiencing water walks, crafting workshops, and Tsavo's wildlife.", image: "/lovable-uploads/2b64c2a8-18d5-43cc-a376-e32137687104.png", link: "/programs/empowering-women", icon: Globe }
];

export const summerAbroad = [
  { title: "Feeding the Future", duration: "4 Weeks", season: "Jun-Aug", description: "Join sustainable agriculture initiatives to address food security challenges in rural communities through hands-on farming and education programmes.", image: "/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png", link: "/programs/feeding-the-future", icon: Globe, ageGroup: "17-21", location: "Kenya" },
  { title: "Capturing Kenya", duration: "3 Weeks", season: "Jun-Aug", description: "Develop your photography and videography skills with expert guidance as you document safari adventures, community experiences, and natural wonders across Kenya.", image: "/lovable-uploads/741a3f8a-9da4-4fa9-a3d2-363c5231bed5.png", link: "/programs/capturing-kenya", icon: Camera, ageGroup: "17-21", location: "Kenya" }
];

export const adultTrips = [
  { title: "Permaculture Design Course", duration: "10 Days", season: "Year Round", description: "Immerse yourself in permaculture principles while contributing to sustainable food systems in local Kenyan communities. Learn design techniques and practical skills with real-world impact.", image: "/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png", link: "/programs/permaculture-design-course", icon: Leaf }
];

export const multiYearProgram = {
  title: "Multi-Year Travel Curriculum",
  subtitle: "Global Education Through Adventure",
  description: "Transform your school's global education with a three-year travel curriculum tailored to your needs. Our progressive trips to Africa build student skills, earn CAS and Duke of Edinburgh credits, and empower communities through sustainable projects.",
  years: [
    {
      title: "Year 1: Foundation Trip",
      ageRange: "Ages 12–13",
      description: "Discover Kenya through tree planting, safaris, and cultural workshops. Earn CAS points and a Kapes Foundation Certificate.",
      icon: School
    },
    {
      title: "Year 2: Development Trip",
      ageRange: "Ages 14–16",
      description: "Experience the Exploring Women's Empowerment in Tsavo, living alongside rural women and contributing to microloans. Earn the Kapes Development Certificate.",
      icon: Users
    },
    {
      title: "Year 3: Leadership Trip",
      ageRange: "Ages 17–18",
      description: "Lead a health workshop in Ghana, design your own project, and earn a Kapes Leadership Certificate. Complete Duke of Edinburgh's Gold Award.",
      icon: GraduationCap
    }
  ]
};
