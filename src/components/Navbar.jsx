import { NavLink } from "react-router-dom";
import { useState } from "react";
import turanLogo from "../assets/images/turanlogo.png";
import { HiOutlineMenu } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [segment, setSegment] = useState("ferdi");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiOutlineMenu />
          </button>

        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <img
              src={turanLogo}
              alt="TuranBank logo"
              className="h-8 w-auto object-contain"
            />
        </div>


          <div className="hidden md:flex bg-gray-100 rounded-full p-1 ml-4">
            <button
              onClick={() => setSegment("ferdi")}
              className={`px-4 py-1.5 rounded-full text-sm transition ${
                segment === "ferdi"
                  ? "bg-white shadow text-primary"
                  : "text-gray-500"
              }`}
            >
              Fərdi bankçılıq
            </button>

            <button
              onClick={() => setSegment("biznes")}
              className={`px-4 py-1.5 rounded-full text-sm transition ${
                segment === "biznes"
                  ? "bg-white shadow text-primary"
                  : "text-gray-500"
              }`}
            >
              Biznes üçün
            </button>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <NavLink to="/our-bank" className="hover:text-primary">
            Bizim Bank
          </NavLink>
          <NavLink to="/mobile-banking" className="hover:text-primary">
            Mobil Bankçılıq
          </NavLink>
          <NavLink to="/internet-banking" className="hover:text-primary">
            İnternet Bankçılıq
          </NavLink>
        </nav>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        segment={segment}
        setSegment={setSegment}
      />
    </header>
  );
};

export default Navbar;
