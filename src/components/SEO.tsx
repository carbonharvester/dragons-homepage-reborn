
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = 'Kapes Adventures | Travel That Transforms',
  description = 'Ethical, community-led school trips to Kenya. Year-round programs feeding schools and building water access — your students join work that\'s already changing communities.',
  keywords = 'educational travel, school trips Kenya, ethical travel, community-led trips, sustainable tourism',
  ogImage = 'https://res.cloudinary.com/dng12bd0a/image/upload/v1747118794/klein-500-2_l4o6ap.jpg',
  ogType = 'website',
  ogUrl = 'https://kapesadventures.com',
  canonicalUrl,
}: SEOProps) => {
  const fullTitle = title.includes('Kapes Adventures') ? title : `${title} | Kapes Adventures`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/** Canonical URL */}
      <link rel="canonical" href={canonicalUrl || ogUrl} />
      
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
