import React from 'react';
import { CardsParallax, type iCardItem } from '@/components/ui/scroll-cards';

interface ProgramScrollCardsProps {
  programs: Array<{
    title: string;
    duration: string;
    season: string;
    description: string;
    image: string;
    link: string;
    icon: React.ElementType;
    ageGroup?: string;
    location?: string;
  }>;
  category: string;
}

// Color mapping for different program categories
const getCategoryColors = (category: string, index: number) => {
  const colorSets = {
    'school-trips': [
      { color: 'hsl(var(--dragon))', textColor: 'white' },
      { color: 'hsl(var(--dragon-beige))', textColor: 'hsl(var(--dragon-dark))' },
      { color: 'hsl(var(--dragon-yellow))', textColor: 'hsl(var(--dragon-dark))' },
    ],
    'summer-abroad': [
      { color: 'hsl(var(--dragon-dark))', textColor: 'white' },
      { color: 'hsl(var(--dragon))', textColor: 'white' },
      { color: 'hsl(var(--dragon-beige))', textColor: 'hsl(var(--dragon-dark))' },
    ],
    'educator-trips': [
      { color: 'hsl(var(--dragon-yellow))', textColor: 'hsl(var(--dragon-dark))' },
      { color: 'hsl(var(--dragon))', textColor: 'white' },
    ],
    'adult-trips': [
      { color: 'hsl(var(--dragon-beige))', textColor: 'hsl(var(--dragon-dark))' },
      { color: 'hsl(var(--dragon-dark))', textColor: 'white' },
    ],
  };

  const colors = colorSets[category] || colorSets['school-trips'];
  return colors[index % colors.length];
};

const ProgramScrollCards: React.FC<ProgramScrollCardsProps> = ({ programs, category }) => {
  // Convert program data to scroll cards format
  const cardItems: iCardItem[] = programs.map((program, index) => {
    const colors = getCategoryColors(category, index);
    
    return {
      title: program.title,
      description: program.description,
      tag: category,
      src: program.image,
      link: program.link,
      color: colors.color,
      textColor: colors.textColor,
    };
  });

  return <CardsParallax items={cardItems} />;
};

export default ProgramScrollCards;