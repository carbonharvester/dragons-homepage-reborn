
import React from "react";
import { Info } from "lucide-react";
import BulletList from "@/components/ui/BulletList";

const HealthInformation = () => {
  const vaccinationItems = [
    { content: "Yellow Fever: Required for entry for many travelers", strongText: "Yellow Fever:" },
    { content: "Malaria Prevention: Medication is often recommended", strongText: "Malaria Prevention:" },
    { content: "Routine Vaccinations: Ensure they're up-to-date (MMR, DPT, etc.)", strongText: "Routine Vaccinations:" },
    { content: "Additional Recommendations: Hepatitis A, Hepatitis B, Typhoid, and others based on individual factors", strongText: "Additional Recommendations:" },
  ];

  const healthConsiderationItems = [
    { content: "Allergies (food, environmental, medications)" },
    { content: "Dietary restrictions and requirements" },
    { content: "Chronic health conditions" },
    { content: "Mobility limitations" },
    { content: "Medications" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Info className="h-8 w-8 text-dragon mr-3" />
            <h2 className="text-3xl font-academy text-dragon-dark">Health Information</h2>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-academy text-dragon-dark mb-4">Vaccinations and Medications</h3>
            <p className="text-dragon-gray mb-5">
              We recommend consulting a travel health specialist or physician at least 8 weeks before departure to discuss vaccinations and medications for travel to Kenya. Common requirements and recommendations include:
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
              <BulletList 
                items={vaccinationItems} 
                contentClassName="text-dragon-gray"
              />
            </div>
            
            <p className="text-dragon-gray">
              For the most current health information, visit the <a href="https://wwwnc.cdc.gov/travel/destinations/traveler/none/kenya" target="_blank" rel="noopener noreferrer" className="text-dragon hover:underline">CDC's Kenya travel page</a> or consult with a travel medicine specialist.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-academy text-dragon-dark mb-4">Medical Facilities</h3>
            <p className="text-dragon-gray">
              Quality medical facilities are available in major urban centers like Nairobi. Our programs ensure access to trusted medical providers throughout the journey, and all participants must have comprehensive travel insurance, including emergency medical and evacuation coverage.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-academy text-dragon-dark mb-4">Special Health Considerations</h3>
            <p className="text-dragon-gray mb-5">
              We support participants with various health needs. Please inform us during registration about:
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <BulletList items={healthConsiderationItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthInformation;
