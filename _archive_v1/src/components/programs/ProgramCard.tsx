import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { MapPin, Users, Leaf, Droplets, Heart, GraduationCap } from 'lucide-react';

// Impact type to icon/color mapping
const impactConfig: Record<string, { icon: React.ElementType; color: string; bgColor: string }> = {
  food: { icon: Leaf, color: 'text-impact-green', bgColor: 'bg-impact-green' },
  water: { icon: Droplets, color: 'text-impact-blue', bgColor: 'bg-impact-blue' },
  conservation: { icon: Leaf, color: 'text-dragon', bgColor: 'bg-dragon' },
  women: { icon: Heart, color: 'text-impact-rose', bgColor: 'bg-impact-rose' },
  education: { icon: GraduationCap, color: 'text-impact-purple', bgColor: 'bg-impact-purple' },
  community: { icon: Users, color: 'text-kapes-orange', bgColor: 'bg-kapes-orange' },
};

interface ProgramCardProps {
  program: {
    title: string;
    duration: string;
    season: string;
    description: string;
    image: string;
    link: string;
    icon: React.ElementType;
    ageGroup?: string;
    location?: string;
    impactType?: string;
    impactMetric?: string;
  };
  buttonClassName?: string;
  priority?: boolean;
}

const ProgramCard = ({ program, buttonClassName, priority = false }: ProgramCardProps) => {
  const isMobile = useIsMobile();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000&auto=format";
  const imageToUse = imageError ? fallbackImage : program.image;

  // Get impact configuration based on program type
  const getImpactType = () => {
    const title = program.title.toLowerCase();
    if (title.includes('food') || title.includes('feeding') || title.includes('permaculture')) return 'food';
    if (title.includes('water') || title.includes('women') || title.includes('empowering')) return 'women';
    if (title.includes('conservation') || title.includes('wildlife')) return 'conservation';
    if (title.includes('education') || title.includes('leadership')) return 'education';
    if (title.includes('capturing') || title.includes('photo')) return 'community';
    return 'community';
  };

  const impactType = program.impactType || getImpactType();
  const impact = impactConfig[impactType] || impactConfig.community;
  const ImpactIcon = impact.icon;

  return (
    <Card className={`overflow-hidden border-none shadow-lg h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group relative bg-white rounded-2xl ${isMobile ? 'min-h-[520px]' : ''}`}>
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <AspectRatio ratio={4/3} className="bg-gray-100">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-8 h-8 border-4 border-dragon border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={imageToUse}
            alt={program.title}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            width="400"
            height="300"
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              if (!imageError) {
                setImageError(true);
              }
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </AspectRatio>

        {/* Impact Badge - Top Left */}
        <div className={`absolute top-4 left-4 ${impact.bgColor} text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm font-medium shadow-lg`}>
          <ImpactIcon className="w-4 h-4" />
          <span className="capitalize">{impactType}</span>
        </div>


        {/* Title Overlay - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white leading-tight line-clamp-2 group-hover:text-dragon-yellow transition-colors duration-300">
            {program.title}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-5 flex flex-col flex-grow">
        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 mb-3 text-sm text-dragon-gray">
          {program.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {program.location}
            </span>
          )}
          {program.ageGroup && (
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              Ages {program.ageGroup}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-dragon-gray text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
          {program.description}
        </p>

        {/* Impact Metric (if available) */}
        {program.impactMetric && (
          <div className="bg-kapes-cream rounded-lg p-3 mb-4">
            <p className="text-sm font-medium text-kapes-charcoal flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${impact.bgColor}`}></span>
              {program.impactMetric}
            </p>
          </div>
        )}

        {/* CTA Button */}
        <Button
          className="w-full btn-action h-12 mt-auto"
          asChild
        >
          <Link to={program.link}>
            Explore Program
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
