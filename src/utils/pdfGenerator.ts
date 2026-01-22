
import jsPDF from 'jspdf';

export const generateProgramBrochure = (programName: string, programData: any) => {
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
  pdf.text(programName, 20, 20);
  
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
  const description = programData.description || 'A permaculture farm project addressing food insecurity through sustainable agriculture and education programmes.';
  
  // Handle line breaks for long text
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
  pdf.text(`Duration: ${programData.duration || '5-7 Days'}`, 20, yPosition);
  yPosition += 7;
  pdf.text(`Season: ${programData.season || 'Jan-Nov'}`, 20, yPosition);
  yPosition += 7;
  pdf.text(`Location: ${programData.location || 'Nairobi, Kenya'}`, 20, yPosition);
  yPosition += 15;
  
  // Add program goals section
  pdf.setFontSize(12);
  pdf.setTextColor(primaryColor);
  pdf.text('Program Goals:', 20, yPosition);
  yPosition += 10;
  
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  
  const goals = programData.goals || [
    'Establish pilot farm focused on onions and tomatoes',
    'Supply produce for school meals to address hunger',
    'Create sustainable farming systems using permaculture',
    'Educate and empower students to address food insecurity'
  ];
  
  goals.forEach(goal => {
    pdf.text(`• ${goal}`, 20, yPosition);
    yPosition += 7;
  });
  
  yPosition += 8;
  
  // Add itinerary section
  pdf.setFontSize(12);
  pdf.setTextColor(primaryColor);
  pdf.text('Sample Itinerary:', 20, yPosition);
  yPosition += 10;
  
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  
  const days = [
    { day: 'Day 1', activity: 'Arrival in Nairobi and orientation' },
    { day: 'Day 2', activity: 'Visit to Seeds2Education facilities' },
    { day: 'Day 3', activity: 'Water harvesting and composting systems setup' },
    { day: 'Day 4', activity: 'Vegetable beds preparation and planting' },
    { day: 'Day 5', activity: 'Project completion and handover ceremony' }
  ];
  
  days.forEach(({ day, activity }) => {
    pdf.text(`${day}: ${activity}`, 20, yPosition);
    yPosition += 7;
  });
  
  yPosition += 15;
  
  // Add footer
  pdf.setFontSize(10);
  pdf.setTextColor(primaryColor);
  pdf.text('Contact us for more information:', 20, yPosition);
  yPosition += 7;
  pdf.text('Email: hello@kapesadventures.com', 20, yPosition);
  yPosition += 7;
  pdf.text('Website: www.kapesadventures.com', 20, yPosition);
  
  // Add page number
  pdf.setFontSize(8);
  pdf.text(`Generated on ${new Date().toLocaleDateString()}`, 20, 287);
  pdf.text('Page 1 of 1', 180, 287);
  
  return pdf;
};
