
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const WildlifeSection = () => {
  // Add a random query parameter to force image reload
  const imgTimestamp = Date.now();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dragon-dark mb-8">Extraordinary Wildlife</h2>
          
          <p className="text-dragon-gray mb-8">
            Kenya is renowned for its wildlife conservation efforts and is home to some of the most spectacular animal species on the planet. The country boasts 24 national parks, 15 national reserves, and numerous private conservancies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="overflow-hidden">
              <img 
                src={`/lovable-uploads/5c2915df-6fcc-4fd9-a320-7025337ffd6a.png?t=${imgTimestamp}`}
                alt="African elephants" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-dragon-dark">The Big Five</h3>
                <p className="text-sm text-dragon-gray mt-1">
                  Kenya is home to the "Big Five": lions, elephants, buffalos, leopards, and rhinos, making it a premier safari destination.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <img 
                src={`/lovable-uploads/ec51d2d5-5e96-4e9f-b5d6-5627994d2fa5.png?t=${imgTimestamp}`}
                alt="Wildebeest migration" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-dragon-dark">The Great Migration</h3>
                <p className="text-sm text-dragon-gray mt-1">
                  Witness one of nature's most spectacular events as millions of wildebeest and zebras migrate between Kenya and Tanzania.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <img 
                src={`/lovable-uploads/2b64c2a8-18d5-43cc-a376-e32137687104.png?t=${imgTimestamp}`}
                alt="Conservation efforts" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-dragon-dark">Conservation</h3>
                <p className="text-sm text-dragon-gray mt-1">
                  Kenya is a leader in wildlife conservation, with numerous sanctuaries and programs dedicated to protecting endangered species.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WildlifeSection;
