import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import instance from "../../Config/InstanceAxios";

export const useLogin = () => {
  return useMutation({
    mutationKey: ["Login"],
    mutationFn: async (credentials) => {
      const res = await instance.post("auth/local", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data; 
    },
    onSuccess: (data) => {
      localStorage.setItem("token", JSON.stringify(data)) ,  
      Swal.fire({
        title: "Good job!",
        text: "Login successful 🎉",
        icon: "success",
      });
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    },
  });
};
