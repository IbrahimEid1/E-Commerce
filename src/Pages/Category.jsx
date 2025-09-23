import Navbar from "../Components/Nav/Navbar";
import NavBlack from "../Components/Nav/NavBlack";
import NavCat from "../Components/Category/NavCat";
import NavCat2 from "../Components/Category/NavCat2";
import ContentCategory from "../Components/Category/ContentCategory";
import Footer from "../Components/Footer/Footer";
import { memo } from "react";
import { AllProducts } from "../Components/Category/AllProducts";
const Category = () => {
  const Products = AllProducts.find((item) => item.id);
  return (
    <>
      <Navbar />
      <NavBlack />
      <NavCat />
      <NavCat2 Title={"Woman"} prop={Products.length} />
      <ContentCategory />
    </>
  );
};
export default memo(Category);
