
import React from "react";
import { Ambulance, Shield, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SafeTravels = () => {
  const services = [
    {
      icon: <Shield className="h-8 w-8 text-dragon" />,
      title: "30-day Protection",
      description: "Fully comprehensive protection throughout your trip."
    },
    {
      icon: <MapPin className="h-8 w-8 text-dragon" />,
      title: "Healthcare Facility Locator",
      description: "Real-time healthcare facility and specialists locator system."
    },
    {
      icon: <Shield className="h-8 w-8 text-dragon" />,
      title: "Security Escort",
      description: "On-demand security response, including safety escort services (available in Kenya only)."
    },
    {
      icon: <MapPin className="h-8 w-8 text-dragon" />,
      title: "Roadside Assistance",
      description: "Towing and breakdown support for your vehicle if you get stuck on the road (available in Kenya only)."
    },
    {
      icon: <Ambulance className="h-8 w-8 text-dragon" />,
      title: "Air Rescues",
      description: "Air rescues from remote locations (including mountains) with 7 helicopters and 70 fixed-wing aircraft."
    },
    {
      icon: <Shield className="h-8 w-8 text-dragon" />,
      title: "Ground Ambulance",
      description: "Ground ambulance rescue from over 800 response teams."
    },
    {
      icon: <Phone className="h-8 w-8 text-dragon" />,
      title: "24/7 Dispatch",
      description: "24/7 dispatch and medical concierge for emergency and medical advice."
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-academy text-dragon-dark mb-6">Travel Protection with Safe Travels</h2>
          
          <div className="bg-dragon-beige p-6 rounded-lg mb-8">
            <p className="text-dragon-gray mb-4">
              In Kenya, we partner with Safe Travels by rescue.co to provide comprehensive protection for all our travelers. Safe Travels is the only fully comprehensive protection to include both ground and air rescue cover across East Africa.
            </p>
            <p className="text-dragon-gray mb-4">
              You can choose between coverage options for Kenya, Uganda, or East Africa* depending on your travel needs.
            </p>
            <p className="text-dragon-gray italic">
              *East African cover includes Kenya, Tanzania (including Zanzibar), Rwanda, and Uganda.
            </p>
          </div>
          
          <h3 className="text-2xl font-academy text-dragon-dark mb-6">All Our Plans Include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border border-gray-100 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-dragon-beige p-2 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-dragon-dark mb-1">{service.title}</h4>
                      <p className="text-dragon-gray">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-dragon-beige p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-dragon mr-3" />
              <h4 className="text-xl font-semibold text-dragon-dark">Your Safety is Our Priority</h4>
            </div>
            <p className="text-dragon-gray">
              Through our partnership with Safe Travels by rescue.co, we ensure that all our travelers have access to emergency medical services, security assistance, and comprehensive travel protection throughout their journey in East Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeTravels;
