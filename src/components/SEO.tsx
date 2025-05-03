
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
}

const SEO = ({
  title = 'Mission Kapes | Authentic Immersion Programs',
  description = 'Transformative student travel programs in Africa offering cultural immersion, wilderness adventure, and educational experiences.',
  keywords = 'educational travel, student trips, cultural immersion, Kenya, Africa travel, sustainable tourism',
  ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
  ogType = 'website',
  ogUrl = 'https://missionkapes.com',
}: SEOProps) => {
  const fullTitle = title.includes('Mission Kapes') ? title : `${title} | Mission Kapes`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Social Media Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      
      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
