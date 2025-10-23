import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Blog from "./Pages/Blog";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { AddCart } from "./context/ContextCart";
import { Toaster } from "react-hot-toast";
import CheckOut from "./Pages/CheckOut";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AddNew from "./Components/AddNewProduct/AddNew";
function App() {
  const queryClient = new QueryClient()
  return (
        <QueryClientProvider client={queryClient}>
    <AddCart>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Allproduct" element={<Category />}></Route>
          <Route path="/Allproduct/:documentId" element={<ProductDetails/>} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addNew" element={<AddNew />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-center" reverseOrder={false} />
    </AddCart>
      </QueryClientProvider>

  );
}

export default App;
