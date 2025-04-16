
import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';

interface ProductFiltersProps {
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  stockFilter: string;
  setStockFilter: (filter: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
}

const categories = [
  'All Categories',
  'Development Boards',
  'Sensors & Modules',
  'DIY Kits',
  'Components',
  'Tools',
  'Books & Resources',
];

const ProductFilters = ({
  categoryFilter,
  setCategoryFilter,
  stockFilter,
  setStockFilter,
  sortOption,
  setSortOption
}: ProductFiltersProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Filter className="h-5 w-5 text-gray-500 mr-2" />
          <span className="text-gray-700 font-medium">Filters:</span>
        </div>
        <div className="relative">
          <select 
            className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
        </div>
        <div className="relative">
          <select 
            className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
            value={stockFilter}
            onChange={(e) => setStockFilter(e.target.value)}
          >
            <option>All Products</option>
            <option>In Stock</option>
            <option>Out of Stock</option>
          </select>
          <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
        </div>
      </div>
      <div className="relative">
        <select 
          className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
        <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default ProductFilters;
