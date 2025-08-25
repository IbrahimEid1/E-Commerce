import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("loginToken");

  // لو مفيش توكن → يرجعه للـ login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // لو فيه توكن → يفتح الصفحة المطلوبة
  return children;
};

export default ProtectedRoute;
