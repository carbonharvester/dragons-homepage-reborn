
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer className="bg-dragon-dark text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="font-serif italic">Mission</span> KAPES
            </h3>
            <p className="text-gray-300 mb-6">
              Facilitating meaningful cross-cultural experiences through immersive and responsible travel programs since 1993.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-dragon-yellow transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-dragon-yellow transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-dragon-yellow transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-dragon-yellow transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Travel With Us</h4>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Food For Education</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Community Centred Conservation</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Empowering Women</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Financial Aid</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Health & Safety</a></li>
              <li><Link to="/partner-with-us" className="text-gray-300 hover:text-white transition-colors flex items-center">
                <Handshake size={16} className="mr-2 text-dragon-yellow" />Partner With Us
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-dragon-yellow" />
                <a href="mailto:info@missionkapes.com" className="text-gray-300 hover:text-white transition-colors">
                  info@missionkapes.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Mission Kapes. All Rights Reserved.</p>
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
