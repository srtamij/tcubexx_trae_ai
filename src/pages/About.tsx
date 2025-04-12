
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, Users, Trophy, GraduationCap, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About TCubex Private Limited</h1>
              <p className="text-xl text-gray-700 mb-6">
                Empowering Innovators Across India & Beyond
              </p>
              <div className="w-20 h-1 bg-brand-purple mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  TCubex Private Limited was founded in 2020 with a simple mission: to make quality electronic components, development tools, and educational resources accessible to everyone in India and beyond.
                </p>
                <p className="text-gray-700 mb-4">
                  What started as a small workshop in Bengaluru has grown into a trusted supplier for makers, students, educators, and professionals across the country.
                </p>
                <p className="text-gray-700">
                  We believe that innovation should be accessible to all, and we're committed to providing the tools, components, and knowledge needed to bring creative ideas to life.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-brand-purple/10 rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="TCubex workshop" 
                  className="relative z-10 rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-700">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-brand-purple/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Building2 className="h-8 w-8 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Quality First</h3>
                <p className="text-gray-700 text-center">
                  We rigorously test all our products to ensure they meet the highest standards of reliability and performance.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <GraduationCap className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Education</h3>
                <p className="text-gray-700 text-center">
                  We believe in sharing knowledge freely and supporting the next generation of makers and engineers.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-brand-saffron/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Globe className="h-8 w-8 text-brand-saffron" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Community</h3>
                <p className="text-gray-700 text-center">
                  We actively support and engage with maker communities across India, fostering innovation and collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-xl text-gray-700">Meet the people behind TCubex</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Rajesh Kumar</h3>
                <p className="text-brand-purple">Founder & CEO</p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="CTO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Priya Sharma</h3>
                <p className="text-brand-teal">CTO</p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Head of Operations" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Vikram Singh</h3>
                <p className="text-brand-saffron">Head of Operations</p>
              </div>
              
              {/* Team Member 4 */}
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Education Lead" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Ananya Patel</h3>
                <p className="text-brand-purple">Education Lead</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-brand-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're a hobbyist, student, educator, or professional, we're here to support your electronics and maker journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/products" className="bg-white text-brand-purple font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
                Explore Products
              </a>
              <a href="/contact" className="border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
