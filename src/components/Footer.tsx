import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/545807b0-b1d8-485e-ad30-9188afe6daad.png" 
                alt="T-CubeX Logo" 
                className="h-12 w-12 rounded-lg bg-soft-purple" 
              />
              <span className="text-brand-purple text-xl font-bold ml-2">TCubex</span>
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
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Development Boards</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Sensors & Modules</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">DIY Kits</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Components</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Tools</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Books & Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><Link to="/learn" className="text-gray-400 hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Project Ideas</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/learn" className="text-gray-400 hover:text-white transition-colors">Workshop Resources</Link></li>
              <li><Link to="/learn" className="text-gray-400 hover:text-white transition-colors">Free E-Books</Link></li>
              <li><Link to="/learn" className="text-gray-400 hover:text-white transition-colors">Video Library</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-purple mr-2 mt-0.5" />
                <span className="text-gray-400">
                  LIG B 20, Dr A.S Rao Nagar,<br />
                  Kapra, Hyderabad
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
                <a href="mailto:info@tcubex.com" className="text-gray-400 hover:text-white transition-colors">
                  info@tcubex.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TCubex Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/shipping" className="text-gray-500 hover:text-white text-sm transition-colors">Shipping</Link>
              <Link to="/refund" className="text-gray-500 hover:text-white text-sm transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
