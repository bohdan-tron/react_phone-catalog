export type Product = {
  age: number,
  id: string,
  type: 'phone' | 'tablet' | 'accessory',
  imageUrl: string,
  name: string,
  snippet: string,
  price: number,
  discount: number,
  screen: string,
  capacity: string,
  ram: string,
  description: string,
  hardware: {
    cpu: string,
  },
  connectivity: {
    cell: string,
  },
  battery: {
    type: string,
  },
  camera: {
    primary: string,
  },
  images: string[],
  additionalFeatures: string,
  quantity?: number,
};
