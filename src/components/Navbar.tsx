
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
            <a href="/" className="flex items-center">
              <span className="text-brand-purple text-2xl font-bold">Deshi</span>
              <span className="text-brand-teal text-2xl font-bold">Circuit</span>
              <span className="text-brand-saffron text-2xl font-bold">Shala</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-brand-purple transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-brand-purple transition-colors">Products</a>
            <a href="#" className="text-gray-700 hover:text-brand-purple transition-colors">Learn</a>
            <a href="#" className="text-gray-700 hover:text-brand-purple transition-colors">Projects</a>
            <a href="#" className="text-gray-700 hover:text-brand-purple transition-colors">Blog</a>
            <a href="#" className="text-gray-700 hover:text-brand-purple transition-colors">About</a>
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
            <a href="#" className="text-gray-700 hover:text-brand-purple py-2 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-brand-purple py-2 transition-colors">Products</a>
            <a href="#" className="text-gray-700 hover:text-brand-purple py-2 transition-colors">Learn</a>
            <a href="#" className="text-gray-700 hover:text-brand-purple py-2 transition-colors">Projects</a>
            <a href="#" className="text-gray-700 hover:text-brand-purple py-2 transition-colors">Blog</a>
            <a href="#" className="text-gray-700 hover:text-brand-purple py-2 transition-colors">About</a>
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
