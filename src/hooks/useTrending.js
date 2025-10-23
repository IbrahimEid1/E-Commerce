import { useQuery } from "@tanstack/react-query";
import instance from "../../Config/InstanceAxios";

export const useTrending = () => {
  return useQuery({
    queryKey: ["Trending"],
    queryFn: async () => {
      const { data } = await instance.get("/trendings?populate=*");
      return data.data;
    },
  });
};
