export default function DemoStorages() {
  // 1. LOCALSTORAGE
  // karakteristik: data tersimpan permanen meskipun tab/browser ditutup

  function saveTheme() {
    localStorage.setItem("theme", "dark");
    alert("Tema Dark tersimpan di local storage!");
  }

  function getTheme() {
    const theme = localStorage.getItem("theme");
    alert(`Tema tersimpan: ${theme ? theme : "Belum ada data"}`);
  }

  // 2. SESSION
  // karakteristik: data hilang ketika tab ditutup (hanya aktif seelama sesi tab berlangsung)

  function saveFormStep() {
    sessionStorage.setItem("step", String(2));
    alert('Langkah form "2" tersimpan di session storage!');
  }

  function getFormStep() {
    const step = sessionStorage.getItem("step");
    alert(`Langkah form saat ini: ${step ? step : "Belum ada data"}`);
  }

  function clearAllData() {
    localStorage.clear(); // clear() -> menghapus total semua local storage di satu web tersebut, kalo mau partial bisa pake removeItem()
  }

  return (
    <div className={`p-6 max-w-4xl mx-auto space-y-6`}>
      <h1 className="text-2xl font-bold">
        Contoh Penggunaan Web Storages & Cookies
      </h1>

      {/* Section 1 : Local Storage */}
      <div className="border p-4 rounded bg-gray-50 ">
        <h2 className="text-xl font-bold text-blue-600">1. Local Storage</h2>
        <p className="text-sm text-gray-600 mb-3">
          Sifat: Tersimpan Permanen di Browser. Tidak hilang meski tab/browser
          ditutup.
        </p>
        <div className="space-y-2">
          <div>
            <span className="font-semibold block mb-1">
              Contoh: Simpan Tema
            </span>
            <button
              onClick={saveTheme}
              className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
            >
              Simpan Tema
            </button>
            <button
              onClick={getTheme}
              className="bg-gray-500 text-white px-3 py-1 rounded mr-2"
            >
              Cek Tema
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 : Session Storage */}
      <div className="border p-4 rounded bg-gray-50 ">
        <h2 className="text-xl font-bold text-green-600">2. Session Storage</h2>
        <p className="text-sm text-gray-600 mb-3">
          Sifat: Tersimpan sementara. Data akan hilang begitu tab ditutup
        </p>
        <div className="space-y-2">
          <div>
            <span className="font-semibold block mb-1">
              Contoh: Simpan Step Form
            </span>
            <button
              onClick={saveFormStep}
              className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
            >
              Simpan Step
            </button>
            <button
              onClick={getFormStep}
              className="bg-gray-500 text-white px-3 py-1 rounded mr-2"
            >
              Cek Step
            </button>
          </div>
        </div>
      </div>

      {/* Tombol Bersihkan Data */}
      <div className="pt-2">
        <button
          onClick={clearAllData}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Hapus Semua Data Storage & Cookie
        </button>
      </div>
    </div>
  );
}
