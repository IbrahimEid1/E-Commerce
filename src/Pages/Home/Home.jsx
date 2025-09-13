import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu/NavMenu";
import NavBlack from "./NavSec/NavBlack";
import Cards from "./Cards/Cards";
import Trending from "./Trending/Trending";
// import Test from "./Trending/Test";
const Home = () => {
  return (
    <>
      <Navbar />
      <NavBlack />
      <NavMenu />
      <HeroSection />
      <Cards />
      <Trending />
    </>
  );
};
export default Home;
