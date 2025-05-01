
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import ProgramsSection from '@/components/ProgramsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <div className="py-16 bg-white">
          <div className="container-wide text-center">
            <h2 className="section-heading">Experience Learning Through Adventure</h2>
            <p className="section-subheading mx-auto">Since 2023, we've specialised in immersive experiences that combine authentic cultural engagement, wilderness exploration, and transformative education, with social impact and sustainability.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-dragon mb-2">5</p>
                <p className="text-dragon-gray text-center">Life Changing Experiences</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-dragon mb-2">70+</p>
                <p className="text-dragon-gray text-center">Students</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-dragon mb-2">100+</p>
                <p className="text-dragon-gray text-center">Programme Leaders</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-dragon mb-2">10,000+</p>
                <p className="text-dragon-gray text-center">Alumni Worldwide</p>
              </div>
            </div>
          </div>
        </div>
        <ProgramsSection />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>;
};

export default Index;
