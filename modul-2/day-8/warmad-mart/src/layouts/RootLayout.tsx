import { Outlet, NavLink, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* Header / Navbar */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            to="/"
            className="font-extrabold text-2xl tracking-tight text-emerald-600 flex items-center gap-2"
          >
            <span className="bg-emerald-100 p-1.5 rounded-lg text-emerald-600 text-lg">
              🛒
            </span>
            Warmad<span className="text-slate-800">Mart</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-2 sm:gap-3">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "hover:bg-slate-100 text-slate-600"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/auth"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-emerald-500 text-white hover:bg-emerald-600"
                }`
              }
            >
              Sign In / Sign Up
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Warmad Mart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
