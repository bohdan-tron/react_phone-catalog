import { Product } from '../types/Product';

const BASE_URL = 'https://mate-academy.github.io/react_phone-catalog/api';

export const getProducts = (): Promise<Product[]> => {
  const URL = `${BASE_URL}/products.json`;

  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
};

export const getProductDetails = (
  prodictId: string | undefined,
): Promise<Product> => {
  const URL = `${BASE_URL}/products/${prodictId}.json`;

  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
};
