
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, Heart, Share2, ExternalLink, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'Smart Home Automation',
      description: 'Build a complete home automation system with ESP32 and various sensors to control lights, fans, and monitor temperature.',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      difficulty: 'Intermediate',
      time: '8 hours',
      likes: 342,
      author: 'Rahul Sharma',
      category: 'iot',
    },
    {
      id: 2,
      title: 'Arduino Weather Station',
      description: 'Create a weather monitoring station that measures temperature, humidity, and pressure with an LCD display.',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      difficulty: 'Beginner',
      time: '4 hours',
      likes: 215,
      author: 'Priya Patel',
      category: 'arduino',
    },
    {
      id: 3,
      title: 'Raspberry Pi Security Camera',
      description: 'Set up a motion-detecting security camera with cloud storage and mobile notifications using Raspberry Pi.',
      image: 'https://images.unsplash.com/photo-1563396983906-b3795482a59a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3',
      difficulty: 'Intermediate',
      time: '6 hours',
      likes: 178,
      author: 'Arjun Mehta',
      category: 'raspberry-pi',
    },
    {
      id: 4,
      title: 'LED Cube Display',
      description: 'Build a 4x4x4 LED cube controlled by Arduino with various light patterns and animations.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      difficulty: 'Advanced',
      time: '12 hours',
      likes: 420,
      author: 'Vikram Singh',
      category: 'arduino',
    },
    {
      id: 5,
      title: 'Voice-Controlled Robot',
      description: 'Create a robot that responds to voice commands using ESP32 and a smartphone app.',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      difficulty: 'Advanced',
      time: '10 hours',
      likes: 287,
      author: 'Deepa Gupta',
      category: 'robotics',
    },
    {
      id: 6,
      title: 'Solar Powered Battery Charger',
      description: 'Build a sustainable battery charging system using solar panels and charge controllers.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3',
      difficulty: 'Intermediate',
      time: '5 hours',
      likes: 156,
      author: 'Sanjay Kumar',
      category: 'energy',
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">DIY Electronics Projects</h1>
              <p className="text-lg text-gray-700 mb-8">
                Explore our collection of hands-on electronics projects for all skill levels.
                From beginner Arduino projects to advanced IoT applications, find your next
                weekend build here.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-brand-purple hover:bg-brand-purple/90">
                  Browse All Projects
                </Button>
                <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10">
                  Submit Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="arduino">Arduino</TabsTrigger>
                  <TabsTrigger value="raspberry-pi">Raspberry Pi</TabsTrigger>
                  <TabsTrigger value="iot">IoT</TabsTrigger>
                  <TabsTrigger value="robotics">Robotics</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>
              
              {['arduino', 'raspberry-pi', 'iot', 'robotics', 'energy'].map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 bg-brand-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Have a Great Project Idea?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Share your project with our community and get feedback, help, and recognition!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-brand-purple hover:bg-gray-100">
                Submit Your Project
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge className={`
            ${project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : ''}
            ${project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : ''}
            ${project.difficulty === 'Advanced' ? 'bg-red-100 text-red-800' : ''}
          `}>
            {project.difficulty}
          </Badge>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{project.time}</span>
          </div>
        </div>
        
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <User className="h-4 w-4 mr-1" />
          <span>By {project.author}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500 p-0">
              <Heart className="h-5 w-5 mr-1" />
              <span>{project.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500 p-0">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
          <Button variant="outline" size="sm" className="text-brand-purple border-brand-purple">
            View Details
            <ExternalLink className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
