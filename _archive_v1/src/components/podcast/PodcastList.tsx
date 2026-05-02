
import React from 'react';
import { PodcastEpisode } from '@/data/podcastData';
import { Play } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card';

interface PodcastListProps {
  episodes: PodcastEpisode[];
  currentEpisode: PodcastEpisode;
  onSelectEpisode: (episode: PodcastEpisode) => void;
}

const PodcastList: React.FC<PodcastListProps> = ({ 
  episodes, 
  currentEpisode, 
  onSelectEpisode 
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Episodes</h2>
      
      {episodes.map((episode) => (
        <Card 
          key={episode.id}
          className={`cursor-pointer transition-colors ${
            currentEpisode.id === episode.id 
              ? 'border-dragon bg-dragon-beige/10' 
              : 'hover:border-dragon-beige'
          }`}
          onClick={() => onSelectEpisode(episode)}
        >
          <CardContent className="p-4">
            <div className="flex items-center">
              <div className="w-20 h-20 rounded overflow-hidden mr-4 flex-shrink-0">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <h3 className="font-bold text-dragon-dark">{episode.title}</h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm text-dragon-gray">{episode.date}</span>
                  <span className="text-sm text-dragon-gray">{episode.duration}</span>
                </div>
              </div>
              
              {currentEpisode.id === episode.id ? (
                <div className="w-8 h-8 rounded-full bg-dragon flex items-center justify-center ml-2">
                  <Play size={16} className="text-white ml-0.5" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-2">
                  <Play size={16} className="text-dragon-dark ml-0.5" />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PodcastList;
