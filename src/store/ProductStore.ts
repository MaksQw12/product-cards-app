import { create } from 'zustand';

interface Product {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
  liked: boolean;
}

interface ProductsState {
  products: Product[];
  page: number;
  totalPages: number;
  setProducts: (products: Product[], totalPages: number) => void;
  setPage: (page: number) => void;
  toggleLike: (id: number) => void;
  deleteProduct: (id: number) => void;
}

export const useProductStore = create<ProductsState>((set) => ({
  products: [],
  page: 1,
  totalPages: 1,

  setProducts: (products, totalPages) =>
    set((state) => ({
      products: products.map((product) => {
        const existingProduct = state.products.find((p) => p.id === product.id);
        return { ...product, liked: existingProduct ? existingProduct.liked : false };
      }),
      totalPages,
    })),

  setPage: (page) => set(() => ({ page })),

  toggleLike: (id) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product,
      ),
    })),

  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
}));
