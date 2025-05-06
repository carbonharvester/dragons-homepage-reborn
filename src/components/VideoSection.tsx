
import React from 'react';
import VideoPlayer from './video/VideoPlayer';
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

const VideoSection = ({ 
  videoId, 
  title, 
  description, 
  quote
}: VideoSectionProps) => {
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
            
            <blockquote className="text-lg md:text-xl font-serif text-[#004d31] mb-4 italic">
              "The activities we've been doing is a sort of pathway to bring our children here to. And that's really important because experiential learning helps them to bring to real life the things that we can only do in theory, in the classrooms. Seeing these small enterprises firsthand, understanding how they contribute to a better world in the future, the children can only do that firsthand, and it will change them as much as it's changed me in this short trip."
            </blockquote>
            
            {quote.author && (
              <p className="font-medium text-[#F97316]">
                — Brett Girven, Former Principal at The Arbor School
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
