import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./Navbar";
import Cards from "./Cards/Cards";
import Trending from "./Trending/Trending";
import CardsColor from "./CardsColors/Colors";
import ComponentAds from "./Ads/ComponentAds";
import AdsPhones from "./AdsPhones/AdsPhones";
import ComponentAdsTwo from "./AdsTwo/ComponentAdsTwo";
import Footer from "./Footer/Footer";
import NavBlack from "./NavSec/NavBlack";
import NavMenu from "./NavMenu/NavMenu";
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
