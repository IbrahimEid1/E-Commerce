import { useQuery } from "@tanstack/react-query";
import instance from "../../Config/InstanceAxios";

export const useTrendingTwo = () => {
  return useQuery({
    queryKey: ["TrendingTwo"],
    queryFn: async () => {
      const { data } = await instance.get("trending-twos?populate=*");
      return data.data;
    },
  });
};
