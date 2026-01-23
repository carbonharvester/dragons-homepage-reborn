
import React from 'react';
import jsPDF from 'jspdf';
import { brochureData } from './data/brochure';
import { Book, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

const CapturingKenyaBrochure = () => {
  const handleDownloadCustomBrochure = () => {
    try {
      const pdf = generateCapturingKenyaBrochure();
      pdf.save('capturing-kenya-program-brochure.pdf');
      toast.success('Downloaded Capturing Kenya brochure');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate brochure. Please try again.');
    }
  };
  
  // Enhanced PDF generator specifically for Capturing Kenya program
  const generateCapturingKenyaBrochure = () => {
    // Initialize PDF document
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });
    
    // Define colors
    const primaryColor = '#1A6D50'; // dragon green
    const secondaryColor = '#F5B82E'; // dragon yellow
    
    // Add title
    pdf.setFontSize(24);
    pdf.setTextColor(primaryColor);
    pdf.text(brochureData.title, 20, 20);
    
    // Add Kapes Adventures logo text
    pdf.setFontSize(16);
    pdf.setTextColor(primaryColor);
    pdf.text('Kapes Adventures', 20, 30);
    
    // Add divider
    pdf.setDrawColor(secondaryColor);
    pdf.setLineWidth(0.5);
    pdf.line(20, 35, 190, 35);
    
    // Add program description
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text('Program Overview:', 20, 45);
    pdf.setFontSize(10);
    
    // Handle line breaks for long text
    const description = brochureData.description;
    const splitDescription = pdf.splitTextToSize(description, 170);
    pdf.text(splitDescription, 20, 55);
    
    // Add program details
    let yPosition = 70 + (splitDescription.length - 1) * 5;
    
    pdf.setFontSize(12);
    pdf.setTextColor(primaryColor);
    pdf.text('Program Details:', 20, yPosition);
    yPosition += 10;
    
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`Duration: ${brochureData.duration}`, 20, yPosition);
    yPosition += 7;
    pdf.text(`Season: ${brochureData.season}`, 20, yPosition);
    yPosition += 7;
    pdf.text(`Location: ${brochureData.location}`, 20, yPosition);
    yPosition += 7;
    pdf.text(`Ages: 16-20`, 20, yPosition);
    yPosition += 7;
    pdf.text(`Price: $6,950 (plus airfare)`, 20, yPosition);
    yPosition += 15;
    
    // Add program goals section
    pdf.setFontSize(12);
    pdf.setTextColor(primaryColor);
    pdf.text('Program Goals:', 20, yPosition);
    yPosition += 10;
    
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    
    brochureData.goals.forEach(goal => {
      pdf.text(`• ${goal}`, 20, yPosition);
      yPosition += 7;
      
      // Add page break if needed
      if (yPosition > 270) {
        pdf.addPage();
        yPosition = 20;
      }
    });
    
    yPosition += 8;
    
    // Add outcomes section
    pdf.setFontSize(12);
    pdf.setTextColor(primaryColor);
    pdf.text('Program Outcomes:', 20, yPosition);
    yPosition += 10;
    
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    
    brochureData.outcomes.forEach(outcome => {
      pdf.setFontSize(10);
      pdf.setTextColor(0, 0, 0);
      pdf.text(`• ${outcome.title}:`, 20, yPosition);
      yPosition += 5;
      
      const splitOutcomeDesc = pdf.splitTextToSize(outcome.description, 160);
      pdf.text(splitOutcomeDesc, 25, yPosition);
      yPosition += (splitOutcomeDesc.length * 5) + 5;
      
      // Add page break if needed
      if (yPosition > 270) {
        pdf.addPage();
        yPosition = 20;
      }
    });
    
    // Check if we need a page break before itinerary
    if (yPosition > 200) {
      pdf.addPage();
      yPosition = 20;
    }
    
    // Add sample itinerary section
    pdf.setFontSize(12);
    pdf.setTextColor(primaryColor);
    pdf.text('Sample Itinerary:', 20, yPosition);
    yPosition += 10;
    
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    
    brochureData.sampleItinerary.forEach(week => {
      pdf.setFontSize(10);
      pdf.setTextColor(primaryColor);
      pdf.text(week.day, 20, yPosition);
      yPosition += 7;
      
      pdf.setTextColor(0, 0, 0);
      week.activities.forEach(activity => {
        pdf.text(`• ${activity}`, 25, yPosition);
        yPosition += 7;
      });
      
      yPosition += 3;
      
      // Add page break if needed
      if (yPosition > 270) {
        pdf.addPage();
        yPosition = 20;
      }
    });
    
    // Add footer
    pdf.setFontSize(10);
    pdf.setTextColor(primaryColor);
    pdf.text('Contact us for more information:', 20, 270);
    pdf.text('Email: matthew@kapesadventures.com', 20, 277);
    pdf.text('Website: www.kapesadventures.com', 20, 284);
    
    // Add page number
    pdf.setFontSize(8);
    pdf.text(`Generated on ${new Date().toLocaleDateString()}`, 20, 290);
    pdf.text('Kapes Adventures © 2026', 180, 290);
    
    return pdf;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Book className="h-6 w-6 text-dragon mr-2" />
          <h3 className="text-xl font-bold text-dragon-dark">Detailed Program Brochure</h3>
        </div>
        <Button 
          onClick={handleDownloadCustomBrochure} 
          className="flex items-center gap-2 bg-dragon hover:bg-dragon-dark text-white"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>
      
      <div className="p-6 bg-dragon-beige rounded-md mb-6">
        <p className="text-dragon-gray">
          Download our comprehensive program brochure to learn more about Capturing Kenya. This detailed 
          guide includes the full 4-week itinerary, program goals, learning outcomes, and everything 
          you need to know about this unique photography adventure in Kenya.
        </p>
      </div>
      
      <div className="mt-4 space-y-4">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-dragon-beige flex items-center justify-center text-dragon mr-2">1</div>
          <span className="text-dragon-gray">Complete 4-week itinerary with day-by-day activities</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-dragon-beige flex items-center justify-center text-dragon mr-2">2</div>
          <span className="text-dragon-gray">Detailed program objectives and learning outcomes</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-dragon-beige flex items-center justify-center text-dragon mr-2">3</div>
          <span className="text-dragon-gray">Equipment recommendations and preparations</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-dragon-beige flex items-center justify-center text-dragon mr-2">4</div>
          <span className="text-dragon-gray">Program pricing and inclusion details</span>
        </div>
      </div>
    </div>
  );
};

export default CapturingKenyaBrochure;
