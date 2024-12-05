import styles from '../styles/products.module.scss';
import FilterBoard from '../components/filterBoard/FilterBoard';
import ProductCard from '../components/ProductCard/ProductCard';
const Products = () => {
  return (
    <div className={styles['products-content']}>
      <FilterBoard />

      <div className={styles['products-area']}>
        <div className={styles['products-grid']}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className={styles['pagination']}>
          <button>Предыдущая</button>
          <button>Следующая</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
