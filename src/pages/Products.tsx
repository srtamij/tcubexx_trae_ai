import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';

const Products = () => {
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

  useEffect(() => {
    let filteredProducts = [...allProducts];
    
    if (searchQuery) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (categoryFilter !== 'All Categories') {
      filteredProducts = filteredProducts.filter(product =>
        product.category === categoryFilter
      );
    }
    
    if (stockFilter === 'In Stock') {
      filteredProducts = filteredProducts.filter(product => product.inStock);
    } else if (stockFilter === 'Out of Stock') {
      filteredProducts = filteredProducts.filter(product => !product.inStock);
    }
    
    switch (sortOption) {
      case 'Price: Low to High':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'Newest First':
        filteredProducts.reverse();
        break;
      default:
        break;
    }
    
    setProducts(filteredProducts);
  }, [searchQuery, categoryFilter, stockFilter, sortOption]);
  
  const handleSearch = () => {
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold mb-4">Products</h1>
              <p className="text-lg text-gray-700 mb-6">
                Discover our wide range of electronics components, development boards, sensors, and DIY kits. 
                Quality products at competitive prices, shipped across India and beyond.
              </p>
              
              <SearchBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <ProductFilters 
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            stockFilter={stockFilter}
            setStockFilter={setStockFilter}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            ) : (
              <div className="col-span-4 py-8 text-center">
                <p className="text-gray-500">No products found matching your criteria.</p>
              </div>
            )}
          </div>

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
