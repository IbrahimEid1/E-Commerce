// شرح استخدام useInfiniteQuery بالتفصيل الممل 

import { useInfiniteQuery } from "@tanstack/react-query";
import instance from "../../Config/InstanceAxios";

// تحديد ثابت لحجم الصفحة (عدد العناصر التي يتم جلبها في كل مرة)
const PAGE_SIZE = 6;

export const useGetdata = () => {
  return useInfiniteQuery({
    queryKey: ["Data"],
    // نبدأ دائماً بطلب الصفحة الأولى
    initialPageParam: 1, 

    queryFn: async ({ pageParam }) => {
      //  نستخدم'pageParam' كرقم الصفحة 'pagination[page]' 
      // ونستخدم 'PAGE_SIZE' كحجم ثابت للعناصر في الصفحة 'pagination[pageSize]'
      const res = await instance.get(
        `categories?pagination[pageSize]=${PAGE_SIZE}&pagination[page]=${pageParam}&populate=*`
      );
      return res.data;
    },

    getNextPageParam: (lastPage, allPages) => {
      // 1. نستخرج العدد الكلي للصفحات المتاحة من استجابة آخر صفحة تم جلبها
      // (نفترض أن API يُعيد الهيكل meta.pagination.pageCount)
      const totalPages = lastPage?.meta?.pagination?.pageCount ?? 1;
      
      // 2. نحسب رقم الصفحة التالية لطلبها: وهو عدد الصفحات التي تم جلبها حتى الآن + 1
      const nextPage = allPages.length + 1; 

      // 3. نُحدد ما إذا كان يجب جلب المزيد من الصفحات:
      // إذا كان رقم الصفحة التالية لا يتجاوز العدد الكلي للصفحات، نُعيد رقم الصفحة.
      // وإلا، نُعيد 'undefined' لإيقاف التحميل.
      return nextPage <= totalPages ? nextPage : undefined;
    },
  });
};