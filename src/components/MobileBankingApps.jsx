import appImg from "../assets/images/app-launching-turanbank_az.jpg";
import googlePlay from "../assets/images/google-play.svg";
import appStore from "../assets/images/app-store.svg";
import appGallery from "../assets/images/app_gall.png";
import FeaturesList from "./FeaturesList";
import { useNavigate } from "react-router-dom";

const MobileBankingApps = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

        <div className="bg-[#1b75bb] rounded-[40px] px-8 sm:px-12 py-12 text-white">

          <p className="uppercase text-sm tracking-widest opacity-90 mb-2">
            Mobil tətbiqi yükləyin
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
            TuranBank MobilBank
          </h2>

          <div className="flex justify-center mb-10">
            <img
              src={appImg}
              alt="TuranBank Mobile App"
              className="
                w-full
                max-w-[520px]
                rounded-2xl
                shadow-2xl
              "
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[googlePlay, appStore, appGallery].map((img, i) => (
              <a
                key={i}
                href="#"
                className="
                  bg-white rounded-xl px-4 py-3
                  flex justify-center items-center
                  hover:scale-105 hover:shadow-lg
                  transition
                "
              >
                <img src={img} alt="store" className="h-9 object-contain" />
              </a>
            ))}
          </div>
        </div>

        <FeaturesList
          title="Mobil tətbiqin imkanları"
          onButtonClick={() => navigate("/valyuta-kurslari")}
        />

      </div>
    </section>
  );
};

export default MobileBankingApps;
