import { useEffect, useMemo } from 'react';
import { fetchProducts } from '../api/Products';
import { useProductStore } from '../store/ProductStore';
import { useFilteredProducts } from '../hooks/useFilteredProducts';
import { usePagination } from '../hooks/usePagination';

import { FilterBoard } from '../components/filterBoard/FilterBoard';
import { ProductCard } from '../components/ProductCard/ProductCard';

import styles from '../styles/products.module.scss';

export const Products = () => {
  const PRODUCTS_PER_PAGE = 6;
  const { products, setProducts, page, toggleLike, deleteProduct, filterType } = useProductStore();

  useEffect(() => {
    const fetchProduct = async () => {
      const { results, pages } = await fetchProducts(page);
      setProducts(results, pages);
    };

    if (products.length === 0) {
      fetchProduct();
    }
  }, [setProducts, page]);

  const { filteredProducts } = useFilteredProducts();
  const { totalPages, handleNextPage, handlePrevPage } = usePagination(filteredProducts);

  const filteredAndPaginatedProducts = useMemo(
    () => filteredProducts.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE),
    [filteredProducts, page],
  );

  return (
    <div className={styles['products-content']}>
      <FilterBoard />

      <div className={styles['products-area']}>
        {filterType === 'favorites' && filteredAndPaginatedProducts.length === 0 ? (
          <div className={styles['no-favorites']}>Вы ещё ничего не добавили в избранное 💗</div>
        ) : (
          <div className={styles['products-grid']}>
            {filteredAndPaginatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                imageUrl={product.image}
                status={product.status}
                gender={product.gender}
                liked={product.liked}
                onLike={toggleLike}
                onDelete={deleteProduct}
              />
            ))}
          </div>
        )}
        {/* ну да я идиот что не вынес пагинацию в компонент */}
        {!(filterType === 'favorites' && filteredAndPaginatedProducts.length === 0) && (
          <div className={styles['pagination']}>
            <button onClick={handlePrevPage} disabled={page === 1}>
              ←
            </button>
            <span className={styles['page-number']}>{page}</span>
            <button onClick={handleNextPage} disabled={page === totalPages}>
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
