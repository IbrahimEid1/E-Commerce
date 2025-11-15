import { useInfiniteQuery } from "@tanstack/react-query";
import instance from "../../Config/InstanceAxios";

const PAGE_SIZE = 24;

export const useGetdata = () => {
  return useInfiniteQuery({
    queryKey: ["Data"],
    initialPageParam: 1, 

    queryFn: async ({ pageParam }) => {
      const res = await instance.get(
        `categories?pagination[pageSize]=${PAGE_SIZE}&pagination[page]=${pageParam}&populate=*`
      );
      return res.data;
    },

    getNextPageParam: (lastPage, allPages) => {
      const totalPages = lastPage?.meta?.pagination?.pageCount ?? 1;
      const nextPage = allPages.length + 1; 
      return nextPage <= totalPages ? nextPage : undefined;
    },
  });
};