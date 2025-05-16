
import React from 'react';
import { Book, Globe, User, ShieldCheck, FileText, Umbrella } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const ResourcesPage = () => {
  const navigate = useNavigate();
  
  const resourceCategories = [
    {
      id: 'cultural',
      title: 'Cultural Guide',
      icon: Globe,
      color: 'bg-blue-100 text-blue-600',
      description: 'Local customs, language phrases, and etiquette',
    },
    {
      id: 'safety',
      title: 'Health & Safety',
      icon: ShieldCheck,
      color: 'bg-green-100 text-green-600',
      description: 'Emergency contacts, health tips, and safety guidelines',
    },
    {
      id: 'packing',
      title: 'Packing List',
      icon: FileText,
      color: 'bg-amber-100 text-amber-600',
      description: 'Recommended items to bring for your trip',
    },
    {
      id: 'weather',
      title: 'Weather Guide',
      icon: Umbrella,
      color: 'bg-indigo-100 text-indigo-600',
      description: 'Current conditions and forecast for your trip locations',
    },
    {
      id: 'contacts',
      title: 'Important Contacts',
      icon: User,
      color: 'bg-purple-100 text-purple-600', 
      description: 'Trip leaders, local guides, and emergency contacts',
    },
    {
      id: 'learning',
      title: 'Learning Resources',
      icon: Book,
      color: 'bg-red-100 text-red-600',
      description: 'Educational materials related to your program focus',
    },
  ];
  
  return (
    <div className="container px-4 pt-20 pb-24">
      <div className="grid grid-cols-2 gap-3">
        {resourceCategories.map((category) => (
          <Card 
            key={category.id}
            className="border-none shadow-sm h-[140px] flex flex-col"
          >
            <CardContent className="p-4 flex flex-col h-full">
              <div className={`w-10 h-10 rounded-full ${category.color} flex items-center justify-center mb-3`}>
                <category.icon size={20} />
              </div>
              <h3 className="font-medium text-base mb-1">{category.title}</h3>
              <p className="text-xs text-dragon-gray">{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <h3 className="text-lg font-academy mt-8 mb-3 text-dragon-dark">Recent Downloads</h3>
      <div className="bg-white rounded-lg shadow-sm p-3">
        <div className="flex items-center py-2 border-b">
          <FileText size={16} className="text-dragon mr-3" />
          <div>
            <p className="text-sm font-medium">Kenya Travel Guide.pdf</p>
            <p className="text-xs text-dragon-gray">Downloaded 2 days ago</p>
          </div>
        </div>
        <div className="flex items-center py-2 border-b">
          <FileText size={16} className="text-dragon mr-3" />
          <div>
            <p className="text-sm font-medium">Emergency Contact Card.pdf</p>
            <p className="text-xs text-dragon-gray">Downloaded 2 days ago</p>
          </div>
        </div>
        <div className="flex items-center py-2">
          <FileText size={16} className="text-dragon mr-3" />
          <div>
            <p className="text-sm font-medium">Packing Checklist.pdf</p>
            <p className="text-xs text-dragon-gray">Downloaded 3 days ago</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-dragon-beige rounded-lg p-4 border border-dragon-sand">
        <h3 className="text-base font-medium mb-2">Need Help?</h3>
        <p className="text-sm text-dragon-gray mb-3">
          Can't find what you're looking for or need additional resources?
        </p>
        <button className="text-dragon font-medium text-sm">
          Contact Your Trip Leader
        </button>
      </div>
    </div>
  );
};

export default ResourcesPage;
