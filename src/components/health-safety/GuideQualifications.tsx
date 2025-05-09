
import React from "react";
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import BulletList from "@/components/ui/BulletList";

const GuideQualifications = () => {
  const qualifications = [
    {
      content: "All of our guides are qualified to a high standard, as well as to a legal standard, in the jurisdiction they operate in. For example, our Nepal trekking guides will be trained in wilderness and mountain first aid, as well as trained by the Nepal government to be competent and safe trekking guides and leaders."
    },
    {
      content: "Similarly, any of our guides working in a water environment will have water based qualifications and certification."
    },
    {
      content: "All of our guides have been vetted to be suitable to work with minors."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-academy text-dragon-dark mb-6">Our Guides</h2>
          
          <Card className="bg-dragon-beige border border-gray-100 shadow-sm mb-6">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4 bg-white p-2 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-dragon" />
                </div>
                <div>
                  <BulletList 
                    items={qualifications} 
                    bulletColor="text-dragon"
                    contentClassName="text-dragon-gray mb-4"
                  />
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
