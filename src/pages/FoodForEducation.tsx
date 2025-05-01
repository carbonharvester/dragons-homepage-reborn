
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Calendar, Clock, Water, TreeDeciduous } from "lucide-react";

const FoodForEducation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-dragon-beige overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/fc764836-7162-400c-a486-00fe9d99f975.png"
              alt="Permaculture farm project" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="container-wide relative z-10 h-full flex flex-col justify-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">Food For Education</h1>
            <p className="text-xl md:text-2xl max-w-3xl">A permaculture farm project addressing food insecurity through sustainable agriculture and education</p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-heading">Project Overview</h2>
                <p className="text-lg text-dragon-gray mb-6">
                  This permaculture farm project transforms unused school land into a productive farm at Kirigu Primary School. In Kenya, where about 1 in 3 children suffer from stunted growth due to malnutrition, this initiative addresses critical food security challenges.
                </p>
                <p className="text-lg text-dragon-gray mb-6">
                  The farm will grow high-value onions and tomatoes, which will be purchased by Food For Education in exchange for meals for students in need. This sustainable model supports students, serves as a replicable solution for other schools, and offers participants hands-on experience with permaculture principles.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center bg-dragon-beige px-4 py-2 rounded-full">
                    <Clock size={18} className="text-dragon mr-2" />
                    <span className="text-dragon-dark">5-7 Days</span>
                  </div>
                  <div className="flex items-center bg-dragon-beige px-4 py-2 rounded-full">
                    <Calendar size={18} className="text-dragon mr-2" />
                    <span className="text-dragon-dark">Year Round</span>
                  </div>
                  <div className="flex items-center bg-dragon-beige px-4 py-2 rounded-full">
                    <Leaf size={18} className="text-dragon mr-2" />
                    <span className="text-dragon-dark">Sustainable Impact</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/39251f62-b5a3-49bb-a861-ede7fdc3f6cf.png" 
                  alt="Students working on permaculture project" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section className="py-16 bg-dragon-beige">
          <div className="container-wide">
            <h2 className="section-heading text-center mb-12">Project Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white border-none shadow-md h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-dragon flex items-center justify-center mb-4">
                    <TreeDeciduous size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-dragon-dark">Establish Pilot Farm</h3>
                  <p className="text-dragon-gray">Create a 200 sq meter pilot farm focused on onions and tomatoes, leveraging 1000 sq meters of available land for future expansion.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-md h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-dragon flex items-center justify-center mb-4">
                    <Water size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-dragon-dark">Supply Produce for Meals</h3>
                  <p className="text-dragon-gray">Partner with Food For Education to supply produce in exchange for school meals, enabling hungry children to learn and thrive.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-md h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-dragon flex items-center justify-center mb-4">
                    <Leaf size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-dragon-dark">Create Sustainable Systems</h3>
                  <p className="text-dragon-gray">Implement permaculture principles to regenerate soil, minimize maintenance, and maximize yields with environmental sustainability.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-md h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-dragon-yellow flex items-center justify-center mb-4">
                    <Calendar size={32} className="text-dragon-dark" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-dragon-dark">Educate & Empower</h3>
                  <p className="text-dragon-gray">Foster changemakers who can address global challenges like food insecurity through hands-on education and practical experience.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="section-heading">Why It Matters</h2>
              <p className="section-subheading mx-auto">The permaculture farm project creates lasting impact through sustainable solutions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dragon-beige p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-dragon-dark">Address Hunger</h3>
                <p className="text-dragon-gray mb-4">Provide meals for up to 300 students, improving health and learning outcomes for children who would otherwise go without adequate nutrition.</p>
                
                <h3 className="text-xl font-bold mb-4 text-dragon-dark">Enhance Sustainability</h3>
                <p className="text-dragon-gray">Implement regenerative agricultural methods to produce food with minimal environmental impact, protecting local ecosystems.</p>
              </div>

              <div className="bg-dragon-beige p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-dragon-dark">Inspire Change</h3>
                <p className="text-dragon-gray mb-4">Create a replicable model for other Kenyan schools, with students leading annual projects to expand the initiative's reach.</p>
                
                <h3 className="text-xl font-bold mb-4 text-dragon-dark">Build Skills</h3>
                <p className="text-dragon-gray">Teach students practical permaculture techniques, from water harvesting to crop production, fostering a new generation of sustainability leaders.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Details Section */}
        <section className="py-16 bg-dragon-beige">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="section-heading">Practical Details</h2>
              <p className="section-subheading mx-auto">Understanding the implementation and impact of the permaculture farm</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-md h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-dragon-dark">Scale</h3>
                  <p className="text-dragon-gray">The 200 sq meter pilot (100 sq meters onions, 100 sq meters tomatoes) is the first phase, with potential to expand across the 1000 sq meter plot as the project grows.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-md h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-dragon-dark">Timeline</h3>
                  <p className="text-dragon-gray">The farm will be established during the trip, with components like seedlings and compost maturing post-trip under the care of school staff.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-md h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-dragon-dark">Partnership</h3>
                  <p className="text-dragon-gray">Food For Education will purchase the farm's produce, creating a sustainable cycle that directly impacts students' nutrition and educational outcomes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Itinerary Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="section-heading">Program Itinerary</h2>
              <p className="section-subheading mx-auto">A day-by-day overview of the Food For Education experience</p>
            </div>

            <Tabs defaultValue="day1" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8">
                <TabsTrigger value="day1">Day 1</TabsTrigger>
                <TabsTrigger value="day2">Day 2</TabsTrigger>
                <TabsTrigger value="day3">Day 3</TabsTrigger>
                <TabsTrigger value="day4">Day 4</TabsTrigger>
                <TabsTrigger value="day5">Day 5</TabsTrigger>
                <TabsTrigger value="day6">Day 6</TabsTrigger>
                <TabsTrigger value="day7">Day 7</TabsTrigger>
                <TabsTrigger value="day8">Day 8</TabsTrigger>
              </TabsList>
              
              <TabsContent value="day1">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-dragon-dark">Day 1: Arrival in Nairobi</h3>
                    <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                      <li>Arrive at Jomo Kenyatta International Airport</li>
                      <li>Transfer to accommodation and check-in</li>
                      <li>Welcome dinner with traditional Kenyan dishes</li>
                      <li>Orientation: Introduction to the permaculture project and Food For Education's mission</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="day2">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-dragon-dark">Day 2: Nairobi National Park</h3>
                    <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                      <li>Breakfast at accommodation</li>
                      <li>Guided game drive in Nairobi National Park</li>
                      <li>Picnic lunch in the park</li>
                      <li>Return to accommodation for dinner</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="day3">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-dragon-dark">Day 3: Ngong Hills Hike</h3>
                    <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                      <li>Breakfast at accommodation</li>
                      <li>Guided hike in Ngong Hills with views of the Great Rift Valley</li>
                      <li>Picnic lunch at Ngong Hills</li>
                      <li>Return to accommodation for dinner</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="day4">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-dragon-dark">Day 4: Food For Education Visit</h3>
                    <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                      <li>Breakfast at accommodation</li>
                      <li>Visit Food For Education facilities</li>
                      <li>Learn about their mission to provide school meals</li>
                      <li>Tour facilities and understand the connection to the farm project</li>
                      <li>Preview the permaculture project components</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="day5">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-dragon-dark">Day 5: Permaculture Project - Water Harvesting and Composting</h3>
                    <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                      <li>Install water harvesting system with 10,000-liter tanks</li>
                      <li>Attach PVC gutters and filtration systems</li>
                      <li>Construct three compost bins for the farm</li>
                      <li>Set up kitchen waste processing system</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="day6">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-dragon-dark">Day 6: Permaculture Project - Compost Processing and Vetiver Planting</h3>
                    <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                      <li>Build compost pile using food waste and local materials</li>
                      <li>Produce biochar to enhance compost quality</li>
                      <li>Plant 50-meter vetiver hedgerow for sustainable mulch</li>
                      <li>Set up erosion control systems</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="day7">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-dragon-dark">Day 7: Permaculture Project - Nursery Setup and Drip Irrigation</h3>
                    <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                      <li>Construct nursery table with shade cloth</li>
                      <li>Prepare potting mix with compost and biochar</li>
                      <li>Install drip irrigation system for vegetable beds</li>
                      <li>Test water systems with harvested rainwater</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="day8">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-dragon-dark">Day 8: Permaculture Project - Vegetable Beds and Departure</h3>
                    <ul className="list-disc pl-5 space-y-2 text-dragon-gray">
                      <li>Build 20 vegetable beds for onions and tomatoes</li>
                      <li>Apply mulch to conserve moisture and suppress weeds</li>
                      <li>Plant seeds in nursery pots</li>
                      <li>Handover ceremony and final lunch</li>
                      <li>Transfer to airport for departure</li>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">Join us on this transformative journey to address food insecurity through sustainable permaculture practices.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" className="text-dragon-dark hover:bg-secondary/90">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-dragon">
                Download Information
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FoodForEducation;
