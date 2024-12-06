import { FaHeart, FaTrashAlt } from 'react-icons/fa';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './productCard.module.scss';

interface CardProps {
  id: number;
  name: string;
  imageUrl: string;
  status: string;
  gender: string;
  liked: boolean;
  onLike: (id: number) => void;
  onDelete: (id: number) => void;
}

const ProductCard: React.FC<CardProps> = ({
  id,
  name,
  imageUrl,
  status: _status,
  gender: _gender,
  liked,
  onLike,
  onDelete,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product-details/${id}`);
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLike(id); // Теперь состояние лайка будет обновляться через store
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <div className={styles['product-card']} onClick={handleCardClick}>
      <img src={imageUrl} alt="Product" className={styles['product-image']} />
      <div className={styles['product-description']}>
        <p>{name}</p>
      </div>
      <div className={styles['icon-container']}>
        <FaHeart
          className={`${styles['like-icon']} ${liked ? styles['liked'] : ''}`}
          onClick={handleLikeClick}
        />
        <FaTrashAlt className={styles['delete-icon']} onClick={handleDeleteClick} />
      </div>
    </div>
  );
};

export default ProductCard;
