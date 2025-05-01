
import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="section-heading">Experience Our Programs</h2>
          <p className="section-subheading mx-auto">Watch how our immersive programs transform students through cultural exchange and authentic experiences.</p>
        </div>
        
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl">
          {/* Vimeo video embed */}
          <div className="aspect-video w-full">
            <iframe 
              src="https://player.vimeo.com/video/922795693?h=c4bc497777" 
              className="w-full h-full"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              title="Mission Kapes cultural immersion program"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
