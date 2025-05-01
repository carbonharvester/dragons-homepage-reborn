
import React from 'react';
import { Button } from "@/components/ui/button";
import { generateProgramBrochure } from '@/utils/pdfGenerator';
import { Book, Download } from 'lucide-react';

interface ProgramData {
  title: string;
  description?: string;
  duration?: string;
  season?: string;
  location?: string;
  goals?: string[];
}

interface ProgramBrochureProps {
  program: ProgramData;
}

const ProgramBrochure = ({ program }: ProgramBrochureProps) => {
  const handleDownload = () => {
    const pdf = generateProgramBrochure(program.title, program);
    pdf.save(`${program.title.toLowerCase().replace(/\s+/g, '-')}-brochure.pdf`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Book className="h-6 w-6 text-dragon mr-2" />
          <h3 className="text-xl font-bold text-dragon-dark">Program Brochure</h3>
        </div>
        <Button 
          onClick={handleDownload} 
          className="flex items-center gap-2 bg-dragon hover:bg-dragon-dark text-white"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>
      
      <div className="p-4 bg-dragon-beige rounded-md mb-4">
        <p className="text-dragon-gray">
          Download our comprehensive program brochure to learn more about the Food For Education project, 
          including detailed itinerary, program goals, and what to expect during your experience with Kapes Adventures.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-bold text-dragon-dark mb-2">What's Included:</h4>
          <ul className="list-disc list-inside text-dragon-gray space-y-1">
            <li>Program overview and background</li>
            <li>Day-by-day itinerary details</li>
            <li>Project goals and outcomes</li>
            <li>Location information</li>
            <li>Contact information</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-dragon-dark mb-2">Perfect For:</h4>
          <ul className="list-disc list-inside text-dragon-gray space-y-1">
            <li>School administrators</li>
            <li>Teachers planning field trips</li>
            <li>Students interested in sustainable agriculture</li>
            <li>Parents wanting to learn more</li>
            <li>Partner organizations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramBrochure;
