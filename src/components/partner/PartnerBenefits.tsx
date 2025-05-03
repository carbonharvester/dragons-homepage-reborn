
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Briefcase, Users, Globe } from 'lucide-react';

const benefits = [
  {
    icon: <Users className="h-12 w-12 text-dragon" />,
    title: "Expanded Offerings",
    description: "Diversify your travel programs with our unique, purpose-driven experiences in Africa."
  },
  {
    icon: <Briefcase className="h-12 w-12 text-dragon" />,
    title: "Revenue Sharing",
    description: "Benefit from our generous profit-sharing model designed to reward your contribution."
  },
  {
    icon: <Globe className="h-12 w-12 text-dragon" />,
    title: "Social Impact",
    description: "Make a meaningful difference while providing transformative experiences for your clients."
  },
  {
    icon: <Handshake className="h-12 w-12 text-dragon" />,
    title: "Full Support",
    description: "Access our expertise, resources, and on-ground networks for seamless program execution."
  }
];

const PartnerBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Why Partner With Us?</h2>
          <p className="text-lg text-dragon-gray">
            Join forces with Kapes Adventures to offer transformative travel experiences while building a sustainable business model that benefits all stakeholders.
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
  );
};

export default PartnerBenefits;
