
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { programCategories, schoolTrips, summerAbroad, adultTrips, multiYearProgram } from '@/data/programsData';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProgramCard from '@/components/programs/ProgramCard';
import MultiYearCurriculum from '@/components/programs/MultiYearCurriculum';

const Programs = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Our Programs"
        description="Explore our transformative educational programs including School Trips, Summer Abroad, Multi-Year Curriculum, and Adult Programs."
        keywords="educational programs, school trips, summer abroad, multi-year curriculum, adult programs, Kenya, educational travel"
      />
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
                From weeklong school trips to comprehensive multi-year curriculums, 
                our programs offer meaningful experiences that combine education, adventure, and impact.
              </p>
            </div>

            <Tabs defaultValue="school-trips" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-4 mb-10 bg-transparent">
                {programCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="px-6 py-3 data-[state=active]:bg-dragon data-[state=active]:text-white bg-white border border-dragon text-dragon hover:bg-dragon hover:text-white"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="school-trips" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {schoolTrips.map((program, index) => (
                    <ProgramCard key={index} program={program} />
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button className="btn-primary" asChild>
                    <Link to="/school-trips">Learn More About School Trips</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="summer-abroad" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto max-w-4xl">
                  {summerAbroad.map((program, index) => (
                    <ProgramCard key={index} program={program} />
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button className="btn-primary" asChild>
                    <Link to="/summer-abroad">Learn More About Summer Programs</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="multi-year" className="mt-8">
                <MultiYearCurriculum data={multiYearProgram} />
                <div className="text-center mt-8">
                  <Button className="btn-primary" asChild>
                    <Link to="/multi-year-curriculum">Learn More About Multi-Year Curriculum</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="adult-trips" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto max-w-4xl">
                  {adultTrips.map((program, index) => (
                    <ProgramCard key={index} program={program} />
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button className="btn-primary" asChild>
                    <Link to="/adult-programs">Learn More About Adult Programs</Link>
                  </Button>
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
                <a href="https://form.typeform.com/to/example" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
              <Button variant="outline" className="border-dragon text-dragon hover:bg-dragon hover:text-white" asChild>
                <Link to="/partner-with-us">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
