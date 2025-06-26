
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Book, Globe, Users } from 'lucide-react';

const ResourcesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dragon-dark mb-4">
            Educational Resources & Insights
          </h2>
          <p className="text-xl text-dragon-gray max-w-3xl mx-auto">
            Explore our comprehensive resources to help you plan and maximize your school's educational travel experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-dragon-beige/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-dragon text-white rounded-lg mb-4">
              <Book className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-dragon-dark mb-3">Planning Guides</h3>
            <p className="text-dragon-gray mb-4">
              Comprehensive guides for preparing your school trip, from curriculum integration to student preparation.
            </p>
            <div className="space-y-2">
              <Link to="/health-and-safety" className="block text-dragon hover:text-dragon-dark underline">
                Health & Safety Protocols
              </Link>
              <Link to="/faq" className="block text-dragon hover:text-dragon-dark underline">
                Frequently Asked Questions
              </Link>
              <Link to="/partner-with-us" className="block text-dragon hover:text-dragon-dark underline">
                Partnership Information
              </Link>
            </div>
          </div>
          
          <div className="bg-dragon-beige/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-dragon text-white rounded-lg mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-dragon-dark mb-3">Destination Insights</h3>
            <p className="text-dragon-gray mb-4">
              Learn about Kenya's incredible diversity of landscapes, wildlife, and cultural experiences.
            </p>
            <div className="space-y-2">
              <Link to="/discover-kenya" className="block text-dragon hover:text-dragon-dark underline">
                Discover Kenya
              </Link>
              <Link to="/blog" className="block text-dragon hover:text-dragon-dark underline">
                Founder's Travel Insights
              </Link>
            </div>
          </div>
          
          <div className="bg-dragon-beige/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-dragon text-white rounded-lg mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-dragon-dark mb-3">Community Impact</h3>
            <p className="text-dragon-gray mb-4">
              Discover how our programs create meaningful, lasting change in Kenyan communities.
            </p>
            <div className="space-y-2">
              <Link to="/programs/community-conservation" className="block text-dragon hover:text-dragon-dark underline">
                Conservation Projects
              </Link>
              <Link to="/programs/empowering-women" className="block text-dragon hover:text-dragon-dark underline">
                Women's Empowerment
              </Link>
              <Link to="/programs/food-for-education" className="block text-dragon hover:text-dragon-dark underline">
                Food Security Initiatives
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-dragon-gray mb-4">
            Want to stay updated on educational travel insights and program updates?
          </p>
          <Button variant="outline" className="border-dragon text-dragon hover:bg-dragon hover:text-white" asChild>
            <Link to="/blog">Read Our Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
