
import React from 'react';
import { Heart } from 'lucide-react';
import { programData } from './data';

const ProgramIntro = () => {
  return (
    <div className="prose max-w-none mb-8">
      <p className="text-lg mb-4">
        Join Kapes Adventures in Tsavo, Kenya, to walk in the footsteps of rural women and support Zawadisha's 
        mission to empower lives. Carry a jerry can on a water walk, craft with the Neema Women's Group, and discover 
        how microloans for solar lamps and rainwater tanks transform families.
      </p>
      
      <p className="mb-4">
        Based at Rukinga Camp near Voi in the Tsavo Conservancy, this immersive journey combines a Tsavo safari and a hike 
        with meaningful cultural exchange. Students will participate in the daily lives of rural Kenyan women, learning about 
        the challenges they face and the innovative solutions provided by Zawadisha's microloan program.
      </p>
      
      <h2 className="text-2xl font-bold text-dragon-dark mt-8 mb-4">Program Objectives</h2>
      <ul className="list-disc pl-5 space-y-2">
        {programData.goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>

      <div className="bg-dragon-beige p-6 rounded-lg my-8">
        <h3 className="text-xl font-bold text-dragon-dark mb-3">Direct Community Impact</h3>
        <div className="flex items-start gap-3">
          <Heart className="w-6 h-6 text-dragon mt-1 flex-shrink-0" />
          <p className="text-dragon-gray m-0">
            Each student's trip fee directly funds a Zawadisha microloan for a woman in the Tsavo community. 
            Your participation provides items like solar lamps, rainwater tanks, or clean cookstoves, 
            creating immediate positive change.
          </p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-dragon-dark mt-8 mb-4">Educational Value</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Kapes Cultural Impact Certificate:</strong> Awarded for completing a reflective journal or group presentation</li>
        <li><strong>CAS Points (IB):</strong> Contributes to Service (community engagement), Creativity (crafting, journaling), and Activity (hiking, safari)</li>
        <li><strong>Duke of Edinburgh's Award:</strong> Aligns with Silver Award's Volunteering, Physical, and Skills components</li>
      </ul>
    </div>
  );
};

export default ProgramIntro;
