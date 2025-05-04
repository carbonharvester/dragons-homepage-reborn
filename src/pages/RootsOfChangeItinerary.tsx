
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ProgramItinerary from '@/components/roots-of-change/ProgramItinerary';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RootsOfChangeItinerary = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Roots of Change: Program Itinerary"
        description="Detailed 4-week itinerary for our sustainable agriculture and food security program across Kenya."
        keywords="itinerary, program schedule, Kenya, sustainable agriculture, educational travel, summer program"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-dragon-beige">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-academy text-dragon-dark text-center mb-6">
              Roots of Change: Full Itinerary
            </h1>
            <p className="text-center text-dragon-gray max-w-3xl mx-auto mb-8">
              Our immersive 28-day journey across Kenya focuses on sustainable agriculture, 
              permaculture design, and direct community impact through hands-on projects.
            </p>
            
            <div className="flex justify-center">
              <Button asChild className="bg-dragon hover:bg-dragon-dark">
                <Link to="/programs/roots-of-change">Back to Program Overview</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Full Itinerary */}
        <ProgramItinerary />
      </main>
      <Footer />
    </div>
  );
};

export default RootsOfChangeItinerary;
