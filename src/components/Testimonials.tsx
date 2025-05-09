
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import VideoPlayer from "@/components/video/VideoPlayer";

const testimonials = [{
  quote: "It was a once in a lifetime experience. I learned how to be grateful for the things I have and the things that are around me. because the people and the things we saw in Kenya, they didn't have too much, but they were still happy. And with the things that we have, we can still be happy even without wanting more.",
  author: "Loki",
  videoId: "05fe0835e082489c9e13c779903d992b"
}, {
  quote: "Being in Kenya, it was an incredibly eye-opening experience. I'm very privileged to have been on this trip. I got to learn so much about different communities and different ways of living. I think my main takeaway was definitely that happiness can be found, regardless of what you have or don't have.",
  author: "Yasma",
  videoId: "633421263d7a45a59c6d22bbe58aa81e"
}, {
  quote: "The biggest thing I've learned is that happiness doesn't come from what you have, it comes from connections with others and how you view the world. Seeing the Kenyan people being happy with so little made me realize that we take a lot of things for granted.",
  author: "Leon",
  videoId: "9212a5359be94f8cbe20699f6737c724"
}];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const handlePrev = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
    setShowVideo(false);
    setIsFullscreenOpen(false);
  };
  
  const handleNext = () => {
    setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
    setShowVideo(false);
    setIsFullscreenOpen(false);
  };
  
  const handlePlayVideo = () => {
    if (testimonials[currentIndex].videoId) {
      if (isMobile) {
        setIsFullscreenOpen(true);
      } else {
        setShowVideo(true);
      }
    }
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <section id="stories" className="py-16 bg-dragon w-full">
      <div className="container-wide px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-academy font-bold text-white mb-4">Student Stories</h2>
          <p className="text-base md:text-xl text-white opacity-80 max-w-3xl mx-auto">Hear directly from past participants about their transformative experiences in Africa.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 md:p-12 shadow-lg">
            {/* Video Thumbnail or Embedded Video */}
            <div className="mb-6">
              {showVideo && currentTestimonial.videoId ? (
                <VideoPlayer 
                  videoId={currentTestimonial.videoId}
                  title={`${currentTestimonial.author}'s story`}
                />
              ) : (
                <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-gray-100">
                  <div 
                    className="relative w-full h-full bg-cover bg-center" 
                    style={{ 
                      backgroundImage: `url(https://cdn.shopify.com/videos/c/o/v/${currentTestimonial.videoId}.jpg)`,
                      backgroundSize: 'cover'
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity hover:bg-opacity-20">
                      <Button 
                        className="h-16 w-16 rounded-full bg-dragon-yellow hover:bg-amber-400 text-dragon-dark flex items-center justify-center" 
                        aria-label="Play video" 
                        onClick={handlePlayVideo}
                      >
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>
                </AspectRatio>
              )}
            </div>
            
            <div className="text-dragon-yellow mb-4">
              <Quote size={40} />
            </div>
            <blockquote className="mb-6">
              <p className="text-base md:text-xl font-serif text-dragon-dark mb-4">
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
          <div className="flex justify-center mt-6 gap-4">
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
                    setIsFullscreenOpen(false);
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

      {/* Mobile fullscreen video sheet */}
      <Sheet open={isFullscreenOpen} onOpenChange={setIsFullscreenOpen}>
        <SheetContent side="bottom" className="p-0 h-full max-h-[100dvh]">
          <div className="w-full h-full bg-black flex items-center justify-center">
            <div className="w-full h-full">
              <video
                src={`https://cdn.shopify.com/videos/c/o/v/${currentTestimonial.videoId}.mp4`}
                className="w-full h-full" 
                controls
                autoPlay
                playsInline
                title={`${currentTestimonial.author}'s story fullscreen`}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Testimonials;
