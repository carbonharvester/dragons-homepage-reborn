
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Info, ShieldCheck } from "lucide-react";

const HealthAndSafety = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-dragon-beige py-12">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-academy text-dragon-dark mb-4">Health and Safety</h1>
            <p className="text-lg text-dragon-gray max-w-3xl">
              Your wellbeing is our top priority. Learn how we ensure a safe, transformative experience during our educational travel programs.
            </p>
          </div>
        </section>

        {/* Safety Approach */}
        <section className="py-12">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <ShieldCheck className="h-8 w-8 text-dragon mr-3" />
                <h2 className="text-3xl font-academy text-dragon-dark">Our Safety Approach</h2>
              </div>
              
              <p className="text-dragon-gray mb-6">
                At Kapes Adventures, safety is at the heart of everything we do. We follow international best practices in educational travel to ensure all participants enjoy a secure, meaningful experience.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-dragon-dark mb-4 font-academy">Pre-Departure Preparation</h3>
                  <ul className="space-y-3 text-dragon-gray">
                    <li className="flex items-start">
                      <span className="text-dragon mr-2">•</span>
                      <span>Comprehensive pre-departure orientation sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dragon mr-2">•</span>
                      <span>Detailed health and safety information packets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dragon mr-2">•</span>
                      <span>Access to travel health resources and advice</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dragon mr-2">•</span>
                      <span>Guidance on required documents and preparations</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-dragon-dark mb-4 font-academy">On-Program Support</h3>
                  <ul className="space-y-3 text-dragon-gray">
                    <li className="flex items-start">
                      <span className="text-dragon mr-2">•</span>
                      <span>Experienced guides and educators with safety training</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dragon mr-2">•</span>
                      <span>24/7 emergency support system</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dragon mr-2">•</span>
                      <span>Vetted accommodations and transportation providers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dragon mr-2">•</span>
                      <span>Ongoing risk assessment and management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Information */}
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

        {/* Safety Guidelines */}
        <section className="py-12">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-academy text-dragon-dark mb-6">Safety Guidelines</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-academy text-dragon-dark mb-4">General Safety Practices</h3>
                <p className="text-dragon-gray mb-5">
                  Our programs prioritize these essential safety practices:
                </p>
                
                <div className="space-y-5">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-dragon-dark mb-2 font-academy">Group Travel</h4>
                    <p className="text-dragon-gray">
                      Participants travel in groups supervised by experienced staff familiar with the local area and culture.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-dragon-dark mb-2 font-academy">Communication</h4>
                    <p className="text-dragon-gray">
                      All groups have access to reliable communication methods, including local phones and satellite communication in remote areas.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-dragon-dark mb-2 font-academy">Accommodations</h4>
                    <p className="text-dragon-gray">
                      We use vetted accommodations that meet our safety, cleanliness, and security standards.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-dragon-dark mb-2 font-academy">Transportation</h4>
                    <p className="text-dragon-gray">
                      All transportation providers and vehicles are carefully selected and maintained to ensure safety and reliability.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <h3 className="text-xl font-academy text-dragon-dark mb-4">Have More Questions About Health and Safety?</h3>
                <p className="text-dragon-gray mb-5">
                  Our team is ready to address any concerns about our programs.
                </p>
                <div className="flex justify-center">
                  <a href="/faq" className="btn-secondary">
                    Visit FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HealthAndSafety;
