import bgImage from "../assets/images/mobile-banking-bg.jpg";
import MobileBankingApps from "../components/MobileBankingApps";
import NewsCarousel from "../components/NewsCarousel";
import ServicesCarousel from "../components/ServicesCarousel";
import Footer from "../components/Footer";

const MobileBanking = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="TuranBank"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2f4a]/90 via-[#1b75bb]/70 to-[#1b75bb]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white max-w-3xl mb-6">
            Mobil bankçılıq
          </h1>

          <p className="text-white/85 text-lg max-w-2xl mb-10">
            Biznes üçün mobil bankçılıq həlləri ilə maliyyənizi hər an, hər yerdə
            sürətli və təhlükəsiz şəkildə idarə edin.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {["Biznes üçün", "Onlayn bölmə", "Mobil bankçılıq"].map(
              (item, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-full text-sm cursor-pointer transition
                    ${
                      i === 2
                        ? "bg-white text-[#1b75bb] font-medium"
                        : "bg-white/15 text-white hover:bg-white/25"
                    }`}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <MobileBankingApps />
      <NewsCarousel/>
      <ServicesCarousel/>
      <Footer/>
    </>
  );
};

export default MobileBanking;
