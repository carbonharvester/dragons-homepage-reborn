
import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from "lucide-react";
import { Button } from '@/components/ui/button';
import { podcastEpisodes } from '@/data/podcastData';

const PodcastSection = () => {
  const featuredEpisode = podcastEpisodes[0];
  
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="section-heading">Listen to Our Podcast</h2>
          <p className="section-subheading mx-auto">
            Tune in for inspiring conversations about educational travel, sustainability, and community impact in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-dragon-dark">Featured Episode</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <img 
                  src={featuredEpisode.image} 
                  alt={featuredEpisode.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="rounded-full bg-white bg-opacity-90 p-4 cursor-pointer hover:bg-dragon transition-colors group">
                    <Play size={32} className="text-dragon-dark group-hover:text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{featuredEpisode.title}</h3>
                <div className="flex items-center text-dragon-gray text-sm mb-3">
                  <span>{featuredEpisode.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredEpisode.duration}</span>
                </div>
                <p className="text-dragon-gray mb-4 line-clamp-3">{featuredEpisode.description}</p>
                <Button asChild>
                  <Link to="/podcast">Listen Now</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-2 text-dragon-dark">Recent Episodes</h3>
            
            {podcastEpisodes.slice(1, 3).map(episode => (
              <div key={episode.id} className="flex bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 rounded overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-dragon-dark">{episode.title}</h4>
                  <div className="flex items-center text-dragon-gray text-sm mb-1">
                    <span>{episode.date}</span>
                    <span className="mx-2">•</span>
                    <span>{episode.duration}</span>
                  </div>
                  <p className="text-dragon-gray text-sm line-clamp-2">{episode.description}</p>
                </div>
              </div>
            ))}
            
            <div className="text-center pt-4">
              <Button variant="outline" asChild>
                <Link to="/podcast">View All Episodes</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
