
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ThumbsUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    tags: string[];
    likes: number;
    comments: number;
    featured?: boolean;
  };
  isFeatured: boolean;
}

const BlogPost = ({ post, isFeatured }: BlogPostProps) => {
  return isFeatured ? (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Badge className="absolute top-3 right-3 bg-brand-purple">{post.category}</Badge>
      </div>
      <CardHeader className="pb-2">
        <Link to={`/blog/${post.id}`} className="hover:text-brand-purple transition-colors">
          <h3 className="text-xl font-bold leading-tight">{post.title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-gray-700 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="mr-4">{post.date}</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{post.readTime}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <div className="flex space-x-2">
          {post.tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">{tag}</Badge>
          ))}
          {post.tags.length > 2 && (
            <Badge variant="outline" className="text-xs">+{post.tags.length - 2}</Badge>
          )}
        </div>
        <div className="flex space-x-3 text-gray-500 text-sm">
          <div className="flex items-center">
            <ThumbsUp className="h-4 w-4 mr-1" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>{post.comments}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  ) : (
    <Card className="h-full hover:shadow-md transition-shadow">
      <div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-36 object-cover rounded-t-lg"
        />
      </div>
      <CardContent className="p-4">
        <Badge className="mb-2 bg-brand-purple/80 text-xs">{post.category}</Badge>
        <Link to={`/blog/${post.id}`} className="hover:text-brand-purple transition-colors">
          <h3 className="text-lg font-bold mb-2 leading-tight">{post.title}</h3>
        </Link>
        <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
          <span className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {post.date}
          </span>
          <div className="flex space-x-2">
            <div className="flex items-center">
              <ThumbsUp className="h-3 w-3 mr-1" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-3 w-3 mr-1" />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
