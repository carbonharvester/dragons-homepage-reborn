export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  authorTitle: string;
  authorImage: string;
  category: string;
  readTime: string;
}

interface FrontMatter {
  title?: string;
  slug?: string;
  date?: string;
  excerpt?: string;
  author?: string;
  authorTitle?: string;
  category?: string;
  readTime?: string;
  featuredImage?: string;
}

function parseFrontMatter(raw: string): { data: FrontMatter; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const frontMatterBlock = match[1];
  const content = match[2].trim();
  const data: Record<string, string> = {};

  for (const line of frontMatterBlock.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();
    // Strip surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }

  return { data: data as FrontMatter, content };
}

const blogModules = import.meta.glob('/src/content/blog/*.md', { query: '?raw', eager: true, import: 'default' });

function loadPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, raw] of Object.entries(blogModules)) {
    const rawContent = raw as string;
    const { data, content } = parseFrontMatter(rawContent);
    const filename = path.split('/').pop()?.replace('.md', '') || '';

    posts.push({
      id: filename,
      title: data.title || filename,
      slug: data.slug || filename,
      date: data.date || '',
      excerpt: data.excerpt || '',
      content,
      featuredImage: data.featuredImage || 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      author: data.author || 'Matthew Benjamin',
      authorTitle: data.authorTitle || 'Founder, Kapes Adventures',
      authorImage: '/lovable-uploads/5de3bb89-b98b-471d-b489-b486b74a96b8.png',
      category: data.category || 'Blog',
      readTime: data.readTime || '5 min',
    });
  }

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

const allPosts = loadPosts();

export function getAllBlogPosts(): BlogPost[] {
  return allPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return allPosts.find(p => p.slug === slug) || null;
}
