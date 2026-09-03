import { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";

export default function DemoZustand() {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");

  const { email, isLoggedIn, login, logout } = useAuthStore();

  function handleLoginSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!inputEmail || !inputPassword) {
      alert("Email dan Password harus diisi!");
      return;
    }

    // panggil action login dari Zustand
    login(inputEmail);

    // reset form input
    setInputEmail("");
    setInputPassword("");
  }

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-100 p-4 font-sans">
      {/* CARD UTAMA */}
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h1 className="text-xl font-bold text-center text-gray-800 mb-6">
          Demo Zustand - Login
        </h1>

        {/* KONDISI 1: JIKA BELUM LOGIN */}
        {!isLoggedIn ? (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                placeholder="contoh@email.com"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-sm transition"
            >
              Masuk
            </button>
          </form>
        ) : (
          /* KONDISI 2: JIKA SUDAH LOGIN */
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center space-y-4">
            <p className="text-sm text-green-800">
              Selamat datang, <strong className="font-bold">{email}</strong>!
            </p>
            <button
              onClick={logout}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg text-sm transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
