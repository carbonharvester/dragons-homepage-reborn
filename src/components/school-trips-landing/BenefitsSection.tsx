
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Users, Globe, Award, Shield, Calendar } from 'lucide-react';
import SchoolLogosScroll from '@/components/home/SchoolLogosScroll';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Book,
      title: "Curriculum-Aligned Learning",
      description: "Programs designed to complement your existing curriculum with hands-on, experiential learning opportunities."
    },
    {
      icon: Globe,
      title: "Cultural Immersion",
      description: "Authentic cultural experiences that broaden students' perspectives and develop global citizenship skills."
    },
    {
      icon: Users,
      title: "Community Impact Projects",
      description: "Meaningful service learning projects that create lasting positive impact in Kenyan communities."
    },
    {
      icon: Shield,
      title: "Comprehensive Safety",
      description: "24/7 support, comprehensive risk management, and experienced local guides ensure student safety."
    },
    {
      icon: Award,
      title: "Educational Excellence",
      description: "Award-winning programs with proven track record of transforming students and enriching education."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Customizable itineraries and flexible timing to fit your school's academic calendar and needs."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dragon-dark mb-4 leading-tight">
            Why Choose Mission Kapes for Your School Trip?
          </h2>
          <p className="text-lg sm:text-xl text-dragon-gray max-w-3xl mx-auto leading-relaxed">
            We specialize in creating transformative educational experiences that align with your curriculum goals while ensuring student safety and meaningful impact. 
            <Link to="/blog" className="text-dragon hover:text-dragon-dark ml-1 underline transition-colors duration-200">
              Read our founder's insights on educational travel
            </Link>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-dragon-beige/30 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 touch-manipulation"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-dragon text-white rounded-lg mb-4 mx-auto sm:mx-0">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-dragon-dark mb-3 text-center sm:text-left">
                {benefit.title}
              </h3>
              <p className="text-dragon-gray text-center sm:text-left leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* School Logos Section with lazy loading */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-dragon-dark mb-4 leading-tight">
              Trusted by Top International Schools
            </h3>
            <p className="text-base sm:text-lg text-dragon-gray max-w-2xl mx-auto leading-relaxed">
              Leading educational institutions worldwide choose Mission Kapes for transformative student experiences.
            </p>
          </div>
          <div className="overflow-hidden">
            <SchoolLogosScroll />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
