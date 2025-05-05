
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import CalendlyEmbed from './CalendlyEmbed';
import { Button } from './ui/button';

const Footer = () => {
  return <footer className="bg-dragon-dark text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/9cdd3641-0b63-46d4-9b2d-9e6d3a85f70e.png" 
                alt="Kapes Adventures - Travel That Transforms" 
                className="h-10 brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 text-sm pl-[5px]">
              Facilitating meaningful cross-cultural experiences through immersive and responsible travel programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-dragon-yellow transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-dragon-yellow transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-dragon-yellow transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white hover:text-dragon-yellow transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-4">Travel With Us</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/school-trips" className="text-gray-300 hover:text-white transition-colors">School Trips</Link></li>
              <li><Link to="/summer-abroad" className="text-gray-300 hover:text-white transition-colors">Summer Abroad</Link></li>
              <li><Link to="/multi-year-curriculum" className="text-gray-300 hover:text-white transition-colors">Multi-Year Curriculum</Link></li>
              <li><Link to="/adult-programs" className="text-gray-300 hover:text-white transition-colors">Adult Programs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/podcast" className="text-gray-300 hover:text-white transition-colors">Podcast</Link></li>
              <li><Link to="/discover-kenya" className="text-gray-300 hover:text-white transition-colors">Discover Kenya</Link></li>
              <li><Link to="/health-and-safety" className="text-gray-300 hover:text-white transition-colors">Health & Safety</Link></li>
              <li><Link to="/partner-with-us" className="text-gray-300 hover:text-white transition-colors">Partner with Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">info@kapesadventures.com</li>
              <li className="mt-4">
                <CalendlyEmbed 
                  url="https://calendly.com/kapesuniforms/discoverymeeting"
                  text="Schedule Consultation"
                  variant="link"
                  className="text-gray-300 hover:text-white transition-colors p-0 h-auto"
                />
              </li>
              <li className="mt-2">
                <a 
                  href="https://form.typeform.com/to/rtxmvp4L" 
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} Kapes Adventures. All Rights Reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
