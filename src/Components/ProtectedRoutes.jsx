import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const role = user?.role?.name;

  // لو مفيش user أصلاً
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // لو الدور مش Admin
  if (role !== "Admin") {
    return <Navigate to="/NoAccess" replace />;
  }

  // لو Admin، يرجع الصفحة الأصلية (المحمية)
  return children;
};

export default ProtectedRoutes;
