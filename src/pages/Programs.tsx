import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { programCategories } from '@/data/programsData';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProgramsSection from '@/components/ProgramsSection';
const Programs = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <SEO title="Our Programs" description="Explore our transformative educational programs including School Trips, Summer Abroad, Multi-Year Curriculum, and Adult Programs." keywords="educational programs, school trips, summer abroad, multi-year curriculum, adult programs, Kenya, educational travel" />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="container-wide relative z-10 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 hero-heading">Educational Programs</h1>
              <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
                Discover transformative cultural immersion experiences designed to challenge, 
                inspire, and create lasting impact through authentic engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Content */}
        <section className="py-16 bg-dragon-beige">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-academy text-dragon-dark mb-4">
                Explore Our Programs
              </h2>
              <p className="text-lg text-dragon-gray max-w-3xl mx-auto">
                Our programs are designed to create meaningful educational experiences through a combination 
                of cultural immersion, service learning, and authentic engagement with local communities.
              </p>
              
              {/* Enhanced introduction */}
              <div className="mt-8 mb-12 bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto text-left">
                <p className="mb-4">At Kapes Adventures, we believe that educational travel should be transformative, ethical, and impactful. Our programs in Africa aren't just trips—they're life-changing journeys that connect students with the continent's rich cultures, resilient communities, and pressing global challenges.</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-dragon mb-2">Beyond Tourism</h4>
                    <p className="text-dragon-gray">
                      Unlike conventional educational tours, our programs focus on deep cultural immersion and meaningful contribution. Students don't just visit communities—they live and work alongside them, developing authentic relationships that transcend the typical tourist experience.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-dragon mb-2">Measurable Impact</h4>
                    <p className="text-dragon-gray">
                      Each program is designed with specific community-identified needs in mind. From supporting women's microfinance initiatives to implementing sustainable agricultural practices, our work creates tangible, lasting change that continues long after students return home.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-dragon mb-2">African-Centered</h4>
                    <p className="text-dragon-gray">
                      Our programs challenge dominant narratives about Africa by highlighting local innovation, expertise, and leadership. We partner with African educators, entrepreneurs, and changemakers who serve as mentors and guides, ensuring authentic perspectives shape the learning experience.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-dragon mb-2">Personal Transformation</h4>
                    <p className="text-dragon-gray">
                      Students return from our programs with more than photos and souvenirs—they develop critical thinking skills, cross-cultural competence, and a sense of global citizenship that shapes their academic pursuits and career choices for years to come.
                    </p>
                  </div>
                </div>
                
                <p className="text-dragon-dark font-medium">Whether you're a a teacher looking for impactful school trips, a student seeking a transformative summer experience, or an adult pursuing meaningful travel, our programs provide the perfect balance of learning, cultural exchange, and purposeful engagement.</p>
              </div>
            </div>

            <Tabs defaultValue="school-trips" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-4 mb-10 bg-transparent h-auto">
                {programCategories.map(category => <TabsTrigger key={category.id} value={category.id} className="px-6 py-3 data-[state=active]:bg-dragon data-[state=active]:text-white bg-white border border-dragon text-dragon hover:bg-dragon hover:text-white">
                    {category.label}
                  </TabsTrigger>)}
              </TabsList>

              <TabsContent value="school-trips" className="mt-8">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4 text-dragon-dark">School Trips</h3>
                  <p className="mb-6 text-lg">Our school trips offer 7-8 day immersive experiences designed to complement your curriculum and provide students with hands-on learning opportunities focused on specific themes and projects.</p>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                    <h4 className="text-xl font-bold mb-3 text-dragon-dark">Program Features:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>Curriculum-aligned experiences with pre and post-trip resources</li>
                      <li>Project-based learning opportunities with measurable impact</li>
                      <li>Collaborative work with local communities and experts</li>
                      <li>Comprehensive risk management and 24/7 support</li>
                      <li>Customizable itineraries based on your school's needs</li>
                    </ul>
                    
                    <p className="mb-6">
                      Each school trip focuses on a specific project theme, allowing students to engage 
                      deeply with important global issues while developing practical skills and cross-cultural 
                      understanding.
                    </p>
                  </div>
                  
                  <div className="text-center mt-8">
                    <Button className="btn-primary" asChild>
                      <Link to="/school-trips">Explore School Trips</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="summer-abroad" className="mt-8">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4 text-dragon-dark">Summer Abroad</h3>
                  <p className="mb-6 text-lg">
                    Our summer programs offer 3-4 week immersive experiences for students seeking to develop 
                    new skills, explore career interests, and make meaningful contributions to communities in Kenya.
                  </p>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                    <h4 className="text-xl font-bold mb-3 text-dragon-dark">Program Features:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>Intensive skill-building with expert mentors and practitioners</li>
                      <li>Project-based learning with real-world applications</li>
                      <li>Cultural immersion and language exposure</li>
                      <li>Leadership development and global citizenship education</li>
                      <li>College-ready portfolio development and reflection</li>
                    </ul>
                    
                    <p className="mb-6">
                      Summer programs are designed for students who want to go deeper into specific interests 
                      while experiencing the rich culture and landscapes of Kenya. These programs provide valuable 
                      experience for college applications and future careers.
                    </p>
                  </div>
                  
                  <div className="text-center mt-8">
                    <Button className="btn-primary" asChild>
                      <Link to="/summer-abroad">Explore Summer Programs</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="multi-year" className="mt-8">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4 text-dragon-dark">Multi-Year Curriculums</h3>
                  <p className="mb-6 text-lg">Our Multi-Year Curriculums provides a comprehensive educational journey that builds upon itself year after year, creating a cohesive learning experience that develops students' skills, knowledge, and global perspective over time.</p>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                    <h4 className="text-xl font-bold mb-3 text-dragon-dark">Program Features:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>Progressive skill development across multiple years</li>
                      <li>Curriculum integration with school standards and frameworks</li>
                      <li>Scaffolded leadership opportunities and responsibilities</li>
                      <li>Long-term relationship building with partner communities</li>
                      <li>Comprehensive documentation for college applications</li>
                      <li>Compatible with IB CAS requirements and Duke of Edinburgh Awards</li>
                    </ul>
                    
                    <p className="mb-6">
                      The Multi-Year Curriculum is designed for schools seeking to build global education into their 
                      core programming, providing students with a developmental journey that prepares them for future 
                      academic and professional success.
                    </p>
                  </div>
                  
                  <div className="text-center mt-8">
                    <Button className="btn-primary" asChild>
                      <Link to="/multi-year-curriculum">Explore Multi-Year Curriculums</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="adult-trips" className="mt-8">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4 text-dragon-dark">Adult Programs</h3>
                  <p className="mb-6 text-lg">
                    Our Adult Programs offer immersive learning experiences designed for professionals, educators, 
                    and lifelong learners seeking to develop new skills, engage with global issues, and make 
                    meaningful connections with communities in Kenya.
                  </p>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                    <h4 className="text-xl font-bold mb-3 text-dragon-dark">Program Features:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>Expert-led workshops and hands-on learning experiences</li>
                      <li>Professional development opportunities with certification</li>
                      <li>Authentic cultural exchange and community engagement</li>
                      <li>Connections with local experts and practitioners</li>
                      <li>Comfortable accommodations and thoughtful logistics</li>
                    </ul>
                    
                    <p className="mb-6">
                      Adult Programs are perfect for individuals or groups looking to combine purposeful travel 
                      with personal or professional development. Programs can be customized for specific groups, 
                      organizations, or interests.
                    </p>
                  </div>
                  
                  <div className="text-center mt-8">
                    <Button className="btn-primary" asChild>
                      <Link to="/adult-programs">Learn More About Adult Programs</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-academy text-dragon-dark mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-dragon-gray max-w-2xl mx-auto mb-8">
              Contact us to learn more about our programs and how we can create a 
              customized experience for your school, organization, or group.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-primary" asChild>
                
              </Button>
              <Button variant="outline" className="border-dragon text-dragon hover:bg-dragon hover:text-white" asChild>
                <Link to="/partner-with-us">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Programs;