import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { BarChart3 } from 'lucide-react';

const STORAGE_KEY = 'kapes_popup_shown';
const MOBILE_DELAY_MS = 45000;

const LeadMagnetPopup: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showPopup = useCallback(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    sessionStorage.setItem(STORAGE_KEY, '1');
    setOpen(true);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const timer = setTimeout(showPopup, MOBILE_DELAY_MS);
      return () => clearTimeout(timer);
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showPopup]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-2xl">
        <div className="bg-gradient-to-br from-kapes-charcoal to-kapes-charcoal/95 p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-kapes-orange/20 flex items-center justify-center mx-auto mb-5">
            <BarChart3 className="w-8 h-8 text-kapes-orange" />
          </div>
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-2xl font-academy text-white">
              Before you go — how ethical is your school trip?
            </DialogTitle>
            <DialogDescription className="text-white/70 text-base">
              Take the free 5-minute assessment. Get a personalised score across 5 dimensions of ethical school travel.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 space-y-3">
            <Button
              asChild
              className="w-full btn-action text-base h-12"
            >
              <Link to="/scorecard" onClick={() => setOpen(false)}>
                Score My Trip Program
              </Link>
            </Button>
            <button
              onClick={() => setOpen(false)}
              className="text-sm text-white/50 hover:text-white/70 transition-colors"
            >
              No thanks, I'm just browsing
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadMagnetPopup;
