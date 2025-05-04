
import { createClient } from 'contentful';

// Contentful client setup
export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'qz62f406e9mz',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'CFPAT-PwZhyp7T2W3Q4qcJ1zGOxl0-hKs-NVP9MgIzxDV2Kvw',
});

// Blog post type definition matching Contentful content model
export interface ContentfulBlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    content: string;
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    author: string;
    authorTitle?: string;
    authorImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    category: string;
    readTime?: string;
  };
}

// Podcast episode type definition matching Contentful content model
export interface ContentfulPodcastEpisode {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: string;
    audioUrl: string;
    duration: string;
    date: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

// Function to fetch all blog posts
export const getAllBlogPosts = async (): Promise<ContentfulBlogPost[]> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'blogPost',
      order: ['-fields.date'],
    });
    return entries.items as unknown as ContentfulBlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error);
    return [];
  }
};

// Function to fetch a single blog post by slug
export const getBlogPostBySlug = async (slug: string): Promise<ContentfulBlogPost | null> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });
    
    if (entries.items.length === 0) {
      return null;
    }
    
    return entries.items[0] as unknown as ContentfulBlogPost;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug} from Contentful:`, error);
    return null;
  }
};

// Function to fetch all podcast episodes
export const getAllPodcastEpisodes = async (): Promise<ContentfulPodcastEpisode[]> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'podcastEpisode',
      order: ['-fields.date'],
    });
    return entries.items as unknown as ContentfulPodcastEpisode[];
  } catch (error) {
    console.error('Error fetching podcast episodes from Contentful:', error);
    return [];
  }
};

// Function to fetch a single podcast episode by ID
export const getPodcastEpisodeById = async (id: string): Promise<ContentfulPodcastEpisode | null> => {
  try {
    const entry = await contentfulClient.getEntry(id);
    return entry as unknown as ContentfulPodcastEpisode;
  } catch (error) {
    console.error(`Error fetching podcast episode with ID ${id} from Contentful:`, error);
    return null;
  }
};
