
import React from "react";
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GuideQualifications = () => {
  return (
    <section className="py-12 bg-dragon-beige">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-academy text-dragon-dark mb-6">Our Guides</h2>
          
          <Card className="bg-white border border-gray-100 shadow-sm mb-6">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4 bg-dragon-beige p-2 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-dragon" />
                </div>
                <div>
                  <p className="text-dragon-gray">
                    All of our guides are qualified to a high standard, as well as to a legal standard, in the jurisdiction they operate in. 
                    For example, our East African safari guides are trained in wilderness first aid and have extensive knowledge of local wildlife, 
                    geography, and safety protocols. Similarly, any of our guides working in water environments have appropriate water-based 
                    qualifications and certification. All of our guides have been vetted to be suitable to work with minors and undergo 
                    regular training to maintain their expertise in the areas they guide.
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

export default GuideQualifications;
