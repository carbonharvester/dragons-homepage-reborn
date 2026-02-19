import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, BookOpen, BarChart3, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTAConfig {
  icon: React.ElementType;
  headline: string;
  description: string;
  buttonText: string;
  link: string;
}

const ctaMap: Record<string, CTAConfig> = {
  'Ethical Travel': {
    icon: ClipboardCheck,
    headline: '7 questions that reveal the truth about any trip provider',
    description: 'Download the free Transparency Checklist — use it in your next vendor meeting.',
    buttonText: 'Get My Free Checklist',
    link: '/resources/transparency-checklist',
  },
  'Planning': {
    icon: BookOpen,
    headline: 'Planning an ethical school trip? Start here.',
    description: '8 chapters covering partner due diligence, budgets, curriculum, and making the case to parents.',
    buttonText: 'Get My Free Planning Guide',
    link: '/resources/ethical-planning-guide',
  },
  'Trips': {
    icon: BarChart3,
    headline: 'How does your school trip actually score?',
    description: 'Take the free 5-minute Impact Scorecard. Get a personalised score across 5 dimensions.',
    buttonText: 'Take My Free Assessment',
    link: '/scorecard',
  },
  'Impact': {
    icon: FileText,
    headline: 'See where the money actually goes',
    description: 'Our 2025 Impact Report — every program, every number, full financial transparency.',
    buttonText: 'See the Full Impact Report',
    link: '/resources/impact-report',
  },
};

const defaultCTA: CTAConfig = {
  icon: BarChart3,
  headline: 'Is your school trip actually making an impact?',
  description: 'Take the free 5-minute Impact Scorecard. Get a personalised score across 5 dimensions.',
  buttonText: 'Score My School\'s Trip Program',
  link: '/scorecard',
};

interface BlogInlineCTAProps {
  category: string;
}

const BlogInlineCTA: React.FC<BlogInlineCTAProps> = ({ category }) => {
  const config = ctaMap[category] || defaultCTA;
  const Icon = config.icon;

  return (
    <div className="my-12 rounded-2xl bg-gradient-to-br from-dragon-beige/60 to-dragon-beige/30 border border-dragon-beige p-8 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-dragon/10 flex items-center justify-center">
            <Icon className="w-7 h-7 text-dragon" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-academy text-dragon-dark mb-1">
            {config.headline}
          </h3>
          <p className="text-dragon-gray text-sm">
            {config.description}
          </p>
        </div>
        <div className="flex-shrink-0">
          <Button
            asChild
            className="btn-action text-base h-12 px-8 whitespace-nowrap"
          >
            <Link to={config.link}>
              {config.buttonText}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogInlineCTA;
