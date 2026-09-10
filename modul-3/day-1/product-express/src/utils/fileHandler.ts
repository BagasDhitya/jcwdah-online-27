import fs from "fs";
import path from "path";
import { Product } from "../index.js";

// menentukan path lokasi file products.json
const filePath = path.join(__dirname, "../data/products.json");

// membaca data produk dari file JSON
export function readProducts() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data) as Product[];
  } catch (error) {
    console.error(`Error reading file: ${error}`);
  }
}

// menulis/memperbarui data ke file JSON
export function writeProducts(products: Product) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), "utf-8");
  } catch (error) {
    console.error(`Error writing file: ${error}`);
  }
}
