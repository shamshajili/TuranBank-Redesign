import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import turanLogo from "../assets/images/turanlogo.png";
import partner1 from "../assets/images/footer1.png";
import partner2 from "../assets/images/footer2.jpg";
import partner3 from "../assets/images/footer3.png";
import partner4 from "../assets/images/footer4.jpg";

const footerLinks = [
  {
    title: "Bizim Bank",
    links: [
      "Bankın tarixi",
      "Missiya və strategiya",
      "Rəhbərlik",
      "Təşkilati struktur",
      "Xidmət şəbəkəsi",
      "İllik hesabat",
      "Maliyyə hesabatları",
      "Səhmdarlar",
      "Risklərin idarə edilməsi",
      "İnsan resursları",
      "Məxfilik siyasəti",
      "Rəqəmsal pul kisəsinin istifadəsi şərtləri və qaydaları",
      "ƏL/TMM haqqında Qanunda dəyişikliklər",
      "Təkliflər və şikayətlər"
    ],
  },
  {
    title: "Fərdi Bankçılıq",
    links: [
      "Valyuta əməliyyatları",
      "Kreditlər",
      "eManat aparatından ödənişlər",
      "MilliÖN aparatından ödənişlər",
      "Plastik kartlar",
      "Pul köçürmələri",
      "Əmanətlər",
      "Bank məsləhətləri",
      "Valyuta Kursları"
    ],
  },
  {
    title: "Biznes Bankçılıq",
    links: [
      "Valyuta-mübadilə əməliyyatları",
      "Kreditlər",
      "Xüsusi Lahiyə kreditləri",
      "Depozitlər",
      "Sənədli əməliyyatlar",
      "Əmək haqqı lahiyələri",
      "POS-terminal xidməti",
      "İnkasassiya",
    ],
  },
  {
    title: "Investorlarla əlaqə",
    links: [
      "Beynəlxalq əlaqələr",
      "Korporativ idarəetmə",
      "Dividend siyasəti"
    ],
  },
  {
    title: "Banklararasi Biznes",
    links: [
      "Banklararası əməliyyatlar"
    ],
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/turanbank/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/TuranBankASC",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/company/turanbank-ojsc",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://api.whatsapp.com/send/?phone=994502687222&text&type=phone_number&app_absent=0",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#f7f9fc] border-t border-gray-200">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-14 mb-16">

          {/* LEFT */}
          <div className="max-w-md">
            <img src={turanLogo} alt="TuranBank" className="h-10 mb-6" />

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Rahat, təhlükəsiz və sürətli bankçılıq həlləri.
              Müasir maliyyə xidmətləri ilə hər zaman yanınızdayıq.
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center 
                             text-gray-600 hover:text-[#1b75bb] hover:shadow-md transition"
                >
                  <Icon size={20} />
                </a>
              ))}         
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {footerLinks.map((section, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 mb-4">
                  {section.title}
                </h4>

                <ul className="space-y-2 text-sm">
                  {section.links.map((link, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 hover:text-[#1b75bb] transition cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#1b75bb]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <p className="text-sm text-white/90 text-center lg:text-left">
              © 2026 TuranBank ASC. Bütün hüquqlar qorunur.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8">
              {[partner1, partner2, partner3, partner4].map((logo, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-xl p-3 hover:bg-white/20 transition"
                >
                  <img
                    src={logo}
                    alt="partner"
                    className="h-14 md:h-16 object-contain"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
