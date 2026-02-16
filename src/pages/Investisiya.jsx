import bgImage from "../assets/images/mobile-banking-bg.jpg";
import Footer from "../components/Footer";
import FeaturesList from "../components/FeaturesList";
import coinImg from "../assets/images/1troy.png";
import NewsCarousel from "../components/NewsCarousel";
import ServicesCarousel from "../components/ServicesCarousel";


const coins = [
  {
    title: "Heydər Əliyev – 1 troy unsiya",
    price: "9306.82 AZN",
  },
  {
    title: "Heydər Əliyev – 1/2 troy unsiya",
    price: "4653.41 AZN",
  },
  {
    title: "Heydər Əliyev – 1/4 troy unsiya",
    price: "2326.71 AZN",
  },
  {
    title: "Heydər Əliyev – 1/10 troy unsiya",
    price: "930.68 AZN",
  },
];


const Investisiya = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2f4a]/90 via-[#1b75bb]/70 to-[#1b75bb]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">
            Investisiya pul nişanları
          </h1>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12">

          <div className="lg:col-span-8">
            <p className="text-gray-700 leading-relaxed mb-10">
              Ulu Öndər Heydər Əliyevin anadan olmasının 100 illik yubileyi
              münasibətilə buraxılmış investisiya pul nişanları yüksək ayarlı
              Azərbaycan qızılından hazırlanmışdır və ölkə daxilində rəsmi
              ödəniş vasitəsidir.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coins.map((coin, i) => (
                <div
                  key={i}
                  className="
                    border rounded-xl p-5
                    hover:shadow-lg transition
                    bg-white
                  "
                >
                  <div className="bg-gray-100 rounded-lg mb-4 h-40 flex items-center justify-center">
                    <img
                      src={coinImg}
                      alt="Investment coin"
                      className="h-32 object-contain"
                    />
                  </div>
            
                  <h3 className="text-sm font-medium mb-2">
                    {coin.title}
                  </h3>
            
                  <p className="text-[#1b75bb] font-semibold">
                    Qiyməti {coin.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="hidden lg:block lg:col-span-4">
            <FeaturesList
              title="30+ ildən artıq təcrübə"
              buttonText="Valyuta kursları"
              buttonLink="/valyuta-kurslari"
            />
          </aside>
            <div className="block lg:hidden px-4 mt-12">
              <FeaturesList
                title="30+ ildən artıq təcrübə"
                buttonText="Valyuta kursları"
                buttonLink="/valyuta-kurslari"
              />
            </div>
        </div>
      </section>
      <NewsCarousel/>
      <ServicesCarousel/>
      <Footer />
    </>
  );
};

export default Investisiya;
