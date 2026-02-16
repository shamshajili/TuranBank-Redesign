import turanNight from "../assets/images/turanbank-night.jpg";

const leftLinks = [
  "Bankın tarixi",
  "Səhmdarlar",
  "Missiya və strategiya",
  "Rəhbərlik",
  "Təşkilati struktur",
  "Filiallar, bankomat və şöbələr",
  "İllik hesabat",
  "Müxbir Hesablar",
  "Maliyyə hesabatları",
];

const rightLinks = [
  "Risklərin idarə edilməsi",
  "İnsan resursları",
  "Bank Xəbərləri",
  "ÇPY və FATCA",
  "Müraciətlər",
  "Əlaqə",
  "ƏL/TMM haqqında Qanunda dəyişikliklər",
  "Təkliflər və şikayətlər",
];

const OurBankDropdown = ({ open }) => {
  if (!open) return null;

  return (
    <div className="absolute left-0 top-full w-screen bg-white border-t shadow-xl z-40">
      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-5 gap-10">
        
        {/* TEXT – sol */}
        <div className="col-span-2">
          <p className="text-xs font-semibold text-primary tracking-widest mb-2">
            BİZİM BANK
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Bankın korporativ profili
          </h3>
        </div>

        {/* LEFT LINKS */}
        <div>
          <ul className="space-y-3 text-sm text-gray-800">
            {leftLinks.map((item) => (
              <li
                key={item}
                className="hover:text-primary transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT LINKS */}
        <div>
          <ul className="space-y-3 text-sm text-gray-800">
            {rightLinks.map((item) => (
              <li
                key={item}
                className="hover:text-primary transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-end">
          <img
            src={turanNight}
            alt="TuranBank building"
            className="w-full h-32 object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default OurBankDropdown;
