import { useProductStore } from '../store/ProductStore';

export const usePagination = (filteredProducts: any[]) => {
  const { page, setPage } = useProductStore();
  const PRODUCTS_PER_PAGE = 6;

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return {
    totalPages,
    handleNextPage,
    handlePrevPage,
  };
};
