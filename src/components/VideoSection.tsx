
import React from 'react';
import VideoPlayer from './video/VideoPlayer';

const VideoSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="section-heading">Experience Our Programs</h2>
          <p className="section-subheading mx-auto">Watch how our immersive programmes transform students through cultural exchange and authentic experiences.</p>
        </div>
        
        <VideoPlayer 
          videoId="922795693" 
          title="Mission Kapes cultural immersion programme" 
        />
      </div>
    </section>
  );
};

export default VideoSection;
