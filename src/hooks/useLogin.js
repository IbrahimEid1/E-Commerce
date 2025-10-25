import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import instance from "../../Config/InstanceAxios";
import { useContext } from "react";
import { CartContext } from "../context/ContextCart";

export const useLogin = () => {
  const { setUserRole} = useContext(CartContext)
  const Role = JSON.parse(localStorage.getItem("user"));

  return useMutation({
    mutationKey: ["Login"],
    mutationFn: async (credentials) => {
      // 1. تسجيل الدخول
      const loginRes = await instance.post("auth/local", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const loginData = loginRes.data;

      // 2. جلب بيانات المستخدم مع الـ role
      const userRes = await instance.get("users/me?populate=role", {
        headers: {
          Authorization: `Bearer ${loginData.jwt}`,
        },
      });

      return {
        jwt: loginData.jwt,
        user: {
          ...loginData.user,
          role: userRes.data.role
        }
      };
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUserRole(Role?.user?.role)
      Swal.fire({
        title: "Good job!",
        text: "Login successful 🎉",
        icon: "success",
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data?.error?.message || "Something went wrong!",
      });
    },
  });
}
