
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, User, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import Cart from '@/components/Cart';
import { useCart } from '@/contexts/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-brand-purple font-medium" : "text-gray-700 hover:text-brand-purple";
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-brand-purple text-3xl font-bold font-orbitron tracking-tight">TCubex</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`transition-colors ${isActive('/')}`}>Home</Link>
              <Link to="/products" className={`transition-colors ${isActive('/products')}`}>Products</Link>
              <Link to="/learn" className={`transition-colors ${isActive('/learn')}`}>Learn</Link>
              <Link to="/projects" className={`transition-colors ${isActive('/projects')}`}>Projects</Link>
              <Link to="/blog" className={`transition-colors ${isActive('/blog')}`}>Blog</Link>
              <Link to="/about" className={`transition-colors ${isActive('/about')}`}>About Us</Link>
            </div>

            {/* Search and Cart */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Link to="/login">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/order-tracking">
                <Button variant="ghost" size="icon">
                  <Package className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="ghost" size="icon" onClick={toggleCart} className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-brand-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleCart} className="relative mr-2">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-brand-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              </Button>
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
              <Link to="/" className={`py-2 transition-colors ${isActive('/')}`}>Home</Link>
              <Link to="/products" className={`py-2 transition-colors ${isActive('/products')}`}>Products</Link>
              <Link to="/learn" className={`py-2 transition-colors ${isActive('/learn')}`}>Learn</Link>
              <Link to="/projects" className={`py-2 transition-colors ${isActive('/projects')}`}>Projects</Link>
              <Link to="/blog" className={`py-2 transition-colors ${isActive('/blog')}`}>Blog</Link>
              <Link to="/about" className={`py-2 transition-colors ${isActive('/about')}`}>About Us</Link>
              <div className="flex space-x-4 pt-2">
                <Link to="/login">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/order-tracking">
                  <Button variant="ghost" size="icon">
                    <Package className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
