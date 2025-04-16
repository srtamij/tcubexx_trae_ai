import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categoryContent = {
  'development-boards': {
    title: 'Development Boards',
    description: 'Explore our collection of Arduino, Raspberry Pi, ESP32 and more development boards',
    items: [
      {
        title: 'Raspberry Pi 5',
        description: 'The latest and most powerful Raspberry Pi board',
        image: 'https://robu.in/wp-content/uploads/2023/09/Raspberry-Pi-5-8GB.jpg',
        products: [
          {
            name: 'Raspberry Pi 5 - 8GB',
            price: '₹12,499',
            image: 'https://robu.in/wp-content/uploads/2023/09/Raspberry-Pi-5-8GB.jpg'
          },
          {
            name: 'Raspberry Pi 5 - 4GB',
            price: '₹9,999',
            image: 'https://robu.in/wp-content/uploads/2023/09/Raspberry-Pi-5-4GB.jpg'
          },
          {
            name: 'Raspberry Pi 4 - 8GB',
            price: '₹8,999',
            image: 'https://robu.in/wp-content/uploads/2019/06/Raspberry-Pi-4-Model-B-8GB.jpg'
          }
        ]
      },
      {
        title: 'Arduino Family',
        description: 'Perfect for beginners and educational projects',
        image: 'https://robu.in/wp-content/uploads/2023/05/Arduino-UNO-R4-WIFI.jpg',
        products: [
          {
            name: 'Arduino UNO R4 WiFi',
            price: '₹4,999',
            image: 'https://robu.in/wp-content/uploads/2023/05/Arduino-UNO-R4-WIFI.jpg'
          },
          {
            name: 'Arduino Nano',
            price: '₹499',
            image: 'https://robu.in/wp-content/uploads/2016/02/Arduino-Nano.jpg'
          },
          {
            name: 'Arduino Mega 2560',
            price: '₹1,299',
            image: 'https://robu.in/wp-content/uploads/2016/01/Arduino-Mega-2560.jpg'
          },
          {
            name: 'Arduino Pro Mini',
            price: '₹299',
            image: 'https://robu.in/wp-content/uploads/2016/01/Arduino-Pro-Mini.jpg'
          }
        ]
      },
      {
        title: 'ESP Family',
        description: 'WiFi and Bluetooth enabled development boards',
        image: 'https://robu.in/wp-content/uploads/2019/11/ESP32-Development-Board-1.jpg',
        products: [
          {
            name: 'ESP32 DevKitC V4',
            price: '₹449',
            image: 'https://robu.in/wp-content/uploads/2019/11/ESP32-Development-Board-1.jpg'
          },
          {
            name: 'ESP8266 NodeMCU',
            price: '₹299',
            image: 'https://robu.in/wp-content/uploads/2016/04/NodeMCU.jpg'
          },
          {
            name: 'ESP32-CAM',
            price: '₹599',
            image: 'https://robu.in/wp-content/uploads/2019/12/ESP32-CAM-Development-Board.jpg'
          },
          {
            name: 'ESP32-S3',
            price: '₹799',
            image: 'https://robu.in/wp-content/uploads/2022/05/ESP32-S3-DevKitC-1-N8R2.jpg'
          }
        ]
      }
    ]
  },
  'sensors-modules': {
    title: 'Sensors & Modules',
    description: 'Browse our range of sensors and modules for your projects',
    items: [
      {
        title: 'Temperature Sensor',
        description: 'High-precision temperature measurement',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
      },
      {
        title: 'Motion Sensor',
        description: 'PIR sensor for movement detection',
        image: 'https://images.unsplash.com/photo-1631194758628-71ec7c35137e?q=80&w=2952&auto=format&fit=crop',
      }
    ]
  },
  'diy-kits': {
    title: 'DIY Kits',
    description: 'Get started with our comprehensive DIY electronics kits',
    items: [
      {
        title: 'Arduino Starter Kit',
        description: 'Everything you need to get started with Arduino',
        image: 'https://images.unsplash.com/photo-1601027847350-0285867c31f3?q=80&w=2970&auto=format&fit=crop',
      },
      {
        title: 'Robot Building Kit',
        description: 'Build your own programmable robot',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2970&auto=format&fit=crop',
      }
    ]
  },
  'components': {
    title: 'Components',
    description: 'Essential electronic components for your projects',
    items: [
      {
        title: 'LED Pack',
        description: 'Various colors of LED components',
        image: 'https://images.unsplash.com/photo-1632435285572-c275ae67de69?q=80&w=3088&auto=format&fit=crop',
      },
      {
        title: 'Resistor Kit',
        description: 'Complete set of commonly used resistors',
        image: 'https://images.unsplash.com/photo-1593059185056-a5b95034c9d7?q=80&w=3087&auto=format&fit=crop',
      }
    ]
  },
  'tools': {
    title: 'Tools',
    description: 'Professional tools for electronics work',
    items: [
      {
        title: 'Soldering Station',
        description: 'Professional temperature-controlled soldering station',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
      },
      {
        title: 'Digital Multimeter',
        description: 'Precise measurements for voltage, current, and resistance',
        image: 'https://images.unsplash.com/photo-1629292863456-2e341458c70a?q=80&w=3087&auto=format&fit=crop',
      }
    ]
  },
  'books-resources': {
    title: 'Books & Resources',
    description: 'Learning materials for electronics enthusiasts',
    items: [
      {
        title: 'Electronics Fundamentals',
        description: 'Comprehensive guide to electronics basics',
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=3174&auto=format&fit=crop',
      },
      {
        title: 'Arduino Programming Guide',
        description: 'Master Arduino programming with practical examples',
        image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2970&auto=format&fit=crop',
      }
    ]
  }
};

const CategoryExplore = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = categoryId ? categoryContent[categoryId as keyof typeof categoryContent] : null;

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <h1 className="text-3xl font-bold mb-4">{category.title}</h1>
        <p className="text-gray-600 mb-8">{category.description}</p>
        
        <div className="space-y-12">
          {category.items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-6 mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
              
              {item.products && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {item.products.map((product, pIndex) => (
                    <div key={pIndex} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h3 className="font-medium mb-2">{product.name}</h3>
                      <p className="text-brand-purple font-bold">{product.price}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryExplore;
