
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
    <section className="py-16 bg-slate-50">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="section-heading">Experience Our Journey</h2>
          <p className="section-subheading mx-auto">Watch how our immersive programs transform students into global citizens through cultural exchange and authentic experiences in Africa - while empowering communities with lasting impact.</p>
        </div>
        
        <VideoPlayer videoId={videoId} title={title} />
      </div>
    </section>
  );
};

export default HomeVideoSection;
