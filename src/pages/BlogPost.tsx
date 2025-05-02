
import React from 'react';
import { Link, useParams } from "react-router-dom";
import { Calendar, ArrowLeft, Share, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Blog post data storage
const blogPosts = {
  "sustainable-travel-education": {
    title: "How Sustainable Travel Enhances Educational Experiences",
    date: "May 1, 2025",
    author: "Sarah Johnson",
    authorTitle: "Educational Program Director",
    authorImage: "/lovable-uploads/5de3bb89-b98b-471d-b489-b486b74a96b8.png",
    category: "Sustainability",
    readTime: "6 min read",
    heroImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    content: `
      <p class="lead">Sustainable travel is more than just a trending term—it's a fundamental approach to exploring the world that preserves cultural heritage, protects natural environments, and enriches educational experiences in ways traditional tourism simply cannot match.</p>
      
      <p>At Kapes Adventures, we've spent decades refining our approach to educational travel programs that prioritize sustainability while delivering transformative learning experiences. Our programs are designed not just as trips but as immersive educational journeys that connect students with communities, cultures, and conservation efforts around the world.</p>
      
      <h2>The Educational Value of Sustainable Travel</h2>
      
      <p>When students participate in sustainability-focused travel programs, they gain far more than just knowledge about environmental issues. They develop:</p>
      
      <ul>
        <li><strong>Systems Thinking:</strong> Understanding the complex interconnections between environmental, social, and economic systems</li>
        <li><strong>Cultural Competence:</strong> Developing deeper appreciation for diverse perspectives and ways of living</li>
        <li><strong>Ethical Decision-Making:</strong> Considering the impacts of individual and collective choices on communities and ecosystems</li>
        <li><strong>Active Citizenship:</strong> Fostering a sense of responsibility toward local and global challenges</li>
      </ul>
      
      <p>These skills extend far beyond what's possible in traditional classroom settings, creating learning experiences that stay with students for a lifetime.</p>
      
      <blockquote>
        "The most meaningful educational experiences happen when students step outside their comfort zones and engage directly with real-world challenges. Sustainable travel creates the perfect context for this kind of transformative learning."
      </blockquote>
      
      <h2>Our Approach to Sustainable Educational Travel</h2>
      
      <p>Kapes Adventures builds sustainability into every aspect of our programs:</p>
      
      <h3>Environmental Stewardship</h3>
      
      <p>We minimize ecological footprints through careful program design, carbon offset initiatives, and waste reduction practices. Students don't just learn about environmental conservation—they participate in it through reforestation projects, wildlife monitoring, and beach cleanups.</p>
      
      <h3>Community Partnership</h3>
      
      <p>Our programs are developed in genuine collaboration with local communities. We ensure that our presence contributes positively to local economies and respects cultural traditions. Students stay in locally-owned accommodations, eat at community restaurants, and learn directly from community experts.</p>
      
      <h3>Educational Integration</h3>
      
      <p>Each program aligns with educational standards while creating space for the kind of experiential learning that builds lasting understanding. We balance structured learning with reflection time, allowing students to process their experiences and connect them to broader concepts.</p>
      
      <h2>The Lasting Impact</h2>
      
      <p>Research consistently shows that sustainable educational travel has profound and lasting effects on students' worldviews, academic engagement, and career choices. Many of our alumni report that their experiences with Kapes Adventures influenced their university studies, professional paths, and lifelong commitment to global citizenship.</p>
      
      <p>In a world facing urgent environmental and social challenges, educational travel that prioritizes sustainability isn't just a responsible choice—it's an essential approach to preparing young people for the complex world they'll inherit.</p>
      
      <h2>Looking Ahead</h2>
      
      <p>As we continue to evolve our programs, we're exploring new ways to deepen the connection between sustainable travel and educational outcomes. From incorporating more digital learning tools to expanding our community partnerships, we're committed to leading the way in sustainable educational travel.</p>
      
      <p>If you're interested in learning more about how Kapes Adventures can create a sustainable travel program for your school or organization, we invite you to <a href="/partner-with-us" class="text-dragon hover:underline">explore partnership opportunities</a> or <a href="/#programs" class="text-dragon hover:underline">browse our existing programs</a>.</p>
    `
  }
};

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts[postId as keyof typeof blogPosts];
  
  // If post doesn't exist, show not found message
  if (!post) {
    return (
      <>
        <Header />
        <main className="py-16">
          <div className="container-wide text-center">
            <h1 className="text-3xl font-serif font-bold text-dragon-dark mb-6">
              Blog Post Not Found
            </h1>
            <p className="text-dragon-gray mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild className="bg-dragon hover:bg-dragon-dark text-white">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pb-16">
        {/* Hero section */}
        <div className="w-full h-64 md:h-96 bg-gray-200 relative">
          <img 
            src={post.heroImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="container-wide max-w-4xl">
          {/* Back to blog */}
          <div className="my-6">
            <Button 
              variant="ghost" 
              asChild 
              className="text-dragon hover:text-dragon-dark hover:bg-dragon-beige"
            >
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-dragon-light/10 text-dragon text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-dragon-gray text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <span className="text-dragon-gray text-sm">
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dragon-dark mb-6">
              {post.title}
            </h1>
            
            {/* Author info */}
            <div className="flex items-center mb-8">
              <img 
                src={post.authorImage} 
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div>
                <h3 className="font-medium text-dragon-dark">{post.author}</h3>
                <p className="text-sm text-dragon-gray">{post.authorTitle}</p>
              </div>
            </div>
          </div>
          
          {/* Article content */}
          <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-dragon-dark prose-p:text-dragon-gray prose-li:text-dragon-gray prose-blockquote:text-dragon prose-blockquote:border-dragon-light">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          
          {/* Share links */}
          <div className="mt-12 pt-6 border-t border-dragon-sand">
            <div className="flex items-center gap-4">
              <span className="font-medium text-dragon-dark flex items-center">
                <Share className="h-4 w-4 mr-2" />
                Share this article:
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8 p-0">
                  <Facebook className="h-4 w-4 text-dragon" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8 p-0">
                  <Twitter className="h-4 w-4 text-dragon" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8 p-0">
                  <Linkedin className="h-4 w-4 text-dragon" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Related posts - placeholder for future expansion */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-dragon-dark mb-6">
              You might also like
            </h2>
            <div className="bg-dragon-beige p-8 text-center rounded-lg">
              <p className="text-dragon-dark mb-4">More blog posts coming soon!</p>
              <Button asChild className="bg-dragon hover:bg-dragon-dark text-white">
                <Link to="/blog">Return to Blog Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
