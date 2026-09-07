import { useProducts } from "../../hooks/useProduct";
import type { Product } from "../../types/product";

import ProductSkeleton from "../../components/ProductSkeleton";
import ErrorMessage from "../../components/ErrorMessage";

export default function Home() {
  const { products, loading, error } = useProducts();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Warmad Mart</h1>

        {/* State untuk menampilkan loading dan error */}
        {loading && <ProductSkeleton />}
        {error && <ErrorMessage message={error} />}

        {/* Display produk dari API, nanti akan melempar ke state loading/error apabila ada kondisi tersebut */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products?.map((item: Product, index: number) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2 line-clamp-1">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-between items-center text-sm font-medium pt-2 border-t border-gray-100">
                  <span className="text-green-600 text-lg">
                    Rp {item.price.toLocaleString("id-ID")}
                  </span>
                  <span className="text-gray-500">Stok: {item.stock}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
