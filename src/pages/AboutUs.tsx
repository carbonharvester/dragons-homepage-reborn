
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Calendar, Users, Globe } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Co-Founder & CEO",
      bio: "Former international teacher with 15+ years of experience in educational leadership across Asia and Africa.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&h=500&auto=format&fit=crop"
    },
    {
      name: "David Chen",
      role: "Co-Founder & Program Director",
      bio: "Conservation biologist with extensive field experience developing community-based sustainability initiatives.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&h=500&auto=format&fit=crop"
    },
    {
      name: "Amina Osei",
      role: "Community Partnerships Lead",
      bio: "Social entrepreneur focused on developing ethical partnerships between schools and local communities.",
      image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=500&h=500&auto=format&fit=crop"
    },
    {
      name: "Marcus Rivera",
      role: "Educational Design Specialist",
      bio: "Curriculum developer specializing in experiential learning methodologies and cross-cultural education.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&h=500&auto=format&fit=crop"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Mission KAPES Founded",
      description: "Launched with our first program in Kenya, partnering with 3 international schools."
    },
    {
      year: "2023",
      title: "Expanded to Tanzania",
      description: "Developed our second program focused on conservation education and community engagement."
    },
    {
      year: "2024",
      title: "School Network Growth",
      description: "Partnered with 10+ international schools across the Middle East and Asia."
    },
    {
      year: "2025",
      title: "Impact Measurement Framework",
      description: "Developed comprehensive system to measure educational and community impact."
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
              We're on a mission to transform education through authentic cultural exchange and sustainable travel experiences that empower both students and communities.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="section-heading">Our Mission</h2>
                <p className="text-lg text-dragon-gray mb-8">
                  To facilitate transformative educational experiences that connect students with communities around the world, fostering cultural understanding, environmental stewardship, and a commitment to responsible global citizenship.
                </p>
                <h2 className="section-heading mt-12">Our Vision</h2>
                <p className="text-lg text-dragon-gray">
                  A world where young people are equipped with the cross-cultural competence, ecological awareness, and ethical mindset needed to address global challenges collaboratively and compassionately.
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
        <section className="py-20 bg-dragon-beige">
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

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <h2 className="section-heading text-center">Our Team</h2>
            <p className="section-subheading text-center mx-auto">Meet the passionate educators and community builders behind Mission KAPES.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <Avatar className="h-full w-full rounded-none">
                      <AvatarImage 
                        src={member.image} 
                        alt={member.name} 
                        className="object-cover h-full w-full"
                      />
                      <AvatarFallback className="bg-dragon text-white text-2xl h-full w-full rounded-none">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-dragon-dark">{member.name}</h3>
                    <p className="text-dragon-light font-medium mb-2">{member.role}</p>
                    <p className="text-dragon-gray text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-dragon-dark text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Impact</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
              Making a difference in communities and transforming student perspectives.
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
