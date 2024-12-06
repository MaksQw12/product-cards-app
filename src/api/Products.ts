import axios from 'axios';
import { Product } from '../types/Product';

interface FetchProductsResponse {
  results: Product[];
  pages: number;
}

export const fetchProducts = async (page: number): Promise<FetchProductsResponse> => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
  const { results, info } = response.data;

  return { results, pages: info.pages };
};
