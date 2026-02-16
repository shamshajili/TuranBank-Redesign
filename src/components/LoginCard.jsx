import { useState } from "react";
import UserTypeToggle from "./UserTypeToggle";
import LoginTabs from "./LoginTabs";

const LoginCard = () => {
  const [userType, setUserType] = useState("individual");
  const [method, setMethod] = useState("password");

  return (
    <div className="w-full max-w-md">

      <h1 className="text-2xl font-semibold mb-6">
        Internet Bankçılıq
      </h1>

      <UserTypeToggle value={userType} onChange={setUserType} />

      <LoginTabs value={method} onChange={setMethod} />

      {method === "password" ? (
        <div className="space-y-5 mt-6">

          <div>
            <label className="text-sm text-gray-600">
              Fin kod / İstifadəçi adı
            </label>
            <input
              className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b75bb]"
              placeholder="Fin kod / istifadəçi adı"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Şifrə</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b75bb]"
              placeholder="Şifrə"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Şifrəni yadda saxla
            </label>
            <button className="text-[#1b75bb] hover:underline">
              Şifrəni unutmusan?
            </button>
          </div>

          <button className="w-full mt-4 bg-[#1b75bb] text-white py-3 rounded-lg hover:bg-[#155fa0] transition">
            Giriş
          </button>
        </div>
      ) : (
        <div className="space-y-5 mt-6">
          <div>
            <label className="text-sm text-gray-600">Mobil nömrə</label>
            <input
              className="w-full mt-1 px-4 py-3 border rounded-lg"
              placeholder="+994 (__) ___ __ __"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Asan istifadəçi ID-si
            </label>
            <input
              className="w-full mt-1 px-4 py-3 border rounded-lg"
              placeholder="Asan ID"
            />
          </div>

          <button className="w-full bg-[#1b75bb] text-white py-3 rounded-lg hover:bg-[#155fa0] transition">
            Giriş
          </button>
        </div>
      )}

      <p className="text-sm text-center mt-6">
        Hesabınız yoxdur?{" "}
        <span className="text-[#1b75bb] cursor-pointer hover:underline">
          Qeydiyyat
        </span>
      </p>

    </div>
  );
};

export default LoginCard;
