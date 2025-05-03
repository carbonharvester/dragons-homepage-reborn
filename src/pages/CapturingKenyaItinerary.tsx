import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { Link } from "react-router-dom";
import { 
  ChevronDown, ChevronUp, ChevronLeft,
  Sun, Sunrise, Sunset, Calendar, Clock, MapPin
} from "lucide-react";
import SEO from '@/components/SEO';

const CapturingKenyaItinerary = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for expanded weeks
  const [expandedWeeks, setExpandedWeeks] = useState<Record<string, boolean>>({
    'week1': true, // First week expanded by default
    'week2': false,
    'week3': false,
    'week4': false
  });

  // Toggle week details
  const toggleWeekDetails = (weekId: string) => {
    setExpandedWeeks(prev => ({
      ...prev,
      [weekId]: !prev[weekId]
    }));
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
      ],
      days: [
        {
          day: 1,
          title: "Arrival in Nairobi",
          activities: [
            "Morning: Arrive at Jomo Kenyatta International Airport, transfer to a Nairobi guesthouse",
            "Afternoon: Welcome dinner and orientation with the expert photographer/videographer",
            "Evening: Workshop: Introduction to storytelling through photography/videography",
            "Creative Task: Capture first impressions of Nairobi",
            "Accommodation: Guesthouse in Nairobi"
          ]
        },
        {
          day: 2,
          title: "Nairobi – Urban Exploration and Technical Skills",
          activities: [
            "Morning: Visit Kibera with a local guide to photograph daily life respectfully",
            "Afternoon: Workshop at a Nairobi youth center, teaching basic photography",
            "Evening: Technical workshop on camera settings and lighting basics",
            "Creative Task: Create a photo series or short video clip of Kibera",
            "Accommodation: Guesthouse in Nairobi"
          ]
        },
        {
          day: 3,
          title: "Nairobi to Amboseli – Travel and Preparation",
          activities: [
            "Morning: Drive to Amboseli National Park, photographing rural landscapes",
            "Afternoon: Settle into a tented camp, orientation on wildlife photography",
            "Evening: Group critique of Nairobi photos/videos, led by the expert",
            "Creative Task: Capture the journey to Amboseli",
            "Accommodation: Tented camp in Amboseli"
          ]
        },
        {
          day: 4,
          title: "Amboseli – Game Drives and Wildlife Photography",
          activities: [
            "Morning: Sunrise game drive to photograph wildlife against Mount Kilimanjaro",
            "Afternoon: Workshop on wildlife photography techniques",
            "Evening: Edit session using Adobe Lightroom/Premiere Pro",
            "Creative Task: Create a wildlife photo series or 1-minute safari video",
            "Accommodation: Tented camp in Amboseli"
          ]
        },
        {
          day: 5,
          title: "Amboseli – Hot Air Balloon and Cultural Introduction",
          activities: [
            "Morning: Hot air balloon ride over Amboseli at sunrise",
            "Afternoon: Visit a Maasai village to photograph cultural practices",
            "Evening: Workshop on portrait photography and cultural sensitivity",
            "Creative Task: Develop a portrait series or interview video with Maasai",
            "Accommodation: Tented camp in Amboseli"
          ]
        },
        {
          day: 6,
          title: "Amboseli – Advanced Wildlife and Reflection",
          activities: [
            "Morning: Second game drive, focusing on challenging shots",
            "Afternoon: Group reflection on cultural experiences and creative growth",
            "Evening: Workshop on storytelling through editing",
            "Creative Task: Edit a cohesive Amboseli portfolio",
            "Accommodation: Tented camp in Amboseli"
          ]
        },
        {
          day: 7,
          title: "Amboseli to Nairobi – Transition",
          activities: [
            "Morning: Final Amboseli shoot at sunrise",
            "Afternoon: Drive back to Nairobi, with stops for photography",
            "Evening: Group presentation of Amboseli portfolios",
            "Accommodation: Guesthouse in Nairobi"
          ]
        }
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
      ],
      days: [
        {
          day: 8,
          title: "Nairobi to Samburu – Travel and Setup",
          activities: [
            "Morning: Drive to Samburu National Reserve, photographing en route",
            "Afternoon: Settle into a campsite, orientation on Samburu's ecosystem",
            "Evening: Workshop on low-light photography",
            "Creative Task: Capture the journey to Samburu",
            "Accommodation: Camping in Samburu"
          ]
        },
        {
          day: 9,
          title: "Samburu – Game Drives and Wildlife Diversity",
          activities: [
            "Morning: Game drive to photograph Samburu's rare species",
            "Afternoon: Workshop on advanced wildlife techniques",
            "Evening: Edit session, focusing on storytelling through video pacing",
            "Creative Task: Create a wildlife photo essay or 2-minute safari video",
            "Accommodation: Camping in Samburu"
          ]
        },
        {
          day: 10,
          title: "Samburu – Meeting the Samburu People",
          activities: [
            "Morning: Visit a Samburu village, photographing daily life with permission",
            "Afternoon: Participate in a community-led photography workshop",
            "Evening: Workshop on cultural storytelling through visuals",
            "Creative Task: Develop a photo series on Samburu life",
            "Accommodation: Camping in Samburu"
          ]
        },
        {
          day: 11,
          title: "Samburu – Cultural Immersion and Portraits",
          activities: [
            "Morning: Return to the Samburu village for deeper engagement",
            "Afternoon: Workshop on advanced portrait techniques",
            "Evening: Group critique of Samburu cultural work",
            "Creative Task: Create a portrait series with Samburu individuals",
            "Accommodation: Camping in Samburu"
          ]
        },
        {
          day: 12,
          title: "Samburu – Ewaso Ng'iro River and Landscapes",
          activities: [
            "Morning: Photograph the Ewaso Ng'iro River and landscapes",
            "Afternoon: Workshop on landscape photography techniques",
            "Evening: Edit session on creating a cohesive visual narrative",
            "Creative Task: Develop a landscape photo series or time-lapse video",
            "Accommodation: Camping in Samburu"
          ]
        },
        {
          day: 13,
          title: "Samburu – Creative Exploration",
          activities: [
            "Morning: Free-form photography session",
            "Afternoon: One-on-one mentoring with the expert",
            "Evening: Group reflection on cultural and creative experiences",
            "Creative Task: Begin drafting a mid-program portfolio",
            "Accommodation: Camping in Samburu"
          ]
        },
        {
          day: 14,
          title: "Samburu to Marsabit – Transition",
          activities: [
            "Morning: Final Samburu shoot at sunrise",
            "Afternoon: Drive to Marsabit, photographing volcanic landscapes",
            "Evening: Workshop on preparing for remote environments",
            "Accommodation: Guesthouse or campsite in Marsabit"
          ]
        }
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
      ],
      days: [
        {
          day: 15,
          title: "Marsabit to Lake Turkana – Travel and Arrival",
          activities: [
            "Morning: Drive to Lake Turkana, photographing desert landscapes",
            "Afternoon: Arrive at campsite near Loiyangalani, orientation",
            "Evening: Workshop on photography in harsh environments",
            "Creative Task: Capture the journey to Turkana",
            "Accommodation: Camping near Lake Turkana"
          ]
        },
        {
          day: 16,
          title: "Lake Turkana – Lake and Landscape Photography",
          activities: [
            "Morning: Photograph Lake Turkana's waters and shores at sunrise",
            "Afternoon: Workshop on environmental storytelling",
            "Evening: Edit session on creating emotional impact",
            "Creative Task: Create a photo essay on Lake Turkana",
            "Accommodation: Camping near Lake Turkana"
          ]
        },
        {
          day: 17,
          title: "Lake Turkana – Meeting the Turkana People",
          activities: [
            "Morning: Visit a Turkana village, photographing daily life",
            "Afternoon: Participate in a community discussion on traditions",
            "Evening: Workshop on documentary filmmaking basics",
            "Creative Task: Develop a photo series on Turkana culture",
            "Accommodation: Camping near Lake Turkana"
          ]
        },
        {
          day: 18,
          title: "Lake Turkana – Cultural Immersion and Service",
          activities: [
            "Morning: Photography workshop with Turkana youth",
            "Afternoon: Photograph a Turkana cultural event",
            "Evening: Group critique of Turkana work",
            "Creative Task: Create a portrait series with Turkana community",
            "Accommodation: Camping near Lake Turkana"
          ]
        },
        {
          day: 19,
          title: "Lake Turkana – Creative Exploration",
          activities: [
            "Morning: Free-form photography session",
            "Afternoon: One-on-one mentoring for individual projects",
            "Evening: Workshop on preparing the final portfolio",
            "Creative Task: Draft a Lake Turkana portfolio section",
            "Accommodation: Camping near Lake Turkana"
          ]
        },
        {
          day: 20,
          title: "Lake Turkana – Reflection and Adventure",
          activities: [
            "Morning: Boat trip on Lake Turkana for photography",
            "Afternoon: Group reflection on experiences",
            "Evening: Edit session for final portfolio preparation",
            "Creative Task: Refine portfolio drafts",
            "Accommodation: Camping near Lake Turkana"
          ]
        },
        {
          day: 21,
          title: "Lake Turkana to Nairobi – Transition",
          activities: [
            "Morning: Final Lake Turkana shoot at sunrise",
            "Afternoon: Drive back to Nairobi with photography stops",
            "Evening: Rest and informal portfolio review",
            "Accommodation: Guesthouse in Nairobi"
          ]
        }
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
      ],
      days: [
        {
          day: 22,
          title: "Nairobi – Portfolio Development",
          activities: [
            "Morning: Workshop on finalizing photo essays and short films",
            "Afternoon: Individual editing time with expert guidance",
            "Evening: Group reflection on the program's impact",
            "Creative Task: Complete a draft portfolio",
            "Accommodation: Guesthouse in Nairobi"
          ]
        },
        {
          day: 23,
          title: "Nairobi – Advanced Editing and Storytelling",
          activities: [
            "Morning: Workshop on advanced editing techniques",
            "Afternoon: One-on-one portfolio reviews with the expert",
            "Evening: Prepare for the community showcase",
            "Creative Task: Finalize portfolio (photo essay or film)",
            "Accommodation: Guesthouse in Nairobi"
          ]
        },
        {
          day: 24,
          title: "Nairobi – Community Showcase Preparation",
          activities: [
            "Morning: Rehearse presentations for the showcase",
            "Afternoon: Visit youth center to share portfolios",
            "Evening: Workshop on presenting creative work",
            "Creative Task: Prepare a presentation of portfolio highlights",
            "Accommodation: Guesthouse in Nairobi"
          ]
        },
        {
          day: 25,
          title: "Nairobi – Community Showcase",
          activities: [
            "Morning: Set up community art exhibit",
            "Afternoon: Host the showcase for local community",
            "Evening: Celebration dinner and certificate ceremony",
            "Creative Task: Document the showcase for portfolios",
            "Accommodation: Guesthouse in Nairobi"
          ]
        },
        {
          day: 26,
          title: "Nairobi – Reflection and Free Exploration",
          activities: [
            "Morning: Group reflection on personal growth",
            "Afternoon: Free time to photograph Nairobi",
            "Evening: Final group critique of portfolios",
            "Creative Task: Write a reflective essay on the program",
            "Accommodation: Guesthouse in Nairobi"
          ]
        },
        {
          day: 27,
          title: "Nairobi – Final Preparations",
          activities: [
            "Morning: Workshop on leveraging portfolios for future",
            "Afternoon: Pack and finalize digital portfolios",
            "Evening: Farewell dinner with cultural performances",
            "Creative Task: Create a group photo montage",
            "Accommodation: Guesthouse in Nairobi"
          ]
        },
        {
          day: 28,
          title: "Departure",
          activities: [
            "Morning: Transfer to Jomo Kenyatta International Airport",
            "Post-Program: Receive digital certificate and online gallery access"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Capturing Kenya Program Itinerary"
        description="Detailed day-by-day itinerary for our 4-week photography and videography immersion program across Kenya's most stunning locations."
        keywords="Kenya itinerary, photography program, wildlife photography, travel itinerary, educational program"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          
          <div className="container-wide relative z-10 text-white">
            <div className="max-w-3xl">
              <div className="mb-4">
                <Button variant="ghost" className="text-white hover:bg-white/20 -ml-4 mb-2" asChild>
                  <Link to="/programs/capturing-kenya">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Program Overview
                  </Link>
                </Button>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2 font-academy">Capturing Kenya</h1>
              <h2 className="text-xl md:text-2xl opacity-90 mb-6 font-gothic uppercase tracking-wider">Full Program Itinerary</h2>
              <div className="flex flex-wrap gap-4 mb-3">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Calendar className="h-5 w-5" />
                  <span>4 Weeks (Summer)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Clock className="h-5 w-5" />
                  <span>28 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <MapPin className="h-5 w-5" />
                  <span>Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Daily Itinerary */}
        <section className="py-12 bg-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-dragon-dark mb-4 font-academy">Detailed Program Itinerary</h2>
              <p className="text-lg text-dragon-gray">
                Our 4-week Capturing Kenya program takes you through stunning landscapes, wildlife encounters, and cultural 
                immersion while developing your photography and videography skills. Below is our comprehensive day-by-day itinerary.
              </p>
            </div>
            
            <div className="space-y-8">
              {weeks.map((week) => (
                <div key={week.number} className="border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                  <button 
                    className="w-full bg-dragon p-6 text-white flex justify-between items-center"
                    onClick={() => toggleWeekDetails(`week${week.number}`)}
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-left font-academy">Week {week.number}: {week.title}</h3>
                      <p className="opacity-90 text-left font-gothic uppercase tracking-wide">{week.subtitle}</p>
                    </div>
                    {expandedWeeks[`week${week.number}`] ? 
                      <ChevronUp className="h-6 w-6" /> : 
                      <ChevronDown className="h-6 w-6" />
                    }
                  </button>
                  
                  {expandedWeeks[`week${week.number}`] && (
                    <div className="p-6 bg-white">
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <img 
                            src={week.image} 
                            alt={`Week ${week.number}: ${week.title}`} 
                            className="w-full h-60 object-cover rounded-lg"
                          />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold text-lg text-dragon-dark mb-1 font-gothic uppercase tracking-wide">Week Overview</h4>
                            <p className="text-dragon-gray">{week.description}</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg text-dragon-dark mb-1 font-gothic uppercase tracking-wide">Base Location</h4>
                            <p className="text-dragon-gray">{week.base}</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg text-dragon-dark mb-1 font-gothic uppercase tracking-wide">Community Impact</h4>
                            <p className="text-dragon-gray">{week.impact}</p>
                          </div>
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-lg text-dragon-dark mb-4 font-gothic uppercase tracking-wide">Week {week.number} Highlights</h4>
                      <ul className="grid md:grid-cols-2 gap-3 mb-8">
                        {week.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center">
                            <span className="bg-dragon-beige rounded-full p-1 mr-2"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-bold text-lg text-dragon-dark mb-4 font-gothic uppercase tracking-wide">Daily Schedule</h4>
                      
                      {/* New tabular format for daily schedule - no more dropdown for each day */}
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Day</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Title</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Activities</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {week.days.map((day) => (
                              <tr key={day.day} className="hover:bg-gray-50">
                                <td className="px-4 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="bg-dragon-beige text-dragon font-medium rounded-full w-8 h-8 flex items-center justify-center">
                                      {day.day}
                                    </div>
                                    {day.day === 1 || day.day === 8 || day.day === 15 || day.day === 22 ? 
                                      <span className="ml-2 text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-0.5">Start</span> : null
                                    }
                                    {day.day === 7 || day.day === 14 || day.day === 21 || day.day === 28 ? 
                                      <span className="ml-2 text-xs bg-amber-100 text-amber-800 rounded-full px-2 py-0.5">Travel</span> : null
                                    }
                                  </div>
                                </td>
                                <td className="px-4 py-4 font-medium">
                                  {day.title}
                                </td>
                                <td className="px-4 py-4">
                                  <ul className="space-y-3">
                                    {day.activities.map((activity, i) => {
                                      // Parse the activity to extract time of day if present
                                      const isMorning = activity.includes("Morning:");
                                      const isAfternoon = activity.includes("Afternoon:");
                                      const isEvening = activity.includes("Evening:");
                                      
                                      // Choose icon based on time of day
                                      let Icon = null;
                                      if (isMorning) Icon = Sunrise;
                                      else if (isAfternoon) Icon = Sun;
                                      else if (isEvening) Icon = Sunset;
                                      
                                      // Format activity text, removing time prefix if present
                                      let activityText = activity;
                                      if (isMorning) activityText = activity.replace("Morning:", "");
                                      if (isAfternoon) activityText = activity.replace("Afternoon:", "");
                                      if (isEvening) activityText = activity.replace("Evening:", "");
                                      
                                      return (
                                        <li key={i} className="flex items-start gap-2">
                                          {Icon ? (
                                            <div className="bg-dragon-beige/50 rounded-full p-1 text-dragon shrink-0 mt-0.5">
                                              <Icon className="h-3 w-3" />
                                            </div>
                                          ) : (
                                            <div className="bg-dragon-beige/50 rounded-full w-2 h-2 shrink-0 mt-2"></div>
                                          )}
                                          <div className="text-sm">
                                            {(isMorning || isAfternoon || isEvening) && (
                                              <span className="font-medium">
                                                {isMorning ? "Morning: " : isAfternoon ? "Afternoon: " : "Evening: "}
                                              </span>
                                            )}
                                            {activityText}
                                          </div>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-dragon-gray mb-6 max-w-2xl mx-auto">
                Our itinerary is carefully crafted to provide a balance of learning, exploration, and community impact.
                Each day is designed to build your skills while immersing you in Kenya's diverse environments and cultures.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="btn-primary font-gothic uppercase tracking-wide text-lg" asChild>
                  <Link to="/apply">Apply Now</Link>
                </Button>
                <CalendlyEmbed 
                  url="https://calendly.com/kapesuniforms/discoverymeeting"
                  text="Schedule Consultation"
                  variant="outline"
                  className="border-dragon text-dragon hover:bg-dragon hover:text-white font-gothic uppercase tracking-wide"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CapturingKenyaItinerary;
