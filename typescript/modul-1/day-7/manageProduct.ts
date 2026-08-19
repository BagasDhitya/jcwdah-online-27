import products from "./dummy/products.json";
import { printProduct } from "../testFunction";

export interface Product {
  id: string;
  name: string;
  stock: number;
}

const product: Product[] = products.data;
printProduct(product);
