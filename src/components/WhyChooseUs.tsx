import React from 'react';
import { MapPin, Users, BookOpen, Shield, LineChart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CalendlyEmbed from './CalendlyEmbed';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const features = [{
  icon: <MapPin className="h-10 w-10 text-dragon transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
  title: "Year-Round Programs",
  description: "Your students join Seeds2Education gardens, water cooperatives, and school feeding programs that run 365 days a year. Not pop-up projects built for visitors."
}, {
  icon: <Users className="h-10 w-10 text-dragon transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
  title: "10–30 Students, Local Rangers",
  description: "Small enough for real relationships. Every group is guided by 2 dedicated leaders and trained local rangers — people who live here, not fly in."
}, {
  icon: <BookOpen className="h-10 w-10 text-dragon transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
  title: "Curriculum Before the Flight",
  description: "Pre-trip modules, on-ground learning with Kenyan experts, post-trip reflection tied to SDGs and CAS hours. Not adventure with a service sticker."
}, {
  icon: <Shield className="h-10 w-10 text-dragon transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
  title: "24/7 Local Staff",
  description: "We share our risk management, health standards, and emergency plans with parents upfront. No surprises. Transparent protocols from day one."
}, {
  icon: <LineChart className="h-10 w-10 text-dragon transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
  title: "Meals Served. Gardens Built.",
  description: "We track what matters: daily meals provided, water infrastructure built, girls kept in school. Tangible community outcomes — not just student satisfaction surveys."
}, {
  icon: <Star className="h-10 w-10 text-dragon transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
  title: "Students Learn. Communities Lead.",
  description: "Your students don't arrive as helpers. They arrive as learners — working alongside Kenyan teams who lead every project and continue the work year-round."
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
      <div className="container-wide relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-heading">
            Why Kapes?
          </h2>
          <p className="section-subheading mx-auto">Other trip companies build projects for visitors. We run year-round community programs in Kenya — and invite your students to join the work that's already happening.</p>
        </div>

        {/* Add decorative border to the features grid container */}
        <div className="relative max-w-7xl mx-auto">
          {/* African Pattern Border */}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4">
              <img 
                src="https://res.cloudinary.com/dng12bd0a/image/upload/v1751050160/b75c66c7-3895-4c95-9914-7537fdad9ba2_hcqch5.png" 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-4">
              <img 
                src="https://res.cloudinary.com/dng12bd0a/image/upload/v1751050160/b75c66c7-3895-4c95-9914-7537fdad9ba2_hcqch5.png" 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-4">
              <img 
                src="https://res.cloudinary.com/dng12bd0a/image/upload/v1751050160/b75c66c7-3895-4c95-9914-7537fdad9ba2_hcqch5.png" 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-4">
              <img 
                src="https://res.cloudinary.com/dng12bd0a/image/upload/v1751050160/b75c66c7-3895-4c95-9914-7537fdad9ba2_hcqch5.png" 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 bg-white rounded-lg">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>

        <div className={`mt-16 bg-dragon-sand p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-center justify-between transition-all duration-800 hover:shadow-xl ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '800ms' }}>
          <div className="mb-6 md:mb-0 md:mr-6 text-center md:text-left">
            <h3 className="text-2xl text-dragon-dark mb-2 font-extrabold underline-animate">Ready to join the work?</h3>
            <p className="text-dragon-gray">Talk to our Kenya team about which program fits your school's goals.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary whitespace-nowrap" onClick={scrollToPrograms}>Find Your Trip</Button>
            <CalendlyEmbed url="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone" text="Schedule Consultation" className="bg-dragon-yellow text-dragon-dark hover:bg-amber-400 whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95" />
          </div>
        </div>
      </div>
    </section>;
};

export default WhyChooseUs;
