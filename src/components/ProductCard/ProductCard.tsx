import { FaHeart, FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './productCard.module.scss';

const ProductCard = () => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/product-details');
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    console.log('Удаление продукта');
  };

  return (
    <div className={styles['product-card']} onClick={handleCardClick}>
      <img
        src="https://via.placeholder.com/300x200"
        alt="Product"
        className={styles['product-image']}
      />
      <div className={styles['product-description']}>
        <p>
          Привет, меня зовут Максим и я работаю в сфере разработки. Привет, меня зовут Максим и я
          работаю в сфере разработки.Привет, меня зовут Максим и я работаю в сфере разработки.
          Привет, меня зовут Максим и я работаю в сфере разработки. Привет, меня зовут Максим и я
          работаю в сфере разработки.Привет, меня зовут Максим и я работаю в сфере разработки.
        </p>
      </div>
      <div className={styles['icon-container']}>
        <FaHeart
          className={`${styles['like-icon']} ${liked ? styles['liked'] : ''}`}
          onClick={handleLikeClick}
        />
        <FaTrashAlt className={styles['delete-icon']} onClick={handleDeleteClick} />{' '}
      </div>
    </div>
  );
};

export default ProductCard;
