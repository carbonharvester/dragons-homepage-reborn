
import { getAllBlogPosts } from '@/services/blogService';

export const useBlogPosts = (limit = 3) => {
  const allPosts = getAllBlogPosts();
  const displayPosts = allPosts.slice(0, limit);

  return {
    posts: displayPosts,
    isLoading: false,
    error: null,
    isEmpty: displayPosts.length === 0
  };
};

export default useBlogPosts;
