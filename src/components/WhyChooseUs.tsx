import React from 'react';
import { Shield, Users, Book, Globe, Heart, Award } from "lucide-react";
const features = [{
  icon: <Shield className="h-10 w-10 text-dragon" />,
  title: "Risk Management",
  description: "Industry-leading safety protocols and 30+ years experience running programs in diverse locations."
}, {
  icon: <Users className="h-10 w-10 text-dragon" />,
  title: "Small Groups",
  description: "Intimate group sizes of 12-16 students with 3 leaders for personalized attention and deeper experiences."
}, {
  icon: <Book className="h-10 w-10 text-dragon" />,
  title: "Educational Focus",
  description: "Curriculum designed for meaningful cultural engagement, language learning, and personal growth."
}, {
  icon: <Globe className="h-10 w-10 text-dragon" />,
  title: "Local Connections",
  description: "Deep relationships with communities, homestay families, and local guides in each program location."
}, {
  icon: <Heart className="h-10 w-10 text-dragon" />,
  title: "Responsible Travel",
  description: "Commitment to ethical travel practices that benefit host communities and protect environments."
}, {
  icon: <Award className="h-10 w-10 text-dragon" />,
  title: "Transformative Experiences",
  description: "Programs that challenge perspectives, build leadership skills, and foster global citizenship."
}];
const WhyChooseUs = () => {
  return <section id="why-us" className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-heading">Why Choose Kapes?</h2>
          <p className="section-subheading mx-auto">
            For over 30 years, we've been leaders in cross-cultural education. Here's what makes our approach different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => <div key={index} className="flex flex-col items-start">
              <div className="mb-4 p-3 bg-dragon-beige rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-dragon-dark">{feature.title}</h3>
              <p className="text-dragon-gray">{feature.description}</p>
            </div>)}
        </div>

        <div className="mt-16 bg-dragon-sand p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-2xl font-bold text-dragon-dark mb-2">Ready for an adventure?</h3>
            <p className="text-dragon-gray">Speak with a program coordinator about which journey is right for you.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary whitespace-nowrap">Find Your Program</button>
            <button className="btn-secondary whitespace-nowrap">Contact Us</button>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;