
import React from 'react';

const ProgramsIntro = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-academy text-dragon-dark mb-4">
        Explore Our Programs
      </h2>
      <p className="text-lg text-dragon-gray max-w-3xl mx-auto">Our programs create meaningful educational experiences through cultural immersion, service learning, and authentic engagement with local communities—empowering both students and communities with lasting change.</p>
      
      {/* Enhanced introduction */}
      <div className="mt-8 mb-12 bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto text-left">
        <p className="mb-4">At Kapes Adventures, we believe educational travel should be transformative, ethical, and impactful. Our programs in Africa aren't just trips—they're life-changing journeys that connect students with vibrant cultures, resilient communities, and global challenges.</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-dragon mb-2">Beyond Tourism</h4>
            <p className="text-dragon-gray">Unlike conventional educational tours, our programs focus on deep cultural immersion and meaningful contribution. Students live and work alongside communities, building authentic relationships that go beyond the typical tourist experience.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-dragon mb-2">Measurable Impact</h4>
            <p className="text-dragon-gray">Each program addresses community-identified needs, from supporting women's microfinance initiatives to implementing sustainable agriculture. We create tangible, lasting change that continues long after students return home.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-dragon mb-2">African-Centered</h4>
            <p className="text-dragon-gray">Our programs challenge dominant narratives by highlighting local innovation, expertise, and leadership. We partner with African educators, entrepreneurs, and changemakers who mentor students, ensuring authentic perspectives shape every experience.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-dragon mb-2">Personal Transformation</h4>
            <p className="text-dragon-gray">Students return with more than photos—they gain critical thinking, cross-cultural competence, and global citizenship that shape their academic and career paths for years to come.</p>
          </div>
        </div>
        
        <p className="text-dragon-dark font-medium">Whether you're a a teacher looking for impactful school trips, a student seeking a transformative summer experience, or an adult pursuing meaningful travel, our programs provide the perfect balance of learning, cultural exchange, and purposeful engagement.</p>
      </div>
    </div>
  );
};

export default ProgramsIntro;
