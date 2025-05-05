
import React from 'react';
import { generateProgramBrochure } from '@/utils/pdfGenerator';
import BrochureHeader from './program-brochure/BrochureHeader';
import BrochureDescription from './program-brochure/BrochureDescription';
import BrochureInformation from './program-brochure/BrochureInformation';

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
      <BrochureHeader title={program.title} onDownload={handleDownload} />
      <BrochureDescription />
      <BrochureInformation />
    </div>
  );
};

export default ProgramBrochure;
