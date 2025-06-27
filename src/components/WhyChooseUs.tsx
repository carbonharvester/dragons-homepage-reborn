
import React from 'react';
import { MapPin, Users, BookOpen, Shield, LineChart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CalendlyEmbed from './CalendlyEmbed';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const features = [{
  icon: <MapPin className="h-10 w-10 text-dragon transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
  title: "Tailored Itineraries",
  description: "Structured day-by-day programs that balance immersive learning, cultural exchange, and direct community impact, with clear goals and activities designed to inspire students and empower African communities."
}, {
  icon: <Users className="h-10 w-10 text-dragon transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
  title: "Flexible Group Sizes",
  description: "We accommodate groups of 10 to 30 students, with tailored options for larger groups, guided by 2 dedicated leaders and trained local rangers to ensure personalised, transformative experiences."
}, {
  icon: <BookOpen className="h-10 w-10 text-dragon transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
  title: "Educational Focus",
  description: "Hands-on permaculture education, sustainability principles, and social entrepreneurship through real-world projects with local African experts, inspiring students to become global change-makers."
}, {
  icon: <Shield className="h-10 w-10 text-dragon transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
  title: "Safety & Support",
  description: "Comprehensive risk management, 24/7 local staff support, and experienced trip leaders ensure student wellbeing, so they can fully embrace their transformative journey in Africa."
}, {
  icon: <LineChart className="h-10 w-10 text-dragon transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
  title: "Measurable Impact",
  description: "Concrete outcomes like reducing school absenteeism, providing daily meals to students, and creating economic opportunities that foster long-term prosperity in local communities."
}, {
  icon: <Star className="h-10 w-10 text-dragon transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
  title: "Transformative Experiences",
  description: "Life-changing journeys that foster leadership, cultural understanding, and a deep commitment to global citizenship, while empowering communities through sustainable impact."
}];

const Feature = ({
  title,
  description,
  icon,
  index,
  isVisible,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isVisible: boolean;
}) => {
  const animationDelay = `${index * 100}ms`;
  
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-dragon-beige transition-all duration-700 hover:bg-gradient-to-br hover:from-white hover:to-dragon-beige/30",
        (index === 0 || index === 3) && "lg:border-l border-dragon-beige",
        index < 3 && "lg:border-b border-dragon-beige",
        isVisible ? "animate-slide-up opacity-100" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: animationDelay }}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-dragon-beige to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-dragon-beige to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">
        <div className="p-3 bg-dragon-beige rounded-lg inline-block group-hover/feature:bg-dragon-yellow transition-all duration-300 group-hover/feature:scale-110">
          {icon}
        </div>
      </div>
      <div className="text-xl font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-dragon-beige group-hover/feature:bg-dragon transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-dragon-dark underline-animate">
          {title}
        </span>
      </div>
      <p className="text-dragon-gray max-w-xs relative z-10 px-10 group-hover/feature:text-dragon-dark transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

const WhyChooseUs = () => {
  const { elementRef, isVisible } = useScrollAnimation(6, {
    threshold: 0.1,
    stagger: true,
    staggerDelay: 100
  });

  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs');
    if (programsSection) {
      programsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <section id="why-us" className="py-20 bg-white relative overflow-hidden" ref={elementRef}>
      {/* African Pattern Accent Elements */}
      <div className="absolute top-12 right-12 w-24 h-16 opacity-15">
        <img 
          src="/lovable-uploads/cf30b0db-eae7-47de-8db9-886a54aeacac.png" 
          alt="" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute bottom-16 left-16 w-20 h-20 opacity-20">
        <img 
          src="/lovable-uploads/cf30b0db-eae7-47de-8db9-886a54aeacac.png" 
          alt="" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      
      <div className="container-wide relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-heading">
            Why Kapes?
          </h2>
          <p className="section-subheading mx-auto">We believe travel transforms lives and builds bridges between cultures. Our unique programs immerse students in authentic African experiences, inspiring personal growth while creating sustainable impact for communities, setting us apart in educational travel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} isVisible={isVisible} />
          ))}
        </div>

        <div className={`mt-16 bg-dragon-sand p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-center justify-between transition-all duration-800 hover:shadow-xl ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '800ms' }}>
          <div className="mb-6 md:mb-0 md:mr-6 text-center md:text-left">
            <h3 className="text-2xl text-dragon-dark mb-2 font-extrabold underline-animate">Ready for your next adventure?</h3>
            <p className="text-dragon-gray">Connect with a program coordinator to find the transformative journey that's right for your school.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary whitespace-nowrap" onClick={scrollToPrograms}>Find Your Program</Button>
            <CalendlyEmbed url="https://calendly.com/kapesuniforms/discoverymeeting" text="Schedule Consultation" className="bg-dragon-yellow text-dragon-dark hover:bg-amber-400 whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95" />
          </div>
        </div>
      </div>
    </section>;
};

export default WhyChooseUs;
