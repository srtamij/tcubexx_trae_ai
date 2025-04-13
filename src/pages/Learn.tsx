
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Video, FileText, Code, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Learn = () => {
  // Sample learning resources data
  const learningCategories = [
    {
      id: 1,
      title: 'Tutorials',
      description: 'Step-by-step guides to get started with electronics and programming',
      icon: <Book className="h-8 w-8 text-brand-purple" />,
      count: 24,
    },
    {
      id: 2,
      title: 'Video Courses',
      description: 'In-depth video series covering various electronic topics',
      icon: <Video className="h-8 w-8 text-brand-teal" />,
      count: 12,
    },
    {
      id: 3,
      title: 'Documentation',
      description: 'Detailed documentation for components and development boards',
      icon: <FileText className="h-8 w-8 text-brand-saffron" />,
      count: 48,
    },
    {
      id: 4,
      title: 'Code Examples',
      description: 'Ready-to-use code examples for common projects',
      icon: <Code className="h-8 w-8 text-blue-500" />,
      count: 36,
    },
    {
      id: 5,
      title: 'Certifications',
      description: 'Earn certificates by completing our structured courses',
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      count: 5,
    },
    {
      id: 6,
      title: 'Community Forums',
      description: 'Join discussions and get help from our community',
      icon: <Users className="h-8 w-8 text-green-500" />,
      count: 1000,
    },
  ];

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
                      <Button variant="link" className="text-brand-purple p-0">
                        Explore →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

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
