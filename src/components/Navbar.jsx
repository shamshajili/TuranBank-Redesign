import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

import turanLogo from "../assets/images/turanlogo.png";

import MobileMenu from "./MobileMenu";
import BankDropdown from "./BankDropdown";
import OurBankDropdown from "./OurBankDropdown";

const Navbar = () => {
  const [segment, setSegment] = useState("ferdi");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBankDropdownOpen, setIsBankDropdownOpen] = useState(false);
  const [isOurBankOpen, setIsOurBankOpen] = useState(false);

  return (
    <header
      className="w-full bg-white shadow-sm relative z-50"
      onMouseLeave={() => {
        setIsBankDropdownOpen(false);
        setIsOurBankOpen(false);
      }}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiOutlineMenu />
          </button>

          <img
            src={turanLogo}
            alt="TuranBank logo"
            className="h-8 w-auto object-contain cursor-pointer"
          />

          {/* FƏRDİ / BİZNES TOGGLE */}
          <div
            className="hidden md:block ml-4"
            onMouseEnter={() => {
              setIsBankDropdownOpen(true);
              setIsOurBankOpen(false);
            }}
          >
            <div className="flex bg-gray-100 font-medium rounded-full p-1">
              <button
                onMouseEnter={() => setSegment("ferdi")}
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
                onMouseEnter={() => setSegment("biznes")}
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
        </div>

        {/* RIGHT NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          
          <div
            className="cursor-pointer hover:text-red-600"
            onMouseEnter={() => {
              setIsOurBankOpen(true);
              setIsBankDropdownOpen(false);
            }}
          >
            Bizim Bank
          </div>

          <NavLink
            to="/mobile-banking"
            className="hover:text-primary text-red-600"
          >
            Mobil Bankçılıq
          </NavLink>

          <NavLink
            to="/internet-banking"
            className="hover:text-primary text-red-600"
          >
            İnternet Bankçılıq
          </NavLink>
        </nav>
      </div>


      {/* Ferdi / Biznes Mega Menu */}
      <div
        onMouseEnter={() => setIsBankDropdownOpen(true)}
        onMouseLeave={() => setIsBankDropdownOpen(false)}
      >
        <BankDropdown
          segment={segment}
          open={isBankDropdownOpen}
        />
      </div>

      {/* Bizim Bank Dropdown */}
      <div
        onMouseEnter={() => setIsOurBankOpen(true)}
        onMouseLeave={() => setIsOurBankOpen(false)}
      >
        <OurBankDropdown open={isOurBankOpen} />
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
