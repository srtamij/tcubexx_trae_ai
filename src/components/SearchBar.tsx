
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
}

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }: SearchBarProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
        />
        <Search className="absolute right-3 top-3 text-gray-400" />
      </div>
      <Button 
        className="bg-brand-purple hover:bg-brand-purple/90 text-white"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
