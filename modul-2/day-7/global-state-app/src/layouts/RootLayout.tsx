import { Outlet, NavLink, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-bold text-xl tracking-tight text-blue-600"
          >
            Global State Demo
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2">
            <NavLink
              to="/storage"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-slate-100 text-slate-600"
                }`
              }
            >
              Storage Demo
            </NavLink>

            <NavLink
              to="/context"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-slate-100 text-slate-600"
                }`
              }
            >
              useContext Demo
            </NavLink>

            <NavLink
              to="/zustand"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-slate-100 text-slate-600"
                }`
              }
            >
              Zustand Demo
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  );
}
