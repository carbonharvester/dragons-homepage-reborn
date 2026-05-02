
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
            Kenya is renowned for its wildlife conservation and is home to some of the planet's most spectacular species. The country boasts 24 national parks, 15 national reserves, and numerous private conservancies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="overflow-hidden">
              <img 
                src={`https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1000&auto=format&fit=crop&t=${imgTimestamp}`}
                alt="African elephants" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-dragon-dark">The Big Five</h3>
                <p className="text-sm text-dragon-gray mt-1">
                  Kenya is home to the "Big Five"—lions, elephants, buffalos, leopards, and rhinos—making it a premier safari destination.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <img 
                src={`https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop&t=${imgTimestamp}`}
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
                src={`https://images.unsplash.com/photo-1555791752-b2d0ab3c9956?q=80&w=1000&auto=format&fit=crop&t=${imgTimestamp}`}
                alt="Conservation efforts" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-dragon-dark">Conservation</h3>
                <p className="text-sm text-dragon-gray mt-1">
                  Kenya leads in wildlife conservation, with sanctuaries and programs dedicated to protecting endangered species.
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
