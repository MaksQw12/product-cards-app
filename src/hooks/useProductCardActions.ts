import { useNavigate } from 'react-router-dom';
import { useProductStore } from '../store/ProductStore';

export const useProductCardActions = () => {
  const navigate = useNavigate();
  const setSelectedProduct = useProductStore((state) => state.setSelectedProduct);

  const handleCardClick = (
    id: number,
    name: string,
    imageUrl: string,
    status: string,
    gender: string,
    liked: boolean,
  ) => {
    const productData = { id, name, image: imageUrl, status, gender, liked };
    localStorage.setItem('selectedProduct', JSON.stringify(productData));
    setSelectedProduct(productData);
    navigate(`/product-details/${id}`);
  };

  return {
    handleCardClick,
  };
};
