
import React from 'react';

const ProgramStructureSection = () => {
  return (
    <section className="py-16 bg-dragon-beige/30">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-2">Program Structure</h2>
          <div className="w-20 h-1 bg-dragon-yellow mx-auto mb-10"></div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute h-full w-1 bg-dragon-yellow/50 left-1/2 transform -translate-x-1/2"></div>
            
            {/* Year 1 */}
            <div className="relative mb-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold text-dragon mb-3">Year 1: Exploration</h3>
                  <p className="text-dragon-gray">Students are introduced to the fundamentals of global citizenship, cultural immersion, and basic field research techniques. The focus is on observation, reflection, and building foundational skills.</p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-dragon-yellow rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-dragon-dark font-bold">1</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-dragon-yellow">
                    <h4 className="text-lg font-bold mb-2">Key Outcomes</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Development of observation skills</li>
                      <li>Introduction to field research methods</li>
                      <li>Building cultural awareness</li>
                      <li>Team collaboration fundamentals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Year 2 */}
            <div className="relative mb-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                  <div className="bg-white p-6 rounded-lg shadow-md border-r-4 border-dragon-yellow">
                    <h4 className="text-lg font-bold mb-2">Key Outcomes</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Project design and management</li>
                      <li>Intermediate research skills</li>
                      <li>Leadership development</li>
                      <li>Cross-cultural communication</li>
                    </ul>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-dragon-yellow rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-dragon-dark font-bold">2</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
                  <h3 className="text-2xl font-bold text-dragon mb-3">Year 2: Engagement</h3>
                  <p className="text-dragon-gray">Students actively participate in community-based projects, applying their knowledge and developing deeper understanding of global issues. Focus shifts to active engagement and problem-solving.</p>
                </div>
              </div>
            </div>
            
            {/* Year 3 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold text-dragon mb-3">Year 3: Leadership</h3>
                  <p className="text-dragon-gray">Students take on leadership roles, designing and implementing their own projects. They mentor younger students and develop advanced skills in project management, leadership, and impact assessment.</p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-dragon-yellow rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-dragon-dark font-bold">3</span>
                </div>
                
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-dragon-yellow">
                    <h4 className="text-lg font-bold mb-2">Key Outcomes</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Advanced project implementation</li>
                      <li>Mentorship and leadership</li>
                      <li>Impact assessment</li>
                      <li>Post-program planning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramStructureSection;
