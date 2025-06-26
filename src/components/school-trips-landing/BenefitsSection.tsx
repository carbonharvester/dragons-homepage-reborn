
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
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dragon-dark mb-4">
            Why Choose Mission Kapes for Your School Trip?
          </h2>
          <p className="text-xl text-dragon-gray max-w-3xl mx-auto">
            We specialize in creating transformative educational experiences that align with your curriculum goals while ensuring student safety and meaningful impact. 
            <Link to="/blog" className="text-dragon hover:text-dragon-dark ml-1 underline">
              Read our founder's insights on educational travel
            </Link>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-dragon-beige/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-dragon text-white rounded-lg mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-dragon-dark mb-3">{benefit.title}</h3>
              <p className="text-dragon-gray">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* School Logos Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-dragon-dark mb-4">
              Trusted by Top International Schools
            </h3>
            <p className="text-lg text-dragon-gray max-w-2xl mx-auto">
              Leading educational institutions worldwide choose Mission Kapes for transformative student experiences.
            </p>
          </div>
          <SchoolLogosScroll />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
