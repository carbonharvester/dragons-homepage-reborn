
import React from "react";
import { Info } from "lucide-react";

const HealthInformation = () => {
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
              <ul className="space-y-3 text-dragon-gray">
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span><strong>Yellow Fever:</strong> Required for entry for many travelers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span><strong>Malaria Prevention:</strong> Medication is often recommended</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span><strong>Routine Vaccinations:</strong> Ensure they're up-to-date (MMR, DPT, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span><strong>Additional Recommendations:</strong> Hepatitis A, Hepatitis B, Typhoid, and others based on individual factors</span>
                </li>
              </ul>
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
              <ul className="space-y-3 text-dragon-gray">
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span>Allergies (food, environmental, medications)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span>Dietary restrictions and requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span>Chronic health conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span>Mobility limitations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span>Medications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthInformation;
