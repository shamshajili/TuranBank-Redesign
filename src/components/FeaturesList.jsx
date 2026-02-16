const defaultFeatures = [
  "Kreditlərin onlayn ödənişi",
  "Onlayn kredit sifarişi",
  "Kart sifarişi",
  "Sosial məsuliyyət",
  "Kommunal ödənişlər",
  "Cashback",
  "Tariflər",
  "Filial və bankomatlar",
  "Banklararası kart mərkəzi (BKM)",
];

const FeaturesList = ({
  title = "Xidmətlər",
  features = defaultFeatures,
  buttonText = "Valyuta kursları",
  onButtonClick,
}) => {
  return (
    <div>
      <h3 className="text-3xl font-semibold mb-10">
        {title}
      </h3>

      <ul className="space-y-4">
        {features.map((item, i) => (
          <li
            key={i}
            className="
              group flex items-center justify-between
              border-b py-3 cursor-pointer
            "
          >
            <span className="text-gray-700 group-hover:text-red-600 transition">
              {item}
            </span>
            <span className="text-gray-400 group-hover:text-red-600 transition">
              →
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={onButtonClick}
        className="
          mt-10 px-10 py-4 rounded-xl
          bg-red-600 text-white font-medium
          hover:bg-red-700 transition
        "
      >
        {buttonText}
      </button>
    </div>
  );
};

export default FeaturesList;
