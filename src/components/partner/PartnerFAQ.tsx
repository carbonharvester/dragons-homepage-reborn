
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PartnerFAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="text-lg text-dragon-gray">
            Find answers to common questions about our partnership program.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-dragon-beige p-6 rounded-lg">
            <h3 className="font-bold text-dragon-dark text-lg mb-2">What is the typical profit-sharing structure?</h3>
            <p className="text-dragon-gray">Our profit-sharing model typically provides partners with 15-25% of the trip revenue, depending on the level of involvement and marketing contribution.</p>
          </div>
          
          <div className="bg-dragon-beige p-6 rounded-lg">
            <h3 className="font-bold text-dragon-dark text-lg mb-2">What kind of organizations do you partner with?</h3>
            <p className="text-dragon-gray">We partner with a variety of organizations including educational institutions, travel agencies, study abroad programs, and corporate team-building providers who share our values.</p>
          </div>
          
          <div className="bg-dragon-beige p-6 rounded-lg">
            <h3 className="font-bold text-dragon-dark text-lg mb-2">Do partners need experience in African travel?</h3>
            <p className="text-dragon-gray">No, we provide all necessary training, resources, and on-ground support. Your expertise in your client base is what matters most.</p>
          </div>
          
          <div className="bg-dragon-beige p-6 rounded-lg">
            <h3 className="font-bold text-dragon-dark text-lg mb-2">What marketing support do you provide?</h3>
            <p className="text-dragon-gray">We provide partners with professionally designed marketing materials, images, videos, detailed program descriptions, and training on how to effectively promote our unique experiences.</p>
          </div>
          
          <div className="bg-dragon-beige p-6 rounded-lg">
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
  );
};

export default PartnerFAQ;
