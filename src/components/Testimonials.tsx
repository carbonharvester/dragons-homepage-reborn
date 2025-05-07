
import React, { useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const testimonials = [{
  quote: "It was a once in a lifetime experience. I learned how to be grateful for the things I have and the things that are around me. because the people and the things we saw in Kenya, they didn't have too much, but they were still happy. And with the things that we have, we can still be happy even without wanting more.",
  author: "Loki",
  videoThumbnail: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format",
  videoUrl: "https://vimeo.com/1013651342?share=copy#t=0",
  vimeoId: "1013651342"
}, {
  quote: "Being in Kenya, it was an incredibly eye-opening experience. I'm very privileged to have been on this trip. I got to learn so much about different communities and different ways of living. I think my main takeaway was definitely that happiness can be found, regardless of what you have or don't have.",
  author: "Yasma",
  videoThumbnail: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2071&auto=format",
  videoUrl: "https://vimeo.com/1013709104",
  vimeoId: "1013709104"
}, {
  quote: "The biggest thing I've learned is that happiness doesn't come from what you have, it comes from connections with others and how you view the world. Seeing the Kenyan people being happy with so little made me realize that we take a lot of things for granted.",
  author: "Leon",
  videoThumbnail: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=2071&auto=format",
  videoUrl: "https://vimeo.com/1013710646",
  vimeoId: "1013710646"
}];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const vimeoScriptLoaded = useRef(false);
  
  // Load Vimeo player script when needed
  const loadVimeoScript = useCallback(() => {
    if (vimeoScriptLoaded.current) return Promise.resolve();
    
    return new Promise<void>((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = true;
      script.onload = () => {
        vimeoScriptLoaded.current = true;
        resolve();
      };
      document.body.appendChild(script);
    });
  }, []);
  
  const handlePrev = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
    setShowVideo(false);
  };
  
  const handleNext = () => {
    setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
    setShowVideo(false);
  };
  
  const handlePlayVideo = async () => {
    if (testimonials[currentIndex].videoUrl) {
      await loadVimeoScript();
      setShowVideo(true);
    }
  };
  
  const currentTestimonial = testimonials[currentIndex];
  const vimeoId = currentTestimonial.vimeoId;
  // Use optimized thumbnails from Vumbnail service
  const vimeoThumbnail = vimeoId ? `https://vumbnail.com/${vimeoId}_large.jpg` : currentTestimonial.videoThumbnail;
  
  return (
    <section id="stories" className="py-20 bg-dragon">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-academy font-bold text-white mb-4">Student Stories</h2>
          <p className="text-lg md:text-xl text-white opacity-80 max-w-3xl mx-auto">Hear directly from past participants about their transformative experiences in Africa.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
            {/* Video Thumbnail or Embedded Video */}
            <div className="mb-8">
              {showVideo && currentTestimonial.videoUrl ? (
                <div style={{
                  padding: '56.25% 0 0 0',
                  position: 'relative'
                }}>
                  <iframe 
                    ref={videoRef}
                    src={`https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`} 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }} 
                    title={`${currentTestimonial.author}'s story`}>
                  </iframe>
                </div>
              ) : (
                <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-gray-100">
                  <div className="relative w-full h-full">
                    <img 
                      src={vimeoThumbnail} 
                      alt={`${currentTestimonial.author}'s story`} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.src = currentTestimonial.videoThumbnail;
                      }}
                    />
                    {currentTestimonial.videoUrl && (
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity hover:bg-opacity-20">
                        <Button 
                          className="h-16 w-16 rounded-full bg-dragon-yellow hover:bg-amber-400 text-dragon-dark flex items-center justify-center" 
                          aria-label="Play video" 
                          onClick={handlePlayVideo}
                        >
                          <Play className="h-8 w-8" />
                        </Button>
                      </div>
                    )}
                  </div>
                </AspectRatio>
              )}
            </div>
            
            <div className="text-dragon-yellow mb-6">
              <Quote size={48} />
            </div>
            <blockquote className="mb-8">
              <p className="text-xl md:text-2xl font-serif text-dragon-dark mb-6">
                {currentTestimonial.quote}
              </p>
              <footer>
                <p className="font-bold text-dragon">
                  {currentTestimonial.author}
                </p>
              </footer>
            </blockquote>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button onClick={handlePrev} className="p-3 rounded-full bg-white text-dragon hover:bg-dragon-beige transition-colors" aria-label="Previous testimonial">
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => {
                    setCurrentIndex(index);
                    setShowVideo(false);
                  }} 
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/40'}`} 
                  aria-label={`Go to testimonial ${index + 1}`} 
                />
              ))}
            </div>
            <button onClick={handleNext} className="p-3 rounded-full bg-white text-dragon hover:bg-dragon-beige transition-colors" aria-label="Next testimonial">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
