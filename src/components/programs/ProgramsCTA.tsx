
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProgramsCTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide text-center">
        <h2 className="text-3xl md:text-4xl font-academy text-dragon-dark mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-dragon-gray max-w-2xl mx-auto mb-8">
          Connect with us to learn more about our programs for schools, students, and adults, and how we can create a customised experience for your school.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="btn-primary" asChild>
            <a href="https://form.typeform.com/to/rtxmvp4L" target="_blank" rel="noopener noreferrer">Apply Now</a>
          </Button>
          <Button variant="outline" className="border-dragon text-dragon hover:bg-dragon hover:text-white" asChild>
            <Link to="/partner-with-us">Schedule Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsCTA;
