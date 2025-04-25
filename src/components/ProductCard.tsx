
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from "@/hooks/use-toast";
import { ShoppingCart, Star } from 'lucide-react';
import { ProductImage } from "./ProductImage";
import { Product } from "@/data/products";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  inStock: boolean;
  rating?: number;
}

const ProductCard = ({ id, name, image, price, category, inStock, rating = 4.5 }: ProductCardProps) => {
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
        <div className="h-48 overflow-hidden relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain p-4 transform hover:scale-105 transition-transform"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              console.error(`Failed to load image: ${target.src}`);
              target.src = "https://placehold.co/400x300/e2e8f0/1e293b?text=Image+Not+Found";
            }} 
          />
          {!inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold px-3 py-1 bg-red-500 rounded-full">Out of Stock</span>
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <div className="flex justify-between">
          <div className="text-xs text-gray-500 mb-1">{category}</div>
          {rating && (
            <div className="flex items-center text-xs">
              <Star className="h-3 w-3 text-brand-saffron mr-1" fill="currentColor" />
              <span>{rating}</span>
            </div>
          )}
        </div>
        
        <Link to={`/product/${getProductSlug(id)}`}>
          <h3 className="font-medium text-sm md:text-base mb-2 hover:text-brand-purple line-clamp-2 h-10">{name}</h3>
        </Link>
        
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-brand-purple">₹{price.toLocaleString()}</span>
          {inStock && (
            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
              In Stock
            </span>
          )}
        </div>
        
        <Button 
          className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white"
          onClick={() => handleAddToCart({ id, name, image, price, category, inStock })}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {inStock ? 'Add to Cart' : 'Notify Me'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;


interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative rounded-lg border p-4 hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden rounded-md">
        <ProductImage
          src={product.images.main}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        <p className="mt-2 text-lg font-bold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
