import { useState } from "react";
import { useForm } from "react-hook-form";
import { useProducts } from "../../../hooks/useProduct";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  productSchema,
  type ProductFormData,
} from "../../../schemas/productSchema";
import type { Product } from "../../../types/product";

export default function Dashboard() {
  const { products, loading, error, createProduct } = useProducts();
  const [activeTab, setActiveTab] = useState<"read" | "create">("read");

  // inisialisasi react hook form dengan zod resolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  async function onSubmit(data: ProductFormData) {
    const result = await createProduct(data);
    if (result) {
      alert("Produk berhasil ditambahkan!");
      reset(); // reset form setelah berhasil
      setActiveTab("read");
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Warmad</h2>
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => setActiveTab("read")}
            className={`p-3 text-left rounded font-medium ${activeTab === "read" ? "bg-slate-700" : "hover:bg-slate-700/50"}`}
          >
            Daftar Produk
          </button>
          <button
            onClick={() => setActiveTab("create")}
            className={`p-3 text-left rounded font-medium ${activeTab === "create" ? "bg-slate-700" : "hover:bg-slate-700/50"}`}
          >
            Tambah Produk
          </button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        {loading && <p className="mb-4 text-gray-600">Loading ...</p>}
        {error && <p className="mb-4 text-red-600">{error}</p>}

        {/* Melihat kondisi berdasarkan state active tab */}
        {activeTab === "read" && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Daftar Produk</h1>
            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="p-4">Gambar</th>
                    <th className="p-4">Judul</th>
                    <th className="p-4">Deskripsi</th>
                    <th className="p-4">Harga</th>
                    <th className="p-4">Stok</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((item: Product, index: number) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 object-cover rounded"
                        />
                      </td>
                      <td className="p-4 font-semibold">{item.title}</td>
                      <td className="p-4 text-gray-600 max-w-xs truncate">
                        {item.description}
                      </td>
                      <td className="p-4 text-green-600 font-medium">
                        Rp {item.price.toLocaleString("id-ID")}
                      </td>
                      <td className="p-4">{item.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Create dengan validasi */}
        {activeTab === "create" && (
          <div className="max-w-xl">
            <h1 className="text-2xl font-bold mb-6">Tambah Produk Baru</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-6 rounded-lg shadow flex flex-col gap-4"
            >
              {/* Judul Produk */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Judul Produk
                </label>
                <input
                  type="text"
                  {...register("title")}
                  className="w-full border rounded p-2"
                  placeholder="Masukkan judul produk"
                />
                {errors.title && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* URL Gambar */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  URL Gambar
                </label>
                <input
                  type="url"
                  {...register("image")}
                  className="w-full border rounded p-2"
                  placeholder="https://example.com/image.jpg"
                />
                {errors.image && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.image.message}
                  </p>
                )}
              </div>

              {/* Deskripsi */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Deskripsi
                </label>
                <textarea
                  {...register("description")}
                  rows={3}
                  className="w-full border rounded p-2"
                  placeholder="Masukkan deskripsi produk"
                />
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Grid untuk Harga dan Stok */}
              <div className="grid grid-cols-2 gap-4">
                {/* Harga */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Harga (Rp)
                  </label>
                  <input
                    type="number"
                    {...register("price", { valueAsNumber: true })}
                    className="w-full border rounded p-2"
                    placeholder="10000"
                  />
                  {errors.price && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.price.message}
                    </p>
                  )}
                </div>

                {/* Stok */}
                <div>
                  <label className="block text-sm font-medium mb-1">Stok</label>
                  <input
                    type="number"
                    {...register("stock", { valueAsNumber: true })}
                    className="w-full border rounded p-2"
                    placeholder="10"
                  />
                  {errors.stock && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.stock.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 disabled:bg-blue-300 mt-2"
              >
                {isSubmitting ? "Menyimpan ..." : "Simpan Produk"}
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
