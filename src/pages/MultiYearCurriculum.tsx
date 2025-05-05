
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import TripCTA from '@/components/trip/TripCTA';
import MultiYearCurriculum from '@/components/programs/MultiYearCurriculum';
import { multiYearProgram } from '@/data/programsData';
import HeroSection from '@/components/multi-year/HeroSection';
import OverviewSection from '@/components/multi-year/OverviewSection';
import ProgramStructureSection from '@/components/multi-year/ProgramStructureSection';
import { Button } from '@/components/ui/button';
import { EditText, pencil } from 'lucide-react';
import { EditableText } from '@/components/ui/editable-text';

const MultiYearCurriculumPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add a random query parameter to force image reload
  const imgTimestamp = Date.now();
  
  // State for editable content
  const [isEditing, setIsEditing] = useState(false);
  const [programTitle, setProgramTitle] = useState(multiYearProgram.title);
  const [programSubtitle, setProgramSubtitle] = useState(multiYearProgram.subtitle);
  const [programDescription, setProgramDescription] = useState(multiYearProgram.description);
  
  // Create a modified copy of multiYearProgram with updated text
  const editableProgram = {
    ...multiYearProgram,
    title: programTitle,
    subtitle: programSubtitle,
    description: programDescription,
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Multi-Year Curriculum" 
        description="A progressive three-year educational travel program that builds global citizenship skills through immersive experiences in Africa." 
        keywords="multi-year curriculum, educational travel, global citizenship, student development, progressive learning, africa travel" 
      />
      <Header />
      <main>
        <HeroSection imgTimestamp={imgTimestamp} />
        <OverviewSection />
        <ProgramStructureSection />
        
        {/* Editing Controls */}
        <div className="container-wide py-8">
          <div className="flex justify-end mb-4">
            <Button 
              variant={isEditing ? "default" : "outline"} 
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2"
            >
              <pencil size={16} /> {isEditing ? "Save Changes" : "Edit Content"}
            </Button>
          </div>
          
          {isEditing && (
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl mb-4">Edit Program Details</h3>
              <div className="space-y-4">
                <EditableText 
                  label="Program Title" 
                  defaultValue={programTitle} 
                  onChange={setProgramTitle}
                />
                <EditableText 
                  label="Program Subtitle" 
                  defaultValue={programSubtitle} 
                  onChange={setProgramSubtitle}
                />
                <EditableText 
                  label="Program Description" 
                  multiline={true} 
                  rows={4}
                  defaultValue={programDescription} 
                  onChange={setProgramDescription}
                />
              </div>
            </div>
          )}
        </div>
        
        {/* Full curriculum details */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <MultiYearCurriculum data={isEditing ? editableProgram : multiYearProgram} />
          </div>
        </section>

        <TripCTA />
      </main>
      <Footer />
    </div>
  );
};

export default MultiYearCurriculumPage;
