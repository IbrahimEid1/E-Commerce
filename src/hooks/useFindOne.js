import { useQuery } from "@tanstack/react-query";
import instance from "../../Config/InstanceAxios";
export const useFindOne = (documentId) => {
  return useQuery({
    queryKey: ["FindOne", documentId],
    queryFn: async () => {
      const { data} = await instance.get(`/categories/${documentId}?populate=*`);
      return data.data
    },
    enabled: !!documentId, 
  });
};
