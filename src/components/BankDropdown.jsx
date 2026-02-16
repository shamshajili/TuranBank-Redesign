import turanNight from "../assets/images/turanbank-night.jpg";

const businessLinks = {
  title: "Bizim Bankın korporativ kimliyi",
  left: [
    "Biznes kreditləri",
    "Əmək haqqı layihəsi",
    "Biznes kartları",
    "Sənədli əməliyyatlar",
  ],
  right: [
    "Tarif dərəcələri",
    "Onlayn bölmə",
    "Hüquqi şəxslər üzrə depozitlər",
  ],
};

const personalLinks = {
  title: "Bizim Bankın korporativ kimliyi",
  left: [
    "Kreditlər",
    "Əmanətlər",
    "Plastik kartlar",
    "Sürətli pul köçürmələri",
  ],
  right: [
    "Xidmət tarifləri",
    "Kampaniyalar",
    "Bank xidmətlərinin göstərilməsinə dair şərtlər (oferta)",
  ],
};

const BankDropdown = ({ segment, open }) => {
  if (!open) return null;

  const data = segment === "biznes" ? businessLinks : personalLinks;

  return (
    <div className="absolute left-0 top-full w-screen bg-white border-t shadow-xl z-40 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-5 gap-10">
        
        <div className="col-span-2">
          <p className="text-xs font-semibold text-primary tracking-widest mb-2">
            {segment === "biznes" ? "BİZNES ÜÇÜN" : "FƏRDİ BANKÇILIQ"}
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {data.title}
          </h3>
          <p className="text-gray-600 text-sm">
            {data.desc}
          </p>
        </div>

        {/* LEFT LINKS */}
        <div>
          <ul className="space-y-3 text-gray-800 text-sm">
            {data.left.map((item) => (
              <li
                key={item}
                className="hover:text-primary hover:translate-x-1 transition-all cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT LINKS */}
        <div>
          <ul className="space-y-3 text-gray-800 text-sm">
            {data.right.map((item) => (
              <li
                key={item}
                className="hover:text-primary hover:translate-x-1 transition-all cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGE */}
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

export default BankDropdown;
