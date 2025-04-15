
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "@/hooks/use-toast";
import { useCart } from '@/contexts/CartContext';

const Products = () => {
  // Updated product data with robu.in images and details
  const allProducts = [
    {
      id: 1,
      name: 'Raspberry Pi 5 - 8GB RAM',
      image: 'https://robu.in/wp-content/uploads/2023/09/Raspberry-Pi-5-8GB.jpg',
      price: 12499,
      category: 'Development Boards',
      inStock: true,
    },
    {
      id: 2,
      name: 'Arduino UNO R4 WiFi',
      image: 'https://robu.in/wp-content/uploads/2023/05/Arduino-UNO-R4-WIFI.jpg',
      price: 4999,
      category: 'Development Boards',
      inStock: true,
    },
    {
      id: 3,
      name: 'ESP32 DevKitC V4',
      image: 'https://robu.in/wp-content/uploads/2019/11/ESP32-Development-Board-1.jpg',
      price: 449,
      category: 'Development Boards',
      inStock: true,
    },
    {
      id: 4,
      name: 'DHT22 Temperature & Humidity Sensor',
      image: 'https://robu.in/wp-content/uploads/2016/01/DHT22-Temperature-Humidity-Sensor.jpg',
      price: 349,
      category: 'Sensors & Modules',
      inStock: true,
    },
    {
      id: 5,
      name: 'HC-SR501 PIR Motion Sensor',
      image: 'https://robu.in/wp-content/uploads/2016/04/HC-SR501-PIR-Motion-Sensor.jpg',
      price: 89,
      category: 'Sensors & Modules',
      inStock: true,
    },
    {
      id: 6,
      name: 'Arduino Smart Home Kit',
      image: 'https://robu.in/wp-content/uploads/2019/11/Arduino-Starter-Kit.jpg',
      price: 3499,
      category: 'DIY Kits',
      inStock: true,
    },
    {
      id: 7,
      name: 'HC-SR04 Ultrasonic Distance Sensor',
      image: 'https://robu.in/wp-content/uploads/2016/06/HC-SR04-Ultrasonic-Distance-Sensor.jpg',
      price: 89,
      category: 'Sensors & Modules',
      inStock: true,
    },
    {
      id: 8,
      name: '8x8 LED Matrix Display with MAX7219',
      image: 'https://robu.in/wp-content/uploads/2016/05/MAX7219-LED-Dot-Matrix.jpg',
      price: 149,
      category: 'Components',
      inStock: true,
    },
  ];

  const [products, setProducts] = useState(allProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [stockFilter, setStockFilter] = useState('All Products');
  const [sortOption, setSortOption] = useState('Featured');
  const { addToCart } = useCart();

  // Categories for filter
  const categories = [
    'All Categories',
    'Development Boards',
    'Sensors & Modules',
    'DIY Kits',
    'Components',
    'Tools',
    'Books & Resources',
  ];

  // Apply filters and sorting
  useEffect(() => {
    let filteredProducts = [...allProducts];
    
    // Apply search filter
    if (searchQuery) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (categoryFilter !== 'All Categories') {
      filteredProducts = filteredProducts.filter(product =>
        product.category === categoryFilter
      );
    }
    
    // Apply stock filter
    if (stockFilter === 'In Stock') {
      filteredProducts = filteredProducts.filter(product => product.inStock);
    } else if (stockFilter === 'Out of Stock') {
      filteredProducts = filteredProducts.filter(product => !product.inStock);
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'Price: Low to High':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'Newest First':
        // For this example, we'll just reverse the array as a simple approximation
        filteredProducts.reverse();
        break;
      default:
        // 'Featured' is default - no sorting needed
        break;
    }
    
    setProducts(filteredProducts);
  }, [searchQuery, categoryFilter, stockFilter, sortOption]);
  
  // Function to handle adding a product to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    
    // Show toast notification
    toast({
      title: `${product.name} added to cart!`,
      description: product.inStock ? "Item has been added to your cart" : "You will be notified when this item is back in stock",
      variant: product.inStock ? "default" : "destructive",
    });
  };

  // Function to handle search
  const handleSearch = () => {
    // Search is already being handled in the useEffect
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold mb-4">Products</h1>
              <p className="text-lg text-gray-700 mb-6">
                Discover our wide range of electronics components, development boards, sensors, and DIY kits. 
                Quality products at competitive prices, shipped across India and beyond.
              </p>
              
              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-3 text-gray-400" />
                </div>
                <Button 
                  className="bg-brand-purple hover:bg-brand-purple/90 text-white"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Listing */}
        <div className="container mx-auto px-4 py-12">
          {/* Filters and Sort */}
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Filter className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-700 font-medium">Filters:</span>
              </div>
              <div className="relative">
                <select 
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  {categories.map((category, index) => (
                    <option key={index}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
              <div className="relative">
                <select 
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  value={stockFilter}
                  onChange={(e) => setStockFilter(e.target.value)}
                >
                  <option>All Products</option>
                  <option>In Stock</option>
                  <option>Out of Stock</option>
                </select>
                <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
            <div className="relative">
              <select 
                className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
              <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transform hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                    <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-brand-purple">₹{product.price.toLocaleString()}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                    <Button 
                      className="w-full mt-4 bg-brand-purple hover:bg-brand-purple/90 text-white"
                      onClick={() => handleAddToCart(product)}
                    >
                      {product.inStock ? 'Add to Cart' : 'Notify Me'}
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-4 py-8 text-center">
                <p className="text-gray-500">No products found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-1">
              <Button variant="outline" className="text-gray-500" disabled>
                Previous
              </Button>
              <Button className="bg-brand-purple text-white">1</Button>
              <Button variant="outline" className="text-gray-700">2</Button>
              <Button variant="outline" className="text-gray-700">3</Button>
              <Button variant="outline" className="text-gray-700">...</Button>
              <Button variant="outline" className="text-gray-700">8</Button>
              <Button variant="outline" className="text-gray-700">
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
