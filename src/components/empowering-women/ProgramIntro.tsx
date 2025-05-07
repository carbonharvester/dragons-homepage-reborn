
import React from 'react';
import { Droplet } from 'lucide-react';
import { programData } from './data';

const ProgramIntro = () => {
  return (
    <div className="prose max-w-none mb-8">
      <p className="text-lg mb-4">
        Join Kapes Adventures in Tsavo, Kenya, to experience the water challenges faced by rural women and support 
        life-changing water access initiatives. Walk alongside local women during a water collection journey, participate 
        in water tank installation, and discover how access to clean water transforms families and communities.
      </p>
      
      <p className="mb-4">
        Based near Voi in the Tsavo Conservancy, this immersive 8-day journey combines a Tsavo safari and a hike 
        with meaningful cultural exchange. Students will participate in the daily lives of rural Kenyan women, learning about 
        the water challenges they face and contributing to sustainable solutions through water tank installation.
      </p>
      
      <div className="bg-dragon-beige p-6 rounded-lg my-8">
        <h3 className="text-xl font-bold text-dragon-dark mb-3">The Water Access Challenge</h3>
        <p className="text-dragon-gray m-0">
          In rural Kenyan communities near Tsavo, women and their families often face significant barriers to accessing clean water. 
          Women and girls typically bear the responsibility of fetching water, walking long distances (sometimes 5–10 km daily) to 
          rivers or unreliable sources, which exposes them to health risks (e.g., waterborne diseases like cholera) and safety 
          concerns (e.g., wildlife encounters in areas like Tsavo). This burden limits their time for education, 
          income-generating activities, or family care, perpetuating cycles of poverty and gender inequality.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-dragon-dark mt-8 mb-4">Trip Goals</h2>
      <ul className="list-disc pl-5 space-y-2">
        {programData.goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>

      <div className="bg-dragon-beige p-6 rounded-lg my-8">
        <h3 className="text-xl font-bold text-dragon-dark mb-3">Direct Community Impact</h3>
        <div className="flex items-start gap-3">
          <Droplet className="w-6 h-6 text-dragon mt-1 flex-shrink-0" />
          <p className="text-dragon-gray m-0">
            Each student's trip directly contributes to the installation of water tanks in the local community. 
            Your participation helps create immediate positive change by providing reliable access to clean water, 
            reducing the daily burden on women and girls, and improving health outcomes for entire families.
          </p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-dragon-dark mt-8 mb-4">Educational Value</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Kapes Cultural Impact Certificate:</strong> Awarded for completing a reflective journal or group presentation</li>
        <li><strong>CAS Points (IB):</strong> Contributes to Service (water tank installation), Creativity (crafting, mural painting), and Activity (hiking, safari)</li>
        <li><strong>Duke of Edinburgh's Award:</strong> Aligns with Silver Award's Volunteering, Physical, and Skills components</li>
      </ul>
    </div>
  );
};

export default ProgramIntro;
