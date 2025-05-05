
import React, { useState } from 'react';
import VideoPlayer from './video/VideoPlayer';
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import { EditableText } from "@/components/ui/editable-text";

interface VideoSectionProps {
  videoId: string;
  title: string;
  description?: string;
  quote?: {
    text: string;
    author?: string;
  };
  editable?: boolean;
}

const VideoSection = ({ 
  videoId, 
  title, 
  description, 
  quote, 
  editable = false 
}: VideoSectionProps) => {
  const [videoTitle, setVideoTitle] = useState(title);
  const [videoDesc, setVideoDesc] = useState(description || '');
  const [quoteText, setQuoteText] = useState(quote?.text || '');
  const [quoteAuthor, setQuoteAuthor] = useState(quote?.author || '');
  
  return (
    <section className="py-16 bg-slate-50">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="section-heading">Experience Our Journey</h2>
          {editable ? (
            <EditableText 
              defaultValue={videoDesc}
              onChange={setVideoDesc}
              className="max-w-2xl mx-auto"
              multiline
              placeholder="Enter section description"
            />
          ) : description && (
            <p className="section-subheading mx-auto">
              {videoDesc}
            </p>
          )}
        </div>
        
        <VideoPlayer 
          videoId={videoId}
          title={videoTitle}
        />

        {(quote || editable) && (
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <div className="flex justify-center text-[#004d31] mb-4">
              <Quote size={36} />
            </div>
            
            {editable ? (
              <EditableText 
                defaultValue={quoteText}
                onChange={setQuoteText}
                className="text-xl md:text-2xl italic text-[#004d31] mb-4"
                multiline
                placeholder="Enter quote text"
              />
            ) : (
              <blockquote className="text-xl md:text-2xl font-serif text-[#004d31] mb-4 italic">
                "{quoteText}"
              </blockquote>
            )}
            
            {editable ? (
              <EditableText 
                defaultValue={quoteAuthor}
                onChange={setQuoteAuthor}
                className="font-medium text-[#F97316]"
                placeholder="Quote author"
              />
            ) : quoteAuthor && (
              <p className="font-medium text-[#F97316]">
                — {quoteAuthor}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
