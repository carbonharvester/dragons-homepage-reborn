
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { programData, outcomes } from '@/components/roots-of-change/ProgramData';

const RootsOfChange = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Roots of Change: Sustainable Agriculture Summer Program"
        description="A 4-week immersive experience in sustainable agriculture and food security initiatives across Kenya with hands-on learning and community impact."
        keywords="summer abroad, sustainable agriculture, food security, Kenya, permaculture, student travel, educational travel"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0 bg-[url('/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          
          <div className="container-wide relative z-10 text-white">
            <div className="max-w-3xl">
              <div className="inline-block bg-dragon px-4 py-1 rounded-full text-sm font-medium mb-4">
                Summer Abroad Program
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                <span className="hero-heading block font-academy">{programData.title}</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
                {programData.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <CalendlyEmbed 
                  url="https://calendly.com/kapesuniforms/discoverymeeting"
                  text="Schedule a Consultation"
                  className="btn-primary"
                />
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-dragon" asChild>
                  <Link to="/summer-abroad">View All Summer Programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-academy text-dragon-dark mb-6">Program Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-dragon-beige p-4 rounded-lg">
                  <p className="text-sm text-dragon-gray mb-1">Duration</p>
                  <p className="text-lg font-bold text-dragon-dark">{programData.duration}</p>
                </div>
                <div className="bg-dragon-beige p-4 rounded-lg">
                  <p className="text-sm text-dragon-gray mb-1">Season</p>
                  <p className="text-lg font-bold text-dragon-dark">{programData.season}</p>
                </div>
                <div className="bg-dragon-beige p-4 rounded-lg">
                  <p className="text-sm text-dragon-gray mb-1">Location</p>
                  <p className="text-lg font-bold text-dragon-dark">{programData.location}</p>
                </div>
                <div className="bg-dragon-beige p-4 rounded-lg">
                  <p className="text-sm text-dragon-gray mb-1">Age Range</p>
                  <p className="text-lg font-bold text-dragon-dark">{programData.ages}</p>
                </div>
              </div>

              <div className="prose max-w-none mb-12">
                <p>The Roots of Change program is an expanded 4-week immersive experience in sustainable agriculture and food security. It builds upon our Food For Education school trip but offers a more comprehensive exploration of sustainable farming practices and food systems in Kenya.</p>
                
                <p className="mt-4">Students will work alongside local farmers, agricultural experts, and community leaders to develop sustainable food production systems that address food security challenges in rural Kenyan communities. This program combines hands-on farming experience with educational workshops, cultural immersion, and community service.</p>
                
                <h3 className="text-xl font-bold text-dragon-dark mt-8 mb-4">Program Goals</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {programData.goals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-16 bg-dragon-beige">
          <div className="container-wide">
            <h2 className="text-3xl font-academy text-dragon-dark mb-10 text-center">Program Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dragon-dark mb-4">Permaculture Design</h3>
                <p>Learn and apply permaculture principles to design sustainable agricultural systems that work with nature rather than against it. Create garden designs that maximize yields while minimizing resource use.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dragon-dark mb-4">Water Conservation</h3>
                <p>Implement rainwater harvesting systems, drip irrigation, and greywater recycling to demonstrate sustainable water management practices in agriculture.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dragon-dark mb-4">Food Security Projects</h3>
                <p>Work on school garden initiatives that provide nutritious meals to hundreds of students daily, improving both education outcomes and community health.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dragon-dark mb-4">Cultural Immersion</h3>
                <p>Live and work alongside local communities, learning traditional farming knowledge while sharing sustainable innovations from around the world.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dragon-dark mb-4">Safari Experience</h3>
                <p>Take weekend excursions to experience Kenya's wildlife and natural beauty, understanding the importance of biodiversity to sustainable food systems.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dragon-dark mb-4">Leadership Development</h3>
                <p>Develop project management and leadership skills as you design and implement your own sustainable agriculture initiative in the final week.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Outcomes */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <h2 className="text-3xl font-academy text-dragon-dark mb-10 text-center">Program Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="bg-dragon-beige p-6 rounded-lg">
                  <div className="bg-dragon rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <outcome.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dragon-dark mb-2">{outcome.title}</h3>
                  <p className="text-dragon-gray">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-dragon">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-academy text-white mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Join our Roots of Change program and develop the skills to create sustainable food systems that benefit communities for generations to come.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CalendlyEmbed 
                url="https://calendly.com/kapesuniforms/discoverymeeting"
                text="Schedule a Consultation"
                className="bg-white text-dragon hover:bg-dragon-yellow hover:text-dragon-dark"
              />
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-dragon" asChild>
                <Link to="/partner-with-us">Apply Now</Link>
              </Button>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default RootsOfChange;
