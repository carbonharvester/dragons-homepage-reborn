
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="section-heading">Experience Our Programs</h2>
          <p className="section-subheading mx-auto">Watch how our immersive programs transform students through cultural exchange and authentic experiences.</p>
        </div>
        
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl">
          {/* Video thumbnail with play button overlay */}
          <div className="relative aspect-video bg-[url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1500&auto=format')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity hover:bg-opacity-20">
              <Button 
                className="h-16 w-16 rounded-full bg-dragon-yellow hover:bg-amber-400 text-dragon-dark"
                aria-label="Play video"
              >
                <Play className="h-8 w-8" />
              </Button>
            </div>
          </div>
          
          {/* Video caption */}
          <div className="bg-white p-6 text-center">
            <h3 className="text-xl font-medium text-dragon-dark mb-2">Cultural Immersion in Kenya</h3>
            <p className="text-dragon-gray">Journey with our students as they explore local communities and wildlife conservation efforts in Kenya.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
