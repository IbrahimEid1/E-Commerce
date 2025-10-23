import { useMutation } from "@tanstack/react-query";
import Swal from 'sweetalert2'
import React from "react";
import instance from "../../Config/InstanceAxios";
export const useRegister = () => {
  return useMutation({
    mutationKey: ["Register"],
    mutationFn: async (res) => {
      const { data, status } = await instance.post("auth/local/register", res, {
        headers: {
          "Content-Type": "application/Json",
        },
        body: JSON.stringify(res),
      });
    },
    onSuccess: () => {
      Swal.fire({
        title: "Good job!",
        text: "Congratulations ",
        icon: "success",
      });
    },
    onError: (err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.log("THis IS ERR , ", err);
    },
  });
};
