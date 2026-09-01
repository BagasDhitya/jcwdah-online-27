import { useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef(null);
  const clickCounterRef = useRef(0);

  function handleFocusInput() {
    inputRef.current.focus();
  }

  function handleSilentCount() {
    clickCounterRef.current += 1;
    console.log("Jumlah klik saat ini: ", clickCounterRef.current);
    alert(
      `Klik tersimpan di memori: ${clickCounterRef.current} kali (layar tidak di-render ulang)`,
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Demo Penggunaan useRef
      </h1>

      {/* Contoh 1 : Fokus Input Teks */}
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          1. Auto Focus Input
        </h2>
        <input
          ref={inputRef}
          type="text"
          placeholder="Ketik sesuatu di sini ..."
          className="w-full p-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleFocusInput}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Fokuskan ke Input
        </button>
      </div>

      {/* Contoh 2 : Penghitung Counter */}
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          2. Penyimpanan Nilai (Tanpa Re-render)
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Setiap tombol diklik, nilai bertambah di memori tetapi layar tidak
          digambar ulang (re-render)
        </p>
        <span className="text-sm text-red-500">
          Hasil: {clickCounterRef.current}
        </span>
        <button
          onClick={handleSilentCount}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Tambah Hitungan (cek console / alert)
        </button>
      </div>
    </div>
  );
}
