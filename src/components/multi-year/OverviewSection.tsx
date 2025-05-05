
import React from 'react';
import { Badge } from '@/components/ui/badge';

const OverviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-2">Program Overview</h2>
          <div className="w-20 h-1 bg-dragon-yellow mb-6"></div>
          <p className="text-lg text-dragon-gray mb-8">
            Our Multi-Year Curriculum is designed to provide students with a progressive educational journey that builds skills, 
            confidence, and global citizenship over three transformative years. Each year, students engage in increasingly complex 
            challenges and experiences that deepen their understanding of global issues and their capacity to make a difference.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-dragon-yellow">
              <Badge className="mb-3 bg-dragon-yellow text-dragon-dark">Year 1</Badge>
              <h3 className="text-xl font-bold mb-2">Foundation</h3>
              <p>Students build fundamental skills in cross-cultural communication, team collaboration, and basic project management.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-dragon-yellow">
              <Badge className="mb-3 bg-dragon-yellow text-dragon-dark">Year 2</Badge>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p>Building on foundational knowledge, students engage in more complex projects and develop leadership capabilities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-dragon-yellow">
              <Badge className="mb-3 bg-dragon-yellow text-dragon-dark">Year 3</Badge>
              <h3 className="text-xl font-bold mb-2">Mastery</h3>
              <p>Students lead initiatives, mentor younger participants, and implement advanced solutions to real-world challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
