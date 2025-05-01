import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  return <section className="py-16 bg-slate-50">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="section-heading">Experience Our Programs</h2>
          <p className="section-subheading mx-auto">Watch how our immersive programmes transform students through cultural exchange and authentic experiences.</p>
        </div>
        
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl">
          {isPlaying ? <div className="aspect-video w-full">
              <iframe src="https://player.vimeo.com/video/922795693?h=c4bc497777&autoplay=1" className="w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Mission Kapes cultural immersion programme"></iframe>
            </div> : <div className="relative">
              <AspectRatio ratio={16 / 9}>
                <div className="w-full h-full bg-black">
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity hover:bg-opacity-20">
                    <Button className="h-16 w-16 rounded-full bg-dragon-yellow hover:bg-amber-400 text-dragon-dark" onClick={handlePlayClick} aria-label="Play video">
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                  
                  <iframe src="https://player.vimeo.com/video/922795693?h=c4bc497777&background=1" className="w-full h-full pointer-events-none" frameBorder="0" title="Mission Kapes background video"></iframe>
                </div>
              </AspectRatio>
            </div>}
        </div>
      </div>
    </section>;
};
export default VideoSection;