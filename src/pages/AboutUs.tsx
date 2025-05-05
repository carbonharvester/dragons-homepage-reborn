import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import VideoSection from '@/components/VideoSection';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, Globe } from 'lucide-react';
const AboutUs = () => {
  return <div className="min-h-screen flex flex-col">
      <SEO title="About Us" description="From sustainable school uniforms to transformative travel experiences, we're reconnecting students with communities, nature, and what truly matters." keywords="Mission Kapes, educational travel, student trips, sustainability, Africa, Kenya" />
      <Header />
      
      <main>
        {/* Hero Section with Background Image */}
        <section className="bg-dragon-dark py-20 md:py-32 relative bg-cover bg-center" style={{
        backgroundImage: `url('/lovable-uploads/f40a88d4-343d-483d-a375-0f63c5154294.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container-wide text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-academy font-bold text-white mb-6">
              Our Story
            </h1>
            
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10">
              From sustainable school uniforms to transformative travel experiences, we're reconnecting students with communities, nature, and what truly matters.
            </p>
          </div>
        </section>

        {/* Origin Story Section */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-heading">How It All Started</h2>
              
              <div className="prose prose-lg text-dragon-gray">
                <p className="mb-4">
                  Our story began with <strong>Kapes Uniforms</strong>, founded by Matthew Benjamin to empower students to become changemakers and more conscious consumers. The mission was simple yet powerful: connect students to the people making their uniforms, the places where they're made, and understand the environmental and social impact of these connections.
                </p>
                <p className="mb-4">
                  As part of Kapes Uniforms' mission to give back, we provide free school uniforms to children in need in Kenya, which has been shown to reduce absenteeism. That's how our name came about - we like to think our uniforms have superpowers by nature of the good that we do, and the changemakers that wear them are heroes. Hence, heroes wear Kapes.
                </p>
                
                {/* New image from first sponsored trip */}
                <div className="my-8 relative rounded-lg overflow-hidden">
                  <img src="/lovable-uploads/c0bdd0e5-7b79-492d-8c2d-d91d5b892cee.png" alt="Children from a local Kenyan school wearing Kapes uniforms during our first sponsored trip" className="w-full h-auto rounded-lg" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white text-sm md:text-base font-medium">Our Founder Matthew Benjamin and students from Marasi Primary School in Kenya during our first sponsored trip in 2022.</p>
                  </div>
                </div>
                
                <p className="mb-4">
                  While searching for a sustainable factory to make these uniforms locally in Kenya, Matthew visited a carbon offset project in the Kasigau Corridor. During this factory visit, he was taken on a game drive, met social entrepreneurs working with the project, and learned about their initiatives. It became abundantly clear that bringing students here would be key to joining the dots - seeing the positive impact their uniforms can have while also providing a life-changing experience.
                </p>
                <p>
                  This drive to build connection is what has and continues to inspire all of our trips. In 2022, <strong>Kapes Adventures</strong> was born. While we have nothing against things like ski trips, we wanted to offer more. We focus on Africa because Africa has so much to offer students. Our trips are designed to change the lives of the students who participate just as much as, if not more than, the lives of the communities we visit in Africa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-dragon-beige">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="section-heading">Our Mission</h2>
                
                <p className="text-lg text-dragon-gray mb-8">
                  To reconnect young people with nature, communities, and what truly matters through transformative educational experiences that foster cultural understanding, environmental stewardship, and a commitment to becoming conscious global citizens.
                </p>
                
                <h2 className="section-heading mt-12">Our Vision</h2>
                
                <p className="text-lg text-dragon-gray">
                  A world where young people are reconnected with nature and communities, equipped with the cross-cultural competence, ecological awareness, and ethical mindset needed to address global challenges collaboratively and compassionately.
                </p>
              </div>
              <div className="bg-dragon-sand rounded-lg p-8 flex items-center justify-center">
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold text-dragon-dark mb-4">Our Values</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-dragon rounded-full h-6 w-6 min-w-6 flex items-center justify-center text-white mr-3 mt-1">1</div>
                      <div>
                        <h4 className="font-bold text-dragon-dark">Authenticity</h4>
                        <p className="text-dragon-gray">Creating genuine connections between students and communities.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-dragon rounded-full h-6 w-6 min-w-6 flex items-center justify-center text-white mr-3 mt-1">2</div>
                      <div>
                        <h4 className="font-bold text-dragon-dark">Sustainability</h4>
                        <p className="text-dragon-gray">Ensuring our programs benefit local environments and economies.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-dragon rounded-full h-6 w-6 min-w-6 flex items-center justify-center text-white mr-3 mt-1">3</div>
                      <div>
                        <h4 className="font-bold text-dragon-dark">Reciprocity</h4>
                        <p className="text-dragon-gray">Building mutually beneficial partnerships with host communities.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-dragon rounded-full h-6 w-6 min-w-6 flex items-center justify-center text-white mr-3 mt-1">4</div>
                      <div>
                        <h4 className="font-bold text-dragon-dark">Transformation</h4>
                        <p className="text-dragon-gray">Facilitating deep learning experiences that change perspectives.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <VideoSection videoId="720192915" title="Kapes Impact Adventures" description="Experience the inspiring journey of Camp Kapes and how we're making a difference in communities across Kenya." quote={{
        text: "These experiences change perspectives, build connections, and inspire students to become more conscious global citizens who understand their role in creating a sustainable future.",
        author: "Brett Girven, Former-Principal at The Arbor School"
      }} />
      </main>
      <Footer />
    </div>;
};
export default AboutUs;