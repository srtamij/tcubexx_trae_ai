
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
        image: 'https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?q=80&w=2970&auto=format&fit=crop',
      },
      {
        title: 'Arduino Uno',
        description: 'Perfect for beginners and educational projects',
        image: 'https://images.unsplash.com/photo-1608564697071-ebe98298ad5a?q=80&w=3174&auto=format&fit=crop',
      },
      {
        title: 'ESP32',
        description: 'WiFi and Bluetooth enabled development board',
        image: 'https://images.unsplash.com/photo-1633413788319-98c12739d7c4?q=80&w=3174&auto=format&fit=crop',
      },
    ]
  },
  'sensors-modules': {
    title: 'Sensors & Modules',
    description: 'Browse our range of sensors and modules for your projects',
    items: [
      {
        title: 'Temperature Sensor',
        description: 'High-precision temperature measurement',
        image: 'https://images.unsplash.com/photo-1597781914467-a5b93258e748?q=80&w=3174&auto=format&fit=crop',
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.items.map((item, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryExplore;
