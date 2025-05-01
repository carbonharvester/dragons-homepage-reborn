
import React from 'react';
import { MapPin, Users, BookOpen, Shield, LineChart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [{
  icon: <MapPin className="h-10 w-10 text-dragon" />,
  title: "Tailored Itineraries",
  description: "Structured day-by-day programs that balance immersive learning, cultural exchange, and direct impact with clearly defined goals and activities."
}, {
  icon: <Users className="h-10 w-10 text-dragon" />,
  title: "Flexible Group Sizes",
  description: "Accommodating groups from 10 to 30 students with bespoke options for larger groups, supported by 2 dedicated leaders and trained local rangers for personalized experiences."
}, {
  icon: <BookOpen className="h-10 w-10 text-dragon" />,
  title: "Educational Focus",
  description: "Hands-on permaculture education, sustainability principles, and social entrepreneurship through real-world projects with local experts."
}, {
  icon: <Shield className="h-10 w-10 text-dragon" />,
  title: "Safety & Support",
  description: "Comprehensive risk management, 24/7 local staff support, and experienced trip leaders ensure student wellbeing throughout the journey."
}, {
  icon: <LineChart className="h-10 w-10 text-dragon" />,
  title: "Measurable Impact",
  description: "Concrete outcomes like feeding 300+ students daily, establishing sustainable gardens, and creating economic opportunities for local communities."
}, {
  icon: <Star className="h-10 w-10 text-dragon" />,
  title: "Transformative Experiences",
  description: "Life-changing journeys that foster leadership skills, cultural understanding, and a deep commitment to global citizenship."
}];

const WhyChooseUs = () => {
  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs');
    if (programsSection) {
      programsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <section id="why-us" className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-heading">Why Choose Kapes?</h2>
          <p className="section-subheading mx-auto">We believe travel transforms lives and builds bridges between cultures. Here's what makes our approach different.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => <div key={index} className="flex flex-col items-start">
              <div className="mb-4 p-3 bg-dragon-beige rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-dragon-dark">{feature.title}</h3>
              <p className="text-dragon-gray">{feature.description}</p>
            </div>)}
        </div>

        <div className="mt-16 bg-dragon-sand p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-2xl font-bold text-dragon-dark mb-2">Ready for your next mission?</h3>
            <p className="text-dragon-gray">Speak with a program coordinator about which journey is right for you.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary whitespace-nowrap" onClick={scrollToPrograms}>Find Your Program</Button>
            <Button className="btn-secondary whitespace-nowrap">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>;
};

export default WhyChooseUs;
