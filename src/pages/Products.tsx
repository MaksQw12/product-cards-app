import styles from '../styles/products.module.scss';
import FilterBoard from '../components/filterBoard/FilterBoard';
import ProductCard from '../components/ProductCard/ProductCard';
import { useProductStore } from '../store/ProductStore';
import { useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const PRODUCTS_PER_PAGE = 6;
  const { products, page, setProducts, setPage, toggleLike, deleteProduct } = useProductStore();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios(`https://rickandmortyapi.com/api/character?page=${page}`);
      const { data } = response;

      setProducts(data.results, data.info.pages);
      console.log(data.results, data.info.pages);
    };

    if (products.length === 0) {
      fetchProduct();
    }
  }, [setProducts, products.length, page]);

  const displayedProducts = products.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE,
  );
  return (
    <div className={styles['products-content']}>
      <FilterBoard />

      <div className={styles['products-area']}>
        <div className={styles['products-grid']}>
          {displayedProducts.map((product) => (
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

        <div className={styles['pagination']}>
          <button onClick={() => setPage(Math.max(page - 1, 1))}>Предыдущая</button>
          <span className={styles['page-number']}>{page}</span>
          <button onClick={() => setPage(page + 1)}>Следующая</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
