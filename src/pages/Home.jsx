import CurrencyRates from "../components/CurrencyRates/CurrencyRates";
import FeatureGrid from "../components/FeatureGrid";
import HeroCarousel from "../components/HeroCarousel";
import NewsCarousel from "../components/NewsCarousel";
import ServicesCarousel from "../components/ServicesCarousel";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <FeatureGrid/>
      <CurrencyRates/>
      <NewsCarousel/>
      <ServicesCarousel/>
    </>
  );
};

export default Home;
