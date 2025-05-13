
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Route, Calendar, Map, Leaf } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";

const AdultPrograms = () => {
  // Adult trips data
  const programs = [
    { 
      title: "Permaculture Design Course", 
      duration: "10 Days", 
      season: "Year Round",
      location: "Various locations in Kenya",
      description: "Immerse yourself in permaculture principles while contributing to sustainable food systems in local Kenyan communities. Learn design techniques and practical skills with real-world impact.", 
      image: "/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png", 
      link: "/programs/permaculture-design-course", 
      icon: Leaf 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Adult Trips"
        description="Engage in transformative learning experiences that combine cultural immersion, skill development, and meaningful contribution to local communities."
        keywords="adult trips, educational travel, cultural immersion, skill development, Kenya, Africa"
      />
      <Header />
      <main>
        <section className="relative h-[60vh] min-h-[500px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-black">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603202662747-00e33e7d1468?q=80&w=2069&auto=format')] bg-cover bg-center opacity-80">
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="container-wide relative z-10 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                <span className="hero-heading block">Educational Adventures</span>
                <span className="block mt-2 text-dragon-yellow">For Adults</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
                Engage in transformative learning experiences that combine cultural immersion, 
                skill development, and meaningful contribution to local communities.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="section-heading">Transformative Trips for Adults</h2>
              <p className="section-subheading mx-auto">
                Our adult trips are designed for curious minds seeking authentic experiences 
                that combine learning, adventure, and positive impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {programs.map((program, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <AspectRatio ratio={16/9} className="bg-muted">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format";
                          console.log(`Failed to load image: ${program.image}, using fallback`);
                        }}
                      />
                    </AspectRatio>
                  </div>
                      
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-dragon-dark">{program.title}</h3>
                    <p className="text-dragon-gray mb-4 flex-grow">{program.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-dragon-gray mb-4">
                      <div className="flex items-center">
                        <Route size={16} className="mr-1" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{program.season}</span>
                      </div>
                      <div className="flex items-center col-span-2">
                        <Map size={16} className="mr-1" />
                        <span>{program.location}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full border-dragon text-dragon hover:bg-dragon hover:text-white" asChild>
                      <Link to={program.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-dragon-beige rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-dragon-dark mb-4">Custom Trips for Groups</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Looking for a specialized experience for your organization, professional group, 
                or circle of friends? We design custom trips tailored to your interests and objectives.
              </p>
              <div className="flex justify-center flex-wrap gap-4">
                <CalendlyEmbed
                  url="https://calendly.com/kapesuniforms/discoverymeeting"
                  text="Schedule a Consultation"
                  className="btn-primary"
                />
                <Button variant="outline" className="border-dragon text-dragon hover:bg-dragon hover:text-white" asChild>
                  <a 
                    href="https://form.typeform.com/to/rtxmvp4L" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdultPrograms;
