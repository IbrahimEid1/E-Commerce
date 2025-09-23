import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Blog from "./Pages/Blog";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { AddCart } from "./context/ContextCart";
import { Toaster } from "react-hot-toast";
import ProductDetailsIphone from "./Components/ProductDetailsIphones/ProductDetailsIphone";
import CategoryIphone from "./Pages/CategoryIphones";

function App() {
  return (
    <AddCart>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Allproduct" element={<Category />}></Route>
          <Route path="/Allproduct/:id" element={<ProductDetails />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Alliphone" element={<CategoryIphone />} />
          <Route path="/Alliphone/:id" element={<ProductDetailsIphone />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-center" reverseOrder={false} />
    </AddCart>
  );
}

export default App;
