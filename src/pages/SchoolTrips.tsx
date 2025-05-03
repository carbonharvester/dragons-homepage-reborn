
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

const SchoolTrips = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="relative py-20 bg-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-dragon-dark mb-6">School Trips</h1>
              <p className="text-lg text-dragon-gray">
                Immersive educational experiences that combine cultural engagement, wilderness exploration, and authentic learning opportunities for students.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2070&auto=format" 
                  alt="Students on a field trip" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-dragon-dark mb-3">Custom School Expeditions</h2>
                  <p className="text-dragon-gray mb-4">
                    Tailor-made educational journeys that align with your curriculum goals while providing students with transformative experiences in Africa.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="bg-dragon-beige rounded-full p-1 mr-2"></span>
                      <span>Customizable itineraries based on educational objectives</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon-beige rounded-full p-1 mr-2"></span>
                      <span>Expert guides and facilitators</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon-beige rounded-full p-1 mr-2"></span>
                      <span>Comprehensive safety and logistics planning</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format" 
                  alt="Students working together" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-dragon-dark mb-3">Educational Focus Areas</h2>
                  <p className="text-dragon-gray mb-4">
                    Our school trips are designed around key educational themes that promote global citizenship and experiential learning.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="bg-dragon-beige rounded-full p-1 mr-2"></span>
                      <span>Environmental conservation and sustainability</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon-beige rounded-full p-1 mr-2"></span>
                      <span>Cultural immersion and community engagement</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-dragon-beige rounded-full p-1 mr-2"></span>
                      <span>Adventure and personal growth</span>
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

export default SchoolTrips;
