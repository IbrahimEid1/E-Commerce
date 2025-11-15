import Navbar from "../Components/Nav/Navbar";
import NavMenu from "../Components/Nav/NavMenu";
import HeroSection from "../Components/HeroSection/HeroSection";
import Cards from "../Components/Cards/Cards";
import Trending from "../Components/Trending/Trending";
import CardsColor from "../Components/Cards/Colors";
import ComponentAds from "../Components/Ads/ComponentAds";
import AdsPhones from "../Components/Ads/AdsPhones";
import ComponentAdsTwo from "../Components/Ads/ComponentAdsTwo";
import Footer from "../Components/Footer/Footer";
import {  memo, useContext } from "react"
import Nav from "../Components/Nav/Nav";
import { CartContext } from "../context/ContextCart";
import Loading from "../Components/Loading";
import { useApiCardsHome } from "../hooks/ApiCardsHome";
import ShopXLoader from "../Components/Loading";
const Home = () => {
const {isLoading} = useApiCardsHome()
if (isLoading) return <ShopXLoader fullScreen={true}/>
  return (
    <>
      <Navbar />
      <Nav/>
      <NavMenu/>
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
export default memo(Home);
