import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Route, Calendar, Map, Users, GraduationCap, Award, Heart } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import TripHero from "@/components/trip/TripHero";
import TripGallery from "@/components/trip/TripGallery";
import TripHighlights from "@/components/trip/TripHighlights";
import TripItinerary from "@/components/trip/TripItinerary";
import TripDetailsCard from "@/components/trip/TripDetails";

const EmpoweringWomen = () => {
  // Define the program data according to the ProgramData interface
  const programData = {
    title: "Kapes Zawadisha Immersion",
    description: "An 8-day journey to Tsavo, Kenya, to learn from rural women and support Zawadisha's life-changing microloan program.",
    duration: "8 Days",
    season: "Year Round",
    location: "Tsavo, Kenya",
    goals: [
      "Experience daily challenges of rural Kenyan women to build empathy",
      "Learn about Zawadisha's microloan program through home visits",
      "Engage in cultural activities like crafting and dancing",
      "Contribute to community projects with measurable impact",
      "Connect with Kenya's natural beauty through safari and hiking"
    ]
  };
  
  const tripHighlights = [
    {
      icon: <div className="text-white text-2xl">💧</div>,
      title: "Water Walk Experience",
      description: "Carry jerry cans alongside local women to understand water collection challenges before rainwater tanks."
    },
    {
      icon: <div className="text-white text-2xl">🏠</div>,
      title: "Home Visits",
      description: "Visit women's homes to see Zawadisha products in action and hear stories of transformation."
    },
    {
      icon: <div className="text-white text-2xl">🧶</div>,
      title: "Cultural Crafting",
      description: "Create elephant dung paper, beaded bracelets, and woven baskets with the Neema Women's Group."
    },
    {
      icon: <div className="text-white text-2xl">🍲</div>,
      title: "Traditional Cooking",
      description: "Learn to cook authentic Kenyan dishes with local women using fresh, local ingredients."
    },
    {
      icon: <div className="text-white text-2xl">🦁</div>,
      title: "Tsavo Safari",
      description: "Experience Kenya's magnificent wildlife while learning about human-wildlife coexistence challenges."
    },
    {
      icon: <div className="text-white text-2xl">🛡️</div>,
      title: "Kasaine Fence Project",
      description: "Create and install metal sheet noise deterrents on farm fences to help local farmers protect crops from elephants."
    },
    {
      icon: <div className="text-white text-2xl">🌱</div>,
      title: "Microloan Impact",
      description: "Each trip directly funds a microloan for solar lamps, rainwater tanks, or clean cookstoves for rural women."
    },
    {
      icon: <div className="text-white text-2xl">🏆</div>,
      title: "Educational Credits",
      description: "Earn CAS points and credits toward Duke of Edinburgh's Award while making a real difference."
    }
  ];
  
  const tripItinerary = [
    {
      day: "Day 1 (Friday)",
      title: "Arrival in Nairobi & Train to Voi",
      activities: [
        "Arrive at Jomo Kenyatta International Airport, meet Kapes staff and Zawadisha representatives",
        "Board the Nairobi-Voi train (4 hours) with journaling about first impressions",
        "Arrive at Rukinga Camp for welcome dinner featuring traditional Kenyan dishes",
        "Evening introduction to the Neema Women's Group and Zawadisha's microloan program"
      ]
    },
    {
      day: "Day 2 (Saturday)",
      title: "Safari in Tsavo East National Park",
      activities: [
        "Early morning game drive to observe elephants, lions, and other wildlife",
        "Picnic lunch in the park followed by a second game drive",
        "Group discussion about human-wildlife coexistence and women's resource challenges",
        "Evening workshop on Zawadisha's impact through stories of women beneficiaries"
      ]
    },
    {
      day: "Day 3 (Sunday)",
      title: "Hike in Murangu Hills",
      activities: [
        "Guided hike carrying light jerry cans to simulate women's daily water collection",
        "Picnic lunch at the summit with storytelling by a Zawadisha Peer Educator",
        "Learn about local flora used by women for fuel and medicine",
        "Evening workshop on Zawadisha's microloan model with examples of positive impacts"
      ]
    },
    {
      day: "Day 4 (Monday)",
      title: "Water Walk & Home Visits",
      activities: [
        "Participate in a water walk with Neema Women's Group carrying 10-20 liter jerry cans",
        "Visit women's homes to see Zawadisha products in action (solar lamps, cookstoves)",
        "Interview women about life changes due to these innovations",
        "Evening reflective discussion on privilege and resilience with Kapes staff"
      ]
    },
    {
      day: "Day 5 (Tuesday)",
      title: "Cultural Immersion & Crafting",
      activities: [
        "Learn traditional Taita or Duruma dance with the Neema Women's Group",
        "Create elephant dung paper, beaded bracelets from recycled magazines, and woven baskets",
        "Traditional cooking lesson with local ingredients and preparation methods",
        "Enjoy self-prepared dinner with the Neema Women's Group"
      ]
    },
    {
      day: "Day 6 (Wednesday)",
      title: "Kasaine Fence Project",
      activities: [
        "Visit a local farm to learn about human-wildlife conflict from farmers",
        "Workshop on creating Kasaine fences using metal sheets as elephant deterrents",
        "Work alongside farmers to install metal sheets on farm perimeters",
        "Discuss sustainable solutions for human-wildlife coexistence and conservation"
      ]
    },
    {
      day: "Day 7 (Thursday)",
      title: "Reflection & Farewell",
      activities: [
        "Morning cooking class to learn traditional Kenyan recipes",
        "Receive Kapes Cultural Impact Certificate during farewell ceremony",
        "Farewell dinner with the Neema Women's Group",
        "Final evening reflection and journaling on the trip experience"
      ]
    },
    {
      day: "Day 8 (Friday)",
      title: "Return to Nairobi & Departure",
      activities: [
        "Morning breakfast and final packing at Rukinga Camp",
        "Board the Voi-Nairobi train with final group reflection on the journey",
        "Arrive in Nairobi for lunch and brief city tour if time allows",
        "Transfer to Jomo Kenyatta International Airport for evening flights"
      ]
    }
  ];
  
  const galleryImages = [
    {
      src: "/lovable-uploads/2b64c2a8-18d5-43cc-a376-e32137687104.png",
      alt: "Students engaging with Zawadisha women", 
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
      alt: "Water walk experience", 
      className: "col-span-12 md:col-span-4 h-64"
    },
    {
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1520&q=80",
      alt: "Microloan impact in rural community", 
      className: "col-span-12 md:col-span-4 h-64"
    }
  ];
  
  const tripDetails = [
    {
      label: "Duration",
      value: "8 Days (Friday to Friday)",
      icon: <Calendar className="w-5 h-5 text-dragon" />
    },
    {
      label: "Season",
      value: "Year Round",
      icon: <Route className="w-5 h-5 text-dragon" />
    },
    {
      label: "Location",
      value: "Tsavo, Kenya (Rukinga Camp)",
      icon: <Map className="w-5 h-5 text-dragon" />
    },
    {
      label: "Group Size",
      value: "10-15 Students",
      icon: <Users className="w-5 h-5 text-dragon" />
    },
    {
      label: "Educational Credits",
      value: "CAS Points, Duke of Edinburgh",
      icon: <GraduationCap className="w-5 h-5 text-dragon" />
    },
    {
      label: "Certificate",
      value: "Kapes Cultural Impact Certificate",
      icon: <Award className="w-5 h-5 text-dragon" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Kapes Zawadisha Immersion: Tsavo Women's Empowerment Journey"
        description="An 8-day journey to Tsavo, Kenya, to learn from rural women and support Zawadisha's life-changing microloan program for solar lamps, rainwater tanks, and clean cookstoves."
        keywords="women empowerment, Zawadisha, microloan, Tsavo, Kenya, water walk, cultural immersion, educational travel"
      />
      <Header />
      <main>
        <TripHero 
          title="Kapes Zawadisha Immersion"
          subtitle="Empower Women, Transform Lives through an 8-day journey in Tsavo, Kenya"
          category="School Trip"
          imagePath="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold text-dragon-dark mb-6">Live, Learn, and Empower in Tsavo</h1>
                
                <div className="prose max-w-none mb-8">
                  <p className="text-lg mb-4">
                    Join Kapes Adventures in Tsavo, Kenya, to walk in the footsteps of rural women and support Zawadisha's 
                    mission to empower lives. Carry a jerry can on a water walk, craft with the Neema Women's Group, and discover 
                    how microloans for solar lamps and rainwater tanks transform families.
                  </p>
                  
                  <p className="mb-4">
                    Based at Rukinga Camp near Voi in the Tsavo Conservancy, this immersive journey combines a Tsavo safari and a hike 
                    with meaningful cultural exchange. Students will participate in the daily lives of rural Kenyan women, learning about 
                    the challenges they face and the innovative solutions provided by Zawadisha's microloan program.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-dragon-dark mt-8 mb-4">Program Objectives</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Experience the daily challenges of rural Kenyan women (e.g., water walks) to build empathy and global awareness</li>
                    <li>Learn about Zawadisha's microloan program and its impact through home visits and storytelling</li>
                    <li>Engage in cultural activities like crafting and dancing to understand local traditions</li>
                    <li>Support human-wildlife coexistence through practical conservation projects</li>
                    <li>Contribute to community projects, reinforcing Kapes' commitment to impact</li>
                    <li>Participate in a safari and hike to connect with Kenya's natural beauty</li>
                  </ul>

                  <div className="bg-dragon-beige p-6 rounded-lg my-8">
                    <h3 className="text-xl font-bold text-dragon-dark mb-3">Direct Community Impact</h3>
                    <div className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-dragon mt-1 flex-shrink-0" />
                      <p className="text-dragon-gray m-0">
                        Each student's trip fee directly funds a Zawadisha microloan for a woman in the Tsavo community. 
                        Your participation provides items like solar lamps, rainwater tanks, or clean cookstoves, 
                        creating immediate positive change.
                      </p>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-dragon-dark mt-8 mb-4">Educational Value</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Kapes Cultural Impact Certificate:</strong> Awarded for completing a reflective journal or group presentation</li>
                    <li><strong>CAS Points (IB):</strong> Contributes to Service (community engagement), Creativity (crafting, journaling), and Activity (hiking, safari)</li>
                    <li><strong>Duke of Edinburgh's Award:</strong> Aligns with Silver Award's Volunteering, Physical, and Skills components</li>
                  </ul>
                </div>
                
                <TripHighlights highlights={tripHighlights} />
                
                <TripItinerary itineraryDays={tripItinerary} />
                
                <TripGallery images={galleryImages} />

                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-dragon-dark mb-4">Accommodation & Logistics</h2>
                  <p className="text-dragon-gray mb-4">
                    Students stay in dormitory-style accommodations at Rukinga Camp, a sustainable eco-camp near Voi in the 
                    Tsavo Conservancy. The camp features:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-dragon-gray mb-4">
                    <li>Gender-separated dormitory rooms</li>
                    <li>Shared bathrooms with solar-powered showers and eco-toilets</li>
                    <li>Communal dining area with traditional Kenyan meals</li>
                    <li>Study and reflection spaces</li>
                    <li>Access to Tsavo's communities and wildlife</li>
                  </ul>
                  <p className="text-dragon-gray mb-4">
                    Travel includes flights to Nairobi's Jomo Kenyatta International Airport, followed by a scenic 4-hour train 
                    journey to Voi. Students return to Nairobi by train on the final day for evening flights.
                  </p>
                </div>
                
                <div className="border-t border-gray-200 pt-8 mt-8">
                  <h2 className="text-2xl font-bold text-dragon-dark mb-6">Ready to Make a Difference?</h2>
                  <div className="flex flex-wrap gap-4">
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
                <TripDetailsCard tripDetails={tripDetails} isSchoolTrip={true} />

                <div className="bg-dragon-beige p-8 rounded-lg shadow-md mt-8">
                  <h3 className="text-xl font-bold text-dragon-dark mb-4">Perfect For</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="bg-dragon rounded-full p-1 mt-1">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      <span>Students ages 14-18 interested in global citizenship</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-dragon rounded-full p-1 mt-1">
                        <GraduationCap className="h-4 w-4 text-white" />
                      </div>
                      <span>Year 2 of the Kapes Multi-Year Travel Curriculum (Development Trip)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-dragon rounded-full p-1 mt-1">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                      <span>IB students seeking meaningful CAS experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-dragon rounded-full p-1 mt-1">
                        <Heart className="h-4 w-4 text-white" />
                      </div>
                      <span>Schools focused on social entrepreneurship and gender equity</span>
                    </li>
                  </ul>
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
