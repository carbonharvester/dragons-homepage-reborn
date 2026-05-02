
import { useQuery } from '@tanstack/react-query';
import { getAllBlogPosts } from '@/services/contentful';

export const useBlogPosts = (limit = 3) => {
  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['blogPostsHome'],
    queryFn: getAllBlogPosts,
  });
  
  const displayPosts = blogPosts?.slice(0, limit) || [];
  
  return {
    posts: displayPosts,
    isLoading,
    error,
    isEmpty: displayPosts.length === 0
  };
};

export default useBlogPosts;
