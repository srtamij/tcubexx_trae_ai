
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'development-boards',
    name: 'Development Boards',
    description: 'Arduino, Raspberry Pi, ESP32 and more',
    image: 'https://images.unsplash.com/photo-1608564697071-ebe98298ad5a?q=80&w=3174&auto=format&fit=crop',
    color: 'bg-brand-purple',
  },
  {
    id: 'sensors-modules',
    name: 'Sensors & Modules',
    description: 'Temperature, moisture, motion sensors',
    image: 'https://images.unsplash.com/photo-1631194758628-71ec7c35137e?q=80&w=2952&auto=format&fit=crop',
    color: 'bg-brand-teal',
  },
  {
    id: 'diy-kits',
    name: 'DIY Kits',
    description: 'Electronics kits for all skill levels',
    image: 'https://images.unsplash.com/photo-1601027847350-0285867c31f3?q=80&w=2970&auto=format&fit=crop',
    color: 'bg-brand-saffron',
  },
  {
    id: 'components',
    name: 'Components',
    description: 'Resistors, capacitors, LEDs, and more',
    image: 'https://images.unsplash.com/photo-1632435285572-c275ae67de69?q=80&w=3088&auto=format&fit=crop',
    color: 'bg-blue-500',
  },
  {
    id: 'tools',
    name: 'Tools',
    description: 'Soldering irons, multimeters, and accessories',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
    color: 'bg-red-500',
  },
  {
    id: 'books-resources',
    name: 'Books & Resources',
    description: 'Educational materials for all ages',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=3174&auto=format&fit=crop',
    color: 'bg-green-500',
  },
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of electronics components, development boards, and learning resources
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="product-card group overflow-hidden rounded-xl relative h-64"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover product-img transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                <p className="text-white/80 text-sm mb-4">{category.description}</p>
                <Link 
                  to={`/explore/${category.id}`}
                  className={`inline-flex items-center text-white text-sm font-medium ${category.color.replace('bg-', 'text-')} hover:underline`}
                >
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
