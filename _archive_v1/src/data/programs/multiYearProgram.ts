
import { School, Users, GraduationCap } from "lucide-react";

export const multiYearProgram = {
  title: "Multi-Year Travel Curriculum",
  subtitle: "Global Education Through Adventure",
  description: "Transform your school's global education with a three-year travel curriculum tailored to your needs. Our progressive trips to Africa build student skills, earn CAS and Duke of Edinburgh credits, and empower communities through sustainable projects.",
  years: [
    {
      title: "Year 1: Foundation Trip",
      ageRange: "Ages 11–13",
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
