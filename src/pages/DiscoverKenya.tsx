
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Earth, BookOpen } from "lucide-react";

const DiscoverKenya = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="bg-cover bg-center py-32 relative"
          style={{ backgroundImage: "url('/lovable-uploads/111df4fd-1e0e-41f8-af3c-7460449109f0.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container-wide relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Discover Kenya</h1>
            <p className="text-lg text-white max-w-3xl">
              Explore the incredible diversity of landscapes, wildlife, cultures, and experiences that make Kenya a world-renowned destination for educational travel.
            </p>
          </div>
        </section>

        {/* About Kenya Section */}
        <section className="py-16">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <Earth className="h-8 w-8 text-dragon mr-3" />
                <h2 className="text-3xl font-bold text-dragon-dark">About Kenya</h2>
              </div>
              
              <div className="prose max-w-none text-dragon-gray">
                <p>
                  Located in East Africa, Kenya straddles the equator and borders Somalia, Ethiopia, South Sudan, Uganda, Tanzania, and the Indian Ocean. It's a country of extraordinary geographical diversity, from coral reefs and tropical beaches to savannah grasslands, highland plateaus, and snow-capped mountains.
                </p>
                
                <p>
                  With a population of approximately 54 million people, Kenya is home to more than 40 different ethnic groups, each with their own language and cultural traditions. This rich cultural tapestry, combined with breathtaking landscapes and incredible wildlife, makes Kenya an unparalleled destination for educational travel.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 my-12">
                  <div>
                    <img 
                      src="/lovable-uploads/5de3bb89-b98b-471d-b489-b486b74a96b8.png" 
                      alt="Kenyan landscape" 
                      className="rounded-lg shadow-md w-full h-64 object-cover"
                    />
                    <p className="text-sm text-dragon-gray mt-2 text-center italic">
                      The Great Rift Valley, Kenya
                    </p>
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/e6394583-20d9-4609-8284-6ba2ca500c08.png" 
                      alt="Maasai cultural experience" 
                      className="rounded-lg shadow-md w-full h-64 object-cover"
                    />
                    <p className="text-sm text-dragon-gray mt-2 text-center italic">
                      Traditional Maasai cultural experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wildlife Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-dragon-dark mb-8">Extraordinary Wildlife</h2>
              
              <p className="text-dragon-gray mb-8">
                Kenya is renowned for its wildlife conservation efforts and is home to some of the most spectacular animal species on the planet. The country boasts 24 national parks, 15 national reserves, and numerous private conservancies.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Card className="overflow-hidden">
                  <img 
                    src="/lovable-uploads/f83bb6ef-1a09-47f6-9cee-60b23dd0823c.png" 
                    alt="African elephants" 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold text-dragon-dark">The Big Five</h3>
                    <p className="text-sm text-dragon-gray mt-1">
                      Kenya is home to the "Big Five": lions, elephants, buffalos, leopards, and rhinos, making it a premier safari destination.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <img 
                    src="/lovable-uploads/9754806b-a818-4c3f-bb62-aeffe98e97f5.png" 
                    alt="Wildebeest migration" 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold text-dragon-dark">The Great Migration</h3>
                    <p className="text-sm text-dragon-gray mt-1">
                      Witness one of nature's most spectacular events as millions of wildebeest and zebras migrate between Kenya and Tanzania.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <img 
                    src="/lovable-uploads/fc764836-7162-400c-a486-00fe9d99f975.png" 
                    alt="Conservation efforts" 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold text-dragon-dark">Conservation</h3>
                    <p className="text-sm text-dragon-gray mt-1">
                      Kenya is a leader in wildlife conservation, with numerous sanctuaries and programs dedicated to protecting endangered species.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <p className="text-dragon-gray">
                Our programs often include educational components about wildlife conservation, allowing participants to learn about and contribute to important preservation efforts.
              </p>
            </div>
          </div>
        </section>

        {/* Culture and People */}
        <section className="py-16">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-dragon-dark mb-8">Rich Cultural Heritage</h2>
              
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png" 
                    alt="Cultural performance" 
                    className="rounded-lg w-full h-64 object-cover mb-4"
                  />
                  <p className="text-dragon-gray">
                    Kenya's cultural landscape is incredibly diverse, with more than 40 distinct ethnic groups, each with their own languages, traditions, and customs. From the iconic Maasai and Samburu peoples to the coastal Swahili communities, Kenya offers visitors a rich tapestry of cultural experiences.
                  </p>
                </div>
                
                <div className="md:w-1/2 space-y-4 text-dragon-gray">
                  <h3 className="text-xl font-bold text-dragon-dark">Cultural Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-dragon mr-2">•</span>
                      <span><strong>Traditional Music and Dance</strong> - Experience vibrant performances that tell stories of heritage and celebration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dragon mr-2">•</span>
                      <span><strong>Artistic Traditions</strong> - From intricate beadwork to woodcarving, Kenya's artisans preserve ancient techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dragon mr-2">•</span>
                      <span><strong>Cuisine</strong> - Sample traditional dishes like ugali, nyama choma, and sukuma wiki</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dragon mr-2">•</span>
                      <span><strong>Community Life</strong> - Learn about traditional social structures and how communities are adapting to modern challenges</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-dragon-light p-6 rounded-lg mb-12">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-dragon mr-2" />
                  <h3 className="text-xl font-bold text-dragon-dark">Did you know?</h3>
                </div>
                <p className="text-dragon-gray">
                  Kenya's official languages are English and Swahili, but over 60 languages are spoken throughout the country. Many Kenyans speak at least three languages: their native ethnic language, Swahili, and English.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Geography and Climate */}
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
                        <p className="mt-1">A dramatic geological feature with lakes, volcanoes, and diverse ecosystems</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-dragon mr-2">•</span>
                      <div>
                        <strong>Mount Kenya</strong>
                        <p className="mt-1">Africa's second-highest mountain at 5,199 meters (17,057 ft)</p>
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
                        <p className="mt-1">Expansive grasslands that host abundant wildlife</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-dragon-dark mb-4">Climate</h3>
                  <p className="text-dragon-gray mb-4">
                    Despite being on the equator, Kenya's climate varies significantly due to differences in elevation and proximity to large bodies of water.
                  </p>
                  <ul className="space-y-2 text-dragon-gray">
                    <li><strong>Highland areas</strong>: Cooler temperatures and moderate rainfall</li>
                    <li><strong>Coastal regions</strong>: Hot and humid year-round</li>
                    <li><strong>Northern plains</strong>: Hot and arid</li>
                    <li><strong>Rainy seasons</strong>: Generally March to May (long rains) and October to December (short rains)</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <img 
                  src="/lovable-uploads/2586ddf8-8a65-45ca-ac88-f21c4e930c03.png" 
                  alt="Savannah landscape" 
                  className="rounded-lg shadow-md w-full md:w-[46%] h-64 object-cover"
                />
                <img 
                  src="/lovable-uploads/38402d57-68c0-4b9b-9868-02bb45b85144.png" 
                  alt="Coastal landscape" 
                  className="rounded-lg shadow-md w-full md:w-[46%] h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-dragon-dark text-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Experience Kenya with Kapes Adventures</h2>
              <p className="text-lg mb-8">
                Discover this incredible country through our immersive educational programs, designed to connect you with Kenya's landscapes, wildlife, and cultures in meaningful ways.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/programs/food-for-education" className="btn-primary">
                  Explore Our Programs
                </a>
                <a href="/partner-with-us" className="btn-secondary bg-white text-dragon hover:bg-gray-100">
                  Plan Your Journey
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DiscoverKenya;
