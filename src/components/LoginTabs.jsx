const LoginTabs = ({ value, onChange }) => {
  return (
    <div className="flex gap-6 border-b">
      {[
        { id: "password", label: "İstifadəçi adı ilə" },
        { id: "asan", label: "Asan imza ilə" },
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`pb-2 text-sm transition
            ${
              value === tab.id
                ? "border-b-2 border-[#1b75bb] text-[#1b75bb] font-medium"
                : "text-gray-500"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default LoginTabs;
