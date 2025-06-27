
import React from 'react';
import VideoPlayer from './video/VideoPlayer';

interface HomeVideoSectionProps {
  videoId?: string;
  videoUrl?: string;
  title: string;
  description?: string;
  initialPlaying?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  autoplayOnScroll?: boolean;
  showPreview?: boolean;
}

const HomeVideoSection = ({
  videoId,
  videoUrl,
  title,
  description,
  initialPlaying = false,
  autoPlay = false,
  muted = false,
  autoplayOnScroll = false,
  showPreview = true
}: HomeVideoSectionProps) => {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      {/* African Pattern Side Borders */}
      <div className="absolute left-0 top-0 bottom-0 w-8 opacity-25">
        <img 
          src="/lovable-uploads/cf30b0db-eae7-47de-8db9-886a54aeacac.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-8 opacity-25">
        <img 
          src="/lovable-uploads/cf30b0db-eae7-47de-8db9-886a54aeacac.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-10">
          <h2 className="section-heading">Experience Our Journey</h2>
          <p className="section-subheading mx-auto">Watch how our immersive programs transform students into global citizens through cultural exchange and authentic experiences in Africa - while empowering communities with lasting impact.</p>
        </div>
        
        <VideoPlayer 
          videoId={videoId} 
          videoUrl={videoUrl}
          title={title} 
          initialPlaying={initialPlaying || autoPlay}
          showPreview={showPreview}  
          muted={muted}
          autoplayOnScroll={autoplayOnScroll}
        />
      </div>
    </section>
  );
};

export default HomeVideoSection;
