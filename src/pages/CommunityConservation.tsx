
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Route, Calendar, Map, Users } from "lucide-react";
import ProgramBrochure from "@/components/ProgramBrochure";
import CalendlyEmbed from "@/components/CalendlyEmbed";

const CommunityConservation = () => {
  // Define the program data according to the ProgramData interface
  const programData = {
    title: "Community Conservation Program",
    description: "Work alongside local conservation experts to protect endangered ecosystems while learning traditional ecological knowledge and sustainable practices.",
    duration: "5-7 Days",
    season: "Year Round",
    location: "Various conservation areas in Kenya",
    goals: [
      "Learn traditional conservation practices",
      "Contribute to ecosystem management",
      "Develop human-wildlife conflict solutions",
      "Implement sustainable resource management"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold text-dragon-dark mb-6">Community Conservation Program</h1>
                
                <div className="prose max-w-none mb-8">
                  <p className="text-lg mb-4">
                    Work alongside local conservation experts to protect endangered ecosystems while learning traditional ecological 
                    knowledge and sustainable practices.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-dragon-dark mt-8 mb-4">Program Overview</h2>
                  <p>
                    Our Community Conservation program immerses students in the frontlines of environmental protection in Kenya, 
                    where they will collaborate with indigenous communities to preserve critical ecosystems. Participants will 
                    gain hands-on experience in conservation techniques while learning from local experts about traditional 
                    ecological knowledge that has sustained these environments for generations.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-dragon-dark mt-8 mb-4">What You'll Learn</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Traditional conservation practices and their modern applications</li>
                    <li>Ecosystem management and biodiversity protection</li>
                    <li>Human-wildlife conflict resolution strategies</li>
                    <li>Sustainable resource management techniques</li>
                    <li>Community-based conservation project development</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold text-dragon-dark mt-8 mb-4">Program Highlights</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Work alongside local conservation rangers in protected areas</li>
                    <li>Participate in wildlife monitoring and data collection</li>
                    <li>Learn traditional skills from community elders</li>
                    <li>Contribute to ongoing conservation initiatives</li>
                    <li>Develop and implement a sustainable conservation project</li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <img 
                    src="/lovable-uploads/5c2915df-6fcc-4fd9-a320-7025337ffd6a.png" 
                    alt="Students working on conservation" 
                    className="rounded-lg w-full h-64 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80" 
                    alt="Wildlife conservation" 
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
                        <p className="font-medium">Various conservation areas in Kenya</p>
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

export default CommunityConservation;
