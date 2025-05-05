
import React from 'react';
import VideoPlayer from './video/VideoPlayer';
import { cn } from "@/lib/utils";

interface HomeVideoSectionProps {
  videoId: string;
  title: string;
  description?: string;
}

const HomeVideoSection = ({ videoId, title, description }: HomeVideoSectionProps) => {
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
      </div>
    </section>
  );
};

export default HomeVideoSection;
