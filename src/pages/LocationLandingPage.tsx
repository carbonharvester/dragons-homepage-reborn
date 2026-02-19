
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import NotFound from '@/pages/NotFound';
import { getLocationBySlug, getOtherLocationsInCountry } from '@/services/locationPageService';

import LocationHero from '@/components/location-landing/LocationHero';
import LocationLogistics from '@/components/location-landing/LocationLogistics';
import LocationPrograms from '@/components/location-landing/LocationPrograms';
import LocationWhyKapes from '@/components/location-landing/LocationWhyKapes';
import LocationCTA from '@/components/location-landing/LocationCTA';
import LocationFAQ from '@/components/location-landing/LocationFAQ';
import { Link } from 'react-router-dom';

const LocationLandingPage = () => {
  const { locationSlug } = useParams();
  const data = getLocationBySlug(locationSlug || '');

  if (!data) {
    return <NotFound />;
  }

  const siblingLocations = getOtherLocationsInCountry(data.slug);

  return (
    <>
      <SEO
        title={data.pageTitle}
        description={data.metaDescription}
        keywords={`${data.tripTerm} Kenya, school trips to Kenya from ${data.city}, ethical school trips ${data.city}, service learning Kenya, ${data.curriculumLinks.join(', ')}`}
        canonicalUrl={`https://missionkapes.com/trips-from/${data.slug}`}
        ogUrl={`https://missionkapes.com/trips-from/${data.slug}`}
      />
      <Header />
      <main>
        <LocationHero data={data} />
        <LocationLogistics data={data} />
        <LocationPrograms data={data} />
        <LocationWhyKapes data={data} />
        <LocationCTA data={data} variant="scorecard" />
        <LocationFAQ data={data} />
        <LocationCTA data={data} variant="final" />

        {siblingLocations.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container-wide">
              <h2 className="text-2xl font-academy text-dragon-dark mb-6">
                School trips to Kenya from other {data.country} cities
              </h2>
              <div className="flex flex-wrap gap-3">
                {siblingLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/trips-from/${loc.slug}`}
                    className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-dragon-dark hover:border-kapes-orange hover:text-kapes-orange transition-colors text-sm font-medium"
                  >
                    {loc.city}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default LocationLandingPage;
