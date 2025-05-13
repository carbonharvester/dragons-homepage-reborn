
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HomeVideoSection from '@/components/HomeVideoSection';
import ProgramsSection from '@/components/ProgramsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import BlogSection from '@/components/BlogSection';
import PodcastSection from '@/components/PodcastSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import IntroSection from '@/components/home/IntroSection';
import useSectionVisibility from '@/hooks/useSectionVisibility';

const Index = () => {
  const sectionIds = ['video-section', 'programs', 'why-choose-us', 'blog-section'];
  const sectionsVisible = useSectionVisibility(sectionIds);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      
      <main>
        <Hero />
        
        <div id="video-section">
          {sectionsVisible['video-section'] && 
            <HomeVideoSection 
              videoUrl="https://res.cloudinary.com/dng12bd0a/video/upload/v1747145204/kapes_impact_adventures_1080p_zxggqx.mp4" 
              title="Kapes Impact Adventures" 
              description="Watch how our immersive programs transform students through cultural exchange and authentic experiences." 
            />
          }
        </div>
        
        <IntroSection />
        
        <div id="programs">
          {sectionsVisible['programs'] && <ProgramsSection />}
        </div>
        
        <div id="why-choose-us">
          {sectionsVisible['why-choose-us'] && <WhyChooseUs />}
        </div>
        
        <PodcastSection />
        
        <div id="blog-section">
          {sectionsVisible['blog-section'] && <BlogSection />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
