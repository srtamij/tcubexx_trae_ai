
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Video, FileText, Code, Award, Users, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Sample learning resources data
  const learningCategories = [
    {
      id: 1,
      title: 'Tutorials',
      description: 'Step-by-step guides to get started with electronics and programming',
      icon: <Book className="h-8 w-8 text-brand-purple" />,
      count: 24,
      resources: [
        { id: 101, title: 'Getting Started with Arduino', type: 'Tutorial', level: 'Beginner' },
        { id: 102, title: 'Understanding Digital Logic', type: 'Tutorial', level: 'Intermediate' },
        { id: 103, title: 'Programming the ESP32', type: 'Tutorial', level: 'Beginner' },
        { id: 104, title: 'Building Your First IoT Project', type: 'Tutorial', level: 'Intermediate' }
      ]
    },
    {
      id: 2,
      title: 'Video Courses',
      description: 'In-depth video series covering various electronic topics',
      icon: <Video className="h-8 w-8 text-brand-teal" />,
      count: 12,
      resources: [
        { id: 201, title: 'Complete Raspberry Pi Course', type: 'Video', level: 'All Levels' },
        { id: 202, title: 'Machine Learning on Microcontrollers', type: 'Video', level: 'Advanced' },
        { id: 203, title: 'Sensor Interfacing Masterclass', type: 'Video', level: 'Intermediate' },
        { id: 204, title: '3D Printing for Electronics Projects', type: 'Video', level: 'Beginner' }
      ]
    },
    {
      id: 3,
      title: 'Documentation',
      description: 'Detailed documentation for components and development boards',
      icon: <FileText className="h-8 w-8 text-brand-saffron" />,
      count: 48,
      resources: [
        { id: 301, title: 'Raspberry Pi 5 Technical Documentation', type: 'Documentation', level: 'Reference' },
        { id: 302, title: 'Arduino Uno R4 WiFi Datasheet', type: 'Documentation', level: 'Reference' },
        { id: 303, title: 'ESP32 Pin Configuration Guide', type: 'Documentation', level: 'Reference' },
        { id: 304, title: 'DHT22 Sensor Specifications', type: 'Documentation', level: 'Reference' }
      ]
    },
    {
      id: 4,
      title: 'Code Examples',
      description: 'Ready-to-use code examples for common projects',
      icon: <Code className="h-8 w-8 text-blue-500" />,
      count: 36,
      resources: [
        { id: 401, title: 'Arduino LED Patterns Library', type: 'Code', level: 'Beginner' },
        { id: 402, title: 'ESP32 WiFi Manager Code', type: 'Code', level: 'Intermediate' },
        { id: 403, title: 'Raspberry Pi Camera Examples', type: 'Code', level: 'Beginner' },
        { id: 404, title: 'IoT Dashboard with MQTT', type: 'Code', level: 'Advanced' }
      ]
    },
    {
      id: 5,
      title: 'Certifications',
      description: 'Earn certificates by completing our structured courses',
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      count: 5,
      resources: [
        { id: 501, title: 'Arduino Developer Certificate', type: 'Certification', level: 'Professional' },
        { id: 502, title: 'IoT Solutions Architect', type: 'Certification', level: 'Professional' },
        { id: 503, title: 'Electronics Design Fundamentals', type: 'Certification', level: 'Beginner' },
        { id: 504, title: 'Embedded Systems Expert', type: 'Certification', level: 'Advanced' }
      ]
    },
    {
      id: 6,
      title: 'Community Forums',
      description: 'Join discussions and get help from our community',
      icon: <Users className="h-8 w-8 text-green-500" />,
      count: 1000,
      resources: [
        { id: 601, title: 'Beginner Questions & Answers', type: 'Forum', level: 'Community' },
        { id: 602, title: 'Project Showcase', type: 'Forum', level: 'Community' },
        { id: 603, title: 'Troubleshooting Help', type: 'Forum', level: 'Community' },
        { id: 604, title: 'Electronics News & Discussions', type: 'Forum', level: 'Community' }
      ]
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const closeResourceModal = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn Electronics & Programming</h1>
              <p className="text-lg text-gray-700 mb-8">
                Expand your knowledge with our comprehensive learning resources. 
                From beginner tutorials to advanced projects, we have everything 
                you need to grow your electronics skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-brand-purple hover:bg-brand-purple/90">
                  Browse Tutorials
                </Button>
                <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10">
                  View Video Courses
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Categories */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Learning Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {learningCategories.map((category) => (
                <Card key={category.id} className="transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{category.count} resources</span>
                      <Button 
                        variant="link" 
                        className="text-brand-purple p-0"
                        onClick={() => handleCategoryClick(category)}
                      >
                        Explore →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Resource Modal */}
        {selectedCategory && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[80vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    {selectedCategory.icon}
                    <h2 className="text-2xl font-bold">{selectedCategory.title}</h2>
                  </div>
                  <Button variant="ghost" size="icon" onClick={closeResourceModal}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {selectedCategory.resources.map(resource => (
                    <div key={resource.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg">{resource.title}</h3>
                          <div className="flex gap-2 mt-1">
                            <span className="text-xs bg-brand-purple/10 text-brand-purple px-2 py-1 rounded-full">
                              {resource.type}
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                              {resource.level}
                            </span>
                          </div>
                        </div>
                        <Button size="sm" className="bg-brand-purple hover:bg-brand-purple/90">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Featured Course */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gray-200 h-64 md:h-auto flex items-center justify-center">
                  <Video className="h-16 w-16 text-gray-400" />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="uppercase tracking-wide text-sm text-brand-purple font-semibold mb-1">Featured Course</div>
                  <h2 className="text-2xl font-bold mb-4">IoT Home Automation with ESP32</h2>
                  <p className="text-gray-600 mb-6">
                    Learn how to build a complete home automation system using ESP32, sensors, and a mobile app.
                    This comprehensive course covers hardware setup, programming, and cloud integration.
                  </p>
                  <div className="flex items-center mb-6">
                    <div className="text-yellow-500 flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">4.9 (124 reviews)</span>
                  </div>
                  <Button className="bg-brand-purple hover:bg-brand-purple/90">
                    Start Learning
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 bg-brand-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students who are building amazing projects with our learning resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-brand-purple hover:bg-gray-100">
                Create Free Account
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Browse All Courses
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
