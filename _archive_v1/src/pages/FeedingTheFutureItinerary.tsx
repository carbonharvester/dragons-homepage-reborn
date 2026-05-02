
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ProgramItinerary from '@/components/roots-of-change/ProgramItinerary';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ParentPageNavigation from '@/components/navigation/ParentPageNavigation';

const FeedingTheFutureItinerary = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Feeding the Future: Program Itinerary 2025"
        description="Detailed 4-week itinerary for our sustainable agriculture and food security program across Kenya in 2025."
        keywords="itinerary, program schedule, Kenya, sustainable agriculture, educational travel, summer program"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-dragon-beige">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-academy text-dragon-dark text-center mb-6">
              Feeding the Future: Summer 2025 Itinerary
            </h1>
            <p className="text-center text-dragon-gray max-w-3xl mx-auto mb-8">
              Our immersive 28-day journey across Kenya focuses on sustainable agriculture, 
              permaculture design, and direct community impact through hands-on projects.
            </p>
            
            <div className="flex justify-center">
              <Button asChild className="bg-dragon hover:bg-dragon-dark">
                <Link to="/programs/feeding-the-future">Back to Program Overview</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="container-wide py-8">
          <ParentPageNavigation parentPath="/programs/feeding-the-future" parentName="Feeding the Future" />
        </div>

        {/* Full Itinerary */}
        <ProgramItinerary />
      </main>
      <Footer />
    </div>
  );
};

export default FeedingTheFutureItinerary;
