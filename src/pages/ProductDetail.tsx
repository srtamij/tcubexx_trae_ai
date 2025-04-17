import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from "@/hooks/use-toast";
import { Star, ShoppingCart, Package, Info, Shield, Truck, ChevronDown, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const productsData = {
  'raspberry-pi-5': {
    id: 1,
    name: 'Raspberry Pi 5 - 8GB RAM',
    price: 12499,
    rating: 5,
    image: '/placeholder.svg',
    description: 'The Raspberry Pi 5, the latest and most powerful single-board computer from the Raspberry Pi Foundation, features a quad-core Cortex-A76 CPU, up to 8GB of LPDDR4X SDRAM, dual 4Kp60 micro-HDMI outputs, and many peripherals for makers and hobbyists.',
    longDescription: `<p>The Raspberry Pi 5, the latest and most powerful single-board computer from the Raspberry Pi Foundation, features a quad-core Cortex-A76 CPU, up to 8GB of LPDDR4X SDRAM, dual 4Kp60 micro-HDMI outputs, and many peripherals for makers and hobbyists.</p>
    <p>Built on a 16nm process node, the Cortex-A76-based SoC is the first chip designed in-house at Raspberry Pi. It delivers up to 2-3x the CPU performance of Raspberry Pi 4, with additional headroom for overclocking. The GPU delivers roughly 2x the performance, running at 800 MHz rather than Pi 4's 500 MHz.</p>
    <p>Other improvements include 2x USB 3.0 and 2x USB 2.0, plus a PCIe 2.0 x1 interface for storage and I/O. The board also provides Gigabit Ethernet and WiFi 802.11ac. It supports USB-C PD up to 27W and handles dual 4Kp60 displays.</p>`,
    specifications: [
      { name: "CPU", value: "Broadcom BCM2712 Quad-Core Cortex-A76 (ARMv8-A) 64-bit SoC @ 2.4GHz" },
      { name: "RAM", value: "8GB LPDDR4X-4267 SDRAM" },
      { name: "Storage", value: "Micro-SD card slot for loading operating system and data storage" },
      { name: "Video Output", value: "2 × micro-HDMI ports (4Kp60 supported)" },
      { name: "USB Ports", value: "2 × USB 3.0 ports + 2 × USB 2.0 ports" },
      { name: "Power", value: "USB-C, 5V DC via GPIO header (minimum 3A)" },
      { name: "Dimensions", value: "85mm × 56mm" }
    ],
    highlights: [
      'Powerful quad-core processor',
      '8GB RAM for enhanced multitasking',
      'Dual 4K display output',
      'Enhanced GPIO performance',
      'USB 3.0 ports for faster data transfer'
    ],
    inStock: true,
    sku: 'RPi5-8GB',
    category: 'Development Boards',
    features: [
      "Perfect for embedded systems and IoT projects",
      "Supports multitasking for complex applications",
      "Excellent for desktop-class computing",
      "Ideal for machine learning and AI at the edge"
    ],
    whatsIncluded: [
      "1 × Raspberry Pi 5 - 8GB RAM",
      "Documentation & Getting Started Guide"
    ]
  },
  'arduino-uno-r4': {
    id: 2,
    name: 'Arduino UNO R4 WiFi',
    price: 4999,
    rating: 4.8,
    image: '/placeholder.svg',
    description: 'The Arduino UNO R4 WiFi is the latest iteration of the most popular Arduino board, now with built-in WiFi capabilities, enhanced processing power, and improved I/O capabilities.',
    longDescription: `<p>The Arduino UNO R4 WiFi represents a significant upgrade to the classic Arduino UNO, featuring a powerful Renesas RA4M1 32-bit microcontroller and WiFi connectivity for IoT applications.</p>
    <p>The R4 WiFi is perfectly suited for both beginners and professional developers. It retains the familiar UNO form factor while adding significant improvements in computing power and connectivity.</p>
    <p>With 32-bit processing at 48MHz, 32KB of flash memory, and on-board WiFi, the UNO R4 WiFi opens up new possibilities for connected projects without requiring additional shields.</p>`,
    specifications: [
      { name: "Microcontroller", value: "Renesas RA4M1 (Arm® Cortex®-M4 32-bit CPU)" },
      { name: "Operating Voltage", value: "5V" },
      { name: "WiFi", value: "IEEE 802.11b/g/n 2.4 GHz" },
      { name: "Digital I/O Pins", value: "14 (of which 6 provide PWM output)" },
      { name: "Analog Input Pins", value: "6" },
      { name: "Flash Memory", value: "32 KB (RA4M1) of which 4 KB used by bootloader" },
      { name: "SRAM", value: "32 KB (RA4M1)" }
    ],
    highlights: [
      'Built-in WiFi connectivity',
      'Improved processing speed',
      'Backward compatible with UNO shields',
      'Enhanced memory capacity',
      'USB-C connector'
    ],
    inStock: true,
    sku: 'ARD-UNOR4-WIFI',
    category: 'DIY Kits',
    features: [
      "Perfect for IoT projects and connected devices",
      "Simplified prototyping with reliable WiFi",
      "Compatible with existing UNO shields",
      "Great for beginners and experienced makers"
    ],
    whatsIncluded: [
      "1 × Arduino UNO R4 WiFi board",
      "USB-C cable",
      "Getting Started Guide"
    ]
  },
  'esp32-devkit': {
    id: 3,
    name: 'ESP32 DevKitC V4',
    price: 449,
    rating: 4.7,
    image: '/placeholder.svg',
    description: 'The ESP32 DevKitC V4 is a versatile development board featuring both WiFi and Bluetooth connectivity, perfect for IoT projects.',
    longDescription: `<p>The ESP32 DevKitC V4 development board is based on the ESP32-WROOM-32 module and provides a versatile platform for IoT development with both Wi-Fi and Bluetooth connectivity.</p>
    <p>The ESP32 chip features two CPU cores that can be individually controlled, and the CPU clock frequency is adjustable from 80 MHz to 240 MHz. It also has a low-power coprocessor that can be used for specific tasks when the main CPUs are powered down.</p>
    <p>This board is perfect for building Internet of Things (IoT) projects, from simple sensors and actuators to complex networked applications, all at an affordable price point.</p>`,
    specifications: [
      { name: "Microcontroller", value: "ESP32-WROOM-32 module" },
      { name: "CPU", value: "Xtensa dual-core 32-bit LX6 microprocessor, up to 240 MHz" },
      { name: "Wireless", value: "WiFi 802.11 b/g/n (2.4 GHz) + Bluetooth 4.2" },
      { name: "Flash Memory", value: "4MB SPI flash" },
      { name: "SRAM", value: "520 KB" },
      { name: "GPIO", value: "36 pins" },
      { name: "USB-to-UART", value: "CP2102" }
    ],
    highlights: [
      'Dual-core processor',
      'Built-in WiFi and Bluetooth',
      'Rich peripheral interface',
      'Low power consumption',
      'Arduino compatible'
    ],
    inStock: true,
    sku: 'ESP32-DEVKITC-V4',
    category: 'Development Boards',
    features: [
      "Ideal for IoT and wireless applications",
      "Supports MicroPython and Arduino IDE",
      "Low-power modes for battery operation",
      "Excellent for WiFi and Bluetooth projects"
    ],
    whatsIncluded: [
      "1 × ESP32 DevKitC V4 development board",
      "Pin headers (may require soldering)"
    ]
  },
  'dht22-sensor': {
    id: 4,
    name: 'DHT22 Temperature & Humidity Sensor',
    price: 349,
    rating: 4.5,
    image: '/placeholder.svg',
    description: 'The DHT22 is a high-precision temperature and humidity sensor with a calibrated digital signal output.',
    longDescription: `<p>The DHT22 temperature and humidity sensor features a calibrated digital signal output with high reliability and excellent long-term stability.</p>
    <p>It utilizes exclusive digital-signal-collecting-technique and humidity sensing technology, ensuring high reliability and excellent long-term stability. This sensor includes a resistive-type humidity measurement component and an NTC temperature measurement component, connecting to a high-performance 8-bit microcontroller.</p>
    <p>With its excellent quality, ultra-fast response, anti-interference ability, and cost-effectiveness, it's the best choice for various applications requiring humidity and temperature measurement.</p>`,
    specifications: [
      { name: "Power Supply", value: "3.3-5.5V DC" },
      { name: "Output Signal", value: "Digital signal via single-bus" },
      { name: "Sensing Element", value: "Polymer capacitor" },
      { name: "Temperature Range", value: "-40°C to 80°C" },
      { name: "Humidity Range", value: "0-100% RH" },
      { name: "Temperature Accuracy", value: "±0.5°C" },
      { name: "Humidity Accuracy", value: "±2% RH" }
    ],
    highlights: [
      'High precision measurements',
      'Digital signal output',
      'Long-term stability',
      'Low power consumption',
      'Wide measurement range'
    ],
    inStock: true,
    sku: 'DHT22-SENSOR',
    category: 'Sensors & Modules',
    features: [
      "Perfect for weather stations",
      "Ideal for environmental monitoring",
      "Compatible with Arduino, Raspberry Pi, and ESP boards",
      "Easy to integrate with most microcontrollers"
    ],
    whatsIncluded: [
      "1 × DHT22 Temperature & Humidity Sensor",
      "Connecting wires (in some packages)"
    ]
  }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const product = productsData[productId as keyof typeof productsData];
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const productImages = [
    product?.image || '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg'
  ];

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
    addToCart({...product, quantity});
    
    toast({
      title: `${product.name} added to cart!`,
      description: "Item has been added to your cart",
    });
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomPosition({ x, y });
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          Home / {product.category} / {product.name}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image Gallery */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            {/* Main Image with Zoom Effect */}
            <div 
              ref={imageRef}
              className="rounded-lg overflow-hidden border border-gray-100 flex items-center justify-center h-[400px] relative cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <div 
                className={`w-full h-full transition-transform duration-200 ${isZoomed ? 'scale-150' : 'scale-100'}`}
                style={{
                  backgroundImage: `url(${productImages[activeImage]})`,
                  backgroundPosition: isZoomed ? `${zoomPosition.x}% ${zoomPosition.y}%` : 'center',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                }}
              ></div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="mt-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {productImages.map((image, index) => (
                    <CarouselItem key={index} className="basis-1/4 md:basis-1/4">
                      <div 
                        className={`p-1 cursor-pointer rounded border ${activeImage === index ? 'border-brand-purple' : 'border-gray-200'}`}
                        onClick={() => setActiveImage(index)}
                      >
                        <img 
                          src={image} 
                          alt={`${product.name} view ${index + 1}`}
                          className="w-full h-20 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://placehold.co/400x300/e2e8f0/1e293b?text=Product+Image";
                          }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
          </div>

          {/* Product Info */}
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
              
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  In Stock
                </span>
                <span className="text-sm text-gray-500">SKU: {product.sku}</span>
              </div>
              
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-brand-purple">₹{product.price.toLocaleString()}</span>
                <span className="text-sm text-gray-500 ml-2">Including GST</span>
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="flex items-center border border-gray-300 rounded-md w-36">
                <button 
                  onClick={decrementQuantity} 
                  className="px-3 py-2 border-r border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <input 
                  type="text" 
                  value={quantity} 
                  readOnly
                  className="w-full text-center p-2 focus:outline-none"
                />
                <button 
                  onClick={incrementQuantity} 
                  className="px-3 py-2 border-l border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              
              <Button 
                className="flex-1 h-12 text-lg bg-brand-purple hover:bg-brand-purple/90"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-brand-purple mr-2" />
                <span className="text-sm">Free Shipping on orders above ₹499</span>
              </div>
              <div className="flex items-center">
                <Package className="h-5 w-5 text-brand-purple mr-2" />
                <span className="text-sm">Same Day Dispatch</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-brand-purple mr-2" />
                <span className="text-sm">100% Genuine Products</span>
              </div>
              <div className="flex items-center">
                <Info className="h-5 w-5 text-brand-purple mr-2" />
                <span className="text-sm">Technical Support Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg border border-gray-200 mb-12">
          <Tabs defaultValue="description">
            <TabsList className="w-full border-b border-gray-200 flex overflow-x-auto">
              <TabsTrigger value="description" className="flex-1">Description</TabsTrigger>
              <TabsTrigger value="specifications" className="flex-1">Specifications</TabsTrigger>
              <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
              <TabsTrigger value="included" className="flex-1">What's Included</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="p-6">
              <div dangerouslySetInnerHTML={{ __html: product.longDescription }} />
            </TabsContent>
            
            <TabsContent value="specifications" className="p-6">
              <table className="w-full border-collapse">
                <tbody>
                  {product.specifications?.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 border-b border-gray-200 font-medium w-1/3">{spec.name}</td>
                      <td className="py-3 px-4 border-b border-gray-200">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabsContent>
            
            <TabsContent value="features" className="p-6">
              <ul className="space-y-2">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            
            <TabsContent value="included" className="p-6">
              <ul className="space-y-2">
                {product.whatsIncluded?.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(productsData)
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <a href={`/product/${Object.keys(productsData).find(key => productsData[key as keyof typeof productsData].id === relatedProduct.id)}`}>
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name} 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/400x300/e2e8f0/1e293b?text=Product+Image";
                        }} 
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium hover:text-brand-purple">{relatedProduct.name}</h3>
                      <p className="text-brand-purple font-bold mt-1">₹{relatedProduct.price.toLocaleString()}</p>
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
