
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  inStock: boolean;
}

const ProductCard = ({ id, name, image, price, category, inStock }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: ProductCardProps) => {
    addToCart(product);
    
    toast({
      title: `${product.name} added to cart!`,
      description: product.inStock ? "Item has been added to your cart" : "You will be notified when this item is back in stock",
      variant: product.inStock ? "default" : "destructive",
    });
  };

  const getProductSlug = (productId: number) => {
    switch (productId) {
      case 1: return 'raspberry-pi-5';
      case 2: return 'arduino-uno-r4';
      case 3: return 'esp32-devkit';
      case 4: return 'dht22-sensor';
      default: return `product-${productId}`;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${getProductSlug(id)}`}>
        <div className="h-48 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover transform hover:scale-105 transition-transform" />
        </div>
      </Link>
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${getProductSlug(id)}`}>
          <h3 className="font-medium text-lg mb-2 hover:text-brand-purple">{name}</h3>
        </Link>
        <div className="flex justify-between items-center">
          <span className="font-bold text-brand-purple">₹{price.toLocaleString()}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        <Button 
          className="w-full mt-4 bg-brand-purple hover:bg-brand-purple/90 text-white"
          onClick={() => handleAddToCart({ id, name, image, price, category, inStock })}
        >
          {inStock ? 'Add to Cart' : 'Notify Me'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
