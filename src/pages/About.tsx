
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About TCubex Private Limited</h1>
              <p className="text-lg text-gray-700 mb-8">
                Pioneering electronics innovation in India since 2022. We're committed to making technology accessible to everyone, from beginners to experts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-brand-purple hover:bg-brand-purple/90">
                  <Link to="/products">Explore Our Products</Link>
                </Button>
                <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  To democratize electronics and make innovation accessible to everyone in India and beyond. We believe that technology should be approachable, educational, and fun.
                </p>
                <p className="text-gray-700">
                  TCubex is dedicated to providing high-quality components, development boards, and educational resources that empower creators, makers, and innovators of all skill levels.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-700 mb-4">
                  To be India's premier destination for electronics enthusiasts and the catalyst for the next generation of innovators and makers across South Asia.
                </p>
                <p className="text-gray-700">
                  We envision a future where every student, hobbyist, and professional has access to the tools and knowledge they need to bring their ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Team</h2>
              <p className="text-gray-700 mt-4">Passionate experts dedicated to supporting your electronic projects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Rahul Sharma</h3>
                  <p className="text-brand-purple font-medium mb-4">Founder & CEO</p>
                  <p className="text-gray-700">
                    Electronics engineer with 10+ years of experience in product development and a passion for open-source hardware.
                  </p>
                </div>
              </div>
              {/* Team Member 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Priya Patel</h3>
                  <p className="text-brand-purple font-medium mb-4">CTO</p>
                  <p className="text-gray-700">
                    IoT specialist who has worked on numerous smart devices and believes in building technology that solves real-world problems.
                  </p>
                </div>
              </div>
              {/* Team Member 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Arjun Mehta</h3>
                  <p className="text-brand-purple font-medium mb-4">Education Director</p>
                  <p className="text-gray-700">
                    Former professor with a mission to make electronics education engaging and accessible to students across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Journey */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative pl-8 pb-12 border-l-2 border-brand-purple">
                <div className="absolute w-4 h-4 bg-brand-purple rounded-full -left-[9px]"></div>
                <h3 className="text-xl font-bold mb-2">2022</h3>
                <p className="text-gray-700">TCubex is founded with a mission to bring quality electronic components to Indian makers.</p>
              </div>
              <div className="relative pl-8 pb-12 border-l-2 border-brand-purple">
                <div className="absolute w-4 h-4 bg-brand-purple rounded-full -left-[9px]"></div>
                <h3 className="text-xl font-bold mb-2">2023</h3>
                <p className="text-gray-700">Expanded product line to include development boards and launched our first educational workshops.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-brand-purple rounded-full -left-[9px]"></div>
                <h3 className="text-xl font-bold mb-2">2024</h3>
                <p className="text-gray-700">Opened our new headquarters, reached 10,000 customers, and started international shipping.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-brand-purple text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Creating?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of makers, students, and professionals who trust TCubex for their electronics needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-brand-purple hover:bg-gray-100">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
