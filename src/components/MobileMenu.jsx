import { NavLink } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import turanLogo from "../assets/images/turanlogo.png";

const MobileMenu = ({ isOpen, onClose, segment, setSegment }) => {
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
          {/* Header */}
          <div className="h-16 px-4 flex items-center justify-center relative border-b">
            <img src={turanLogo} alt="TuranBank" className="h-8" />
            <button
              onClick={onClose}
              className="absolute right-4 text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Segment toggle */}
          <div className="py-6 flex justify-center">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setSegment("ferdi")}
                className={`px-5 py-2 rounded-full text-sm ${
                  segment === "ferdi"
                    ? "bg-white shadow text-primary"
                    : "text-gray-500"
                }`}
              >
                Fərdi
              </button>
              <button
                onClick={() => setSegment("biznes")}
                className={`px-5 py-2 rounded-full text-sm ${
                  segment === "biznes"
                    ? "bg-white shadow text-primary"
                    : "text-gray-500"
                }`}
              >
                Biznes
              </button>
            </div>
          </div>

          {/* Links */}
          <nav className="flex-1 px-6 space-y-6 text-lg">
            <NavLink onClick={onClose} to="/our-bank" className="flex justify-between">
              Bizim Bank <span>›</span>
            </NavLink>
            <NavLink onClick={onClose} to="/mobile-banking" className="flex justify-between">
              Mobil Bankçılıq <span>›</span>
            </NavLink>
            <NavLink onClick={onClose} to="/internet-banking" className="flex justify-between">
              İnternet Bankçılıq <span>›</span>
            </NavLink>
          </nav>

          {/* Bottom / TopBar content */}
          <div className="bg-gray-900 text-white px-6 py-5 space-y-4">
            <div className="flex justify-center gap-5 text-xl">
              <a href="https://www.instagram.com/turanbank/" className="hover:opacity-80">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/TuranBankASC" className="hover:opacity-80">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/turanbank-ojsc" className="hover:opacity-80">
            <FaLinkedinIn />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=994502687222&text&type=phone_number&app_absent=0" className="hover:opacity-80">
            <FaWhatsapp />
          </a>
            </div>

            <div className="flex justify-center gap-4">
              <button className="px-4 py-1 rounded-full bg-primary">AZ</button>
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
