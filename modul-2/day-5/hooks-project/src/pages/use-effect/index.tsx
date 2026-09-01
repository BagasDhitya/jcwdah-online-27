import { useState, useEffect } from "react";

// Komponen Anak untuk demonstrasi Unmounting
function ChildComponent() {
  useEffect(() => {
    // Phase Mounting
    console.log("🟢 [MOUNTING] - Komponen anak berhasil dimuat ke layar!");

    // Phase Unmounting (Cleanup Function)
    return () => {
      console.log("🟡 [UNMOUNTING] - Komponen anak dihilangkan dari layar!");
    };
  }, []);

  return (
    <div className="p-4 bg-yellow-100 border border-yellow-400 rounded text-yellow-800">
      <p className="font-semibold">Halo, aku komponen anak!</p>
    </div>
  );
}

export default function UseEffectDemo() {
  const [count, setCount] = useState<number>(0);
  const [showChild, setShowChild] = useState<boolean>(true);

  // Case Mounting
  useEffect(() => {
    console.log("🟢 [MOUNTING] - Komponen utama berhasil dimuat!");
  }, []);

  // Case Updating
  useEffect(() => {
    console.log("🔴 [UPDATING] - Nilai count berubah menjadi: ", count);
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-6">
      <h1 className="text-xl font-bold text-center">Demo useEffect</h1>

      {/* Kontrol Updating */}
      <div className="p-4 bg-white rounded border shadow-sm space-y-3 w-80 text-center">
        <p className="text-sm font-semibold mb-2">Kasus Updating:</p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded"
        >
          Tambah Count ({count})
        </button>
      </div>

      {/* Kontrol Unmounting */}
      <div className="p-4 bg-white rounded border shadow-sm space-y-3 w-80 text-center">
        <p className="text-sm font-semibold mb-2">Kasus Unmounting:</p>
        <button
          onClick={() => setShowChild(!showChild)}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded mb-3"
        >
          {showChild ? "Sembunyikan Component" : "Tampilkan Component"}
        </button>

        {/* Render komponen anak secara kondisional */}
        {showChild && <ChildComponent />}
      </div>
    </div>
  );
}
