import React from 'react';
import { Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-kapes-charcoal text-white">
      {/* CTA Section */}
      <div className="py-16 md:py-24 border-b border-white/10">
        <div className="container-wide text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-academy mb-6">
            Ready to create
            <br />
            <span className="text-kapes-orange">impact?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Whether you're a school, educator, or individual traveler,
            we'll design a journey that transforms lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-action text-lg px-10 py-6" asChild>
              <Link to="/programs">
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button className="btn-ghost text-lg px-10 py-6" asChild>
              <a href="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone" target="_blank" rel="noopener noreferrer">
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <img
                src="/lovable-uploads/9cdd3641-0b63-46d4-9b2d-9e6d3a85f70e.png"
                alt="Kapes Adventures"
                className="h-10 brightness-0 invert mb-4"
              />
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Travel that feeds, empowers, and restores.
              </p>
              <a
                href="https://www.instagram.com/kapesadventures"
                className="inline-flex items-center gap-2 text-white/70 hover:text-kapes-orange transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
                <span className="text-sm">@kapesadventures</span>
              </a>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/school-trips" className="text-white/70 hover:text-kapes-orange transition-colors">
                    School Trips
                  </Link>
                </li>
                <li>
                  <Link to="/summer-abroad" className="text-white/70 hover:text-kapes-orange transition-colors">
                    Summer Programs
                  </Link>
                </li>
                <li>
                  <Link to="/educator-trips" className="text-white/70 hover:text-kapes-orange transition-colors">
                    Educator Journeys
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/impact" className="text-white/70 hover:text-kapes-orange transition-colors">
                    Our Impact
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/70 hover:text-kapes-orange transition-colors">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white/70 hover:text-kapes-orange transition-colors">
                    Stories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/faq" className="text-white/70 hover:text-kapes-orange transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/health-and-safety" className="text-white/70 hover:text-kapes-orange transition-colors">
                    Health & Safety
                  </Link>
                </li>
                <li>
                  <Link to="/discover-kenya" className="text-white/70 hover:text-kapes-orange transition-colors">
                    Discover Kenya
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:matthew@kapesadventures.com"
                    className="text-white/70 hover:text-kapes-orange transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} Kapes Adventures LLC</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
