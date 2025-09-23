import Navbar from "../Components/Nav/Navbar";
import NavBlack from "../Components/Nav/NavBlack";
import ContentCategoryIphone from "../Components/ProductDetailsIphones/ContentCategory";
import NavCat2 from "../Components/Category/NavCat2";
import { memo } from "react";
import { AllProducts, Iphones } from "../Components/Category/AllProducts";
import NavCat from "../Components/Category/NavCat";
const CategoryIphone = () => {
  const Total = Iphones.length;
  return (
    <>
      <Navbar />
      <NavBlack />
      <NavCat Title={"Electronic"} Type={"Iphones"} />
      <NavCat2 Title={"Iphones"} prop={Total} />
      <ContentCategoryIphone />
    </>
  );
};
export default memo(CategoryIphone);
