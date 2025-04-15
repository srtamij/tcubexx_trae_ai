
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
    image: 'https://robu.in/wp-content/uploads/2023/09/Raspberry-Pi-5-8GB.jpg',
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
    image: 'https://robu.in/wp-content/uploads/2023/05/Arduino-UNO-R4-WIFI.jpg',
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
    image: 'https://robu.in/wp-content/uploads/2019/11/ESP32-Development-Board-1.jpg',
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
    image: 'https://robu.in/wp-content/uploads/2016/01/DHT22-Temperature-Humidity-Sensor.jpg',
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
            <div key={product.id} className="product-card group">
              <div className="relative h-60 overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover product-img"
                />
                {product.tag && (
                  <div className={`absolute top-3 left-3 py-1 px-3 text-sm text-white font-medium rounded-full ${product.tagColor}`}>
                    {product.tag}
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-1">
                  <div className="flex text-brand-saffron">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4"
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                        strokeWidth={i < Math.floor(product.rating) ? 0 : 2}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                </div>
                
                <h3 className="font-medium mb-1">{product.name}</h3>
                <p className="text-brand-purple font-bold mb-3">₹{product.price.toLocaleString()}</p>
                
                <Button 
                  className="w-full flex items-center justify-center" 
                  variant="outline"
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
