import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Header / Navbar Seragam */}
      <header className="bg-blue-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wide">
            Logi<span className="text-blue-400">Swift</span>
          </div>
          <nav className="space-x-6 font-medium">
            <Link to="/" className="hover:text-blue-300 transition">
              Beranda
            </Link>
            <Link to="/products" className="hover:text-blue-300 transition">
              Produk & Layanan
            </Link>
            <Link to="/contacts" className="hover:text-blue-300 transition">
              Kontak
            </Link>
            <Link
              to="/tailwind-intro"
              className="hover:text-blue-300 transition"
            >
              Tailwind Intro
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area (Child routes akan dirender di sini) */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
