
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Book, Globe, Users } from 'lucide-react';

const ResourcesSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dragon-dark mb-4 leading-tight">
            Educational Resources & Insights
          </h2>
          <p className="text-lg sm:text-xl text-dragon-gray max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive resources to help you plan and maximize your school's educational travel experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-dragon-beige/30 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 touch-manipulation">
            <div className="flex items-center justify-center w-12 h-12 bg-dragon text-white rounded-lg mb-4 mx-auto sm:mx-0">
              <Book className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-dragon-dark mb-3 text-center sm:text-left">
              Planning Guides
            </h3>
            <p className="text-dragon-gray mb-4 text-center sm:text-left leading-relaxed">
              Comprehensive guides for preparing your school trip, from curriculum integration to student preparation.
            </p>
            <div className="space-y-2">
              <Link 
                to="/health-and-safety" 
                className="block text-dragon hover:text-dragon-dark underline transition-colors duration-200 text-center sm:text-left"
              >
                Health & Safety Protocols
              </Link>
              <Link 
                to="/faq" 
                className="block text-dragon hover:text-dragon-dark underline transition-colors duration-200 text-center sm:text-left"
              >
                Frequently Asked Questions
              </Link>
              <Link 
                to="/partner-with-us" 
                className="block text-dragon hover:text-dragon-dark underline transition-colors duration-200 text-center sm:text-left"
              >
                Partnership Information
              </Link>
            </div>
          </div>
          
          <div className="bg-dragon-beige/30 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 touch-manipulation">
            <div className="flex items-center justify-center w-12 h-12 bg-dragon text-white rounded-lg mb-4 mx-auto sm:mx-0">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-dragon-dark mb-3 text-center sm:text-left">
              Destination Insights
            </h3>
            <p className="text-dragon-gray mb-4 text-center sm:text-left leading-relaxed">
              Learn about Kenya's incredible diversity of landscapes, wildlife, and cultural experiences.
            </p>
            <div className="space-y-2">
              <Link 
                to="/discover-kenya" 
                className="block text-dragon hover:text-dragon-dark underline transition-colors duration-200 text-center sm:text-left"
              >
                Discover Kenya
              </Link>
              <Link 
                to="/blog" 
                className="block text-dragon hover:text-dragon-dark underline transition-colors duration-200 text-center sm:text-left"
              >
                Founder's Travel Insights
              </Link>
            </div>
          </div>
          
          <div className="bg-dragon-beige/30 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 touch-manipulation">
            <div className="flex items-center justify-center w-12 h-12 bg-dragon text-white rounded-lg mb-4 mx-auto sm:mx-0">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-dragon-dark mb-3 text-center sm:text-left">
              Community Impact
            </h3>
            <p className="text-dragon-gray mb-4 text-center sm:text-left leading-relaxed">
              Discover how our programs create meaningful, lasting change in Kenyan communities.
            </p>
            <div className="space-y-2">
              <Link 
                to="/programs/community-conservation" 
                className="block text-dragon hover:text-dragon-dark underline transition-colors duration-200 text-center sm:text-left"
              >
                Conservation Projects
              </Link>
              <Link 
                to="/programs/empowering-women" 
                className="block text-dragon hover:text-dragon-dark underline transition-colors duration-200 text-center sm:text-left"
              >
                Women's Empowerment
              </Link>
              <Link 
                to="/programs/food-for-education" 
                className="block text-dragon hover:text-dragon-dark underline transition-colors duration-200 text-center sm:text-left"
              >
                Food Security Initiatives
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-dragon-gray mb-4">
            Want to stay updated on educational travel insights and program updates?
          </p>
          <Button 
            variant="outline" 
            className="border-dragon text-dragon hover:bg-dragon hover:text-white transition-colors duration-200 min-h-[44px] touch-manipulation w-full sm:w-auto" 
            asChild
          >
            <Link to="/blog">Read Our Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
