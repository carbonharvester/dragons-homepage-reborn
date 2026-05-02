
import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';

// Contentful client setup
export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'qz62f406e9mz',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'BRPK9lPK68qkH-hZOKuzIEM2yAQN7HoVwfrgUL8h1dc',
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
    content: Document; // Changed from string to Document type
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

// Function to list all content types in the space
export const getAllContentTypes = async () => {
  try {
    console.log('Fetching content types from Contentful');
    const response = await contentfulClient.getContentTypes();
    console.log('Content types found:', response.items.map(item => ({ 
      name: item.name, 
      id: item.sys.id 
    })));
    return response.items;
  } catch (error) {
    console.error('Error fetching content types from Contentful:', error);
    return [];
  }
};

// Function to fetch all blog posts
export const getAllBlogPosts = async (): Promise<ContentfulBlogPost[]> => {
  try {
    console.log('Fetching blog posts from Contentful');
    
    // First, let's find out what content types are available
    await getAllContentTypes();
    
    // Try common content type names
    const contentTypeOptions = ['blogPost', 'blog', 'post', 'article', 'blogs'];
    
    for (const contentType of contentTypeOptions) {
      try {
        console.log(`Trying to fetch entries with content_type: '${contentType}'`);
        const entries = await contentfulClient.getEntries({
          content_type: contentType,
        });
        
        if (entries.items.length > 0) {
          console.log(`SUCCESS! Found ${entries.items.length} entries using content_type: '${contentType}'`);
          console.log('First entry fields:', entries.items[0].fields);
          
          // If successful, update the actual query with ordering
          const orderedEntries = await contentfulClient.getEntries({
            content_type: contentType,
            order: ['-fields.date'],
          });
          
          return orderedEntries.items as unknown as ContentfulBlogPost[];
        }
      } catch (specificError) {
        console.log(`Error trying content_type '${contentType}':`, specificError.message);
      }
    }
    
    console.error('Could not find any valid content type for blog posts');
    return [];
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error);
    return [];
  }
};

// Function to fetch a single blog post by slug
export const getBlogPostBySlug = async (slug: string): Promise<ContentfulBlogPost | null> => {
  try {
    // Get the content types first to determine the correct one
    const contentTypes = await getAllContentTypes();
    const blogContentType = contentTypes.find(ct => 
      ['blogPost', 'blog', 'post', 'article', 'blogs'].includes(ct.sys.id)
    );
    
    if (!blogContentType) {
      console.error('Could not find a valid blog content type');
      return null;
    }
    
    const contentTypeId = blogContentType.sys.id;
    console.log(`Using content type '${contentTypeId}' for blog post lookup`);
    
    const entries = await contentfulClient.getEntries({
      content_type: contentTypeId,
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
