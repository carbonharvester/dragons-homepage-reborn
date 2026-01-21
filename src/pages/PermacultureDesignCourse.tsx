
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KenyaMap from '@/components/KenyaMap';
import ProgramBrochure from '@/components/ProgramBrochure';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Calendar, Clock, Users, TreeDeciduous, GraduationCap, BookOpen } from "lucide-react";
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';

const PermacultureDesignCourse = () => {
  // Program data for the brochure
  const programData = {
    title: "Permaculture Design Course",
    description: "An immersive 10-day program that combines permaculture education with community service. Learn design principles and practical skills while contributing to sustainable food systems in local Kenyan communities. This comprehensive course offers internationally recognized certification while making a lasting impact.",
    duration: "10 Days",
    season: "Year Round",
    location: "Nairobi, Kenya",
    goals: [
      "Gain practical permaculture design skills and certification",
      "Contribute to sustainable food systems in local communities",
      "Implement regenerative agriculture techniques",
      "Connect with like-minded sustainable living enthusiasts"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-dragon-beige overflow-hidden">
          <div className="absolute inset-0">
            <img src="/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png" alt="Permaculture garden with students working" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="container-wide relative z-10 h-full flex flex-col justify-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">Permaculture Design Course</h1>
            <p className="text-xl md:text-2xl max-w-3xl">Learn, design, and implement sustainable food systems while making a positive impact on Kenyan communities.</p>
          </div>
        </section>
        
        <div className="container-wide py-8">
          <ParentPageNavigation parentPath="/adult-programs" parentName="Adult Programs" />
        </div>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-heading">Course Overview</h2>
                <p className="text-lg text-dragon-gray mb-6">
                  This 10-day Permaculture Design Course (PDC) combines traditional permaculture education with hands-on service projects that directly benefit local Kenyan communities. Unlike standard PDCs, this unique program allows you to immediately apply your knowledge to real-world challenges.
                </p>
                <p className="text-lg text-dragon-gray mb-6">
                  Working alongside local experts and community members, you'll help expand our Seeds2Education initiative by designing and implementing sustainable food systems. This course offers internationally recognized certification while making a lasting difference in areas facing food insecurity.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center bg-dragon-beige px-4 py-2 rounded-full">
                    <Clock size={18} className="text-dragon mr-2" />
                    <span className="text-dragon-dark">10 Days</span>
                  </div>
                  <div className="flex items-center bg-dragon-beige px-4 py-2 rounded-full">
                    <Calendar size={18} className="text-dragon mr-2" />
                    <span className="text-dragon-dark">Year Round</span>
                  </div>
                  <div className="flex items-center bg-dragon-beige px-4 py-2 rounded-full">
                    <GraduationCap size={18} className="text-dragon mr-2" />
                    <span className="text-dragon-dark">Certification</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1604014935903-c9920c277a2e?auto=format&fit=crop&q=80" 
                  alt="Permaculture garden design" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            {/* Program Brochure */}
            <div className="mt-12 mb-8">
              <ProgramBrochure program={programData} />
            </div>
            
            {/* Map */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4 text-dragon-dark">Course Location</h3>
              <p className="text-lg text-dragon-gray mb-6">
                The Permaculture Design Course is based at our sustainable learning center near Nairobi, with field trips to various project sites throughout Kenya.
              </p>
              <KenyaMap />
            </div>
          </div>
        </section>

        {/* Course Features */}
        <section className="py-16 bg-dragon-beige">
          <div className="container-wide">
            <h2 className="section-heading text-center mb-12">Course Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white border-none shadow-md h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-dragon flex items-center justify-center mb-4">
                    <GraduationCap size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-dragon-dark">Certified Training</h3>
                  <p className="text-dragon-gray">Receive internationally recognized permaculture certification while learning from experienced instructors with expertise in East African ecosystems.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-md h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-dragon flex items-center justify-center mb-4">
                    <Users size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-dragon-dark">Community Impact</h3>
                  <p className="text-dragon-gray">Directly contribute to sustainable food systems that benefit local schools and communities while building meaningful cross-cultural connections.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-md h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-dragon flex items-center justify-center mb-4">
                    <TreeDeciduous size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-dragon-dark">Practical Application</h3>
                  <p className="text-dragon-gray">Move beyond theory with hands-on experience implementing regenerative agriculture techniques in real-world situations with immediate results.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="section-heading">Course Content</h2>
              <p className="section-subheading mx-auto">A comprehensive curriculum that balances theory, design, and practical application</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dragon-beige p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-dragon-dark flex items-center">
                  <BookOpen className="mr-2 text-dragon" size={24} />
                  <span>Permaculture Principles</span>
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                  <li>Ethics and principles of permaculture design</li>
                  <li>Reading landscapes and pattern recognition</li>
                  <li>Water harvesting and management systems</li>
                  <li>Soil regeneration and fertility building</li>
                  <li>Food forest design and implementation</li>
                </ul>
              </div>

              <div className="bg-dragon-beige p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-dragon-dark flex items-center">
                  <Leaf className="mr-2 text-dragon" size={24} />
                  <span>Service Components</span>
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                  <li>Designing school garden systems for maximum yield</li>
                  <li>Installing water catchment and irrigation systems</li>
                  <li>Creating community compost networks</li>
                  <li>Training local educators on permaculture basics</li>
                  <li>Establishing perennial food production systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary Section */}
        <section className="py-16 bg-dragon-beige">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="section-heading">Course Schedule</h2>
              <p className="section-subheading mx-auto">A day-by-day overview of our 10-day immersive permaculture experience</p>
            </div>

            <Tabs defaultValue="days1-3" className="w-full">
              <TabsList className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 mb-8">
                <TabsTrigger value="days1-3">Days 1-3</TabsTrigger>
                <TabsTrigger value="days4-6">Days 4-6</TabsTrigger>
                <TabsTrigger value="days7-10">Days 7-10</TabsTrigger>
                <TabsTrigger value="certification">Certification</TabsTrigger>
              </TabsList>
              
              <TabsContent value="days1-3">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-dragon-dark">Days 1-3: Foundations and Principles</h3>
                    <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                      <li>Introduction to permaculture ethics and design principles</li>
                      <li>Site assessment and analysis techniques</li>
                      <li>Reading landscape patterns and ecological systems</li>
                      <li>Visit to established permaculture sites in Kenya</li>
                      <li>Beginning community needs assessment at partner school</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="days4-6">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-dragon-dark">Days 4-6: Design and Planning</h3>
                    <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                      <li>Water management systems and harvesting techniques</li>
                      <li>Soil building and regeneration practices</li>
                      <li>Food forest design and perennial systems</li>
                      <li>Creating implementation plans for school garden project</li>
                      <li>Design presentations and feedback sessions</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="days7-10">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-dragon-dark">Days 7-10: Implementation and Service</h3>
                    <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                      <li>Installation of water harvesting systems at school site</li>
                      <li>Establishing garden beds and planting key crops</li>
                      <li>Building compost systems and soil fertility banks</li>
                      <li>Training sessions with teachers and community members</li>
                      <li>Final project completion and handover ceremony</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="certification">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-dragon-dark">Certification & Beyond</h3>
                    <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                      <li>Receive internationally recognized Permaculture Design Certificate</li>
                      <li>Ongoing support through our online community platform</li>
                      <li>Option to return as a mentor for future courses</li>
                      <li>Access to our global network of permaculture practitioners</li>
                      <li>Resources for implementing projects in your home community</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-dragon text-white text-center">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Design for Change?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">Join our next Permaculture Design Course and help create sustainable food systems while earning your certification.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" className="text-dragon-dark hover:bg-secondary/90">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-dragon">
                Download Syllabus
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PermacultureDesignCourse;
