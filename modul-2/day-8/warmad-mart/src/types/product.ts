export interface Product {
  objectId?: string; // auto generated ID dari backendless
  created?: string; // timestamp pembuatan dari backendless
  updated?: string; // timestamp pembaruan dari backendless

  title: string;
  image: string;
  stock: number;
  description: string;
  price: number; // dalam IDR
}
