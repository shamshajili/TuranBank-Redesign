const UserTypeToggle = ({ value, onChange }) => {
  return (
    <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
      {["individual", "corporate"].map((type) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={`flex-1 py-2 rounded-md text-sm transition
            ${
              value === type
                ? "bg-white shadow text-[#1b75bb] font-medium"
                : "text-gray-500"
            }`}
        >
          {type === "individual" ? "Fərdi" : "Korporativ"}
        </button>
      ))}
    </div>
  );
};

export default UserTypeToggle;
