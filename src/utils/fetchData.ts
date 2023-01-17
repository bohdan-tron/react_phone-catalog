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

// function wait(delay: number) {
//   return new Promise(resolve => {
//     setTimeout(resolve, delay);
//   });
// }

// function request<T>(
//   url: string,
//   method: RequestMethod = 'GET',
// ): Promise<T> {
//   const options: RequestInit = { method };

//   return wait(300)
//     .then(() => fetch(BASE_URL + url, options))
//     .then(response => {
//       if (!response.ok) {
//         throw new Error();
//       }

//       return response.json();
//     });
// }

// export const client = {
//   get: <T>(url: string) => request<T>(url),
// };
