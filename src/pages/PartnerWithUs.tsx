
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Briefcase, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const PartnerWithUs = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Partnership request submitted",
      description: "Thank you for your interest! Our team will contact you shortly.",
    });
  };

  const benefits = [
    {
      icon: <Users className="h-12 w-12 text-[#9b87f5]" />,
      title: "Expanded Offerings",
      description: "Diversify your travel programs with our unique, purpose-driven experiences in Africa."
    },
    {
      icon: <Briefcase className="h-12 w-12 text-[#9b87f5]" />,
      title: "Revenue Sharing",
      description: "Benefit from our generous profit-sharing model designed to reward your contribution."
    },
    {
      icon: <Globe className="h-12 w-12 text-[#9b87f5]" />,
      title: "Social Impact",
      description: "Make a meaningful difference while providing transformative experiences for your clients."
    },
    {
      icon: <Handshake className="h-12 w-12 text-[#9b87f5]" />,
      title: "Full Support",
      description: "Access our expertise, resources, and on-ground networks for seamless program execution."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1A1F2C] to-[#7E69AB] py-20 md:py-32">
          <div className="container-wide text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Partner With Mission KAPES
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-10">
              Expand your offering with purpose-driven travel experiences while sharing in the success through our generous profit-sharing model.
            </p>
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg rounded-md"
              onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Become a Partner
            </Button>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-heading">Why Partner With Us?</h2>
              <p className="text-lg text-dragon-gray">
                Join forces with Mission KAPES to offer transformative travel experiences while building a sustainable business model that benefits all stakeholders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-dragon-dark">{benefit.title}</h3>
                    <p className="text-dragon-gray">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[#F9F7F4]">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-heading">How Our Partnership Works</h2>
              <p className="text-lg text-dragon-gray">
                A simple, transparent process designed to create mutual success and lasting impact.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-9 md:left-1/2 top-0 h-full w-1 bg-[#9b87f5] opacity-20 md:transform md:-translate-x-1/2"></div>
              
              <div className="space-y-12 md:space-y-24">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row">
                  <div className="absolute left-4 md:left-1/2 top-4 md:transform md:-translate-x-1/2 bg-[#9b87f5] text-white rounded-full h-10 w-10 flex items-center justify-center z-10 font-bold">1</div>
                  <div className="pl-20 md:w-1/2 md:pl-0 md:pr-16">
                    <h3 className="text-xl font-bold text-dragon-dark mb-2">Initial Consultation</h3>
                    <p className="text-dragon-gray">We'll meet to understand your business, clients, and how our experiences can complement your offerings.</p>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row">
                  <div className="absolute left-4 md:left-1/2 top-4 md:transform md:-translate-x-1/2 bg-[#9b87f5] text-white rounded-full h-10 w-10 flex items-center justify-center z-10 font-bold">2</div>
                  <div className="md:w-1/2 hidden md:block"></div>
                  <div className="pl-20 md:w-1/2 md:pl-16">
                    <h3 className="text-xl font-bold text-dragon-dark mb-2">Partnership Agreement</h3>
                    <p className="text-dragon-gray">We'll establish a clear profit-sharing structure and outline responsibilities for both parties.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row">
                  <div className="absolute left-4 md:left-1/2 top-4 md:transform md:-translate-x-1/2 bg-[#9b87f5] text-white rounded-full h-10 w-10 flex items-center justify-center z-10 font-bold">3</div>
                  <div className="pl-20 md:w-1/2 md:pl-0 md:pr-16">
                    <h3 className="text-xl font-bold text-dragon-dark mb-2">Integration & Training</h3>
                    <p className="text-dragon-gray">We'll provide comprehensive training and marketing materials to help you promote our programs effectively.</p>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row">
                  <div className="absolute left-4 md:left-1/2 top-4 md:transform md:-translate-x-1/2 bg-[#9b87f5] text-white rounded-full h-10 w-10 flex items-center justify-center z-10 font-bold">4</div>
                  <div className="md:w-1/2 hidden md:block"></div>
                  <div className="pl-20 md:w-1/2 md:pl-16">
                    <h3 className="text-xl font-bold text-dragon-dark mb-2">Launch & Grow</h3>
                    <p className="text-dragon-gray">Begin offering our programs to your clients with our full support, then scale as demand increases.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-heading">What Our Partners Say</h2>
              <p className="text-lg text-dragon-gray">
                Hear from organizations that have successfully integrated Mission KAPES experiences into their offerings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="bg-[#F9F7F4] border-none shadow-sm">
                <CardContent className="p-8">
                  <p className="italic text-dragon-gray mb-6">
                    "Partnering with Mission KAPES has allowed us to offer truly meaningful travel programs that our clients love. The revenue sharing model has been fair and transparent throughout our partnership."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#D6BCFA] flex items-center justify-center mr-4">
                      <span className="text-[#7E69AB] font-bold">TS</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dragon-dark">Thomas Smith</h4>
                      <p className="text-sm text-dragon-gray">Global Journeys Ltd.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="bg-[#F9F7F4] border-none shadow-sm">
                <CardContent className="p-8">
                  <p className="italic text-dragon-gray mb-6">
                    "The Mission KAPES team has been incredibly supportive throughout our partnership. Their expertise in Africa and commitment to ethical travel has helped us differentiate our offerings."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#D6BCFA] flex items-center justify-center mr-4">
                      <span className="text-[#7E69AB] font-bold">LP</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dragon-dark">Lisa Parker</h4>
                      <p className="text-sm text-dragon-gray">Educational Adventures</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="bg-[#F9F7F4] border-none shadow-sm">
                <CardContent className="p-8">
                  <p className="italic text-dragon-gray mb-6">
                    "Our clients have been amazed by the transformative experiences that Mission KAPES provides. The profit-sharing model has added a valuable revenue stream to our business."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#D6BCFA] flex items-center justify-center mr-4">
                      <span className="text-[#7E69AB] font-bold">JW</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dragon-dark">James Wong</h4>
                      <p className="text-sm text-dragon-gray">Ethical Tours Co.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="partnership-form" className="py-20 bg-[#1A1F2C] text-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Become a Partner</h2>
              <p className="text-lg text-gray-300">
                Fill out the form below to start a conversation about our partnership opportunities.
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 text-dragon-dark">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium mb-1">Organization*</label>
                    <input
                      type="text"
                      id="organization"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium mb-1">Website</label>
                  <input
                    type="url"
                    id="website"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Tell us about your organization*</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
                    placeholder="Please share details about your organization, the type of trips you currently offer, and what interests you about partnering with Mission KAPES."
                  ></textarea>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    type="submit"
                    className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-3 text-lg rounded-md"
                  >
                    Submit Partnership Request
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-heading">Frequently Asked Questions</h2>
              <p className="text-lg text-dragon-gray">
                Find answers to common questions about our partnership program.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-[#F9F7F4] p-6 rounded-lg">
                <h3 className="font-bold text-dragon-dark text-lg mb-2">What is the typical profit-sharing structure?</h3>
                <p className="text-dragon-gray">Our profit-sharing model typically provides partners with 15-25% of the trip revenue, depending on the level of involvement and marketing contribution.</p>
              </div>
              
              <div className="bg-[#F9F7F4] p-6 rounded-lg">
                <h3 className="font-bold text-dragon-dark text-lg mb-2">What kind of organizations do you partner with?</h3>
                <p className="text-dragon-gray">We partner with a variety of organizations including educational institutions, travel agencies, study abroad programs, and corporate team-building providers who share our values.</p>
              </div>
              
              <div className="bg-[#F9F7F4] p-6 rounded-lg">
                <h3 className="font-bold text-dragon-dark text-lg mb-2">Do partners need experience in African travel?</h3>
                <p className="text-dragon-gray">No, we provide all necessary training, resources, and on-ground support. Your expertise in your client base is what matters most.</p>
              </div>
              
              <div className="bg-[#F9F7F4] p-6 rounded-lg">
                <h3 className="font-bold text-dragon-dark text-lg mb-2">What marketing support do you provide?</h3>
                <p className="text-dragon-gray">We provide partners with professionally designed marketing materials, images, videos, detailed program descriptions, and training on how to effectively promote our unique experiences.</p>
              </div>
              
              <div className="bg-[#F9F7F4] p-6 rounded-lg">
                <h3 className="font-bold text-dragon-dark text-lg mb-2">Is there an exclusivity requirement?</h3>
                <p className="text-dragon-gray">No, our partnerships are non-exclusive, allowing you to continue offering other travel programs. However, we do offer enhanced benefits for partners who choose exclusivity for African educational travel programs.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-dragon-gray mb-6">Still have questions about our partnership program?</p>
              <Link to="#partnership-form">
                <Button className="bg-dragon text-white hover:bg-dragon-dark">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PartnerWithUs;
