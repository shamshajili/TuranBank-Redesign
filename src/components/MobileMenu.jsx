import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import turanLogo from "../assets/images/turanlogo.png";


const ferdiLinks = [
  "Kreditlər",
  "Əmanətlər",
  "Plastik kartlar",
  "Sürətli pul köçürmələri",
  "Xidmət tarifləri",
  "Kampaniyalar",
];

const biznesLinks = [
  "Biznes kreditləri",
  "Əmək haqqı layihəsi",
  "Biznes kartları",
  "Sənədli əməliyyatlar",
  "Tarif dərəcələri",
];

const ourBankLinks = [
  "Bankın tarixi",
  "Səhmdarlar",
  "Missiya və strategiya",
  "Rəhbərlik",
  "Təşkilati struktur",
  "Filiallar, bankomat və şöbələr",
  "İllik hesabat",
  "Müxbir Hesablar",
  "Maliyyə hesabatları",
  "Risklərin idarə edilməsi",
  "İnsan resursları",
  "Bank Xəbərləri",
  "ÇPY və FATCA",
  "Müraciətlər",
  "Əlaqə",
];

const MobileMenu = ({ isOpen, onClose }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const getMenuTitle = () => {
    if (activeMenu === "ferdi") return "Fərdi bankçılıq";
    if (activeMenu === "biznes") return "Biznes üçün";
    if (activeMenu === "ourbank") return "Bizim Bank";
    return "";
  };

  const getMenuLinks = () => {
    if (activeMenu === "ferdi") return ferdiLinks;
    if (activeMenu === "biznes") return biznesLinks;
    if (activeMenu === "ourbank") return ourBankLinks;
    return [];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 bg-white z-50 flex flex-col"
        >
          <div className="h-16 px-4 flex items-center justify-center relative border-b">
            <img src={turanLogo} alt="TuranBank" className="h-8" />
            <button
              onClick={() => {
                onClose();
                setActiveMenu(null);
              }}
              className="absolute right-4 text-2xl"
            >
              ✕
            </button>
          </div>

          <nav className="flex-1 px-6 py-6 text-lg overflow-y-auto">
            {!activeMenu && (
              <div className="space-y-6">
                <button
                  onClick={() => setActiveMenu("ourbank")}
                  className="w-full flex justify-between items-center"
                >
                  Bizim Bank <span>›</span>
                </button>

                <button
                  onClick={() => setActiveMenu("ferdi")}
                  className="w-full flex justify-between items-center"
                >
                  Fərdi bankçılıq <span>›</span>
                </button>

                <button
                  onClick={() => setActiveMenu("biznes")}
                  className="w-full flex justify-between items-center"
                >
                  Biznes üçün <span>›</span>
                </button>

                <NavLink
                  onClick={onClose}
                  to="/mobile-banking"
                  className="flex justify-between items-center"
                >
                  Mobil Bankçılıq <span>›</span>
                </NavLink>

                <NavLink
                  onClick={onClose}
                  to="/internet-banking"
                  className="flex justify-between items-center"
                >
                  İnternet Bankçılıq <span>›</span>
                </NavLink>
              </div>
            )}

            {activeMenu && (
              <div>
                <button
                  onClick={() => setActiveMenu(null)}
                  className="flex items-center gap-2 mb-6 text-sm text-gray-500"
                >
                  ← Geri
                </button>

                <p className="text-sm text-gray-400 mb-4 uppercase tracking-wide">
                  {getMenuTitle()}
                </p>

                <ul className="space-y-5">
                  {getMenuLinks().map((item) => (
                    <li
                      key={item}
                      className="flex justify-between items-center"
                    >
                      {item}
                      <span className="text-gray-400">›</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>

          <div className="bg-gray-900 text-white px-6 py-5 space-y-4">
            <div className="flex justify-center gap-5 text-xl">
              <FaInstagram />
              <FaFacebookF />
              <FaLinkedinIn />
              <FaWhatsapp />
            </div>

            <div className="flex justify-center gap-4">
              <button className="px-4 py-1 rounded-full bg-primary">
                AZ
              </button>
              <button className="px-4 py-1 rounded-full bg-white text-black">
                EN
              </button>
            </div>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
