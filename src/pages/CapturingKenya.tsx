
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import ProgramBrochure from '@/components/ProgramBrochure';
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Camera, Calendar, Users, Clock, MapPin, GraduationCap, Award, Heart } from "lucide-react";

const CapturingKenya = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programData = {
    title: "Kapes Creative Capture: Kenya Summer Program",
    description: "A 4-week adventure for budding creatives to capture Kenya's wonders through photography and videography.",
    duration: "4 weeks (28 days)",
    season: "Summer (July)",
    location: "Kenya",
    ages: "16-20",
    goals: [
      "Develop technical skills in photography and videography",
      "Create a portfolio capturing Kenya's landscapes, wildlife, and cultures",
      "Foster cultural sensitivity and global awareness",
      "Contribute to local communities via service projects"
    ]
  };

  const weeks = [
    {
      number: 1,
      title: "Nairobi and Amboseli National Park",
      subtitle: "Foundations of Creative Storytelling",
      description: "Learn photography/videography basics, capture Kenya's urban and wildlife beauty, and begin cultural immersion.",
      base: "Nairobi (days 1–3), Amboseli National Park (days 4–7)",
      impact: "Fund art supplies for a Nairobi youth center",
      image: "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?q=80&w=2070&auto=format",
      highlights: [
        "Welcome workshop: Introduction to storytelling through photography",
        "Ethical photography workshop in Kibera",
        "Wildlife photography at Amboseli with Mt. Kilimanjaro backdrop",
        "Hot air balloon ride over Amboseli at sunrise",
        "Maasai village cultural photography experience"
      ]
    },
    {
      number: 2,
      title: "Samburu National Reserve",
      subtitle: "Cultural Immersion and Wildlife",
      description: "Deepen skills in cultural and wildlife photography, engage with the Samburu people, and explore unique landscapes.",
      base: "Samburu National Reserve (days 8–14)",
      impact: "Fund a photography workshop for Samburu youth",
      image: "https://images.unsplash.com/photo-1604542031658-5799ca5d7936?q=80&w=2070&auto=format",
      highlights: [
        "Photograph Samburu's rare species like Grevy's zebra",
        "Samburu village photography with permission",
        "Community-led photography workshop with Samburu youth",
        "Landscape photography at Ewaso Ng'iro River",
        "One-on-one mentoring with expert photographers"
      ]
    },
    {
      number: 3,
      title: "Lake Turkana and Turkana People",
      subtitle: "Remote Adventure and Cultural Depth",
      description: "Capture the raw beauty of Lake Turkana, engage with the Turkana people, and refine storytelling in a remote setting.",
      base: "Lake Turkana (days 15–21)",
      impact: "Donate cameras or fund a cultural preservation project for the Turkana",
      image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format",
      highlights: [
        "Photograph Lake Turkana's turquoise waters at sunrise",
        "Environmental storytelling workshop",
        "Documentary filmmaking with Turkana communities",
        "Youth photography workshops in Turkana villages",
        "Boat trip on Lake Turkana for unique perspectives"
      ]
    },
    {
      number: 4,
      title: "Nairobi",
      subtitle: "Portfolio Finalization and Showcase",
      description: "Complete portfolios, reflect on growth, and celebrate achievements with a community showcase.",
      base: "Nairobi (days 22–28)",
      impact: "Share portfolios with local youth and fund a community art exhibit",
      image: "https://images.unsplash.com/photo-1598978445684-6ac605bbe679?q=80&w=2069&auto=format",
      highlights: [
        "Advanced editing workshops for photos and films",
        "Community art exhibit showcasing student work",
        "Certificate ceremony (Kapes Creative Storytelling Certificate)",
        "Portfolio review for university applications",
        "Farewell dinner with cultural performances"
      ]
    }
  ];

  const outcomes = [
    {
      title: "Creative Portfolio",
      description: "Develop a professional-quality photo essay or 3-5 minute documentary film showcasing Kenya's landscapes, wildlife, and cultures.",
      icon: Camera
    },
    {
      title: "Kapes Creative Storytelling Certificate",
      description: "Earn an official certificate recognizing your growth as a visual storyteller and your contribution to community projects.",
      icon: Award
    },
    {
      title: "CAS Points (IB)",
      description: "Earn points for Creativity (photography/videography), Activity (game drives, camping), and Service (community workshops).",
      icon: GraduationCap
    },
    {
      title: "Duke of Edinburgh's Award",
      description: "Complete requirements for the Gold Award's Skills, Physical, and Volunteering sections through creative and service activities.",
      icon: Award
    },
    {
      title: "Community Impact",
      description: "Fund photography workshops, provide cameras to youth, and support local art initiatives in Kenyan communities.",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="container-wide relative z-10 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">Capturing Kenya</h1>
              <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
                A 4-week creative adventure to photograph and film Kenya's stunning landscapes, 
                wildlife, and cultures while developing professional skills.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Calendar className="h-5 w-5" />
                  <span>4 Weeks (Summer)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Users className="h-5 w-5" />
                  <span>Ages 16-20</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <MapPin className="h-5 w-5" />
                  <span>Kenya</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary" asChild>
                  <a href="#itinerary">Explore Itinerary</a>
                </Button>
                <CalendlyEmbed 
                  url="https://calendly.com/kapesuniforms/discoverymeeting"
                  text="Schedule Consultation"
                  variant="outline"
                  className="bg-white text-dragon hover:bg-gray-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-heading">Program Overview</h2>
              <p className="section-subheading">
                Kapes Creative Capture is designed for budding photographers and filmmakers who want to 
                develop their skills while exploring Kenya's natural wonders and diverse cultures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=2070&auto=format" 
                  alt="Student photographer capturing wildlife in Kenya" 
                  className="w-full h-[400px] object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-dragon-dark mb-2">Program Highlights</h3>
                  <ul className="space-y-3">
                    {programData.goals.map((goal, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-dragon-beige rounded-full p-1 mr-2 mt-1"></span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-dragon-dark mb-2">Led by Experts</h3>
                  <p className="text-dragon-gray">
                    Learn from professional photographers and videographers with experience in wildlife, 
                    landscapes, and cultural documentation. Receive personalized mentoring to develop your 
                    unique creative vision and technical skills.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-dragon-dark mb-2">Community Impact</h3>
                  <p className="text-dragon-gray">
                    Your participation funds photography workshops for Kenyan youth, provides cameras to 
                    local communities, and supports a community art exhibit in Nairobi. Make a lasting 
                    difference while creating your portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary Tabs */}
        <section id="itinerary" className="py-16 bg-dragon-beige">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-heading">Program Itinerary</h2>
              <p className="section-subheading">
                Journey through Kenya over four weeks, capturing stunning landscapes, wildlife, and cultural moments 
                while developing your photography and videography skills.
              </p>
            </div>

            <Tabs defaultValue="week1" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
                {weeks.map((week) => (
                  <TabsTrigger key={week.number} value={`week${week.number}`} className="text-dragon-gray">
                    Week {week.number}
                  </TabsTrigger>
                ))}
              </TabsList>

              {weeks.map((week) => (
                <TabsContent key={week.number} value={`week${week.number}`} className="mt-0">
                  <Card className="border-none shadow-md overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      <div className="h-80 md:h-auto overflow-hidden">
                        <img 
                          src={week.image} 
                          alt={`Week ${week.number}: ${week.title}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6 md:p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-dragon-dark mb-1">
                            Week {week.number}: {week.title}
                          </h3>
                          <p className="text-dragon mb-3">{week.subtitle}</p>
                          <p className="text-dragon-gray mb-4">{week.description}</p>
                        </div>

                        <div className="space-y-4">
                          <div className="flex gap-2">
                            <Clock className="h-5 w-5 text-dragon shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Base Location:</p>
                              <p className="text-dragon-gray">{week.base}</p>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Heart className="h-5 w-5 text-dragon shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Community Impact:</p>
                              <p className="text-dragon-gray">{week.impact}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h4 className="font-bold mb-3">Week Highlights:</h4>
                          <ul className="space-y-2">
                            {week.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-center">
                                <span className="bg-dragon rounded-full p-1 mr-2"></span>
                                <span className="text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="mt-8 text-center">
              <p className="text-dragon-gray mb-4">
                Ready to embark on this creative journey? Download our detailed program brochure.
              </p>
              <div className="flex justify-center">
                <CalendlyEmbed 
                  url="https://calendly.com/kapesuniforms/discoverymeeting"
                  text="Request Full Itinerary"
                  className="btn-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Program Outcomes */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-heading">Program Outcomes</h2>
              <p className="section-subheading">
                Develop valuable skills, earn recognized credentials, and create lasting impact through the Capturing Kenya program.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {outcomes.map((outcome, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="bg-dragon-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <outcome.icon className="h-8 w-8 text-dragon" />
                    </div>
                    <h3 className="text-xl font-bold text-dragon-dark mb-2">{outcome.title}</h3>
                    <p className="text-dragon-gray">{outcome.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Logistics */}
        <section className="py-16 bg-dragon-beige">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-heading">Program Details</h2>
              <p className="section-subheading">
                Everything you need to know about the Capturing Kenya summer program.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-dragon-dark mb-3">Group Size & Staffing</h3>
                  <p className="text-dragon-gray mb-2">
                    Groups of 12-16 students ensure personalized attention and manageable logistics. 
                    Each program is staffed with:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>Expert photographer/videographer (lead instructor)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>Kapes program coordinator</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>Local guides with cultural and wildlife expertise</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>Support staff (drivers, cooks for camping)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-dragon-dark mb-3">Equipment & Support</h3>
                  <p className="text-dragon-gray mb-2">
                    We provide the tools you need to capture Kenya's beauty:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>Students bring personal cameras (DSLR/mirrorless or smartphone)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>Tripods, basic lighting kits provided</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>Laptops with Adobe Creative Cloud for editing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>Backup cameras available for emergencies</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-dragon-dark mb-3">Safety & Support</h3>
                  <p className="text-dragon-gray mb-2">
                    Your safety is our top priority:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>Comprehensive travel insurance</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>Medical evacuation plans</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>24/7 support from Kapes staff</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>Pre-trip safety briefings</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-dragon-dark mb-3">Program Inclusions</h3>
                  <p className="text-dragon-gray mb-2">
                    Your program fee covers:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>Accommodation (guesthouses, tented camps, camping)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>All meals and transportation</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>Activities (balloon rides, game drives, workshops)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon rounded-full p-1 mr-2"></span>
                      <span>Community project contributions</span>
                    </li>
                  </ul>
                  <p className="text-dragon-gray mt-2">
                    <em>Not included: International flights and personal camera gear</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brochure Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <ProgramBrochure program={programData} />
            
            <div className="text-center mt-10">
              <h3 className="text-2xl font-bold text-dragon-dark mb-4">Ready to Capture Kenya?</h3>
              <p className="text-dragon-gray mb-6 max-w-2xl mx-auto">
                Join us for a transformative summer experience that will develop your creative skills, 
                connect you with diverse cultures, and create lasting impact in local communities.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="btn-primary" asChild>
                  <Link to="/apply">Apply Now</Link>
                </Button>
                <CalendlyEmbed 
                  url="https://calendly.com/kapesuniforms/discoverymeeting"
                  text="Schedule Consultation"
                  variant="outline"
                  className="border-dragon text-dragon hover:bg-dragon hover:text-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />
        
      </main>
      <Footer />
    </div>
  );
};

export default CapturingKenya;
