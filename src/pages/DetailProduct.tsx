import styles from '../styles/detailProduct.module.scss';
import { useProductStore } from '../store/ProductStore';
import { useNavigate } from 'react-router-dom';

const DetailProduct = () => {
  const navigate = useNavigate();
  const selectedProduct = useProductStore((state) => state.selectedProduct);

  if (!selectedProduct) {
    return <div className={styles['product-detail']}>Продукт не найден</div>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles['product-detail']}>
      <button className={styles['back-button']} onClick={handleGoBack}>
        Назад
      </button>
      <div className={styles['product-main']}>
        <div className={styles['product-image-container']}>
          <img
            className={styles['product-image']}
            src={selectedProduct.image}
            alt={selectedProduct.name}
          />
        </div>
        <div className={styles['product-info']}>
          <h1>{selectedProduct.name}</h1>
          <div className={styles['product-details']}>
            <p>Status: {selectedProduct.status}</p>
            <p>Gender: {selectedProduct.gender}</p>
            <p>Liked: {selectedProduct.liked ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
