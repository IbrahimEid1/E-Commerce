import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Allproduct" element={<Category />}>
          <Route path="" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
