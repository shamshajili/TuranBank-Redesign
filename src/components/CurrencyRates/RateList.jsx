const RateList = ({ title, rates }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        {title}
      </h3>

      <ul className="space-y-3">
        {rates.map((item) => (
          <li
            key={item.code}
            className="flex justify-between items-center border-b pb-2 text-sm"
          >
            <span className="font-medium text-primary">
              {item.code}
            </span>
            <span className="text-gray-700">
              {item.value.toFixed(4)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RateList;
