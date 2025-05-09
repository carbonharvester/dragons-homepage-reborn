
import React from "react";
import { Ambulance, Shield, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import VideoPlayer from "@/components/video/VideoPlayer";

const SafeTravels = () => {
  const services = [{
    icon: <Shield className="h-8 w-8 text-dragon" />,
    title: "30-day Protection",
    description: "Fully comprehensive protection throughout your trip."
  }, {
    icon: <MapPin className="h-8 w-8 text-dragon" />,
    title: "Healthcare Facility Locator",
    description: "Real-time healthcare facility and specialists locator system."
  }, {
    icon: <Shield className="h-8 w-8 text-dragon" />,
    title: "Security Escort",
    description: "On-demand security response, including safety escort services."
  }, {
    icon: <MapPin className="h-8 w-8 text-dragon" />,
    title: "Roadside Assistance",
    description: "Towing and breakdown support for your vehicle if you get stuck on the road."
  }, {
    icon: <Ambulance className="h-8 w-8 text-dragon" />,
    title: "Air Rescues",
    description: "Air rescues from remote locations (including mountains) with 7 helicopters and 70 fixed-wing aircraft."
  }, {
    icon: <Shield className="h-8 w-8 text-dragon" />,
    title: "Ground Ambulance",
    description: "Ground ambulance rescue from over 800 response teams."
  }, {
    icon: <Phone className="h-8 w-8 text-dragon" />,
    title: "24/7 Dispatch",
    description: "24/7 dispatch and medical concierge for emergency and medical advice."
  }];

  return <section className="py-12 bg-white">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-academy text-dragon-dark mb-6">Our Cover Includes:</h2>
          
          <div className="bg-dragon-beige p-6 rounded-lg mb-8">
            <p className="text-dragon-gray mb-4">To provide piece of mind and assurance in the unlikely event that something was to occur, we are partnered with Safe Travels by rescue.co to provide comprehensive protection for all our travellers. Safe Travels is the only fully comprehensive protection to include both ground and air rescue cover across East Africa.</p>
            
            
          </div>
          
          <div className="mb-12">
            <VideoPlayer videoId="g5D8nP4urcg" title="Safe Travels by Rescue.co" />
          </div>
          
          <h3 className="text-2xl font-academy text-dragon-dark mb-6">All Our Plans Include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {services.map((service, index) => <Card key={index} className="bg-white border border-gray-100 shadow-sm">
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
              </Card>)}
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
    </section>;
};

export default SafeTravels;
