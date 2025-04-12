
import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Raspberry Pi 5',
    price: '₹4,999',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: 'New',
    tagColor: 'bg-brand-purple',
  },
  {
    id: 2,
    name: 'Arduino Starter Kit',
    price: '₹1,799',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1608564697071-ebe98298ad5a?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: 'Bestseller',
    tagColor: 'bg-brand-saffron',
  },
  {
    id: 3,
    name: 'ESP32 WiFi & Bluetooth Module',
    price: '₹499',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1633413788319-98c12739d7c4?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: 'Popular',
    tagColor: 'bg-brand-teal',
  },
  {
    id: 4,
    name: 'Digital Multimeter',
    price: '₹899',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1629292863456-2e341458c70a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: 'Sale',
    tagColor: 'bg-red-500',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <a href="#" className="text-brand-purple hover:underline flex items-center">
            View all products
          </a>
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
                <p className="text-brand-purple font-bold mb-3">{product.price}</p>
                
                <Button className="w-full flex items-center justify-center" variant="outline">
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
