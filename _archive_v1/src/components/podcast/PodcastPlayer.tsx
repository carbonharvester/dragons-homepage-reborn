
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, SkipBack, SkipForward } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { PodcastEpisode } from '@/data/podcastData';

interface PodcastPlayerProps {
  episode: PodcastEpisode;
}

const PodcastPlayer: React.FC<PodcastPlayerProps> = ({ episode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    // Reset player when episode changes
    setCurrentTime(0);
    setIsPlaying(false);
  }, [episode]);
  
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Audio playback error:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };
  
  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };
  
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };
  
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
      <audio 
        ref={audioRef}
        src={episode.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded overflow-hidden mr-4">
          <img
            src={episode.image} 
            alt={episode.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-dragon-dark">{episode.title}</h3>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-dragon-gray">{formatTime(currentTime)}</span>
        <span className="text-sm text-dragon-gray">{formatTime(duration)}</span>
      </div>
      
      <Slider
        defaultValue={[0]}
        value={[currentTime]}
        max={duration || 100}
        step={1}
        onValueChange={handleSeek}
        className="mb-4"
      />
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="text-dragon-dark hover:text-dragon" aria-label="Skip backward">
            <SkipBack size={20} />
          </button>
          
          <button 
            onClick={togglePlayPause}
            className="bg-dragon text-white rounded-full p-2 hover:bg-dragon-dark transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <button className="text-dragon-dark hover:text-dragon" aria-label="Skip forward">
            <SkipForward size={20} />
          </button>
        </div>
        
        <div className="flex items-center space-x-2 w-24">
          <Volume2 size={16} className="text-dragon-dark" />
          <Slider
            defaultValue={[0.8]}
            value={[volume]}
            max={1}
            step={0.01}
            onValueChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PodcastPlayer;
