
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryItemCard from '@/components/CategoryItemCard';
import { categoryContent } from '@/data/categoryContent';

const CategoryExplore = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = categoryId ? categoryContent[categoryId] : null;

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <h1 className="text-3xl font-bold mb-4">{category.title}</h1>
        <p className="text-gray-600 mb-8">{category.description}</p>
        
        <div className="space-y-12">
          {category.items.map((item, index) => (
            <CategoryItemCard key={index} item={item} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryExplore;
