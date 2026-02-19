import { locationPages, LocationPageData } from '@/data/locationPages';

export function getLocationBySlug(slug: string): LocationPageData | null {
  return locationPages.find(loc => loc.slug === slug) || null;
}

export function getAllLocations(): LocationPageData[] {
  return locationPages;
}

export function getLocationsByCountry(country: string): LocationPageData[] {
  return locationPages.filter(loc => loc.country === country);
}

export function getOtherLocationsInCountry(slug: string): LocationPageData[] {
  const current = getLocationBySlug(slug);
  if (!current) return [];
  return locationPages.filter(loc => loc.country === current.country && loc.slug !== slug);
}
