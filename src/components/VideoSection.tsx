
import React from 'react';
import VideoPlayer from './video/VideoPlayer';
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface VideoSectionProps {
  videoId: string;
  title: string;
  description?: string;
  quote?: {
    text: string;
    author?: string;
  };
}

const VideoSection = ({ videoId, title, description, quote }: VideoSectionProps) => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="section-heading">Experience Our Journey</h2>
          {description && (
            <p className="section-subheading mx-auto">
              {description}
            </p>
          )}
        </div>
        
        <VideoPlayer 
          videoId={videoId}
          title={title}
        />

        {quote && (
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <div className="flex justify-center text-[#004d31] mb-4">
              <Quote size={36} />
            </div>
            <blockquote className="text-xl md:text-2xl font-serif text-[#004d31] mb-4 italic">
              "{quote.text}"
            </blockquote>
            {quote.author && (
              <p className="font-medium text-[#F97316]">
                — {quote.author}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
