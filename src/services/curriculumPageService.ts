import { curriculumPages, CurriculumPageData } from '@/data/curriculumPages';

export function getCurriculumBySlug(slug: string): CurriculumPageData | undefined {
  return curriculumPages.find(p => p.slug === slug);
}

export function getAllCurriculumPages(): CurriculumPageData[] {
  return curriculumPages;
}
