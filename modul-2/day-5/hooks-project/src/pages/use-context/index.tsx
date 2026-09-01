import React, { createContext, useContext, useState } from "react";

// 1. Buat Context (Wadah Pusat Data)
const UserContext = createContext();

export default function UseContextDemoPage() {
  const [userName, setUserName] = useState("Rizky Ridho");

  return (
    // 2. Bungkus aplikasi dengan Provider dan berikan nilainya
    <UserContext.Provider value={{ userName, setUserName }}>
      <div className="p-6 max-w-md mx-auto space-y-4 bg-gray-50 min-h-screen">
        <h1 className="text-xl font-bold text-center">Demo useContext</h1>

        {/* Komponen Navbar tidak perlu dioper props nama sama sekali */}
        <Navbar />

        {/* Input untuk ubah nama */}
        <div className="p-4 bg-white rounded-lg border shadow-sm">
          <label className="text-xs font-semibold block mb-1">
            Ubah Nama User:
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-2 border rounded text-sm"
          />
        </div>
      </div>
    </UserContext.Provider>
  );
}

// Komponen Perantara (Tanpa terima props nama!)
function Navbar() {
  return (
    <nav className="p-4 bg-white rounded-lg border shadow-sm flex justify-between items-center">
      <span className="font-bold text-sm">MyWebsite</span>
      <UserProfile />
    </nav>
  );
}

// Komponen Cucu yang butuh data nama
function UserProfile() {
  // 3. Ambil data langsung dari UserContext menggunakan useContext
  const { userName } = useContext(UserContext);

  return (
    <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
      👤 {userName}
    </div>
  );
}
