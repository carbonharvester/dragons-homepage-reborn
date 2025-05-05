
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import TripCTA from '@/components/trip/TripCTA';
import MultiYearCurriculum from '@/components/programs/MultiYearCurriculum';
import { multiYearProgram } from '@/data/programsData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { School, Users, GraduationCap, Calendar, BookOpen, Globe } from 'lucide-react';

const MultiYearCurriculumPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add a random query parameter to force image reload
  const imgTimestamp = Date.now();
  return <div className="min-h-screen flex flex-col">
      <SEO title="Multi-Year Curriculum" description="A progressive three-year educational travel program that builds global citizenship skills through immersive experiences in Africa." keywords="multi-year curriculum, educational travel, global citizenship, student development, progressive learning, africa travel" />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-cover bg-center py-32" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&t=${imgTimestamp}')`
      }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="container-wide relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-heading">Multi-Year Curriculum</h1>
              <p className="text-xl mb-8">
                A progressive educational journey that builds skills, confidence, and global citizenship over three transformative years.
              </p>
              
            </div>
          </div>
        </section>

        {/* Enhanced Overview Section */}
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

        {/* Program Structure */}
        <section className="py-20 bg-dragon-beige">
          <div className="container-wide">
            <h2 className="section-heading text-center mb-16">Three-Year Program Structure</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                  <School className="h-16 w-16 text-dragon" />
                </div>
                <h3 className="text-2xl font-bold text-dragon-dark text-center mb-4">Year 1: Foundation</h3>
                <p className="text-lg text-center text-dragon-gray mb-4">Ages 11-13</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                    <span>Introduction to Kenya through cultural activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                    <span>Guided wildlife conservation experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                    <span>Tree planting and environmental workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                    <span>Kapes Foundation Certificate</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                  <Users className="h-16 w-16 text-dragon" />
                </div>
                <h3 className="text-2xl font-bold text-dragon-dark text-center mb-4">Year 2: Development</h3>
                <p className="text-lg text-center text-dragon-gray mb-4">Ages 14-16</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                    <span>Community-based construction project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                    <span>Host family experience in Tanzania</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                    <span>Leadership and teamwork challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                    <span>Kapes Development Certificate</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                  <GraduationCap className="h-16 w-16 text-dragon" />
                </div>
                <h3 className="text-2xl font-bold text-dragon-dark text-center mb-4">Year 3: Leadership</h3>
                <p className="text-lg text-center text-dragon-gray mb-4">Ages 17-18</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                    <span>Student-designed and led health workshop</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                    <span>Cross-cultural leadership experience in Ghana</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                    <span>Advanced project planning and execution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-3"></span>
                    <span>Kapes Leadership Certificate & Gold Award</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Full curriculum details */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <MultiYearCurriculum data={multiYearProgram} />
          </div>
        </section>

        <TripCTA />
      </main>
      <Footer />
    </div>;
};
export default MultiYearCurriculumPage;
