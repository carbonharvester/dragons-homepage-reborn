
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'organization' | 'service' | 'event' | 'faqPage';
  data: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const generateSchema = () => {
    const baseContext = {
      "@context": "https://schema.org"
    };

    switch (type) {
      case 'organization':
        return {
          ...baseContext,
          "@type": "Organization",
          ...data
        };
      case 'service':
        return {
          ...baseContext,
          "@type": "Service",
          ...data
        };
      case 'event':
        return {
          ...baseContext,
          "@type": "Event",
          ...data
        };
      case 'faqPage':
        return {
          ...baseContext,
          "@type": "FAQPage",
          ...data
        };
      default:
        return baseContext;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateSchema())}
      </script>
    </Helmet>
  );
};

export default StructuredData;
