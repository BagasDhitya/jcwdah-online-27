import { Link, Outlet, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
  description: string;
}

const navItems: NavItem[] = [
  { label: "useState", path: "/use-state", description: "State Management" },
  { label: "useEffect", path: "/use-effect", description: "Side Effects" },
  { label: "useRef", path: "/use-ref", description: "DOM / Mutable Ref" },
  {
    label: "useMemo",
    path: "/use-memo",
    description: "Performance / Memoization",
  },
  {
    label: "useContext",
    path: "/use-context",
    description: "Global State Context",
  },
  {
    label: "Custom Hook",
    path: "/custom-hook",
    description: "Reusable Hook Logic",
  },
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          React Hooks Demo Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Pilih menu di bawah untuk melihat implementasi tiap hook
        </p>
      </header>

      {/* Grid Tombol / Navigasi Dashboard */}
      <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8 w-full max-w-6xl mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col justify-between p-4 rounded-xl border transition-all duration-200 shadow-sm ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:shadow-md"
              }`}
            >
              <div>
                <span className="text-lg font-semibold block">
                  {item.label}
                </span>
                <span
                  className={`text-xs mt-1 block ${isActive ? "text-blue-100" : "text-gray-500"}`}
                >
                  {item.description}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Area Tampilan Konten Halaman Aktif */}
      <main className="flex-1 w-full max-w-6xl mx-auto bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <Outlet />
      </main>
    </div>
  );
}
