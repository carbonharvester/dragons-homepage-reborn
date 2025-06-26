
import React from 'react';
import StructuredData from '@/components/seo/StructuredData';

const SchoolTripsStructuredData = () => {
  const organizationData = {
    name: "Mission Kapes",
    description: "Educational travel programs and school trips to Kenya offering cultural immersion, community service, and wildlife conservation experiences.",
    url: "https://missionkapes.com",
    logo: "https://res.cloudinary.com/dng12bd0a/image/upload/v1747118794/klein-500-2_l4o6ap.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "Customer Service",
      availableLanguage: ["English"]
    },
    sameAs: [
      "https://www.facebook.com/missionkapes",
      "https://www.instagram.com/missionkapes",
      "https://www.linkedin.com/company/missionkapes"
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Kenya"
    }
  };

  const serviceData = {
    name: "Educational School Trips to Kenya",
    description: "Transformative educational school trips to Kenya featuring curriculum-aligned programs with cultural immersion, community service, and wildlife conservation.",
    provider: {
      "@type": "Organization",
      name: "Mission Kapes",
      url: "https://missionkapes.com"
    },
    serviceType: "Educational Travel",
    areaServed: "International",
    audience: {
      "@type": "Audience",
      audienceType: "Students and Educational Institutions"
    },
    offers: {
      "@type": "Offer",
      description: "8-day educational programs including Food for Education, Community Conservation, and Empowering Young Women",
      priceRange: "Contact for pricing"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "School Trip Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Food for Education",
            description: "Students explore food security and sustainable agriculture practices"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Community Conservation",
            description: "Wildlife conservation and environmental protection programs"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Empowering Young Women",
            description: "Gender equality and women's empowerment initiatives"
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50+"
    }
  };

  return (
    <>
      <StructuredData type="organization" data={organizationData} />
      <StructuredData type="service" data={serviceData} />
    </>
  );
};

export default SchoolTripsStructuredData;
