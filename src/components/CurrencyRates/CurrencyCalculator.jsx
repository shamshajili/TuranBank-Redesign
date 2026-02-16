import { useState } from "react";

const CurrencyCalculator = ({ rates }) => {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("AZN");
  const [to, setTo] = useState(rates.sell[0]?.code || "USD");

  const rate =
    rates.sell.find((r) => r.code === to)?.value || 1;

  const result =
    amount && from === "AZN"
      ? (amount / rate).toFixed(2)
      : amount
      ? (amount * rate).toFixed(2)
      : "0.00";

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Valyuta kalkulyatoru
      </h3>

      <input
        type="number"
        placeholder="Məbləğ"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 mb-4"
      >
        <option value="AZN">AZN</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 mb-6"
      >
        {rates.sell.map((r) => (
          <option key={r.code} value={r.code}>
            {r.code}
          </option>
        ))}
      </select>

      <div className="bg-primary text-white text-center py-3 rounded-lg text-lg font-semibold">
        {result} AZN
      </div>
    </div>
  );
};

export default CurrencyCalculator;
