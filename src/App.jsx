import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Blog from "./Pages/Blog";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Allproduct" element={<Category />}></Route>
        <Route path="/Allproduct/:id" element={<ProductDetails />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
