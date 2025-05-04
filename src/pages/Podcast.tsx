
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PodcastPlayer from '@/components/podcast/PodcastPlayer';
import PodcastList from '@/components/podcast/PodcastList';
import SEO from '@/components/SEO';
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
    image: imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl,
    host: contentfulEpisode.fields.host,
    guests: contentfulEpisode.fields.guests || [],
  };
};

const Podcast = () => {
  const { data: contentfulEpisodes, isLoading, error } = useQuery({
    queryKey: ['podcastEpisodes'],
    queryFn: getAllPodcastEpisodes,
  });
  
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [currentEpisode, setCurrentEpisode] = useState<PodcastEpisode | null>(null);

  // Convert Contentful episodes to our format and set the current episode
  useEffect(() => {
    if (contentfulEpisodes && contentfulEpisodes.length > 0) {
      const mappedEpisodes = contentfulEpisodes.map(mapContentfulToPodcastEpisode);
      setEpisodes(mappedEpisodes);
      setCurrentEpisode(mappedEpisodes[0]);
    }
  }, [contentfulEpisodes]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Kapes Adventures Podcast | Educational Travel in Kenya" 
        description="Listen to our podcast about educational travel experiences, sustainability, and community impact in Kenya."
      />
      <Header />
      <main className="flex-grow py-16">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-dragon-dark mb-4">Kapes Adventures Podcast</h1>
            <p className="text-lg text-dragon-gray max-w-2xl mx-auto">
              Journey with us through conversations about educational travel, sustainability, and community impact in Kenya.
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p>Loading podcast episodes...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">
              <p>Error loading podcast episodes. Please try again later.</p>
            </div>
          ) : episodes.length === 0 ? (
            <div className="text-center py-12">
              <p>No podcast episodes found.</p>
            </div>
          ) : currentEpisode ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <PodcastPlayer episode={currentEpisode} />
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-2">{currentEpisode.title}</h2>
                  <div className="flex items-center text-dragon-gray text-sm mb-4">
                    <span>{currentEpisode.date}</span>
                    <span className="mx-2">•</span>
                    <span>{currentEpisode.duration}</span>
                  </div>
                  <p className="text-dragon-gray mb-4">{currentEpisode.description}</p>
                  
                  {currentEpisode.guests && currentEpisode.guests.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Guests</h3>
                      <ul className="list-disc list-inside text-dragon-gray">
                        {currentEpisode.guests.map((guest, index) => (
                          <li key={index}>{guest}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <PodcastList 
                  episodes={episodes}
                  currentEpisode={currentEpisode}
                  onSelectEpisode={setCurrentEpisode}
                />
              </div>
            </div>
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Podcast;
