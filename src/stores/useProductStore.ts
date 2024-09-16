import { create } from "zustand";

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface Product {
  id: number;
  name: number;
  description: number;
  isFavorite: boolean;
  price: number;
  image: string;
  rate: number;
  categories: Category[];
}

export interface ProductState {
  product: Product | null;
  setProduct: (newProduct: Product) => void;
}

const useProductState = create<ProductState>((set) => ({
  product: null,
  setProduct: (newProduct: Product) => set(() => ({ product: newProduct })),
}));

export default useProductState;
