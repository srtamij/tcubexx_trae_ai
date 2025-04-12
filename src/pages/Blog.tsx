
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Tag, ThumbsUp, MessageSquare, Share2, BookOpen, Zap, Robot } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogPost from '@/components/BlogPost';

const Blog = () => {
  const featuredBlogPosts = [
    {
      id: 1,
      title: "The Future of Robot Battles in India",
      excerpt: "Exploring the emerging trend of competitive robotics and battle events across India's tech hubs.",
      category: "Robotics",
      date: "April 10, 2025",
      readTime: "5 min read",
      image: "/placeholder.svg",
      featured: true,
      tags: ["robotics", "competitions", "technology"],
      likes: 124,
      comments: 18
    },
    {
      id: 2,
      title: "Building Your First Battle Robot: A Beginner's Guide",
      excerpt: "Step-by-step instructions for engineering students and hobbyists looking to enter the exciting world of robot battles.",
      category: "DIY",
      date: "April 5, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg",
      featured: true,
      tags: ["DIY", "robotics", "engineering"],
      likes: 86,
      comments: 24
    },
    {
      id: 3,
      title: "Top 10 Components for Competitive Battle Robots",
      excerpt: "Essential electronic components and mechanical parts that will give your battle robot the competitive edge.",
      category: "Components",
      date: "March 28, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg",
      featured: true,
      tags: ["components", "electronics", "robotics"],
      likes: 92,
      comments: 15
    }
  ];

  const recentBlogPosts = [
    {
      id: 4,
      title: "Interview with National Robotics Champion Team",
      excerpt: "We sat down with the winners of India's largest robotics competition to learn about their journey and strategies.",
      category: "Interviews",
      date: "March 20, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg",
      tags: ["interviews", "robotics", "competitions"],
      likes: 78,
      comments: 12
    },
    {
      id: 5,
      title: "The Evolution of Battle Robot Designs in India",
      excerpt: "From simple remote-controlled vehicles to AI-powered machines: The transformation of competitive robotics in India.",
      category: "Robotics",
      date: "March 15, 2025",
      readTime: "4 min read",
      image: "/placeholder.svg",
      tags: ["robotics", "design", "history"],
      likes: 56,
      comments: 8
    },
    {
      id: 6,
      title: "Upcoming Robot Battle Events in India (2025-2026)",
      excerpt: "Mark your calendars for these exciting robotics competitions happening across the country in the coming year.",
      category: "Events",
      date: "March 10, 2025",
      readTime: "3 min read",
      image: "/placeholder.svg",
      tags: ["events", "robotics", "competitions"],
      likes: 103,
      comments: 27
    },
    {
      id: 7,
      title: "Arduino vs Raspberry Pi: Best Platform for Battle Robots",
      excerpt: "A comprehensive comparison of the two most popular platforms for building competitive robots.",
      category: "Technology",
      date: "March 5, 2025",
      readTime: "9 min read",
      image: "/placeholder.svg",
      tags: ["technology", "arduino", "raspberry pi"],
      likes: 89,
      comments: 32
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Robot className="text-brand-purple h-10 w-10 mr-3" />
                <BookOpen className="text-brand-teal h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">TCubex Blog & Robotics Hub</h1>
              <p className="text-lg text-gray-700 mb-8">
                Discover the latest trends, tutorials, and insights about electronics, robotics,
                and the future of technology in India.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-brand-purple hover:bg-brand-purple/90">
                  <Zap className="mr-2 h-4 w-4" /> Latest on Robot Battles
                </Button>
                <Button variant="outline">
                  <BookOpen className="mr-2 h-4 w-4" /> Browse All Topics
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold">Featured Posts</h2>
              <Link to="/blog/featured">
                <Button variant="ghost" className="text-brand-purple">
                  View All <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBlogPosts.map(post => (
                <BlogPost key={post.id} post={post} isFeatured={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Explore Topics</h2>
            
            <Tabs defaultValue="all" className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All Topics</TabsTrigger>
                  <TabsTrigger value="robotics">Robot Battles</TabsTrigger>
                  <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                  <TabsTrigger value="news">Industry News</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {recentBlogPosts.map(post => (
                    <BlogPost key={post.id} post={post} isFeatured={false} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="robotics" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {recentBlogPosts
                    .filter(post => post.tags.includes('robotics'))
                    .map(post => (
                      <BlogPost key={post.id} post={post} isFeatured={false} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tutorials" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {recentBlogPosts
                    .filter(post => post.tags.includes('DIY'))
                    .map(post => (
                      <BlogPost key={post.id} post={post} isFeatured={false} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="news" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {recentBlogPosts
                    .filter(post => post.tags.includes('events'))
                    .map(post => (
                      <BlogPost key={post.id} post={post} isFeatured={false} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Future of Robot Battles Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">Future of Robot Battles in India</h2>
              
              <Card className="mb-10">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <img 
                        src="/placeholder.svg" 
                        alt="Robot Battle Arena" 
                        className="rounded-lg w-full h-64 object-cover mb-4"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-4">Emerging Trends in Competitive Robotics</h3>
                      <p className="text-gray-700 mb-4">
                        India is witnessing a rapid growth in robot battle competitions across educational institutions 
                        and tech hubs. With major events planned in cities like Bengaluru, Hyderabad, and Delhi, 
                        the robotics community is growing stronger every year.
                      </p>
                      <p className="text-gray-700 mb-4">
                        These competitions not only showcase engineering talent but also serve as platforms 
                        for innovation, learning, and industry collaboration.
                      </p>
                      <Button>Learn More About Robot Battles</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card>
                  <CardHeader>
                    <CardTitle>National Competitions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Annual robot battle events held across major cities in India, attracting participants 
                      from engineering colleges and technology enthusiasts.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Educational Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      How robot battles are transforming STEM education and creating practical learning 
                      opportunities for students across India.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Industry Connections</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      How tech companies and manufacturers are engaging with the robot battle community 
                      to scout talent and promote innovation.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Upcoming Major Robot Battle Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle>TechRoboBattle 2025</CardTitle>
                      <CardDescription>June 15-18, 2025 • Bengaluru</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        India's largest robot battle competition with over 200 teams competing across 
                        multiple weight categories and challenge formats.
                      </p>
                      <Badge className="bg-brand-purple">Registration Open</Badge>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>HydroBots Championship</CardTitle>
                      <CardDescription>September 5-7, 2025 • Hyderabad</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        A specialized robot battle event focusing on aquatic and amphibious robots, 
                        hosted at the Hyderabad International Convention Center.
                      </p>
                      <Badge className="bg-gray-500">Coming Soon</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-brand-purple/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-700 mb-8">
                Subscribe to our newsletter to receive the latest updates about robot battles, 
                electronics tutorials, and upcoming events.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button className="bg-brand-purple hover:bg-brand-purple/90">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
