import { useProductStore } from '../store/ProductStore';

export const useFilteredProducts = () => {
  const { products, searchQuery, filterType } = useProductStore();

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterType === 'all' || (filterType === 'favorites' && product.liked)),
  );

  return { filteredProducts };
};
