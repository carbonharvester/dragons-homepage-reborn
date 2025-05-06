
import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 mb-12 bg-dragon-sand text-dragon-dark rounded-lg shadow-sm">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Kenya with Kapes Adventures</h2>
          <p className="text-lg mb-8">
            Discover this incredible country through our immersive educational programs, designed to connect you with Kenya's landscapes, wildlife, and cultures in meaningful ways.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/programs/food-for-education" className="btn-primary">
              Explore Our Programs
            </Link>
            <Link to="/partner-with-us" className="btn-secondary bg-white text-dragon hover:bg-gray-100">
              Plan Your Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
