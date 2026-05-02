
import React from 'react';
import { Button } from "@/components/ui/button";
import { Book, Download } from 'lucide-react';

interface BrochureHeaderProps {
  title: string;
  onDownload: () => void;
}

const BrochureHeader = ({ title, onDownload }: BrochureHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <Book className="h-6 w-6 text-dragon mr-2" />
        <h3 className="text-xl font-bold text-dragon-dark">Program Brochure</h3>
      </div>
      <Button 
        onClick={onDownload} 
        className="flex items-center gap-2 bg-dragon hover:bg-dragon-dark text-white"
      >
        <Download className="h-4 w-4" />
        Download PDF
      </Button>
    </div>
  );
};

export default BrochureHeader;
