
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer className="bg-dragon-dark text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/741a3f8a-9da4-4fa9-a3d2-363c5231bed5.png" 
                alt="Kapes logo" 
                className="h-7 mr-2 brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 text-sm">
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
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Food For Education</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Community Centred Conservation</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Empowering Women</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><Link to="/partner-with-us" className="text-gray-300 hover:text-white transition-colors">
                Partner With Us
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@kapesadventures.com" className="text-gray-300 hover:text-white transition-colors">
                  info@kapesadventures.com
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
