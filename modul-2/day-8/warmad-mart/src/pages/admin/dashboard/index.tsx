import { useState } from "react";
import { useForm } from "react-hook-form";
import { useProducts, type SortOrder } from "../../../hooks/useProduct";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  productSchema,
  type ProductFormData,
} from "../../../schemas/productSchema";
import type { Product } from "../../../types/product";

export default function Dashboard() {
  const {
    products,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
    createProduct,
    updateProduct,
    deleteProduct,
  } = useProducts();

  const [activeTab, setActiveTab] = useState<"read" | "create">("read");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);

  const createForm = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const editForm = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  async function onCreateSubmit(data: ProductFormData) {
    const result = await createProduct(data);
    if (result) {
      alert("Produk berhasil ditambahkan!");
      createForm.reset();
      setActiveTab("read");
    }
  }

  function handleOpenEdit(product: Product) {
    setEditingProduct(product);
    editForm.reset({
      title: product.title,
      image: product.image,
      description: product.description,
      price: product.price,
      stock: product.stock,
    });
  }

  async function onEditSubmit(data: ProductFormData) {
    if (!editingProduct) return;
    const result = await updateProduct(editingProduct.objectId, data);
    if (result) {
      alert("Produk berhasil diperbarui!");
      setEditingProduct(null);
    }
  }

  async function ConfirmDelete() {
    if (!deletingProduct) return;
    const success = await deleteProduct(deletingProduct.objectId);
    if (success) {
      alert("Produk berhasil dihapus!");
      setDeletingProduct(null);
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
            className={`p-3 text-left rounded font-medium ${
              activeTab === "read" ? "bg-slate-700" : "hover:bg-slate-700/50"
            }`}
          >
            Daftar Produk
          </button>
          <button
            onClick={() => setActiveTab("create")}
            className={`p-3 text-left rounded font-medium ${
              activeTab === "create" ? "bg-slate-700" : "hover:bg-slate-700/50"
            }`}
          >
            Tambah Produk
          </button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        {loading && <p className="mb-4 text-gray-600">Loading ...</p>}
        {error && <p className="mb-4 text-red-600">{error}</p>}

        {/* Tab Read */}
        {activeTab === "read" && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h1 className="text-2xl font-bold">Daftar Produk</h1>

              {/* Controls: Search & Sort */}
              <div className="flex flex-wrap items-center gap-3">
                <input
                  type="text"
                  placeholder="Cari judul/deskripsi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white border rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />

                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                  className="bg-white border rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="default">Urutkan Harga</option>
                  <option value="lowest">Harga Terendah</option>
                  <option value="highest">Harga Tertinggi</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 border-b text-gray-700">
                  <tr>
                    <th className="p-4">Gambar</th>
                    <th className="p-4">Judul</th>
                    <th className="p-4">Deskripsi</th>
                    <th className="p-4">Harga</th>
                    <th className="p-4">Stok</th>
                    <th className="p-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-gray-500">
                        Tidak ada produk yang ditemukan.
                      </td>
                    </tr>
                  ) : (
                    products.map((item: Product) => (
                      <tr
                        key={item.objectId}
                        className="border-b hover:bg-gray-50 transition"
                      >
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
                        <td className="p-4 text-center">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => handleOpenEdit(item)}
                              className="bg-amber-500 text-white px-3 py-1.5 rounded hover:bg-amber-600 text-xs font-medium"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => setDeletingProduct(item)}
                              className="bg-red-600 text-white px-3 py-1.5 rounded hover:bg-red-700 text-xs font-medium"
                            >
                              Hapus
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Create */}
        {activeTab === "create" && (
          <div className="max-w-xl">
            <h1 className="text-2xl font-bold mb-6">Tambah Produk Baru</h1>
            <form
              onSubmit={createForm.handleSubmit(onCreateSubmit)}
              className="bg-white p-6 rounded-lg shadow flex flex-col gap-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">
                  Judul Produk
                </label>
                <input
                  type="text"
                  {...createForm.register("title")}
                  className="w-full border rounded p-2"
                  placeholder="Masukkan judul produk"
                />
                {createForm.formState.errors.title && (
                  <p className="text-red-500 text-xs mt-1">
                    {createForm.formState.errors.title.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  URL Gambar
                </label>
                <input
                  type="url"
                  {...createForm.register("image")}
                  className="w-full border rounded p-2"
                  placeholder="https://example.com/image.jpg"
                />
                {createForm.formState.errors.image && (
                  <p className="text-red-500 text-xs mt-1">
                    {createForm.formState.errors.image.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Deskripsi
                </label>
                <textarea
                  {...createForm.register("description")}
                  rows={3}
                  className="w-full border rounded p-2"
                  placeholder="Masukkan deskripsi produk"
                />
                {createForm.formState.errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {createForm.formState.errors.description.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Harga (Rp)
                  </label>
                  <input
                    type="number"
                    {...createForm.register("price", {
                      valueAsNumber: true,
                    })}
                    className="w-full border rounded p-2"
                    placeholder="10000"
                  />
                  {createForm.formState.errors.price && (
                    <p className="text-red-500 text-xs mt-1">
                      {createForm.formState.errors.price.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Stok</label>
                  <input
                    type="number"
                    {...createForm.register("stock", {
                      valueAsNumber: true,
                    })}
                    className="w-full border rounded p-2"
                    placeholder="10"
                  />
                  {createForm.formState.errors.stock && (
                    <p className="text-red-500 text-xs mt-1">
                      {createForm.formState.errors.stock.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={createForm.formState.isSubmitting}
                className="bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 disabled:bg-blue-300 mt-2"
              >
                {createForm.formState.isSubmitting
                  ? "Menyimpan ..."
                  : "Simpan Produk"}
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Modal Popup Edit Produk */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xl p-6">
            <h2 className="text-xl font-bold mb-4">Edit Produk</h2>
            <form
              onSubmit={editForm.handleSubmit(onEditSubmit)}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">
                  Judul Produk
                </label>
                <input
                  type="text"
                  {...editForm.register("title")}
                  className="w-full border rounded p-2"
                />
                {editForm.formState.errors.title && (
                  <p className="text-red-500 text-xs mt-1">
                    {editForm.formState.errors.title.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  URL Gambar
                </label>
                <input
                  type="url"
                  {...editForm.register("image")}
                  className="w-full border rounded p-2"
                />
                {editForm.formState.errors.image && (
                  <p className="text-red-500 text-xs mt-1">
                    {editForm.formState.errors.image.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Deskripsi
                </label>
                <textarea
                  {...editForm.register("description")}
                  rows={3}
                  className="w-full border rounded p-2"
                />
                {editForm.formState.errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {editForm.formState.errors.description.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Harga (Rp)
                  </label>
                  <input
                    type="number"
                    {...editForm.register("price", { valueAsNumber: true })}
                    className="w-full border rounded p-2"
                  />
                  {editForm.formState.errors.price && (
                    <p className="text-red-500 text-xs mt-1">
                      {editForm.formState.errors.price.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Stok</label>
                  <input
                    type="number"
                    {...editForm.register("stock", { valueAsNumber: true })}
                    className="w-full border rounded p-2"
                  />
                  {editForm.formState.errors.stock && (
                    <p className="text-red-500 text-xs mt-1">
                      {editForm.formState.errors.stock.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100 font-medium"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={editForm.formState.isSubmitting}
                  className="bg-amber-500 text-white px-4 py-2 rounded font-medium hover:bg-amber-600 disabled:bg-amber-300"
                >
                  {editForm.formState.isSubmitting
                    ? "Memperbarui..."
                    : "Simpan Perubahan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Dialog Konfirmasi Hapus */}
      {deletingProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Hapus Produk
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Apakah Anda yakin ingin menghapus produk{" "}
              <span className="font-semibold text-gray-900">
                "{deletingProduct.title}"
              </span>
              ? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeletingProduct(null)}
                className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100 font-medium text-sm"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={ConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 font-medium text-sm"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
