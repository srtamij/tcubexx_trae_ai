
import React from 'react';
import { ArrowRight, BookOpen, Video, Code, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Build a Smart Home Automation System',
    difficulty: 'Intermediate',
    type: 'Project Guide',
    icon: <BookOpen className="h-5 w-5" />,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'IoT',
  },
  {
    id: 2,
    title: 'Introduction to Arduino Programming',
    difficulty: 'Beginner',
    type: 'Video Tutorial',
    icon: <Video className="h-5 w-5" />,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Arduino',
  },
  {
    id: 3,
    title: 'Python for Raspberry Pi: Getting Started',
    difficulty: 'Beginner',
    type: 'Code Tutorial',
    icon: <Code className="h-5 w-5" />,
    image: 'https://images.unsplash.com/photo-1667371494710-f493ab67a97e?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Raspberry Pi',
  },
];

const EducationalContent = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-purple/5 to-brand-teal/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Learn & Build</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our educational resources, project guides, and tutorials to kickstart your electronics journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="product-card overflow-hidden rounded-xl">
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover product-img"
                />
                <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center text-white">
                    <span className="text-xs mr-3 px-2 py-1 rounded-full bg-brand-purple/70">
                      {project.difficulty}
                    </span>
                    <span className="text-xs flex items-center">
                      {project.icon}
                      <span className="ml-1">{project.type}</span>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="text-sm text-brand-purple font-medium mb-2">{project.category}</div>
                <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-brand-purple text-sm font-medium hover:underline"
                >
                  View Tutorial <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-primary">
            View All Tutorials
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 flex items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium mb-4">
                  Free Resource
                </div>
                <h3 className="text-2xl font-bold mb-4">Electronics 101: E-Book for Beginners</h3>
                <p className="text-gray-600 mb-6">
                  Download our comprehensive guide to electronics fundamentals. Perfect for students, hobbyists, and anyone curious about electronics.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="btn-primary flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    Download E-Book
                  </Button>
                  <Button variant="outline">
                    View Sample
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Electronics E-Book" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/50 to-brand-teal/50 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalContent;
