
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play } from "lucide-react";
import { Button } from '@/components/ui/button';
import { getAllPodcastEpisodes, ContentfulPodcastEpisode } from '@/services/contentful';
import { useQuery } from '@tanstack/react-query';
import { PodcastEpisode } from '@/data/podcastData';

// Helper function to convert Contentful episode to our app's format
const mapContentfulToPodcastEpisode = (contentfulEpisode: ContentfulPodcastEpisode): PodcastEpisode => {
  const imageUrl = contentfulEpisode.fields.image?.fields?.file?.url || '';
  return {
    id: contentfulEpisode.sys.id,
    title: contentfulEpisode.fields.title,
    description: contentfulEpisode.fields.description,
    audioUrl: contentfulEpisode.fields.audioUrl,
    duration: contentfulEpisode.fields.duration,
    date: contentfulEpisode.fields.date,
    image: imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl
  };
};

const PodcastSection = () => {
  const {
    data: contentfulEpisodes,
    isLoading,
    error
  } = useQuery({
    queryKey: ['podcastEpisodes'],
    queryFn: getAllPodcastEpisodes
  });
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);

  // Convert Contentful episodes to our format
  useEffect(() => {
    if (contentfulEpisodes && contentfulEpisodes.length > 0) {
      const mappedEpisodes = contentfulEpisodes.map(mapContentfulToPodcastEpisode);
      setEpisodes(mappedEpisodes);
    }
  }, [contentfulEpisodes]);

  // If loading, show minimal content
  if (isLoading || error || episodes.length === 0) {
    return <section className="py-20 bg-white">
      <div className="h-full">
        <div className="text-center mb-12">
          <h2 className="section-heading">Listen to Our Podcast</h2>
          <p className="section-subheading mx-auto">Tune in for inspiring conversations about educational travel, sustainability, and community impact in Kenya.</p>
        </div>
        <div className="text-center">
          <Button asChild className="bg-dragon hover:bg-dragon-dark text-white">
            <Link to="/podcast">Listen to Our Podcast</Link>
          </Button>
        </div>
      </div>
    </section>;
  }

  const featuredEpisode = episodes[0];
  
  return <section className="py-20 bg-white">
    <div className="h-full">
      <div className="text-center mb-12">
        <h2 className="section-heading">Listen to Our Podcast</h2>
        <p className="section-subheading mx-auto">
          Tune in for inspiring conversations about educational travel, sustainability, and community impact in Kenya.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 text-dragon-dark">Featured Episode</h3>
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
          <div className="h-48 relative">
            <img src={featuredEpisode.image} alt={featuredEpisode.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="rounded-full bg-white bg-opacity-90 p-4 cursor-pointer hover:bg-dragon transition-colors group">
                <Play size={24} className="text-dragon-dark group-hover:text-white" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{featuredEpisode.title}</h3>
            <div className="flex items-center text-dragon-gray text-sm mb-2">
              <span>{featuredEpisode.date}</span>
              <span className="mx-2">•</span>
              <span>{featuredEpisode.duration}</span>
            </div>
            <p className="text-dragon-gray mb-4 line-clamp-2">{featuredEpisode.description}</p>
            <Button asChild size="sm">
              <Link to="/podcast">Listen Now</Link>
            </Button>
          </div>
        </div>
        
        {episodes.length > 1 && (
          <div className="text-center mt-4">
            <Button variant="outline" asChild className="mt-2">
              <Link to="/podcast">View All Episodes</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  </section>;
};

export default PodcastSection;
