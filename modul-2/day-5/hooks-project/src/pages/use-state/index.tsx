import { useState } from "react";

export default function UseStateDemo() {
  // naming state bisa bebas, tergantung kegunaan
  // count -> nilai
  // setCount -> pengendali nilainya

  const [count, setCount] = useState<number>(1);
  const [name, setName] = useState<string>("");

  console.log("count di memori: ", count);
  console.log("name di memori: ", name);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-6">
      <h1 className="text-xl font-bold text-center">Demo useState</h1>

      {/* 1. Counter Barang */}
      <div className="p-4 bg-white rounded-lg border shadow-sm">
        <h2 className="font-bold text-sm mb-2">1. Counter Keranjang</h2>
        <div className="flex mx-auto justify-center items-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="px-3 py-1 bg-gray-200 rounded font-bold"
          >
            -
          </button>
          <span className="font-bold">{count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="px-3 py-1 bg-gray-200 rounded font-bold"
          >
            +
          </button>
        </div>
      </div>

      {/* 2. Input Form secara Real-time */}
      <div className="p-4 bg-white rounded-lg border shadow-sm">
        <h2 className="font-bold text-sm mb-2">2. Input Name</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ketik nama kamu disini ..."
          className="w-full p-2 border rounded mb-2 text-sm"
        />
      </div>
    </div>
  );
}
