import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart3, ClipboardCheck, BookOpen, FileText } from 'lucide-react';

const BlogPostCTA: React.FC = () => {
  return (
    <div className="mt-16 rounded-2xl bg-gradient-to-br from-kapes-charcoal to-kapes-charcoal/95 p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Primary CTA — Scorecard */}
        <div>
          <div className="w-12 h-12 rounded-xl bg-kapes-orange/20 flex items-center justify-center mb-4">
            <BarChart3 className="w-6 h-6 text-kapes-orange" />
          </div>
          <h3 className="text-2xl font-academy text-white mb-3">
            How ethical is your school trip?
          </h3>
          <p className="text-white/70 mb-6">
            Take the free 5-minute Impact Scorecard. Get a personalised score across 5 dimensions — community continuity, financial transparency, local leadership, curriculum integration, and measured outcomes.
          </p>
          <Button
            asChild
            className="btn-action text-base h-12 px-8"
          >
            <Link to="/scorecard">
              Score My Trip Program
            </Link>
          </Button>
        </div>

        {/* Secondary CTAs — PDF Resources */}
        <div>
          <h4 className="text-lg font-academy text-white mb-5">
            Free resources for school leaders
          </h4>
          <div className="space-y-4">
            <Link
              to="/resources/transparency-checklist"
              className="flex items-start gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                <ClipboardCheck className="w-5 h-5 text-kapes-orange" />
              </div>
              <div>
                <span className="text-white font-medium group-hover:text-kapes-orange transition-colors block">
                  Transparency Checklist
                </span>
                <span className="text-white/50 text-sm">
                  7 questions to ask any trip provider
                </span>
              </div>
            </Link>

            <Link
              to="/resources/ethical-planning-guide"
              className="flex items-start gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                <BookOpen className="w-5 h-5 text-kapes-orange" />
              </div>
              <div>
                <span className="text-white font-medium group-hover:text-kapes-orange transition-colors block">
                  Ethical Planning Guide
                </span>
                <span className="text-white/50 text-sm">
                  8 chapters from due diligence to parent buy-in
                </span>
              </div>
            </Link>

            <Link
              to="/resources/impact-report"
              className="flex items-start gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                <FileText className="w-5 h-5 text-kapes-orange" />
              </div>
              <div>
                <span className="text-white font-medium group-hover:text-kapes-orange transition-colors block">
                  2025 Impact Report
                </span>
                <span className="text-white/50 text-sm">
                  Every program, every number, full transparency
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCTA;
