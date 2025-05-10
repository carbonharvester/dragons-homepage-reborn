
import React from 'react';
import { TripHighlight } from './TripBrochureContent';
import { School, TreeDeciduous, Users, Sun, Camera, LucideIcon } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  School,
  TreeDeciduous,
  Users,
  Sun,
  Camera
};

interface TripHighlightsProps {
  highlights: TripHighlight[];
}

const TripHighlights: React.FC<TripHighlightsProps> = ({ highlights }) => {
  const renderIcon = (icon: React.ReactNode | string) => {
    if (typeof icon === 'string' && iconMap[icon]) {
      const IconComponent = iconMap[icon];
      return <IconComponent className="h-10 w-10 text-dragon" />;
    }
    return icon;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex flex-col items-start">
          <div className="mb-4">
            {renderIcon(highlight.icon)}
          </div>
          <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
          <p className="text-gray-700">{highlight.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TripHighlights;
