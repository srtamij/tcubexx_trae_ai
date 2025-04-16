
import { ProductItem, Product } from '@/types/category';

export const parseProductData = (product: ProductItem): Product => {
  return {
    id: Math.random(),
    name: product.name,
    price: parseInt(product.price.replace('₹', '').replace(',', '')),
    image: product.image,
    category: 'Development Boards',
    inStock: true
  };
};
