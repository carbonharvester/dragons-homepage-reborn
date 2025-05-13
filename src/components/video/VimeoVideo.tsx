
import React, { useRef } from 'react';

interface VimeoVideoProps {
  src: string;
  title: string;
}

const VimeoVideo = ({ src, title }: VimeoVideoProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <iframe 
      ref={iframeRef}
      src={src}
      className="w-full h-full" 
      frameBorder="0" 
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
      allowFullScreen 
      title={title}
      loading="lazy"
    ></iframe>
  );
};

export default VimeoVideo;
