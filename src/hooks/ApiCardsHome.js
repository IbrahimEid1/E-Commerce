import {  useQuery } from "@tanstack/react-query";
import instance from "../../Config/InstanceAxios";


export const useApiCardsHome = () => {
  return useQuery({
    queryKey: ["DataCard"],

    queryFn: async () => {
      const res = await instance.get(
        `categories?populate=*`
      );
      return res.data
      
      
    },
  });
};