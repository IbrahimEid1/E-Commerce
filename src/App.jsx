import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Home from "./Components/Home";
import ProtectedRoute from "./Components/Vaildation/ProtectedRoute";
import Login from "./Components/login";
import Navbar from "./Components/UI/NavBar";

function App() {
  const storageKey = "loginToken";
  const storedToken = localStorage.getItem(storageKey);
  const userData = storedToken ? JSON.parse(storedToken) : null;
  const loginToken = !!userData; 

  return (
    <>
    <Navbar  />
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute loginToken={loginToken}>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
    </>
  );
}

export default App;
