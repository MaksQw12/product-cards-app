import styles from '../styles/products.module.scss';
import FilterBoard from '../components/filterBoard/FilterBoard';
import ProductCard from '../components/ProductCard/ProductCard';
import { useProductStore } from '../store/ProductStore';
import { useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const PRODUCTS_PER_PAGE = 6;
  const {
    products,
    page,
    setProducts,
    setPage,
    toggleLike,
    deleteProduct,
    searchQuery,
    filterType,
  } = useProductStore();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios(`https://rickandmortyapi.com/api/character?page=${page}`);
      const { data } = response;

      setProducts(data.results, data.info.pages);
    };

    if (products.length === 0) {
      fetchProduct();
    }
  }, [setProducts, products.length, page]);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterType === 'all' || (filterType === 'favorites' && product.liked)),
  );

  const filteredAndPaginatedProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE,
  );

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

  return (
    <div className={styles['products-content']}>
      <FilterBoard />

      <div className={styles['products-area']}>
        {filterType === 'favorites' && filteredAndPaginatedProducts.length === 0 ? (
          <div className={styles['no-favorites']}>Вы ещё ничего не добавили в избранное</div>
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

export default Products;
