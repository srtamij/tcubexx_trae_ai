import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from "@/hooks/use-toast";
import { Star, ShoppingCart, Package, Info, Shield, Truck } from 'lucide-react';

const productsData = {
  'raspberry-pi-5': {
    id: 1,
    name: 'Raspberry Pi 5 - 8GB RAM',
    price: 12499,
    rating: 5,
    image: 'https://robocraze.com/cdn/shop/products/raspberry-pi-5-8gb_1_720x.jpg',
    description: 'The Raspberry Pi 5 is the latest and most powerful single-board computer from the Raspberry Pi Foundation. With 8GB of RAM, it offers exceptional performance for makers, hobbyists, and developers.',
    highlights: [
      'Powerful quad-core processor',
      '8GB RAM for enhanced multitasking',
      'Dual 4K display output',
      'Enhanced GPIO performance',
      'USB 3.0 ports for faster data transfer'
    ],
    inStock: true,
    sku: 'RPi5-8GB',
    category: 'Development Boards'
  },
  'arduino-uno-r4': {
    id: 2,
    name: 'Arduino UNO R4 WiFi',
    price: 4999,
    rating: 4.8,
    image: 'https://robocraze.com/cdn/shop/products/arduino-uno-r4-wifi_1_720x.jpg',
    description: 'The Arduino UNO R4 WiFi is the latest iteration of the most popular Arduino board, now with built-in WiFi capabilities and enhanced processing power.',
    highlights: [
      'Built-in WiFi connectivity',
      'Improved processing speed',
      'Backward compatible with UNO shields',
      'Enhanced memory capacity',
      'USB-C connector'
    ],
    inStock: true,
    sku: 'ARD-UNOR4-WIFI',
    category: 'DIY Kits'
  },
  'esp32-devkit': {
    id: 3,
    name: 'ESP32 DevKitC V4',
    price: 449,
    rating: 4.7,
    image: 'https://robocraze.com/cdn/shop/products/DOIT-ESP32-DEVKIT-V1_720x.jpg',
    description: 'The ESP32 DevKitC V4 is a versatile development board featuring both WiFi and Bluetooth connectivity, perfect for IoT projects.',
    highlights: [
      'Dual-core processor',
      'Built-in WiFi and Bluetooth',
      'Rich peripheral interface',
      'Low power consumption',
      'Arduino compatible'
    ],
    inStock: true,
    sku: 'ESP32-DEVKITC-V4',
    category: 'Development Boards'
  },
  'dht22-sensor': {
    id: 4,
    name: 'DHT22 Temperature & Humidity Sensor',
    price: 349,
    rating: 4.5,
    image: 'https://robocraze.com/cdn/shop/products/DHT22_2_720x.jpg',
    description: 'The DHT22 is a high-precision temperature and humidity sensor with a calibrated digital signal output.',
    highlights: [
      'High precision measurements',
      'Digital signal output',
      'Long-term stability',
      'Low power consumption',
      'Wide measurement range'
    ],
    inStock: true,
    sku: 'DHT22-SENSOR',
    category: 'Sensors & Modules'
  }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const product = productsData[productId as keyof typeof productsData];

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: `${product.name} added to cart!`,
      description: "Item has been added to your cart",
    });
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex text-brand-saffron">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5"
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      strokeWidth={i < Math.floor(product.rating) ? 0 : 2}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">({product.rating} rating)</span>
              </div>
              <p className="text-3xl font-bold text-brand-purple">₹{product.price.toLocaleString()}</p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">{product.description}</p>
              
              <div className="border-t border-b border-gray-200 py-4">
                <h3 className="font-semibold mb-2">Key Features:</h3>
                <ul className="space-y-2">
                  {product.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Info className="h-4 w-4 mr-2 text-brand-purple" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Package className="h-5 w-5 text-brand-purple mr-2" />
                  <span>SKU: {product.sku}</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-brand-purple mr-2" />
                  <span>Genuine Product</span>
                </div>
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-brand-purple mr-2" />
                  <span>Fast Delivery</span>
                </div>
              </div>

              <Button 
                className="w-full h-12 text-lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
