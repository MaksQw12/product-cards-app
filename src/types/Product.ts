export interface Product {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
  liked: boolean;
}

export interface ProductsState {
  products: Product[];
  page: number;
  totalPages: number;
  searchQuery: string;
  filterType: string;
  selectedProduct: Product | null;
  setProducts: (products: Product[], totalPages: number) => void;
  setPage: (page: number) => void;
  toggleLike: (id: number) => void;
  deleteProduct: (id: number) => void;
  setSearchQuery: (query: string) => void;
  setFilterType: (filter: string) => void;
  setSelectedProduct: (product: Product) => void;
  addProduct: (product: Product) => void;
}
