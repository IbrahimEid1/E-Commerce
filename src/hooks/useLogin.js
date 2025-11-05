import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import instance from "../../Config/InstanceAxios";
import { useContext } from "react";
import { CartContext } from "../context/ContextCart";

export const useLogin = () => {
  const { setUserRole } = useContext(CartContext);

  return useMutation({
    mutationKey: ["Login"],
    mutationFn: async (credentials) => {
      const loginRes = await instance.post("auth/local", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const loginData = loginRes.data;

      // جلب بيانات المستخدم مع الـ role
      const userRes = await instance.get("users/me?populate=role", {
        headers: {
          Authorization: `Bearer ${loginData.jwt}`,
        },
      });

      return {
        jwt: loginData.jwt,
        user: {
          ...loginData.user,
          role: userRes.data.role,
        },
      };
    },

    onSuccess: (data) => {
      // حفظ البيانات في sessionStorage بدل localStorage
      sessionStorage.setItem("token", data.jwt);
      sessionStorage.setItem("user", JSON.stringify(data.user));

      // تحديث الـ context
      setUserRole(data.user.role);

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
};
