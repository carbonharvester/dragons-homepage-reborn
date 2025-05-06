
import React from "react";
import { ShieldCheck } from "lucide-react";

const SafetyApproach = () => {
  return (
    <section className="py-12">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <ShieldCheck className="h-8 w-8 text-dragon mr-3" />
            <h2 className="text-3xl font-academy text-dragon-dark">Our Safety Approach</h2>
          </div>
          
          <p className="text-dragon-gray mb-6">
            At Kapes Adventures, safety is at the heart of everything we do. We follow international best practices in educational travel to ensure all participants enjoy a secure, meaningful experience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-dragon-dark mb-4 font-academy">Pre-Departure Preparation</h3>
              <ul className="space-y-3 text-dragon-gray">
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span>Comprehensive pre-departure orientation sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span>Detailed health and safety information packets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span>Access to travel health resources and advice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span>Guidance on required documents and preparations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-dragon-dark mb-4 font-academy">On-Program Support</h3>
              <ul className="space-y-3 text-dragon-gray">
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span>Experienced guides and educators with safety training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span>24/7 emergency support system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span>Vetted accommodations and transportation providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span>Ongoing risk assessment and management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyApproach;
