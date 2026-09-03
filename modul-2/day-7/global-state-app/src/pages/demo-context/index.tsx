import { useLanguage } from "../../context/LanguageContext";
import { type TextContent } from "../../types/content";

export default function DemoContext() {
  const { lang, toggleLanguage } = useLanguage();

  const text: TextContent = {
    id: {
      title: "Demo useContext React",
      langLabel: "Bahasa saat ini:",
      btnLang: "Ubah Bahasa ke English",
      pleaseLogin: "Anda belum login. Silakan login terlebih dahulu.",
      btnLogin: "Login",
      btnLogout: "Logout",
      statusLogin: "Status Login:",
      userActive: "Pengguna Aktif",
      guest: "Tamu (Belum Login)",
    },
    en: {
      title: "React useContext Demo",
      langLabel: "Current Language:",
      btnLang: "Switch Language to Indonesian",
      pleaseLogin: "You are not logged in. Please log in first.",
      btnLogin: "Log In",
      btnLogout: "Log Out",
      statusLogin: "Login Status:",
      userActive: "Active User",
      guest: "Guest (Not Logged In)",
    },
  };

  const item = text[lang];

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6 border rounded-lg shadow-md my-8">
      <h1 className="text-2xl font-bold text-center border-b pb-4">
        {item.title}
      </h1>

      {/* Case 1 : PREFERENSI BAHASA */}
      <div className="p-4 bg-blue-40 border border-blue-200 rounded">
        <h2 className="font-bold text-blue-800 text-lg mb-2">
          1. Context Bahasa (Language)
        </h2>
        <p className="mb-3">
          {item.langLabel} <strong className="uppercase">{lang}</strong>
        </p>
        <button
          onClick={toggleLanguage}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold"
        >
          {item.btnLang}
        </button>
      </div>
    </div>
  );
}
