
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, Globe } from 'lucide-react';

const AboutUs = () => {
  const milestones = [
    {
      year: "2020",
      title: "Kapes Uniforms Founded",
      description: "Matthew Benjamin founded Kapes Uniforms to empower students and provide free uniforms to children in need in Kenya."
    },
    {
      year: "2021",
      title: "Kasigau Corridor Visit",
      description: "While searching for a sustainable factory in Kenya, Matthew visited a carbon offset project in Kasigau Corridor, inspiring the idea for educational trips."
    },
    {
      year: "2022",
      title: "Mission KAPES Born",
      description: "Mission KAPES was officially launched to create transformative educational experiences connecting students with communities in Africa."
    },
    {
      year: "2023",
      title: "Program Expansion",
      description: "Expanded programs across multiple African countries, focusing on sustainable tourism and meaningful cultural exchange."
    }
  ];

  const impactStats = [
    { icon: Users, value: "1,200+", label: "Students Engaged" },
    { icon: Globe, value: "12", label: "Community Projects" },
    { icon: MapPin, value: "5", label: "Countries" },
    { icon: Calendar, value: "45+", label: "Programs Run" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-dragon-beige py-20 md:py-32">
          <div className="container-wide text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dragon-dark mb-6">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-dragon-gray max-w-3xl mx-auto mb-10">
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
                <p className="mb-4">
                  While searching for a sustainable factory to make these uniforms locally in Kenya, Matthew visited a carbon offset project in the Kasigau Corridor. During this factory visit, he was taken on a game drive, met social entrepreneurs working with the project, and learned about their initiatives. It became abundantly clear that bringing students here would be key to joining the dots - seeing the positive impact their uniforms can have while also providing a life-changing experience.
                </p>
                <p>
                  This drive to build connection is what has and continues to inspire all of our trips. In 2022, <strong>Mission Kapes</strong> was born. While we have nothing against things like ski trips, we wanted to offer more. We focus on Africa because Africa has so much to offer students. Our trips are designed to change the lives of the students who participate just as much as, if not more than, the lives of the communities we visit in Africa.
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
                  <h3 className="text-2xl font-serif font-bold text-dragon-dark mb-4">Our Values</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-dragon rounded-full h-6 w-6 flex items-center justify-center text-white mr-3 mt-1">1</div>
                      <div>
                        <h4 className="font-bold text-dragon-dark">Authenticity</h4>
                        <p className="text-dragon-gray">Creating genuine connections between students and communities.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-dragon rounded-full h-6 w-6 flex items-center justify-center text-white mr-3 mt-1">2</div>
                      <div>
                        <h4 className="font-bold text-dragon-dark">Sustainability</h4>
                        <p className="text-dragon-gray">Ensuring our programs benefit local environments and economies.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-dragon rounded-full h-6 w-6 flex items-center justify-center text-white mr-3 mt-1">3</div>
                      <div>
                        <h4 className="font-bold text-dragon-dark">Reciprocity</h4>
                        <p className="text-dragon-gray">Building mutually beneficial partnerships with host communities.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-dragon rounded-full h-6 w-6 flex items-center justify-center text-white mr-3 mt-1">4</div>
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

        {/* Our Story Timeline */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <h2 className="section-heading text-center mb-16">Our Journey</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-dragon-dark opacity-20"></div>
              
              {/* Timeline items */}
              <div className="space-y-24">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Year bubble */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-dragon text-white rounded-full h-14 w-14 flex items-center justify-center z-10 font-bold">
                      {milestone.year}
                    </div>
                    
                    {/* Content */}
                    <div className="w-1/2"></div>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-16' : 'pr-16'}`}>
                      <h3 className="text-xl font-bold text-dragon-dark mb-2">{milestone.title}</h3>
                      <p className="text-dragon-gray">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-dragon-dark text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Impact</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
              Making a difference in communities and transforming student perspectives through meaningful connections.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {impactStats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-dragon-light/20 rounded-full p-4 mb-4">
                    <stat.icon size={36} className="text-dragon-yellow" />
                  </div>
                  <h3 className="text-4xl font-bold text-dragon-yellow mb-2">{stat.value}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <Button className="btn-secondary">Join Our Mission</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
