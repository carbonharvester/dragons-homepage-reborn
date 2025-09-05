
import React from 'react';
import { Instagram, Shirt } from "lucide-react";
import { Link } from "react-router-dom";
import CalendlyEmbed from './CalendlyEmbed';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import WaitingListForm from './WaitingListForm';

const Footer = () => {
  return <footer className="bg-dragon-dark text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-12">
          <div>
            <div className="mb-4">
              <img src="/lovable-uploads/9cdd3641-0b63-46d4-9b2d-9e6d3a85f70e.png" alt="Kapes Adventures - Travel That Transforms" className="h-10 brightness-0 invert" />
            </div>
            <p className="text-gray-300 mb-6 text-sm pl-[5px]">We create immersive, responsible travel programs that connect students with communities, fostering transformation through authentic cultural exchange.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/kapesadventures?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white hover:text-dragon-yellow transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-4">Travel With Us</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/school-trips" className="text-gray-300 hover:text-white transition-colors">School Trips</Link></li>
              <li><Link to="/summer-abroad" className="text-gray-300 hover:text-white transition-colors">Summer Abroad</Link></li>
              <li><Link to="/educator-trips" className="text-gray-300 hover:text-white transition-colors">Educator Trips</Link></li>
              {/* Adult Programs link removed */}
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/discover-kenya" className="text-gray-300 hover:text-white transition-colors">Discover Kenya</Link></li>
              <li><Link to="/health-and-safety" className="text-gray-300 hover:text-white transition-colors">Health & Safety</Link></li>
              <li><Link to="/partner-with-us" className="text-gray-300 hover:text-white transition-colors">Partner with Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-4">Get in touch</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="mt-0">
                <CalendlyEmbed url="https://calendly.com/kapesuniforms/discoverymeeting" text="Schedule Consultation" variant="link" className="text-gray-300 hover:text-white transition-colors p-0 h-auto" />
              </li>
              <li className="mt-2">
                <WaitingListForm>
                  <button className="text-gray-300 hover:text-white transition-colors text-left">
                    Apply Now
                  </button>
                </WaitingListForm>
              </li>
              <li className="text-gray-300 mt-2">info@kapesadventures.com</li>
            </ul>
          </div>
        </div>
        
        {/* Kapes Uniforms CTA */}
        <div className="border-t border-gray-700 py-6 mt-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex items-center">
              <Shirt className="h-5 w-5 mr-2 text-dragon-yellow" />
              <span className="font-medium">Need sustainable school uniforms?</span>
            </div>
            <a 
              href="https://www.kapesuniforms.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-dragon-yellow hover:text-white transition-colors flex items-center"
            >
              Visit Kapes Uniforms
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} Kapes Adventures LLC. All Rights Reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
