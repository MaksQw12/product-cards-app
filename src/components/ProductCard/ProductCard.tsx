import React from 'react';
import { FaHeart, FaTrashAlt } from 'react-icons/fa';
import { useProductCardActions } from '../../hooks/useProductCardActions';
import { useLikeAndDelete } from '../../hooks/useLikeAndDelete';

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

export const ProductCard: React.FC<CardProps> = ({
  id,
  name,
  imageUrl,
  status: _status,
  gender: _gender,
  liked,
  onLike,
  onDelete,
}) => {
  const { handleCardClick } = useProductCardActions();
  const { handleLikeClick, handleDeleteClick } = useLikeAndDelete(id, onLike, onDelete);

  return (
    <div
      className={styles['product-card']}
      onClick={() => handleCardClick(id, name, imageUrl, _status, _gender, liked)}>
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
