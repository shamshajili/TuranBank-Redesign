import CurrencyRates from "../components/CurrencyRates/CurrencyRates";
import FeatureGrid from "../components/FeatureGrid";
import HeroCarousel from "../components/HeroCarousel";
import NewsCarousel from "../components/NewsCarousel";
import ServicesCarousel from "../components/ServicesCarousel";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <FeatureGrid/>
      <CurrencyRates/>
      <NewsCarousel/>
      <ServicesCarousel/>
      <Footer/>
    </>
  );
};

export default Home;
