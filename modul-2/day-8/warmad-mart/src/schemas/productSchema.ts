import { z as zod } from "zod";

export const productSchema = zod.object({
  title: zod.string().min(3, { error: "Judul minimal harus 3 karakter" }),
  image: zod.url({ error: "Format URL gambar tidak valid" }),
  price: zod
    .number({ error: "Harga harus berupa angka" })
    .min(100, { error: "Harga minimal Rp100" }),
  stock: zod
    .number({ error: "Stok harus berupa angka" })
    .min(0, { error: "Stok tidak boleh minus" }),
  description: zod
    .string()
    .min(10, { error: "Deskripsi minimal harus 10 karakter" }),
});

// mengambil tipe Typescript dari skema diatas
export type ProductFormData = zod.infer<typeof productSchema>;
