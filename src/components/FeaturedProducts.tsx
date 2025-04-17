
import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Raspberry Pi 5 - 8GB RAM',
    price: 12499,
    rating: 5,
    image: '/placeholder.svg',
    tag: 'New',
    tagColor: 'bg-brand-purple',
    category: 'Development Boards',
    inStock: true,
  },
  {
    id: 2,
    name: 'Arduino UNO R4 WiFi',
    price: 4999,
    rating: 4.8,
    image: '/placeholder.svg',
    tag: 'Bestseller',
    tagColor: 'bg-brand-saffron',
    category: 'DIY Kits',
    inStock: true,
  },
  {
    id: 3,
    name: 'ESP32 DevKitC V4',
    price: 449,
    rating: 4.7,
    image: '/placeholder.svg',
    tag: 'Popular',
    tagColor: 'bg-brand-teal',
    category: 'Development Boards',
    inStock: true,
  },
  {
    id: 4,
    name: 'DHT22 Temperature & Humidity Sensor',
    price: 349,
    rating: 4.5,
    image: '/placeholder.svg',
    tag: 'Best Value',
    tagColor: 'bg-red-500',
    category: 'Sensors & Modules',
    inStock: true,
  },
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    
    toast({
      title: `${product.name} added to cart!`,
      description: "Item has been added to your cart",
    });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link to="/products" className="text-brand-purple hover:underline flex items-center">
            View all products
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/product/${product.id === 1 ? 'raspberry-pi-5' : 
                         product.id === 2 ? 'arduino-uno-r4' : 
                         product.id === 3 ? 'esp32-devkit' : 
                         'dht22-sensor'}`}>
                <div className="relative h-60 overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-4 product-img"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.error(`Failed to load image: ${target.src}`);
                      target.src = "https://placehold.co/400x300/e2e8f0/1e293b?text=Image+Not+Found";
                    }}
                  />
                  {product.tag && (
                    <div className={`absolute top-3 left-3 py-1 px-3 text-sm text-white font-medium rounded-full ${product.tagColor}`}>
                      {product.tag}
                    </div>
                  )}
                </div>
              </Link>
              
              <div className="p-4">
                <div className="flex justify-between mb-1">
                  <div className="text-xs text-gray-500">{product.category}</div>
                  <div className="flex items-center text-xs">
                    <Star className="h-3 w-3 text-brand-saffron mr-1" fill="currentColor" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                
                <Link to={`/product/${product.id === 1 ? 'raspberry-pi-5' : 
                           product.id === 2 ? 'arduino-uno-r4' : 
                           product.id === 3 ? 'esp32-devkit' : 
                           'dht22-sensor'}`}>
                  <h3 className="font-medium mb-2 hover:text-brand-purple line-clamp-2 h-12">{product.name}</h3>
                </Link>
                
                <div className="flex justify-between items-center mb-3">
                  <p className="text-brand-purple font-bold">₹{product.price.toLocaleString()}</p>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                    In Stock
                  </span>
                </div>
                
                <Button 
                  className="w-full flex items-center justify-center bg-brand-purple hover:bg-brand-purple/90 text-white" 
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
