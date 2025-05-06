
import React from "react";
import { Link } from "react-router-dom";
import BulletList from "@/components/ui/BulletList";
import { Card, CardContent } from "@/components/ui/card";

const SafetyGuidelines = () => {
  const safetyPractices = [
    {
      title: "Group Travel",
      content: "Participants travel in groups supervised by experienced staff familiar with the local area and culture."
    },
    {
      title: "Communication",
      content: "All groups have access to reliable communication methods, including local phones and satellite communication in remote areas."
    },
    {
      title: "Accommodations",
      content: "We use vetted accommodations that meet our safety, cleanliness, and security standards."
    },
    {
      title: "Transportation",
      content: "All transportation providers and vehicles are carefully selected and maintained to ensure safety and reliability."
    }
  ];

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
              {safetyPractices.map((practice, index) => (
                <Card key={index} className="border border-gray-100">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-dragon-dark mb-2 font-academy">{practice.title}</h4>
                    <p className="text-dragon-gray">{practice.content}</p>
                  </CardContent>
                </Card>
              ))}
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
