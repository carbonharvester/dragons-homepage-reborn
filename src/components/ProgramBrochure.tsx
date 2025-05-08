
import React from 'react';
import { generateProgramBrochure } from '@/utils/pdfGenerator';
import BrochureHeader from './program-brochure/BrochureHeader';
import BrochureDescription from './program-brochure/BrochureDescription';
import BrochureInformation from './program-brochure/BrochureInformation';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  pdfLink?: string;
}

const ProgramBrochure = ({ program, pdfLink }: ProgramBrochureProps) => {
  const isMobile = useIsMobile();
  
  const handleDownload = () => {
    if (pdfLink) {
      // Open the direct PDF link in a new tab
      window.open(pdfLink, '_blank');
    } else {
      // Generate PDF if no direct link is provided
      const pdf = generateProgramBrochure(program.title, program);
      pdf.save(`${program.title.toLowerCase().replace(/\s+/g, '-')}-brochure.pdf`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-10">
      {!isMobile && (
        <BrochureHeader title={program.title} onDownload={handleDownload} />
      )}
      
      {isMobile && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-dragon-dark">Program Brochure</h3>
        </div>
      )}
      
      <BrochureDescription />
      
      {isMobile && (
        <Button 
          onClick={handleDownload} 
          className="flex w-full items-center justify-center gap-2 mb-6 bg-dragon hover:bg-dragon-dark text-white"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      )}
      
      <BrochureInformation />
    </div>
  );
};

export default ProgramBrochure;
