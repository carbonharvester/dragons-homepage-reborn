
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PodcastPlayer from '@/components/podcast/PodcastPlayer';
import PodcastList from '@/components/podcast/PodcastList';
import { podcastEpisodes } from '@/data/podcastData';
import SEO from '@/components/SEO';

const Podcast = () => {
  const [currentEpisode, setCurrentEpisode] = useState(podcastEpisodes[0]);

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
                episodes={podcastEpisodes}
                currentEpisode={currentEpisode}
                onSelectEpisode={setCurrentEpisode}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Podcast;
