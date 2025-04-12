
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-brand-purple">Innovate</span> with 
                <span className="text-brand-teal"> Electronics</span> in 
                <span className="text-brand-saffron"> India</span>
              </h1>
              <p className="text-lg mb-8 text-gray-700">
                Your one-stop shop for electronics components, DIY kits, and learning resources. 
                Designed for makers, students, and educators across India and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary">
                  Shop Components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="btn-secondary">
                  Explore Projects
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L14.8 8.79614L22 9.26918L16.93 14.1127L18.29 21.2196L12 17.7962L5.71 21.2196L7.07 14.1127L2 9.26918L9.2 8.79614L12 2Z" />
                  </svg>
                  <span className="ml-2 text-gray-700">Premium Quality</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-saffron" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
                  </svg>
                  <span className="ml-2 text-gray-700">India-Wide Shipping</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z" />
                  </svg>
                  <span className="ml-2 text-gray-700">Free Tech Support</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-purple/20 to-brand-teal/20 rounded-full filter blur-3xl opacity-70 animate-float"></div>
              <img
                src="https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Electronics components"
                className="relative z-10 rounded-lg shadow-2xl object-cover w-full h-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20 animate-float">
                <div className="text-sm font-medium text-brand-purple">New Arrival</div>
                <div className="font-bold">Raspberry Pi 5</div>
                <div className="text-sm text-gray-500">Now in Stock!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
