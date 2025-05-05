
import React, { useState } from 'react';
import VideoPlayer from './video/VideoPlayer';
import { cn } from "@/lib/utils";
import { EditableText } from "@/components/ui/editable-text";

interface HomeVideoSectionProps {
  videoId: string;
  title: string;
  description?: string;
  editable?: boolean;
}

const HomeVideoSection = ({ 
  videoId, 
  title, 
  description,
  editable = false
}: HomeVideoSectionProps) => {
  const [videoTitle, setVideoTitle] = useState(title);
  const [videoDesc, setVideoDesc] = useState(description || '');
  
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
      </div>
    </section>
  );
};

export default HomeVideoSection;
