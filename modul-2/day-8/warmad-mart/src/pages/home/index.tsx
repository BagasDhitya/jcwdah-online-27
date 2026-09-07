import { useProducts } from "../../hooks/useProduct";
import type { Product } from "../../types/product";

export default function Home() {
  const { products, loading, error } = useProducts();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Warmad Mart</h1>
        {loading && <p className="text-gray-600">Loading Produk ...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Display produk dari API */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products?.map((item: Product, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-green-600 text-lg">
                  Rp {item.price.toLocaleString("id-ID")}
                </span>
                <span className="text-gray-500">Stok: {item.stock}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
