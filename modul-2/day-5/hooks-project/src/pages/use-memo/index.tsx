import React, { useState, useMemo } from "react";

export default function UseMemoDemoPage() {
  // State untuk contoh 1: Perhitungan & Dark Mode
  const [number, setNumber] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // State untuk contoh 2: Filter List Data
  const [searchQuery, setSearchQuery] = useState("");
  const [items] = useState([
    "React JS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Next JS",
    "Node JS",
  ]);

  // 1. Heavy Calculation - Hanya dihitung ulang jika `number` berubah
  const doubleNumber = useMemo(() => {
    console.log("🔄 Calculating double number...");
    // Simulasi proses hitung yang agak lama
    for (let i = 0; i < 100000000; i++) {}
    return number * 2;
  }, [number]);

  // 2. Filter List Data - Hanya difilter ulang jika `searchQuery` berubah
  const filteredItems = useMemo(() => {
    console.log("🔍 Filtering items list...");
    return items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, items]);

  return (
    <div
      className={`p-6 max-w-md mx-auto space-y-6 min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <h1 className="text-xl font-bold text-center">Demo useMemo</h1>

      {/* Example 1: Heavy Calculation */}
      <div
        className={`p-4 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
      >
        <h2 className="font-bold text-sm mb-2">1. Expensive Calculation</h2>
        <div className="space-y-3">
          <div>
            <label className="text-xs block mb-1">Input Number:</label>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(Number(e.target.value))}
              className={`p-2 border rounded text-sm w-full ${isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white"}`}
            />
          </div>
          <p className="text-sm font-medium">Result (Double): {doubleNumber}</p>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-full py-2 bg-indigo-600 text-white rounded text-xs font-semibold hover:bg-indigo-700 transition"
          >
            Toggle Theme (Re-render tanpa hitung ulang)
          </button>
        </div>
      </div>

      {/* Example 2: Filter List */}
      <div
        className={`p-4 rounded-lg border ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
      >
        <h2 className="font-bold text-sm mb-2">2. Filter List Data</h2>
        <input
          type="text"
          placeholder="Search skill..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`p-2 border rounded text-sm w-full mb-3 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white"}`}
        />
        <ul className="space-y-1 text-sm">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className="p-1.5 bg-blue-50 text-blue-900 rounded font-medium text-xs"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
