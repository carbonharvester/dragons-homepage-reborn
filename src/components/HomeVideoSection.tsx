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
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-12">
        <img 
          src="https://res.cloudinary.com/dng12bd0a/image/upload/v1751043470/7ee27c1f-ab9e-4f81-9513-781c149dcbb2_sagcne.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-12">
        <img 
          src="https://res.cloudinary.com/dng12bd0a/image/upload/v1751043470/7ee27c1f-ab9e-4f81-9513-781c149dcbb2_sagcne.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Side Border */}
      <div className="absolute left-0 top-0 bottom-0 w-12">
        <img 
          src="https://res.cloudinary.com/dng12bd0a/image/upload/v1751043470/7ee27c1f-ab9e-4f81-9513-781c149dcbb2_sagcne.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Right Side Border */}
      <div className="absolute right-0 top-0 bottom-0 w-12">
        <img 
          src="https://res.cloudinary.com/dng12bd0a/image/upload/v1751043470/7ee27c1f-ab9e-4f81-9513-781c149dcbb2_sagcne.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-wide relative z-10 px-16">
        <div className="text-center mb-12">
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
