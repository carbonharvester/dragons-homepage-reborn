
import React from "react";
import { BookOpen } from "lucide-react";

const CultureSection = () => {
  // Add a random query parameter to force image reload
  const imgTimestamp = Date.now();
  
  return (
    <section className="py-16">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dragon-dark mb-8 font-academy">Rich Cultural Heritage</h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/2">
              <img 
                src={`https://images.unsplash.com/photo-1612371093327-05adefc95aab?q=80&w=2000&auto=format&fit=crop&t=${imgTimestamp}`}
                alt="Cultural performance" 
                className="rounded-lg w-full h-64 object-cover mb-4"
              />
              <p className="text-dragon-gray">
                Kenya's cultural landscape is incredibly diverse, with over 40 distinct ethnic groups, each with unique languages, traditions, and customs. From the iconic Maasai and Samburu to the coastal Swahili, Kenya offers a rich tapestry of cultural experiences.
              </p>
            </div>
            
            <div className="md:w-1/2 space-y-4 text-dragon-gray">
              <h3 className="text-xl font-bold text-dragon-dark font-academy">Cultural Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span><strong>Traditional Music and Dance</strong> - Vibrant performances that tell stories of heritage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span><strong>Artistic Traditions</strong> - From intricate beadwork to woodcarving, artisans preserve ancient techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span><strong>Cuisine</strong> - Sample dishes like ugali, nyama choma, and sukuma wiki</span>
                </li>
                <li className="flex items-start">
                  <span className="text-dragon mr-2">•</span>
                  <span><strong>Community Life</strong> - Learn about traditional social structures and modern adaptations</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-dragon-beige p-6 rounded-lg mb-8 border border-dragon-sand">
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-dragon mr-2" />
              <h3 className="text-xl font-bold text-dragon-dark font-academy">Did you know?</h3>
            </div>
            <p className="text-dragon-gray">
              Kenya's official languages are English and Swahili, but over 60 languages are spoken. Many Kenyans speak at least three languages: their ethnic language, Swahili, and English.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
