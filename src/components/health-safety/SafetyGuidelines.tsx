
import React from "react";
import { Link } from "react-router-dom";

const SafetyGuidelines = () => {
  return (
    <section className="py-12">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-academy text-dragon-dark mb-6">Safety Guidelines</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-academy text-dragon-dark mb-4">General Safety Practices</h3>
            <p className="text-dragon-gray mb-5">
              Our programs prioritize these essential safety practices:
            </p>
            
            <div className="space-y-5">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-dragon-dark mb-2 font-academy">Group Travel</h4>
                <p className="text-dragon-gray">
                  Participants travel in groups supervised by experienced staff familiar with the local area and culture.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-dragon-dark mb-2 font-academy">Communication</h4>
                <p className="text-dragon-gray">
                  All groups have access to reliable communication methods, including local phones and satellite communication in remote areas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-dragon-dark mb-2 font-academy">Accommodations</h4>
                <p className="text-dragon-gray">
                  We use vetted accommodations that meet our safety, cleanliness, and security standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-dragon-dark mb-2 font-academy">Transportation</h4>
                <p className="text-dragon-gray">
                  All transportation providers and vehicles are carefully selected and maintained to ensure safety and reliability.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-xl font-academy text-dragon-dark mb-4">Have More Questions About Health and Safety?</h3>
            <p className="text-dragon-gray mb-5">
              Our team is ready to address any concerns about our programs.
            </p>
            <div className="flex justify-center">
              <Link to="/faq" className="btn-secondary">
                Visit FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyGuidelines;
