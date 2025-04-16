
export interface ProductItem {
  name: string;
  price: string;
  image: string;
}

export interface CategoryItem {
  title: string;
  description: string;
  image: string;
  products?: ProductItem[];
}

export interface CategoryData {
  title: string;
  description: string;
  items: CategoryItem[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}
