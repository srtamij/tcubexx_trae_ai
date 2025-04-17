import { CategoryData } from '@/types/category';

export const categoryContent: Record<string, CategoryData> = {
  'development-boards': {
    title: 'Development Boards',
    description: 'Explore our collection of Arduino, Raspberry Pi, ESP32 and more development boards',
    items: [
      {
        title: 'Raspberry Pi 5',
        description: 'The latest and most powerful Raspberry Pi board',
        image: '/placeholder.svg',
        products: [
          {
            name: 'Raspberry Pi 5 - 8GB',
            price: '₹12,499',
            image: '/placeholder.svg'
          },
          {
            name: 'Raspberry Pi 5 - 4GB',
            price: '₹9,999',
            image: '/placeholder.svg'
          },
          {
            name: 'Raspberry Pi 4 - 8GB',
            price: '₹8,999',
            image: '/placeholder.svg'
          }
        ]
      },
      {
        title: 'Arduino Family',
        description: 'Perfect for beginners and educational projects',
        image: '/placeholder.svg',
        products: [
          {
            name: 'Arduino UNO R4 WiFi',
            price: '₹4,999',
            image: '/placeholder.svg'
          },
          {
            name: 'Arduino Nano',
            price: '₹499',
            image: '/placeholder.svg'
          },
          {
            name: 'Arduino Mega 2560',
            price: '₹1,299',
            image: '/placeholder.svg'
          },
          {
            name: 'Arduino Pro Mini',
            price: '₹299',
            image: '/placeholder.svg'
          }
        ]
      },
      {
        title: 'ESP Family',
        description: 'WiFi and Bluetooth enabled development boards',
        image: '/placeholder.svg',
        products: [
          {
            name: 'ESP32 DevKitC V4',
            price: '₹449',
            image: '/placeholder.svg'
          },
          {
            name: 'ESP8266 NodeMCU',
            price: '₹299',
            image: '/placeholder.svg'
          },
          {
            name: 'ESP32-CAM',
            price: '₹599',
            image: '/placeholder.svg'
          },
          {
            name: 'ESP32-S3',
            price: '₹799',
            image: '/placeholder.svg'
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
