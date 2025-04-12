
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-brand-purple text-xl font-bold">Deshi</span>
              <span className="text-brand-teal text-xl font-bold">Circuit</span>
              <span className="text-brand-saffron text-xl font-bold">Shala</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your premier destination for electronics components, DIY kits, and learning resources in India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Development Boards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sensors & Modules</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">DIY Kits</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Components</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Books & Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Project Ideas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Workshop Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Free E-Books</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Video Library</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-purple mr-2 mt-0.5" />
                <span className="text-gray-400">
                  123 Maker Street, Electronics District,<br />
                  Bengaluru, Karnataka 560001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-teal mr-2" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-saffron mr-2" />
                <a href="mailto:info@deshicircuitshala.com" className="text-gray-400 hover:text-white transition-colors">
                  info@deshicircuitshala.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Deshi Circuit Shala. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Shipping</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
