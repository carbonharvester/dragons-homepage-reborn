
import React from 'react';
import VideoPlayer from './video/VideoPlayer';

interface HomeVideoSectionProps {
  videoId: string;
  title: string;
  description?: string;
}

const HomeVideoSection = ({
  videoId,
  title,
  description
}: HomeVideoSectionProps) => {
  return (
    <section className="py-16 bg-slate-50 relative">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden bg-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <VideoPlayer videoId={videoId} title={title} initialPlaying={true} />
      </div>
      
      <div className="container-wide relative z-20">
        <div className="text-center mb-10">
          <h2 className="section-heading text-white">Experience Our Journey</h2>
          <p className="section-subheading mx-auto text-white opacity-90">Watch how our immersive programs transform students into global citizens through cultural exchange and authentic experiences in Africa - while empowering communities with lasting impact.</p>
        </div>
        
        <div className="aspect-video w-full max-w-4xl mx-auto border-4 border-white shadow-2xl">
          <VideoPlayer videoId={videoId} title={title} />
        </div>
      </div>
    </section>
  );
};

export default HomeVideoSection;
