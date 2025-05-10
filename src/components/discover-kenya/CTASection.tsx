
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return <section className="py-16 bg-dragon-sand text-dragon-dark rounded-lg shadow-sm mb-12">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Kenya with Kapes Adventures</h2>
          <p className="text-lg mb-8">Discover this incredible country through our immersive programs, designed to connect you with its landscapes, wildlife, and cultures—while creating lasting impact for communities.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="btn-primary h-10"
              asChild
            >
              <Link to="/programs/food-for-education">
                Explore Our Programs
              </Link>
            </Button>
            <Button 
              className="bg-white text-dragon hover:bg-gray-100 h-10"
              asChild
            >
              <Link to="/partner-with-us">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};

export default CTASection;
