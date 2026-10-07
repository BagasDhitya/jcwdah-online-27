import { z as zod } from "zod";

// skema untuk aturan dalam membuat produk baru (POST)
export const createProductSchema = zod.object({
  body: zod.object({
    title: zod.string().min(1, "Title tidak boleh kosong"),
    category: zod.string().min(1, "Category tidak boleh kosong"),
    description: zod.string().optional(), // boleh diisi atau tidak
    stock: zod
      .number()
      .int("Stock harus berupa angka bulat")
      .nonnegative("Stock tidak boleh negatif"),
    price: zod.number().positive("Price harus lebih besar dari 0"),
  }),
});

// type inference: ekstrak tipe data Typescript dari skema diatas
export type CreateProductInput = zod.infer<typeof createProductSchema>["body"];
