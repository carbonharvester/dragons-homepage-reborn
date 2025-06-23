
import React from 'react';
import { generateProgramBrochure } from '@/utils/pdfGenerator';
import BrochureHeader from './program-brochure/BrochureHeader';
import BrochureDescription from './program-brochure/BrochureDescription';
import BrochureInformation from './program-brochure/BrochureInformation';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from '@/components/ui/sonner';

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
    try {
      console.log('Download requested for:', pdfLink || 'generated PDF');
      
      if (pdfLink) {
        // Open PDF in new window/tab
        window.open(pdfLink, '_blank');
        
        // Also attempt direct download by creating an anchor with target="_blank"
        const anchor = document.createElement('a');
        anchor.href = pdfLink;
        anchor.target = '_blank';
        anchor.download = `${program.title.toLowerCase().replace(/\s+/g, '-')}-brochure.pdf`;
        
        // Append to the document, trigger download, and remove the element
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        
        // Show success toast
        toast.success('Opening PDF brochure in new window');
      } else {
        // Generate PDF if no direct link is provided
        const pdf = generateProgramBrochure(program.title, program);
        pdf.save(`${program.title.toLowerCase().replace(/\s+/g, '-')}-brochure.pdf`);
        
        // Show success toast
        toast.success('Generated PDF brochure');
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
      toast.error('Could not download brochure. Please try again.');
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
