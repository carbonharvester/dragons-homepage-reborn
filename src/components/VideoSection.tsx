
import React from 'react';
import VideoPlayer from './video/VideoPlayer';
import { Quote } from "lucide-react";

interface VideoSectionProps {
  videoId?: string;
  videoUrl?: string;
  title: string;
  description?: string;
  customThumbnail?: string;
  quote?: {
    text: string;
    author?: string;
  };
}

const VideoSection = ({
  videoId,
  videoUrl,
  title,
  description,
  customThumbnail,
  quote
}: VideoSectionProps) => {
  return <section className="py-16 bg-dragon">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="section-heading text-white">Transforming Lives</h2>
          {description && <p className="section-subheading mx-auto text-white opacity-80">
              {description}
            </p>}
        </div>
        
        <VideoPlayer 
          videoId={videoId} 
          videoUrl={videoUrl} 
          title={title} 
          customThumbnail={customThumbnail}
          showPreview={true}
        />

        {quote && <div className="max-w-3xl mx-auto mt-12 text-center">
            <div className="flex justify-center text-white mb-4">
              <Quote size={36} />
            </div>
            
            <blockquote className="text-lg md:text-xl font-sans text-white mb-4 italic">
              {quote.text}
            </blockquote>
            
            {quote.author && <p className="font-medium text-dragon-yellow">
                {quote.author}
              </p>}
          </div>}
      </div>
    </section>;
};

export default VideoSection;
