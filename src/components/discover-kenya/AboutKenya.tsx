
import React from "react";
import { Earth } from "lucide-react";
const AboutKenya = () => {
  // Add a random query parameter to force image reload
  const imgTimestamp = Date.now();
  return <section className="py-16">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Earth className="h-8 w-8 text-dragon mr-3" />
            <h2 className="text-3xl font-bold text-dragon-dark">About Kenya</h2>
          </div>
          
          <div className="prose max-w-none text-dragon-gray">
            <p>Located in East Africa, Kenya straddles the equator, bordering Somalia, Ethiopia, South Sudan, Uganda, Tanzania, and the Indian Ocean. It's a land of extraordinary diversity, from coral reefs and tropical beaches to savannah grasslands, highland plateaus, and snow-capped mountains.

          </p>
            
            <p>
              With a population of about 54 million, Kenya is home to over 40 ethnic groups, each with unique languages and traditions. This rich cultural tapestry, paired with stunning landscapes and wildlife, makes Kenya an unparalleled destination for educational travel.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div>
                <img src={`https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2000&auto=format&fit=crop&t=${imgTimestamp}`} alt="Great Rift Valley landscape" className="rounded-lg shadow-md w-full h-64 object-cover" />
                <p className="text-sm text-dragon-gray mt-2 text-center italic">
                  The Great Rift Valley, Kenya
                </p>
              </div>
              <div>
                <img src={`https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2000&auto=format&fit=crop&t=${imgTimestamp}`} alt="Maasai cultural experience" className="rounded-lg shadow-md w-full h-64 object-cover" />
                <p className="text-sm text-dragon-gray mt-2 text-center italic">
                  Traditional Maasai Cultural Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutKenya;
