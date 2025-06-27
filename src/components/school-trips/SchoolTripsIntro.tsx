
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, GraduationCap } from "lucide-react";
import BulletList from '@/components/ui/BulletList';
import { Link } from 'react-router-dom';

const SchoolTripsIntro = () => {
  const keyBenefits = [{
    title: "Authentic Cultural Engagement",
    content: "Students connect with communities, building genuine cross-cultural understanding through homestays and collaborative projects."
  }, {
    title: "Curriculum Integration",
    content: "Programs align with IB, Common Core, and national standards, integrating with subjects like geography, history, and science."
  }, {
    title: "Transformative Impact",
    content: "Projects empower communities—like building classrooms for 50 students or planting 300 trees—while expanding students' global perspective."
  }];

  return (
    <div className="max-w-3xl mx-auto text-center mb-16 mt-8">
      
      <h2 className="text-4xl md:text-5xl font-academy text-dragon-dark mb-6">Educational Journeys with Purpose</h2>
      <p className="text-lg text-dragon-gray mb-12">
        Our expert-led school trips for ages 12–18 connect curriculum to real-world challenges, fostering global citizenship while ensuring the highest standards of safety and support. Each program inspires and educates through meaningful experiences, with comprehensive pre- and post-trip resources.
      </p>
      
      <div className="mt-12">
        <h3 className="text-3xl md:text-4xl font-academy font-bold text-dragon-dark mb-8">Key Benefits</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyBenefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-dragon-beige overflow-hidden transition-all group text-left hover:scale-[1.02] transform transition-transform"
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-3">
                  <CheckCircle className="text-dragon mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <h4 className="font-bold text-dragon-dark">{benefit.title}</h4>
                </div>
                <p className="text-dragon-gray pl-8">{benefit.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Multi-Year Approach Section */}
      <div className="mt-16 bg-gradient-to-br from-dragon-beige to-white p-8 rounded-lg shadow-sm">
        <div className="flex items-center justify-center mb-6">
          <GraduationCap className="text-dragon h-8 w-8 mr-3" />
          <h3 className="text-3xl font-academy font-bold text-dragon-dark">Multi-Year Approach</h3>
        </div>
        
        <p className="text-lg text-dragon-gray mb-6">
          For schools seeking deeper educational impact, we offer a progressive multi-year curriculum that builds skills, 
          confidence, and global citizenship over time. This approach allows students to develop meaningful relationships 
          with communities and see the long-term impact of their contributions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-4 rounded-lg border-l-4 border-dragon">
            <h4 className="font-bold text-dragon-dark mb-2">Year 1: Foundation</h4>
            <p className="text-sm text-dragon-gray">Students aged 11-13 discover Kenya through conservation projects, cultural workshops, and wildlife encounters.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-dragon">
            <h4 className="font-bold text-dragon-dark mb-2">Year 2: Development</h4>
            <p className="text-sm text-dragon-gray">Students aged 14-16 engage in more complex projects, such as women's empowerment initiatives and sustainable agriculture.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-dragon">
            <h4 className="font-bold text-dragon-dark mb-2">Year 3: Leadership</h4>
            <p className="text-sm text-dragon-gray">Students aged 17-18 take on leadership roles, designing and implementing their own community projects.</p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-dragon-gray mb-4">
            This progressive approach earns students valuable certificates and credits, including CAS points for IB students 
            and Duke of Edinburgh Award credits, while creating lasting positive change in African communities.
          </p>
          <Link 
            to="/multi-year-curriculum" 
            className="inline-flex items-center text-dragon hover:text-dragon-dark font-medium transition-colors"
          >
            Learn more about our Multi-Year Curriculum
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col md:flex-row gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm flex-1 relative">
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
          
          <div className="relative z-10">
            <h3 className="text-2xl font-academy text-dragon-dark mb-4">Global Education Network</h3>
            <p className="text-dragon-gray">
              Kapes Adventures has delivered and designed educational journeys implemented through our network of trusted partners for several leading international schools, ensuring authentic and impactful experiences for students worldwide.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm flex-1 relative">
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
          
          <div className="relative z-10">
            <h3 className="text-2xl font-academy text-dragon-dark mb-4">Safety and Support</h3>
            <p className="text-dragon-gray">
              We prioritise safety with 24/7 support, experienced guides trained in first aid, vetted accommodations, and a robust emergency response system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolTripsIntro;
