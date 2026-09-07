export default function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-4">
          {/* Placeholder Gambar */}
          <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
          {/* Placeholder Judul */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          {/* Placeholder Deskripsi */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
          {/* Placeholder Harga & Stok */}
          <div className="flex justify-between items-center pt-2">
            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
