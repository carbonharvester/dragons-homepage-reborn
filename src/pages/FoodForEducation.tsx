
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TripBrochure from '@/components/TripBrochure';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { EditableText } from '@/components/ui/editable-text';

const FoodForEducation = () => {
  // State for editable mode
  const [editMode, setEditMode] = useState(false);
  // State for SEO content
  const [seoTitle, setSeoTitle] = useState("Food For Education Program");
  const [seoDesc, setSeoDesc] = useState("Explore sustainable food systems and contribute to food security initiatives while learning about traditional and modern agricultural practices in Kenya.");
  const [seoKeywords, setSeoKeywords] = useState("food security, sustainable agriculture, educational travel, Kenya, food systems");
  
  // Toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={seoTitle}
        description={seoDesc}
        keywords={seoKeywords}
      />
      <Header />
      
      {/* Admin controls - only visible in development or for admins */}
      <div className="bg-slate-800 text-white py-2 px-4 flex justify-end">
        <Button 
          variant={editMode ? "destructive" : "default"}
          onClick={toggleEditMode}
          size="sm"
        >
          {editMode ? "Exit Edit Mode" : "Edit Content"}
        </Button>
      </div>
      
      <main>
        {/* SEO Fields Editor */}
        {editMode && (
          <div className="container mx-auto p-6 bg-white rounded-lg shadow-md my-6">
            <h2 className="text-xl font-bold mb-4">Edit SEO Information</h2>
            <div className="space-y-4">
              <EditableText 
                defaultValue={seoTitle}
                onChange={setSeoTitle}
                label="Page Title"
              />
              <EditableText 
                defaultValue={seoDesc}
                onChange={setSeoDesc}
                label="Meta Description"
                multiline
                rows={2}
              />
              <EditableText 
                defaultValue={seoKeywords}
                onChange={setSeoKeywords}
                label="Keywords (comma separated)"
              />
            </div>
          </div>
        )}
        
        <TripBrochure />
      </main>
      <Footer />
    </div>
  );
};

export default FoodForEducation;
