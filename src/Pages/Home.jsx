import Navbar from "../Components/Nav/Navbar";
import NavBlack from "../Components/Nav/NavBlack";
import NavMenu from "../Components/Nav/NavMenu";
import HeroSection from "../Components/HeroSection/HeroSection";
import Cards from "../Components/Cards/Cards";
import Trending from "../Components/Trending/Trending";
import CardsColor from "../Components/Cards/Colors";
import ComponentAds from "../Components/Ads/ComponentAds";
import AdsPhones from "../Components/Ads/AdsPhones";
import ComponentAdsTwo from "../Components/Ads/ComponentAdsTwo";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <NavBlack />
      <NavMenu />
      <HeroSection />
      <Cards />
      <Trending />
      <CardsColor />
      <ComponentAds />
      <AdsPhones />
      <ComponentAdsTwo />
      <Footer />
    </>
  );
};
export default Home;
