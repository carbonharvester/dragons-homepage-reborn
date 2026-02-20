import { comparisonPages, ComparisonPageData } from '@/data/comparisonPages';

export function getComparisonBySlug(slug: string): ComparisonPageData | undefined {
  return comparisonPages.find(p => '/' + p.slug === slug || p.slug === slug);
}

export function getAllComparisonPages(): ComparisonPageData[] {
  return comparisonPages;
}
