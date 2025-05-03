
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
import TripGallery from "@/components/trip/TripGallery";
import TripHighlights from "@/components/trip/TripHighlights";
import TripItinerary from "@/components/trip/TripItinerary";
import TripDetailsCard from "@/components/trip/TripDetails";

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
  
  const tripHighlights = [
    {
      icon: <div className="text-white text-2xl">👩‍🏫</div>,
      title: "Women-Led Workshops",
      description: "Participate in workshops led by successful female entrepreneurs who are breaking barriers in their communities."
    },
    {
      icon: <div className="text-white text-2xl">📚</div>,
      title: "Educational Initiatives",
      description: "Collaborate with local schools on educational programs designed to keep girls in school and support their academic journeys."
    },
    {
      icon: <div className="text-white text-2xl">💼</div>,
      title: "Microfinance Support",
      description: "Learn about and support women's microfinance programs that provide economic opportunities in underserved communities."
    },
    {
      icon: <div className="text-white text-2xl">🧵</div>,
      title: "Traditional Skills",
      description: "Learn traditional crafts and skills from community artisans while supporting their businesses."
    },
    {
      icon: <div className="text-white text-2xl">🌱</div>,
      title: "Leadership Development",
      description: "Develop leadership and collaboration skills through service-learning projects with tangible community impact."
    },
    {
      icon: <div className="text-white text-2xl">🌍</div>,
      title: "Cultural Exchange",
      description: "Engage in meaningful cultural exchange while gaining global perspective on gender equity issues."
    }
  ];
  
  const tripItinerary = [
    {
      day: "Day 1",
      title: "Arrival & Orientation",
      activities: [
        "Arrive in Nairobi and transfer to accommodation",
        "Welcome dinner and program orientation",
        "Introduction to Kenyan culture and gender dynamics"
      ]
    },
    {
      day: "Day 2",
      title: "Women's Education Initiatives",
      activities: [
        "Visit to local girls' school to learn about education access",
        "Participate in classroom activities and mentorship sessions",
        "Discussion with school leaders about challenges and successes"
      ]
    },
    {
      day: "Day 3",
      title: "Entrepreneurship Workshop",
      activities: [
        "Meet with women entrepreneurs from the community",
        "Hands-on workshop on business development",
        "Collaborative brainstorming session on sustainable business models"
      ]
    },
    {
      day: "Day 4",
      title: "Microfinance & Economic Empowerment",
      activities: [
        "Visit to women's microfinance cooperative",
        "Participate in a savings group meeting",
        "Learn about financial literacy programs for women"
      ]
    },
    {
      day: "Day 5",
      title: "Community Project & Reflection",
      activities: [
        "Collaborate on a community service project",
        "Closing ceremony with community partners",
        "Group reflection and action planning session"
      ]
    }
  ];
  
  const galleryImages = [
    {
      src: "/lovable-uploads/2b64c2a8-18d5-43cc-a376-e32137687104.png",
      alt: "Students discussing with women entrepreneurs", 
      className: "col-span-12 md:col-span-6 h-64"
    },
    {
      src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Women's leadership workshop", 
      className: "col-span-12 md:col-span-6 h-64"
    },
    {
      src: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Students learning traditional crafts", 
      className: "col-span-12 md:col-span-4 h-64"
    },
    {
      src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1631&q=80",
      alt: "Microfinance group meeting", 
      className: "col-span-12 md:col-span-4 h-64"
    },
    {
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1520&q=80",
      alt: "Girls' education program", 
      className: "col-span-12 md:col-span-4 h-64"
    }
  ];
  
  const tripDetails = [
    {
      label: "Duration",
      value: "5-7 Days",
      icon: <Calendar className="w-5 h-5 text-dragon" />
    },
    {
      label: "Season",
      value: "Year Round",
      icon: <Route className="w-5 h-5 text-dragon" />
    },
    {
      label: "Location",
      value: "Various communities in Kenya",
      icon: <Map className="w-5 h-5 text-dragon" />
    },
    {
      label: "Group Size",
      value: "12-15 Students / 2-3 Instructors",
      icon: <Users className="w-5 h-5 text-dragon" />
    }
  ];

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
                </div>
                
                <TripHighlights highlights={tripHighlights} />
                
                <TripItinerary itineraryDays={tripItinerary} />
                
                <TripGallery images={galleryImages} />
                
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
                <TripDetailsCard tripDetails={tripDetails} />
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
