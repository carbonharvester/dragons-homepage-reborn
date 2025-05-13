
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Award, GraduationCap, Heart } from "lucide-react";

interface Outcome {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ProgramOutcomesProps {
  outcomes: Outcome[];
}

const ProgramOutcomes = ({ outcomes }: ProgramOutcomesProps) => {
  // Get the first outcome for the top row
  const topOutcomes = outcomes.slice(0, 3);
  
  // Get the remaining outcomes for the bottom row
  const bottomOutcomes = outcomes.slice(3);

  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading">Program Outcomes</h2>
          <p className="section-subheading">
            Develop valuable skills, earn recognized credentials, and create lasting impact through the Capturing Kenya program.
          </p>
        </div>

        {/* Top row with 3 outcomes */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {topOutcomes.map((outcome, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-dragon-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <outcome.icon className="h-8 w-8 text-dragon" />
                </div>
                <h3 className="text-xl font-bold text-dragon-dark mb-2">{outcome.title}</h3>
                <p className="text-dragon-gray">{outcome.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom row with 2 outcomes centered */}
        {bottomOutcomes.length > 0 && (
          <div className="flex justify-center gap-6">
            {bottomOutcomes.map((outcome, index) => (
              <Card key={index} className="border-none shadow-md max-w-xs">
                <CardContent className="p-6 text-center">
                  <div className="bg-dragon-beige rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <outcome.icon className="h-8 w-8 text-dragon" />
                  </div>
                  <h3 className="text-xl font-bold text-dragon-dark mb-2">{outcome.title}</h3>
                  <p className="text-dragon-gray">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramOutcomes;
