
import React from 'react';
import BlogSectionHeader from './blog/BlogSectionHeader';
import BlogGrid from './blog/BlogGrid';
import BlogSectionCTA from './blog/BlogSectionCTA';
import BlogSectionLoading from './blog/BlogSectionLoading';
import useBlogPosts from './blog/useBlogPosts';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { formatDate, getImageUrl } from './blog/blogUtils';

const BlogSection = () => {
  const { posts, isLoading, error, isEmpty } = useBlogPosts(3);
  const isMobile = useIsMobile();

  // If loading or error, show minimal content
  if (isLoading || error || isEmpty) {
    return <BlogSectionLoading />;
  }

  // On mobile, render a carousel
  if (isMobile) {
    return (
      <section className="py-16 bg-dragon-beige/30">
        <div className="container-wide">
          <BlogSectionHeader 
            title="Latest From Our Blog" 
            subtitle="Discover insights, stories, and updates from our adventures and impact initiatives."
          />

          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {posts.map((post, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={getImageUrl(post.fields.featuredImage)}
                        alt={post.fields.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center mb-2">
                        <span className="bg-dragon-light/10 text-dragon text-xs font-medium px-2 py-1 rounded-full">
                          {post.fields.category}
                        </span>
                        <div className="flex items-center text-dragon-gray text-xs ml-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{formatDate(post.fields.date)}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-dragon-dark line-clamp-2">
                        <Link to={`/blog/${post.fields.slug}`}>{post.fields.title}</Link>
                      </h3>
                      <p className="text-sm text-dragon-gray mb-4 line-clamp-3">
                        {post.fields.excerpt}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static translate-y-0 mr-2 h-8 w-8 rounded-full bg-white text-dragon hover:bg-dragon-beige transition-colors shadow-md" />
              <CarouselNext className="relative static translate-y-0 ml-2 h-8 w-8 rounded-full bg-white text-dragon hover:bg-dragon-beige transition-colors shadow-md" />
            </div>
          </Carousel>

          <div className="mt-8 text-center">
            <BlogSectionCTA linkText="View All Blog Posts" linkUrl="/blog" />
          </div>
        </div>
      </section>
    );
  }

  // On desktop, use the original grid layout
  return (
    <section className="py-20 bg-dragon-beige/30">
      <div className="container-wide">
        <BlogSectionHeader 
          title="Latest From Our Blog" 
          subtitle="Discover insights, stories, and updates from our adventures and impact initiatives."
        />

        <BlogGrid posts={posts} />

        <BlogSectionCTA linkText="View All Blog Posts" linkUrl="/blog" />
      </div>
    </section>
  );
};

export default BlogSection;
