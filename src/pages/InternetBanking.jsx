import LoginCard from "../components/LoginCard";

const InternetBanking = () => {
  return (
    <section className="min-h-screen bg-[#f5f7fa] flex items-center justify-center px-4 py-10">
      
      <div className="
        w-full max-w-7xl
        grid lg:grid-cols-2
        bg-white rounded-3xl
        overflow-hidden
        shadow-2xl
      ">

        <div className="
          flex items-center justify-center
          px-6 py-12 sm:px-12
          bg-white
        ">
          <div className="w-full max-w-md">
            <LoginCard />
          </div>
        </div>

        <div className="
          hidden lg:flex
          relative
          items-center
          bg-gradient-to-br from-[#1b75bb] via-[#155a91] to-[#0f2f4a]
          text-white
          px-16
        ">

          <div className="relative z-10 max-w-lg">
            <h2 className="text-5xl font-bold leading-tight mb-8">
              Yeniliklərimizlə <br /> qarşınızdayıq
            </h2>

            <p className="text-white/90 text-lg leading-relaxed">
              TuranBank respublikanın bütün regional mərkəzlərində satış şəbəkəsi
              vasitəsilə əhali, mikro, kiçik və orta sahibkarlığa xidmət göstərən
              universal bankdır.
            </p>
          </div>

          <div className="
            absolute inset-0
            bg-[url('/logo-watermark.svg')]
            bg-no-repeat bg-right bg-contain
            opacity-[0.06]
          " />
        </div>

      </div>
    </section>
  );
};

export default InternetBanking;
