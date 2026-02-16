import { useState } from "react";
import { currencyRates } from "../../data/currencyMock";

import RateList from "./RateList";
import CurrencyCalculator from "./CurrencyCalculator";

const CurrencyRates = () => {
  const [type, setType] = useState("nagd");

  const currentRates = currencyRates[type];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Toggle */}
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setType("nagd")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition ${
            type === "nagd"
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Nağd məzənnə
        </button>

        <button
          onClick={() => setType("nagdsiz")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition ${
            type === "nagdsiz"
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Nağdsız məzənnə
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RateList title="Alış" rates={currentRates.buy} />
        <RateList title="Satış" rates={currentRates.sell} />
        <CurrencyCalculator rates={currentRates} />
      </div>
    </section>
  );
};

export default CurrencyRates;
