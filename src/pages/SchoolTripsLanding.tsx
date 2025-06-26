import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { schoolTrips } from '@/data/programsData';
import { Book, Users, Globe, Award, Shield, Calendar } from 'lucide-react';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import SchoolLogosScroll from '@/components/home/SchoolLogosScroll';
import Testimonials from '@/components/Testimonials';

const SchoolTripsLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: Book,
      title: "Curriculum-Aligned Learning",
      description: "Programs designed to complement your existing curriculum with hands-on, experiential learning opportunities."
    },
    {
      icon: Globe,
      title: "Cultural Immersion",
      description: "Authentic cultural experiences that broaden students' perspectives and develop global citizenship skills."
    },
    {
      icon: Users,
      title: "Community Impact Projects",
      description: "Meaningful service learning projects that create lasting positive impact in Kenyan communities."
    },
    {
      icon: Shield,
      title: "Comprehensive Safety",
      description: "24/7 support, comprehensive risk management, and experienced local guides ensure student safety."
    },
    {
      icon: Award,
      title: "Educational Excellence",
      description: "Award-winning programs with proven track record of transforming students and enriching education."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Customizable itineraries and flexible timing to fit your school's academic calendar and needs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Educational School Trips to Kenya | Mission Kapes"
        description="Transform your students with immersive educational school trips to Kenya. Curriculum-aligned programs featuring cultural immersion, community service, and wildlife conservation. Safe, impactful, and unforgettable learning experiences."
        keywords="school trips Kenya, educational travel Kenya, student trips Africa, curriculum school trips, cultural immersion programs, service learning trips, school travel Kenya, educational tours Kenya"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-dragon to-dragon-dark text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container-wide py-20 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transform Your Students with Educational School Trips to Kenya
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Immersive, curriculum-aligned programs that combine cultural learning, community service, and wildlife conservation. Safe, impactful, and designed for schools worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <CalendlyEmbed 
                  url="https://calendly.com/kapesuniforms/discoverymeeting"
                  text="Schedule Free Consultation"
                  variant="secondary"
                  size="lg"
                  className="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90 shadow-lg"
                />
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-dragon" asChild>
                  <a href="#programs">View Our Programs</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dragon-dark mb-4">
                Why Choose Mission Kapes for Your School Trip?
              </h2>
              <p className="text-xl text-dragon-gray max-w-3xl mx-auto">
                We specialize in creating transformative educational experiences that align with your curriculum goals while ensuring student safety and meaningful impact. 
                <Link to="/blog" className="text-dragon hover:text-dragon-dark ml-1 underline">
                  Read our founder's insights on educational travel
                </Link>.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-dragon-beige/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center w-12 h-12 bg-dragon text-white rounded-lg mb-4">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-dragon-dark mb-3">{benefit.title}</h3>
                  <p className="text-dragon-gray">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* School Logos Section */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-dragon-dark mb-4">
                  Trusted by Top International Schools
                </h3>
                <p className="text-lg text-dragon-gray max-w-2xl mx-auto">
                  Leading educational institutions worldwide choose Mission Kapes for transformative student experiences.
                </p>
              </div>
              <SchoolLogosScroll />
            </div>
          </div>
        </section>

        {/* Student Testimonials Section */}
        <div className="bg-dragon">
          <div className="container-wide">
            <div className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Students Think?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Hear directly from students about their life-changing experiences and personal growth during their time in Kenya.
              </p>
            </div>
          </div>
          <Testimonials />
        </div>

        {/* Programs Section */}
        <section id="programs" className="py-20 bg-dragon-beige/50">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dragon-dark mb-4">
                Our Educational School Trip Programs
              </h2>
              <p className="text-xl text-dragon-gray max-w-3xl mx-auto">
                Each 8-day program is designed around a specific theme, allowing students to dive deep into important global issues while developing practical skills.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {schoolTrips.map((program, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-dragon-yellow/20 text-dragon-dark px-3 py-1 rounded-full text-sm font-medium">
                        {program.duration}
                      </span>
                      <span className="text-dragon-gray text-sm">{program.ageGroup}</span>
                    </div>
                    <h3 className="text-xl font-bold text-dragon-dark mb-3">{program.title}</h3>
                    <p className="text-dragon-gray mb-4">{program.description}</p>
                    <Button className="w-full bg-dragon hover:bg-dragon-dark" asChild>
                      <Link to={program.link}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90" asChild>
                <Link to="/school-trips">View All School Trip Details</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Educational Resources Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dragon-dark mb-4">
                Educational Resources & Insights
              </h2>
              <p className="text-xl text-dragon-gray max-w-3xl mx-auto">
                Explore our comprehensive resources to help you plan and maximize your school's educational travel experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-dragon-beige/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-dragon text-white rounded-lg mb-4">
                  <Book className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dragon-dark mb-3">Planning Guides</h3>
                <p className="text-dragon-gray mb-4">
                  Comprehensive guides for preparing your school trip, from curriculum integration to student preparation.
                </p>
                <div className="space-y-2">
                  <Link to="/health-and-safety" className="block text-dragon hover:text-dragon-dark underline">
                    Health & Safety Protocols
                  </Link>
                  <Link to="/faq" className="block text-dragon hover:text-dragon-dark underline">
                    Frequently Asked Questions
                  </Link>
                  <Link to="/partner-with-us" className="block text-dragon hover:text-dragon-dark underline">
                    Partnership Information
                  </Link>
                </div>
              </div>
              
              <div className="bg-dragon-beige/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-dragon text-white rounded-lg mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dragon-dark mb-3">Destination Insights</h3>
                <p className="text-dragon-gray mb-4">
                  Learn about Kenya's incredible diversity of landscapes, wildlife, and cultural experiences.
                </p>
                <div className="space-y-2">
                  <Link to="/discover-kenya" className="block text-dragon hover:text-dragon-dark underline">
                    Discover Kenya
                  </Link>
                  <Link to="/blog" className="block text-dragon hover:text-dragon-dark underline">
                    Founder's Travel Insights
                  </Link>
                </div>
              </div>
              
              <div className="bg-dragon-beige/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-dragon text-white rounded-lg mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dragon-dark mb-3">Community Impact</h3>
                <p className="text-dragon-gray mb-4">
                  Discover how our programs create meaningful, lasting change in Kenyan communities.
                </p>
                <div className="space-y-2">
                  <Link to="/programs/community-conservation" className="block text-dragon hover:text-dragon-dark underline">
                    Conservation Projects
                  </Link>
                  <Link to="/programs/empowering-women" className="block text-dragon hover:text-dragon-dark underline">
                    Women's Empowerment
                  </Link>
                  <Link to="/programs/food-for-education" className="block text-dragon hover:text-dragon-dark underline">
                    Food Security Initiatives
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-dragon-gray mb-4">
                Want to stay updated on educational travel insights and program updates?
              </p>
              <Button variant="outline" className="border-dragon text-dragon hover:bg-dragon hover:text-white" asChild>
                <Link to="/blog">Read Our Blog</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-dragon to-dragon-dark text-white">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Students' Education?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join leading international schools who have chosen Mission Kapes for life-changing educational experiences. Contact us today for a free consultation and custom program proposal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CalendlyEmbed 
                url="https://calendly.com/kapesuniforms/discoverymeeting"
                text="Get Free Consultation"
                variant="secondary"
                size="lg"
                className="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90 shadow-lg"
              />
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-dragon" asChild>
                <Link to="/partner-with-us">Request Information</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SchoolTripsLanding;
