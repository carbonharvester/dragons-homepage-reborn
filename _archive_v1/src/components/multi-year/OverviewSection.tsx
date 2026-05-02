
import React from 'react';
import { BookOpen, Calendar, Globe } from 'lucide-react';

const OverviewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">Multi-Year Travel Curriculum</h2>
          <p className="text-xl text-dragon-gray text-center mb-8">
            Transform your school's global education with our three-year travel curriculum tailored to your educational objectives. Our progressive trips build student skills while creating lasting impact.
          </p>

          <div className="bg-dragon-beige/30 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-dragon-dark mb-4">A Comprehensive Approach to Global Education</h3>
            <p className="mb-6">
              Our Multi-Year Curriculum offers schools a strategic, scaffolded approach to experiential education that aligns with academic goals while nurturing global citizenship. This carefully designed program builds upon itself year after year, allowing students to develop deeper connections with communities, enhance their leadership capabilities, and gain a nuanced understanding of global challenges.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3 text-dragon">
                  <BookOpen className="h-5 w-5 mr-2" />
                  <h4 className="font-bold">Curriculum Integration</h4>
                </div>
                <p className="text-sm">Seamlessly connects with IB, A-Level, IGCSE, AP, and national curriculums, providing real-world context to classroom learning.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3 text-dragon">
                  <Calendar className="h-5 w-5 mr-2" />
                  <h4 className="font-bold">Long-term Planning</h4>
                </div>
                <p className="text-sm">Simplifies logistics with consistent programming over three years, allowing for focused relationship building with communities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3 text-dragon">
                  <Globe className="h-5 w-5 mr-2" />
                  <h4 className="font-bold">Measurable Impact</h4>
                </div>
                <p className="text-sm">Demonstrates your school's commitment to global education with trackable student growth and community development metrics.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-dragon-beige p-8 md:p-12 rounded-xl mb-16">
            <h3 className="text-2xl font-bold text-dragon-dark mb-6">Why Choose a Multi-Year Approach?</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-dragon-dark mb-3">For Students</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-dragon rounded-full p-1 mt-1 mr-3"></span>
                    <span>Progressive skill development over multiple years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon rounded-full p-1 mt-1 mr-3"></span>
                    <span>Deeper cultural understanding and connection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon rounded-full p-1 mt-1 mr-3"></span>
                    <span>CAS and Duke of Edinburgh's Award credits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon rounded-full p-1 mt-1 mr-3"></span>
                    <span>Enhanced university and career applications</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-dragon-dark mb-3">For Schools</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-dragon rounded-full p-1 mt-1 mr-3"></span>
                    <span>Alignment with curriculum and educational goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon rounded-full p-1 mt-1 mr-3"></span>
                    <span>Differentiated educational offering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon rounded-full p-1 mt-1 mr-3"></span>
                    <span>Long-term community partnerships and impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon rounded-full p-1 mt-1 mr-3"></span>
                    <span>Simplified planning with consistent provider</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
