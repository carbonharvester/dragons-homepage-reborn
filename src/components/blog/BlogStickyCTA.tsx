import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X, ArrowRight } from 'lucide-react';

const STORAGE_KEY = 'kapes_sticky_dismissed';

const BlogStickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() =>
    sessionStorage.getItem(STORAGE_KEY) === '1'
  );

  useEffect(() => {
    if (dismissed) return;

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.4);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
  };

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-kapes-charcoal/95 backdrop-blur-sm border-t border-white/10 shadow-lg animate-in slide-in-from-bottom duration-300">
      <div className="container-wide flex items-center justify-between py-3 gap-4">
        <p className="text-white text-sm md:text-base font-medium hidden sm:block">
          Is your school trip actually ethical?
        </p>
        <p className="text-white text-sm font-medium sm:hidden">
          Score your school trip
        </p>
        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="btn-action text-sm h-9 px-5 whitespace-nowrap"
          >
            <Link to="/scorecard">
              Take the Free Assessment
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </Button>
          <button
            onClick={handleDismiss}
            className="text-white/50 hover:text-white transition-colors p-1"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogStickyCTA;
