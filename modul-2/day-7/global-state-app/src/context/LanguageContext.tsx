import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLanguage] = useState<Language>("id");

  function toggleLanguage() {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// custom hook untuk mencegah error
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage harus digunakan di dalam Provider");
  return context;
}
