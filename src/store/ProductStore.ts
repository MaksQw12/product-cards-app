import { create } from 'zustand';
import { ProductsState } from '../types/Product';

export const useProductStore = create<ProductsState>((set) => ({
  products: [],
  page: 1,
  totalPages: 1,
  searchQuery: '',
  filterType: 'all',
  selectedProduct: null,

  setProducts: (products, totalPages) =>
    set((state) => {
      const updatedProducts = products.map((product) => {
        const existingProduct = state.products.find((p) => p.id === product.id);
        return { ...product, liked: existingProduct ? existingProduct.liked : false };
      });

      return {
        products: updatedProducts,
        totalPages,
      };
    }),

  setPage: (page) => set(() => ({ page })),

  toggleLike: (id) =>
    set((state) => {
      const updatedProducts = state.products.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product,
      );
      return { products: updatedProducts };
    }),

  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  setSearchQuery: (query) => set(() => ({ searchQuery: query })),

  setFilterType: (filter) => set(() => ({ filterType: filter })),
  setSelectedProduct: (product) => set(() => ({ selectedProduct: product })),

  addProduct: (product) =>
    set((state) => {
      const isProductExist = state.products.some((p) => p.id === product.id);
      if (isProductExist) {
        return { products: state.products };
      }

      return {
        products: [{ ...product, liked: false }, ...state.products],
      };
    }),
}));
