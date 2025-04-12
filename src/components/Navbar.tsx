
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-brand-purple text-2xl font-bold">TCubex</span>
              <span className="text-gray-700 text-lg font-medium ml-1">Private Limited</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-purple transition-colors">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-brand-purple transition-colors">Products</Link>
            <Link to="/learn" className="text-gray-700 hover:text-brand-purple transition-colors">Learn</Link>
            <Link to="/projects" className="text-gray-700 hover:text-brand-purple transition-colors">Projects</Link>
            <Link to="/blog" className="text-gray-700 hover:text-brand-purple transition-colors">Blog</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-purple transition-colors">About Us</Link>
          </div>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-brand-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-brand-purple py-2 transition-colors">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-brand-purple py-2 transition-colors">Products</Link>
            <Link to="/learn" className="text-gray-700 hover:text-brand-purple py-2 transition-colors">Learn</Link>
            <Link to="/projects" className="text-gray-700 hover:text-brand-purple py-2 transition-colors">Projects</Link>
            <Link to="/blog" className="text-gray-700 hover:text-brand-purple py-2 transition-colors">Blog</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-purple py-2 transition-colors">About Us</Link>
            <div className="flex space-x-4 pt-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-brand-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
