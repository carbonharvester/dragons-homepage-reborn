
import React from "react";

const GeographySection = () => {
  // Add a random query parameter to force image reload
  const imgTimestamp = Date.now();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dragon-dark mb-8">Geography and Climate</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold text-dragon-dark mb-4">Diverse Landscapes</h3>
              <ul className="space-y-4 text-dragon-gray">
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <div>
                    <strong>Great Rift Valley</strong>
                    <p className="mt-1">A dramatic feature with lakes, volcanoes, and diverse ecosystems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <div>
                    <strong>Mount Kenya</strong>
                    <p className="mt-1">Africa's second-highest peak at 5,199 meters (17,057 ft)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <div>
                    <strong>Coastal Regions</strong>
                    <p className="mt-1">White sand beaches and coral reefs along the Indian Ocean</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <div>
                    <strong>Savannahs</strong>
                    <p className="mt-1">Expansive grasslands hosting abundant wildlife</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dragon-dark mb-4">Climate</h3>
              <p className="text-dragon-gray mb-4">
                Despite being on the equator, Kenya's climate varies due to elevation and proximity to large bodies of water.
              </p>
              <ul className="space-y-2 text-dragon-gray">
                <li><strong>Highland areas</strong>: Cooler temperatures and moderate rainfall</li>
                <li><strong>Coastal regions</strong>: Hot and humid year-round</li>
                <li><strong>Northern plains</strong>: Hot and arid</li>
                <li><strong>Rainy seasons</strong>: Generally March to May (long rains) and October to December (short rains)</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <img 
              src={`https://images.unsplash.com/photo-1484442292461-bb347c2a216e?q=80&w=2000&auto=format&fit=crop&t=${imgTimestamp}`}
              alt="Savannah landscape" 
              className="rounded-lg shadow-md w-full md:w-[46%] h-64 object-cover"
            />
            <img 
              src={`https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=2000&auto=format&fit=crop&t=${imgTimestamp}`}
              alt="Coastal landscape" 
              className="rounded-lg shadow-md w-full md:w-[46%] h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographySection;
