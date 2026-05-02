
import React from "react";
import { Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const OurPartner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-academy text-dragon-dark mb-6">Our Partner</h2>
          
          <Card className="bg-dragon-beige border border-gray-100 shadow-sm mb-6">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4 bg-white p-2 rounded-lg">
                  <Building2 className="h-8 w-8 text-dragon" />
                </div>
                <div>
                  <p className="text-dragon-gray">
                    In Kenya we are partnered on the ground by Savage Wilderness, who were established in 1990, and it has grown into Kenya's top outdoor adventure provider, facilitating adventure trips to all ends of Kenya.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
