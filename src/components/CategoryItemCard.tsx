
import React from 'react';
import { CategoryItem } from '@/types/category';
import ProductCard from '@/components/ProductCard';
import { parseProductData } from '@/utils/productUtils';

interface CategoryItemCardProps {
  item: CategoryItem;
}

const CategoryItemCard = ({ item }: CategoryItemCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-6 mb-6">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-32 h-32 object-cover rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>
      
      {item.products && item.products.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {item.products.map((product, pIndex) => (
            <ProductCard 
              key={pIndex}
              {...parseProductData(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItemCard;
