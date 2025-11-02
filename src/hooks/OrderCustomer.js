import { useMutation } from "@tanstack/react-query";
import React from "react";
import instance from "../../Config/InstanceAxios";

const useOrderCustomer = () => {
  const token = localStorage.getItem("token");
  return useMutation({
    mutationKey: ["DataCustomer"],
    mutationFn: async (orderData) => {
      const res = await instance.post("/orders", orderData, {
        
      });
      return res.data;
    },
  });
};

export default useOrderCustomer;
