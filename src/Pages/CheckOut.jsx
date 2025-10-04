import ProductsCheckout from "../Components/Checkout/ProductsCheckout";
import Navbar from "../Components/Nav/Navbar";
import NavBlack from "../Components/Nav/NavBlack";
import ProductSuggested from "../Components/ProductDetails/ProductSuggested";
import Footer from "../Components/ProductDetails/Footer";
import FooterVisa from "../Components/ProductDetails/FooterVisa";
import NavCat2 from "../Components/Category/NavCat2";
import { useContext } from "react";
import { CartContext } from "../context/ContextCart";

const CheckOut = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <>
      <Navbar />
      <NavBlack />
      <NavCat2 Title={"Cards"} prop={cartCount.length} />
      <ProductsCheckout />
      <ProductSuggested />
      <Footer />
      <FooterVisa />
    </>
  );
};

export default CheckOut;
