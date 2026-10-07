"use client";

import { useState, FormEvent } from "react";
import { useProducts } from "@/hooks/useProduct";
import { Product, CreateProductPayload } from "@/interfaces/product";

export default function AdminDashboard() {
  const { products, loading, error, createProduct, updateProduct, softDelete } =
    useProducts();

  const [view, setView] = useState<"list" | "form">("list");
  const [editing, setEditing] = useState<Product | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  function openForm(product: Product | null = null) {
    setEditing(product);
    setTitle(product?.title ?? "");
    setCategory(product?.category ?? "");
    setDescription(product?.description ?? "");
    setPrice(String(product?.price ?? ""));
    setStock(String(product?.stock ?? ""));
    setView("form");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const payload: CreateProductPayload = {
      title,
      category,
      description,
      price: Number(price),
      stock: Number(stock),
    };

    const result = editing
      ? await updateProduct(payload, editing.id)
      : await createProduct(payload);

    if (result) {
      setEditing(null);
      setView("list");
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Hapus produk ini?")) return;
    await softDelete(id);
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-56 bg-gray-800 p-4 text-white">
        <h1 className="mb-4 text-lg font-bold">Admin</h1>
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => setView("list")}
            className={`rounded px-3 py-2 text-left ${
              view === "list" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            Lihat Daftar Produk
          </button>
          <button
            onClick={() => openForm(null)}
            className={`rounded px-3 py-2 text-left ${
              view === "form" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            Tambah/Update Produk
          </button>
        </nav>
      </aside>

      {/* Konten */}
      <main className="flex-1 p-6">
        {error && <p className="mb-3 text-red-600">{error}</p>}

        {view === "list" ? (
          <>
            <h2 className="mb-4 text-xl font-bold">Daftar Produk</h2>

            {loading && products?.length === 0 ? (
              <p>Memuat produk...</p>
            ) : products?.length === 0 ? (
              <p>Belum ada produk.</p>
            ) : (
              <table className="w-full border text-left text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2">Judul</th>
                    <th className="border p-2">Kategori</th>
                    <th className="border p-2">Deskripsi</th>
                    <th className="border p-2">Harga</th>
                    <th className="border p-2">Stok</th>
                    <th className="border p-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((p: Product) => (
                    <tr key={p.id}>
                      <td className="border p-2">{p.title}</td>
                      <td className="border p-2">{p.category}</td>
                      <td className="max-w-xs truncate border p-2">
                        {p.description}
                      </td>
                      <td className="border p-2">
                        Rp {Number(p.price).toLocaleString("id-ID")}
                      </td>
                      <td className="border p-2">{p.stock}</td>
                      <td className="space-x-2 whitespace-nowrap border p-2">
                        <button
                          onClick={() => openForm(p)}
                          className="rounded border px-2 py-1 hover:bg-gray-100"
                        >
                          Ubah
                        </button>
                        <button
                          onClick={() => handleDelete(p.id)}
                          className="rounded border border-red-400 px-2 py-1 text-red-600 hover:bg-red-50"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        ) : (
          <>
            <h2 className="mb-4 text-xl font-bold">
              {editing ? "Ubah Produk" : "Tambah Produk"}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex max-w-md flex-col gap-3"
            >
              <input
                className="rounded border p-2"
                placeholder="Judul produk"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <input
                className="rounded border p-2"
                placeholder="Kategori"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
              <textarea
                className="rounded border p-2"
                rows={4}
                placeholder="Deskripsi"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <input
                className="rounded border p-2"
                type="number"
                min={0}
                placeholder="Harga"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <input
                className="rounded border p-2"
                type="number"
                min={0}
                placeholder="Stok"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
              />

              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading
                    ? "Menyimpan..."
                    : editing
                      ? "Simpan perubahan"
                      : "Tambah produk"}
                </button>
                <button
                  type="button"
                  onClick={() => setView("list")}
                  className="rounded border px-4 py-2 hover:bg-gray-100"
                >
                  Batal
                </button>
              </div>
            </form>
          </>
        )}
      </main>
    </div>
  );
}
