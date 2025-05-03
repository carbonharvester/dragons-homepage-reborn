
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Route, Calendar, Map, Users } from "lucide-react";
import ProgramBrochure from "@/components/ProgramBrochure";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import TripHero from "@/components/trip/TripHero";

const EmpoweringWomen = () => {
  // Define the program data according to the ProgramData interface
  const programData = {
    title: "Empowering Young Women Program",
    description: "Support women-led initiatives focusing on education, entrepreneurship, and leadership in communities working to achieve gender equity and economic independence.",
    duration: "5-7 Days",
    season: "Year Round",
    location: "Various communities in Kenya",
    goals: [
      "Advance gender equity through education",
      "Promote economic empowerment strategies",
      "Support women's entrepreneurship initiatives",
      "Develop leadership skills through service learning"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <TripHero 
          title="Empowering Young Women"
          subtitle="Support women-led initiatives focusing on education, entrepreneurship, and leadership in communities working to achieve gender equity and economic independence."
          category="School Trip"
          imagePath="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold text-dragon-dark mb-6">Empowering Young Women Program</h1>
                
                <div className="prose max-w-none mb-8">
                  <p className="text-lg mb-4">
                    Support women-led initiatives focusing on education, entrepreneurship, and leadership in communities working 
                    to achieve gender equity and economic independence.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-dragon-dark mt-8 mb-4">Program Overview</h2>
                  <p>
                    Our Empowering Young Women program connects students with inspiring female leaders and entrepreneurs in Kenya. 
                    Participants will engage with grassroots initiatives focused on advancing gender equity through education, 
                    economic empowerment, and leadership development. This transformative experience provides insight into the challenges 
                    and successes of women-led movements while allowing students to contribute meaningfully to ongoing projects.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-dragon-dark mt-8 mb-4">What You'll Learn</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The sociocultural dynamics affecting gender equity in East Africa</li>
                    <li>Effective strategies for women's economic empowerment</li>
                    <li>The impact of education access on girls' life outcomes</li>
                    <li>Entrepreneurship as a path to financial independence</li>
                    <li>Leadership development in challenging contexts</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold text-dragon-dark mt-8 mb-4">Program Highlights</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Participate in workshops led by successful female entrepreneurs</li>
                    <li>Collaborate on educational initiatives with girls' schools</li>
                    <li>Support women's microfinance and business development programs</li>
                    <li>Learn traditional crafts and skills from community artisans</li>
                    <li>Develop leadership skills through service learning projects</li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <img 
                    src="/lovable-uploads/2b64c2a8-18d5-43cc-a376-e32137687104.png" 
                    alt="Students working with women entrepreneurs" 
                    className="rounded-lg w-full h-64 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Women's leadership workshop" 
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                
                <div className="border-t border-gray-200 pt-8 mt-8">
                  <h2 className="text-2xl font-bold text-dragon-dark mb-6">Ready to Join Us?</h2>
                  <div className="flex flex-wrap gap-4">
                    <ProgramBrochure
                      program={programData}
                    />
                    <CalendlyEmbed
                      url="https://calendly.com/kapesuniforms/discoverymeeting"
                      text="Schedule a Consultation"
                      variant="outline"
                      className="border-dragon text-dragon hover:bg-dragon hover:text-white"
                    />
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <div className="bg-dragon-beige rounded-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-dragon-dark mb-4">Program Details</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-dragon" />
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium">5-7 Days</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Route className="w-5 h-5 text-dragon" />
                      <div>
                        <p className="text-sm text-gray-500">Season</p>
                        <p className="font-medium">Year Round</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Map className="w-5 h-5 text-dragon" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">Various communities in Kenya</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-dragon" />
                      <div>
                        <p className="text-sm text-gray-500">Group Size</p>
                        <p className="font-medium">12-15 Students / 2-3 Instructors</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Button className="w-full">Apply Now</Button>
                    <Button variant="outline" className="w-full border-dragon text-dragon hover:bg-dragon hover:text-white" asChild>
                      <Link to="/school-trips">View All School Trips</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default EmpoweringWomen;
