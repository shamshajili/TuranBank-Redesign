import { Outlet } from "react-router-dom";
import { useState } from "react";
import turanLogo from "../assets/images/turanlogo.png";

const AuthLayout = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("AZ");

  const languages = ["AZ", "EN", "RU"];

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f5f7]">

      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <img
            src={turanLogo}
            alt="TuranBank"
            className="h-9 cursor-pointer"
          />

          <div className="flex items-center gap-8 text-sm font-medium text-gray-700">

            <div className="flex items-center gap-2 cursor-pointer hover:text-[#1b75bb] transition">
              <span className="text-lg">📞</span>
              <span>935</span>
            </div>

            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg
                           hover:bg-gray-100 transition"
              >
                {lang}
                <span className="text-xs">⌄</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white
                                border rounded-xl shadow-lg overflow-hidden z-50">
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l);
                        setLangOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm
                        hover:bg-[#1b75bb]/10 transition
                        ${lang === l ? "text-[#1b75bb] font-semibold" : ""}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <Outlet />
      </main>

      <footer className="bg-white text-center text-sm text-gray-500 py-4 border-t">
        © 2026 TuranBank | Bütün hüquqlar qorunur
      </footer>

    </div>
  );
};

export default AuthLayout;
