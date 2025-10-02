import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
const PartnerForm = () => {
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Partnership request submitted",
      description: "Thank you for your interest! Our team will contact you shortly."
    });
  };
  return <section id="partnership-form" className="py-20 bg-dragon-dark text-white">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Become a Partner</h2>
          <p className="text-lg text-gray-300 mb-4">
            Fill out the form below to start a conversation about our partnership opportunities.
          </p>
          <p className="text-sm text-gray-400">
            Already booked a trip with us?{" "}
            <Link to="/trip-registration" className="text-dragon-yellow hover:underline font-semibold">
              Register your participants here
            </Link>
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 text-dragon-dark">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name*</label>
                <input type="text" id="name" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dragon focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-1">Organisation*</label>
                <input type="text" id="organization" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dragon focus:border-transparent" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address*</label>
                <input type="email" id="email" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dragon focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number*</label>
                <input type="tel" id="phone" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dragon focus:border-transparent" />
              </div>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium mb-1">Website</label>
              <input type="url" id="website" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dragon focus:border-transparent" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Tell us about your organisation*</label>
              <textarea id="message" rows={4} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dragon focus:border-transparent" placeholder="Please share details about your organization, the type of trips you currently offer, and what interests you about partnering with Kapes Adventures."></textarea>
            </div>
            
            <div className="flex justify-center">
              <Button type="submit" className="bg-dragon hover:bg-dragon-dark text-white px-8 py-3 text-lg rounded-md">
                Submit Partnership Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>;
};
export default PartnerForm;