import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="hidden md:block w-full bg-[#1b75bb] text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between">
        
        <div />

        <div className="flex items-center gap-4">
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

          <span className="opacity-60">|</span>

          <button className="hover:underline">AZ</button>
          <button className="opacity-70 hover:underline">EN</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
