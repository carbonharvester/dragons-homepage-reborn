
import React from 'react';
import BlogSectionHeader from './blog/BlogSectionHeader';
import BlogCard from './blog/BlogCard';
import BlogSectionCTA from './blog/BlogSectionCTA';
import BlogSectionLoading from './blog/BlogSectionLoading';
import useBlogPosts from './blog/useBlogPosts';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const BlogSection = () => {
  const { posts, isLoading, error, isEmpty } = useBlogPosts(3);

  // If loading or error, show minimal content
  if (isLoading || error || isEmpty) {
    return <section className="py-20 bg-dragon-beige/30">
      <div className="h-full">
        <BlogSectionHeader 
          title="Latest From Our Blog" 
          subtitle="Discover insights, stories, and updates from our adventures and impact initiatives."
        />

        <BlogSectionCTA linkText="View All Blog Posts" linkUrl="/blog" />
      </div>
    </section>;
  }

  return (
    <section className="py-20 bg-dragon-beige/30">
      <div className="h-full">
        <BlogSectionHeader 
          title="Latest From Our Blog" 
          subtitle="Discover insights, stories, and updates from our adventures and impact initiatives."
        />

        <div className="relative px-8">
          <Carousel
            opts={{
              align: "center",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {posts.slice(0, 3).map((post) => (
                <CarouselItem key={post.sys.id}>
                  <div className="p-1">
                    <BlogCard post={post} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/80 hover:bg-white rounded-full shadow-md" />
            <CarouselNext className="right-0 bg-white/80 hover:bg-white rounded-full shadow-md" />
          </Carousel>
        </div>

        <BlogSectionCTA linkText="View All Blog Posts" linkUrl="/blog" />
      </div>
    </section>
  );
};

export default BlogSection;
