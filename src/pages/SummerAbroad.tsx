
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import SEO from '@/components/SEO';
import TripCTA from '@/components/trip/TripCTA';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SummerAbroad = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add a random query parameter to force image reload
  const imgTimestamp = Date.now();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Summer Abroad Programs"
        description="Immersive summer abroad experiences in Kenya that combine adventure, cultural immersion, and impactful community service."
        keywords="summer abroad, kenya travel, study abroad, student travel, cultural immersion, adventure travel, community service, africa"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center py-32"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop&t=${imgTimestamp}')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container-wide relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-heading">Summer Abroad Programs</h1>
              <p className="text-xl mb-8">
                Experience Kenya through immersive 3-week programs designed to challenge, inspire, and transform.
              </p>
              <Button className="bg-dragon-yellow text-dragon-dark hover:bg-amber-400 px-6 py-3 text-lg">
                <Link to="/partner-with-us" className="flex items-center">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Program Details Section */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="section-heading">Transformative Summer Experiences</h2>
              <p className="section-subheading">
                Our summer abroad programs offer high school and college students the opportunity to immerse themselves in Kenyan culture, contribute to meaningful projects, and develop as global citizens.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1604591752725-3ee0c7e5488c?q=80&w=2070&auto=format&t=${imgTimestamp}`} 
                  alt="Food For Education program" 
                  className="w-full h-72 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-dragon-dark mb-3">Food For Education</h3>
                  <p className="text-dragon-gray mb-6">
                    Join sustainable agriculture initiatives to address food security challenges in rural communities through hands-on farming, educational outreach, and cultural immersion.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="bg-dragon rounded-full p-1 mt-1.5 mr-3"></span>
                      <span>Permaculture design and sustainable farming techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-dragon rounded-full p-1 mt-1.5 mr-3"></span>
                      <span>School garden development and nutrition education</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-dragon rounded-full p-1 mt-1.5 mr-3"></span>
                      <span>Community engagement and cultural exchange</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/programs/food-for-education">Learn More</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1516575334481-f85287c2c82d?q=80&w=2070&auto=format&t=${imgTimestamp}`} 
                  alt="Capturing Kenya photography program" 
                  className="w-full h-72 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-dragon-dark mb-3">Capturing Kenya</h3>
                  <p className="text-dragon-gray mb-6">
                    Develop your photography and videography skills while documenting safari adventures, community experiences, and natural wonders across Kenya's diverse landscapes.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="bg-dragon rounded-full p-1 mt-1.5 mr-3"></span>
                      <span>Expert-led photography and storytelling workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-dragon rounded-full p-1 mt-1.5 mr-3"></span>
                      <span>Wildlife photography in national parks and reserves</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-dragon rounded-full p-1 mt-1.5 mr-3"></span>
                      <span>Cultural documentation and ethical storytelling</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/programs/capturing-kenya">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-dragon-beige">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="section-heading">What's Included</h2>
              <p className="section-subheading">
                Our all-inclusive 3-week summer abroad programs provide everything needed for a safe, enriching, and transformative experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dragon-dark mb-4">Comprehensive Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-2"></span>
                    <span>24/7 in-country support and guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-2"></span>
                    <span>Pre-departure preparation and orientation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-2"></span>
                    <span>Expert local guides and facilitators</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dragon-dark mb-4">Accommodations & Transportation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-2"></span>
                    <span>Safe, comfortable lodging throughout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-2"></span>
                    <span>All in-country transportation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-2"></span>
                    <span>Airport transfers and ground logistics</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dragon-dark mb-4">Activities & Learning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-2"></span>
                    <span>Structured service-learning projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-2"></span>
                    <span>Cultural experiences and excursions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-dragon-beige rounded-full p-1 mt-1 mr-2"></span>
                    <span>Safari and adventure activities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <TripCTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default SummerAbroad;
