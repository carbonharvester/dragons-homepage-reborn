
import React from "react";
import { ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RiskAssessment = () => {
  return (
    <section className="py-12 bg-dragon-beige">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-academy text-dragon-dark mb-6">Risk Assessment</h2>
          
          <Card className="bg-white border border-gray-100 shadow-sm mb-6">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4 bg-dragon-beige p-2 rounded-lg">
                  <ClipboardCheck className="h-8 w-8 text-dragon" />
                </div>
                <div>
                  <p className="text-dragon-gray">
                    Every one of our experiences is thoroughly risk-assessed prior to commencement, and all existing 
                    experiences have their risk assessments updated on an annual basis, or after an event (such as a 
                    season or weather change, or a natural incident that requires a reassessment). Our risk assessments 
                    are detailed, and form the basis of our standard and emergency operating procedures.
                  </p>
                  <p className="text-dragon-gray mt-4 font-semibold">
                    Risk assessments can be shared upon request.
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

export default RiskAssessment;
