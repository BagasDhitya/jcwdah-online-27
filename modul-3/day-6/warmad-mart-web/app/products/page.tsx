import { api } from "@/config/axios";
import { Product } from "@/interfaces/product";

// bikin fungsi untuk mengambil data dari sisi Server
async function getProducts() {
  try {
    const response = await api.get("/api/products/");
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil data produk: ", error);
  }
}

export default async function Products() {
  // proses fetching berjalan di SERVER sebelum HTML dikirim ke client
  const products = await getProducts();

  if (!products) {
    return (
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <h1 className="text-blue-500 font-semiboldd">Data sedang dimuat ...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Katalog Warmad Mart
        </h1>
        <p className="text-gray-600 mb-8">Pilih produk favoritmu </p>

        {/* Tampilan Grid untuk Card Product */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.data?.length === 0 ? (
            <div className="col-span-full text-center py-10 text-gray-500 bg-white rounded-lg shadow">
              Belum ada produk yang tersedia
            </div>
          ) : (
            products?.data?.map((product: Product) => (
              <div
                key={product.id}
                className="p-5 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
              >
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full w-max mb-3">
                  {product.category}
                </span>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  {product.description}
                </p>

                <div className="mt-auto border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500">
                      Stock: {product.stock}
                    </span>
                    <span className="text-lg text-gray-900">
                      Price: {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
